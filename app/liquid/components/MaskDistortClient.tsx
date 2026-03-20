'use client'

import dynamic from 'next/dynamic'

const MaskDistort = dynamic(() => import('./MaskDistort'), {
  ssr: false,
})

export default function MaskDistortClient({ imageSrc }: { imageSrc: string }) {
  return <MaskDistort imageSrc={imageSrc} />
}