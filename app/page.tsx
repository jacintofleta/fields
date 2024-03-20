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

        <p>And I’m afraid we can’t lower the CMP.</p>
        <p className='leading-8'>
          But we have a simple idea to boost the lead generation with your same
          campaigns: we'll give you an instant landing page per segment.
        </p>
        <p>
          As we know your audience we can adapt it with AI to x2 conversions.
          Not only that, we automatically run A/B tests to improve it even more.
        </p>
        <p>
          You spend so much time optimising your campaigns, let us help you with
          the landings. All with your brand.
        </p>
        <p>
          We use up-to-date APIs to send the conversions to the Ad platforms, so
          you are not only getting high performing pages but also improving your
          campaigns. In a few clicks. No developers needed
        </p>
        <p>
          As we don't need pixels we can get rid of the annoying cookie banner.
          Reducing noise and one click in the conversion path.
        </p>
        <p>
          You may be thinking: Cool but I need ALL information in the CRM. No
          problem. You can easily connect your CRM and create a form with all
          the fields you need.
        </p>
        <p>
          We will automatically apply the best conversion techniques to the
          form. We have been doing this for years.
        </p>
        <p>
          We capture the completion of every field, so even if the visitor
          doesn't submit the form you still get information. This unlocks
          several opportunities.
        </p>
        <p>
          The first one is obvious, maybe you want to use the outbound team to
          contact uncompleted leads. With the work email a lead miner or SDR can
          complete the rest information. And this cold call won’t be so cold.
        </p>
        <p>
          But the most interesting ones are related with conversion. As we know
          some fields, next time this user comes back (probably from a
          remarketing campaign) and enters the email we won’t need to ask again
          for some information. We already know!
        </p>
        <p>
          And we can do even more. As we have per-field logic we can real-time
          verify the contact, the phone and even the name in real time to
          prevent fake leads that waste a ton of sales time. We all know Micky
          Mouse is not looking for a demo.
        </p>

        <p>
          After the form is submitted you can connect several calendars from
          your sales team so you don't only get the lead information but also an
          appointment.
        </p>

        <p>
          Our mission is to generate the best landing pages for performance
          teams of B2B businesses so they can focus on what they do best:
          optimising campaigns.
        </p>

        <p className='pb-8'>
          The price is $1000/month for unlimited landing pages an unlimited
          conversions. You can try for one month and if the ROI of our tool is
          negative we will refund your money.
        </p>

        <div data-tf-live='01HSEJT6FABJK6X3D37FZ5WTV1'></div>
        <Script src='//embed.typeform.com/next/embed.js' />
      </div>
    </main>
  )
}
