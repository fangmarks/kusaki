import Image from 'next/image'
import Link from 'next/link'
import Head from "next/head"
import Socials from "../utils/Socials"
const IndexPage = () => (
  <>


    <div>
      <Head>
        <title>KusakiDesu</title>
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content="Kusaki" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://puma.himbo.cat" />
        <script async defer data-website-id="94288e75-da3b-48a9-abb9-e878fe8c4028" src="https://stats.himbo.cat/umami.js"></script>
        <meta property="og:description" content="Graphic Designer / DJ / Sneakerhead / Fashion Fur / Record Collector" />
        <meta property="og:image" content="/assets/kitty.jpg" />

        <meta name="description" content="Graphic Designer / DJ / Sneakerhead / Fashion Fur / Record Collector" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="/assets/kitty.jpg" />
        <meta name="twitter:creator" content="@KusakiDesu" />

      </Head>
      <div className="font-sans  min-h-screen flex justify-center items-center text-center relative">
        <Link href="https://lio.click/twitter">
          <a className="absolute top-0 left-0 ml-3 mt-3">
            <Image height={156 / 3} width={110 / 3} src="/assets/caecus.png" className="mix-blend-exclusion" alt="" />
          </a>
        </Link>
        <article className="p-11 bg-gradient-to-r from-pink-300 to-pink-500 flex flex-wrap md:flex-nowrap shadow-2xl mx-auto justify-center items-center md:text-left sm:text-center rounded-none">
          <div className="md:hidden sm:inline">
            <Image height={476 / 2} width={476 / 2} className="md:w-80 w-1.5 rounded-full" src="/assets/kitty.jpg" alt="" />
          </div>
          <div className="p-11 my-auto">
            <Image width={256 / 1.5} height={96 / 1.5} src="/assets/logo.png" alt="Kusaki Logo" className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
            <p className="mt-2 font-semibold">
              Graphic Designer / DJ / Sneakerhead / Fashion Fur / Record Collector
            </p>
            <div className="flex sm:justify-center md:justify-start justify-evenly">
              <ul className="flex mt-3">
                {Socials.map((social, index) => {
                  return (
                    <li className="mr-5" key={index}>
                      <Link href={`${social.string}`}>
                        <a>{social.icon}</a>
                      </Link>
                    </li>

                  )
                })}
              </ul>
            </div>
          </div>
          <div className="hidden sm:hidden md:inline">
            <Image height={476 / 2} width={476 / 2} className="md:w-80 rounded-full" src="/assets/kitty.jpg" alt="" />
          </div>

        </article>
      </div>
    </div>

  </>
)

export default IndexPage

// {/* <div className="bg-gradient-to-r from-pink-300 to-pink-400  rounded-lg shadow-2xl md:flex"> */}
// {/* <Link href="mailto:puma@himbo.cat">Email</Link> */}
// {/* <Image width={256 / 2} height={96 / 2} src="/assets/logo.png" alt="Kusaki Avatar" className=" items-center md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
// {/* <Image width={476 / 2} height={476 / 2} src="/assets/kitty.jpg" alt="Kusaki Avatar" className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" /> */} */}
