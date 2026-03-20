'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ShaderMaterial, Texture, TextureLoader, Vector2 } from 'three'
import * as THREE from 'three'

const vertSrc = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragSrc = /* glsl */ `
  precision highp float;

  uniform sampler2D uTexture;
  uniform int       uReady;
  uniform float     uTime;
  uniform vec2      uResolution;
  uniform vec2      uBlobPos;    // blob center in UV 0..1

  varying vec2 vUv;

  vec2 hash2(vec2 p) {
    p = vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)));
    return -1.0 + 2.0*fract(sin(p)*43758.5453);
  }
  float noise(vec2 p) {
    vec2 i=floor(p), f=fract(p), u=f*f*(3.0-2.0*f);
    return mix(mix(dot(hash2(i+vec2(0,0)),f-vec2(0,0)),
                   dot(hash2(i+vec2(1,0)),f-vec2(1,0)),u.x),
               mix(dot(hash2(i+vec2(0,1)),f-vec2(0,1)),
                   dot(hash2(i+vec2(1,1)),f-vec2(1,1)),u.x),u.y);
  }
  float fbm(vec2 p) {
    float v=0.0,a=0.5,f=1.0;
    for(int i=0;i<6;i++){ v+=a*noise(p*f+uTime*0.2); f*=2.0; a*=0.52; }
    return v;
  }

  float blobSDF(vec2 uv, vec2 center) {
    float aspect = uResolution.x / uResolution.y;
    vec2 p = vec2((uv.x - center.x) * aspect, uv.y - center.y);
    float d = length(p) - 0.22;
    // organic edge warp
    d += fbm(p * 3.5 + uTime * 0.12) * 0.045;
    return d;
  }

  void main() {
    vec2 uv = vUv;

    float dist = blobSDF(uv, uBlobPos);

    // Nothing to draw yet
    if (uReady == 0) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      return;
    }

    float aspect = uResolution.x / uResolution.y;
    vec2 dir = normalize(vec2((uv.x - uBlobPos.x)*aspect, uv.y - uBlobPos.y) + 0.0001);

    // ── Inside lens: full-brightness portrait + chromatic aberration ───────
    float inside = 1.0 - smoothstep(-0.004, 0.010, dist);

    // Chromatic aberration grows toward the edge
    float edgeProx = smoothstep(-0.22, 0.0, dist);
    float ab = edgeProx * 0.025;

    float rc = texture2D(uTexture, clamp(uv + dir*ab,       0.001,0.999)).r;
    float gc = texture2D(uTexture, uv).g;
    float bc = texture2D(uTexture, clamp(uv - dir*ab*0.7,   0.001,0.999)).b;
    vec3 revealedPhoto = vec3(rc, gc, bc);

    // ── Glow ring on the blob boundary ─────────────────────────────────────
    // Outer warm glow (orange/red) — bleeds outside the mask
    float outerGlow = smoothstep(0.07, 0.0, dist) * smoothstep(-0.005, 0.05, dist);
    // Inner cool glow (cyan/blue) — just inside the edge
    float innerGlow = smoothstep(-0.01, -0.14, dist) * smoothstep(-0.22, -0.02, dist);

    vec3 warm = vec3(1.0, 0.38, 0.0) * outerGlow * 3.0;
    vec3 cool = vec3(0.0, 0.60, 1.0) * innerGlow * 1.6;

    // ── Compose ────────────────────────────────────────────────────────────
    // Inside the lens: the revealed full-brightness photo
    // Outside: fully transparent (the dimmed CSS bg shows through)
    
    vec3 color = revealedPhoto + warm + cool;
    color = clamp(color, 0.0, 1.5);

    // Alpha: opaque inside + glow feather outside
    float outerAlpha = smoothstep(0.07, 0.0, dist);          // glow halo outside
    float innerAlpha = inside;
    float alpha = max(innerAlpha, outerAlpha * 0.85);

    gl_FragColor = vec4(color, alpha);
  }
`

function DistortPlane({ imageSrc }: { imageSrc: string }) {
  const { size, gl } = useThree()
  const materialRef = useRef<ShaderMaterial>(null)
  const blobPos   = useRef(new Vector2(0.5, 0.5))
  const targetPos = useRef(new Vector2(0.5, 0.5))

  // Load texture
  useEffect(() => {
    const loader = new TextureLoader()
    loader.load(
      imageSrc,
      (tex) => {
        tex.wrapS = THREE.ClampToEdgeWrapping
        tex.wrapT = THREE.ClampToEdgeWrapping
        tex.flipY = true
        tex.needsUpdate = true
        if (!materialRef.current) return
        materialRef.current.uniforms.uTexture.value = tex
        materialRef.current.uniforms.uReady.value   = 1
        materialRef.current.needsUpdate = true
        console.log('✅ Texture ready')
      },
      undefined,
      (e) => console.error('❌', e)
    )
  }, [imageSrc])

  // Mouse on the actual canvas element
  useEffect(() => {
    const canvas = gl.domElement
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      targetPos.current.set(
        (e.clientX - rect.left)  / rect.width,
        1.0 - (e.clientY - rect.top) / rect.height
      )
    }
    canvas.addEventListener('mousemove', onMove)
    return () => canvas.removeEventListener('mousemove', onMove)
  }, [gl])

  useFrame(({ clock }) => {
    if (!materialRef.current) return
    const u = materialRef.current.uniforms
    blobPos.current.lerp(targetPos.current, 0.07)
    u.uTime.value = clock.getElapsedTime()
    u.uResolution.value.set(size.width, size.height)
    u.uBlobPos.value.copy(blobPos.current)
  })

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertSrc}
        fragmentShader={fragSrc}
        uniforms={{
          uTexture:    { value: new THREE.Texture() },
          uReady:      { value: 0 },
          uTime:       { value: 0 },
          uResolution: { value: new THREE.Vector2(800, 600) },
          uBlobPos:    { value: new THREE.Vector2(0.5, 0.5) },
        }}
        transparent={true}   // alpha canvas — bg shows through outside blob
        depthWrite={false}
      />
    </mesh>
  )
}

export default function MaskDistort({ imageSrc = '/portrait.png' }: { imageSrc?: string }) {
  return (
    <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 5 }}>
      <Canvas
        style={{ width: '100%', height: '100%', cursor: 'none' }}
        gl={{ alpha: true, antialias: true, premultipliedAlpha: false }}
        camera={{ position: [0, 0, 1], fov: 90 }}
      >
        <DistortPlane imageSrc={imageSrc} />
      </Canvas>
    </div>
  )
}