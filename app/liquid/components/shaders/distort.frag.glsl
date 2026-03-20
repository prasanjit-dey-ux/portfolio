precision highp float;

uniform sampler2D uTexture;
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uOffset;   // pan position (from Framer Motion)
uniform float uScale;   // zoom scale

varying vec2 vUv;

// --- FBM helpers ---
vec2 hash(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(dot(hash(i + vec2(0,0)), f - vec2(0,0)),
                 dot(hash(i + vec2(1,0)), f - vec2(1,0)), u.x),
             mix(dot(hash(i + vec2(0,1)), f - vec2(0,1)),
                 dot(hash(i + vec2(1,1)), f - vec2(1,1)), u.x), u.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amp = 0.5;
  float freq = 1.0;
  for (int i = 0; i < 6; i++) {
    value += amp * noise(p * freq + uTime * 0.3);
    freq *= 2.0;
    amp *= 0.52;
  }
  return value;
}

// --- Organic blob SDF ---
float blobSDF(vec2 p) {
  float r = 0.38;
  float d = length(p) - r;
  // warp edges with FBM
  d += fbm(p * 2.5 + uTime * 0.15) * 0.12;
  return d;
}

void main() {
  vec2 uv = vUv;
  // apply pan/scale
  vec2 centeredUv = (uv - 0.5) / uScale + 0.5 - uOffset;
  
  float aspect = uResolution.x / uResolution.y;
  vec2 sdfUv = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);
  
  float dist = blobSDF(sdfUv);
  
  // --- Chromatic aberration: offset RGB channels by dist ---
  float aberration = clamp(-dist, 0.0, 1.0) * 0.025;
  float r = texture2D(uTexture, centeredUv + vec2(aberration, 0.0)).r;
  float g = texture2D(uTexture, centeredUv).g;
  float b = texture2D(uTexture, centeredUv - vec2(aberration, 0.0)).b;
  vec3 color = vec3(r, g, b);
  
  // --- Edge glow: warm outer, cool inner ---
  float edgeFactor = 1.0 - smoothstep(-0.06, 0.06, dist);
  vec3 warmGlow = vec3(1.0, 0.4, 0.0) * edgeFactor * 1.4;
  vec3 coolGlow = vec3(0.0, 0.7, 1.0) * edgeFactor * 0.8;
  color += warmGlow * smoothstep(0.0, -0.08, dist);
  color += coolGlow * smoothstep(-0.04, 0.04, dist);
  
  // --- Alpha clip ---
  float alpha = 1.0 - smoothstep(-0.005, 0.015, dist);
  
  gl_FragColor = vec4(color, alpha);
}