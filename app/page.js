import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* <h1 className="text-4xl font-garamond font-bold uppercase text-cream tracking-widest">Baldakijn</h1> */}
      <Image src="/logo-baldakijn.png" width={500} height={500} />
            <h1 className="text-4xl font-garamond font-normal uppercase text-cream tracking-widest">Coming Soon</h1>

    </main>
  )
}
