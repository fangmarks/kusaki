import Image from 'next/image'
import Link from 'next/link'
import Socials from "../utils/Socials"
const IndexPage = () => (
  <>
    <div>
      <div className="font-sans  min-h-screen flex justify-center items-center text-center">
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