import Image from 'next/image'
import { EnvelopeIcon } from '@heroicons/react/20/solid'

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

      <div className='mt-32 lg:max-w-3xl lg:w-full  text-lg lg:text-xl space-y-5'>
        <p> Leads are super expensive.</p>
        <p>And I’m afraid we can’t make your marketing campaigns cheaper.</p>
        <p>
          But we have a simple idea to get the maximum number of qualified leads
          per visitor.
        </p>
        <p>You don’t need forms. You need fields.</p>
        <p>
          Today most forms are submitted when a CTA is pressed. But most leads
          drop before pressing that so-tested button.
        </p>
        <p>
          But what if we save the information in every field completion? Imagine
          a form with 5 fields. If the visitor abandons completing only 3 you
          got nothing.
        </p>
        <p>
          With Fields you at least have, for example, the work email, the name
          and the job title.
        </p>
        <p>
          You may be thinking: Cool but I need ALL information to qualify the
          lead and send it to the CRM.
        </p>
        <p>
          We saved the fields but you can decide not to send the lead to the CRM
          until you got all the data you need. But having at least some
          information unblocks a stunning amount of opportunities.
        </p>
        <p>
          The first one is obvious, maybe you want to use the outbound team to
          contact uncompleted leads. With the work email and name a lead miner
          or SDR can complete the rest information. And this cold call won’t be
          so cold.
        </p>
        <p>
          But the most interesting ones are related with conversion. As we know
          some fields, next time this user comes back and enters the email we
          won’t need to ask for the name and the job title. We already know!
        </p>
        <p>
          And we can do even more. As we have per-field logic we can real-time
          enrich the contact. Imagine the visitor enters the email, we can
          search for the rest information (and even more!) in enrichment
          services or your CRM and then hide or autocomplete the rest of the
          fields boosting conversion.
        </p>
        <p>
          We can also verify the email, the phone and even the name in real time
          to prevent fake leads that waste a ton of sales time. We all know
          Micky Mouse is not looking for a demo.
        </p>
        <p>
          With Fields you make the most of your marketing investment and reduce
          noise in your CRM saving a ton of sales time.
        </p>
        <p>
          We are building fields right now! If you are interested send a{' '}
          <a
            className='underline'
            href='https://www.linkedin.com/in/jacintofleta/'
            target='_blank'
          >
            LinkedIn
          </a>{' '}
          or{' '}
          <a
            className='underline'
            href='https://x.com/jacintofleta'
            target='_blank'
          >
            X
          </a>{' '}
          direct message.
        </p>
      </div>
    </main>
  )
}
