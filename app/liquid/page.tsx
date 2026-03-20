import MaskDistortClient from './components/MaskDistortClient'

export default function LiquidPage() {
  return (
    <main
      className="relative w-screen h-screen overflow-hidden"
      style={{ background: '#eef5d8' }}   // ← lime cream bg, nothing else
    >
      {/* Text */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
        {['EXPLORE', "WHAT'S", 'POSSIBLE'].map((word) => (
          <div key={word} className="text-6xl font-black leading-none tracking-tight text-black">
            {word}
          </div>
        ))}
      </div>

      {/* Canvas — draws lime bg everywhere, portrait only inside the blob */}
      <MaskDistortClient imageSrc="/portrait.png" />
    </main>
  )
}