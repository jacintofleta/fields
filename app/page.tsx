import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center  p-12 lg:p-24 mt-24'>
      <div className="relative flex place-items-center before:absolute  before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className='relative'
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
      </div>

      <div className=' mt-32 lg:max-w-3xl lg:w-full  text-lg lg:text-xl space-y-5'>
        <p>Leads are super expensive.</p>

        <p>
          We doubled down in the best campaigns and killed those that didn’t
          work.
        </p>
        <p>The more ads, the higher probability to find gold.</p>
        <p>
          At the beginning we had only one landing page. Then, we tried creating
          a landing page per segment.
        </p>
        <p>The conversion skyrocketed.</p>
        <p>
          But a huge problem appeared: creating ad sets was fast, creating
          landings was super time consuming.
        </p>
        <p>
          We needed a custom, high-conversion landing in seconds, not hours.
        </p>
        <p className='pb-2'>That’s why we built Fields.</p>

        <div data-tf-live='01HSEJT6FABJK6X3D37FZ5WTV1'></div>
        <Script src='//embed.typeform.com/next/embed.js' />
      </div>
    </main>
  )
}
