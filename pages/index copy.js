import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Rohit Thakur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-gray-200">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Developed by Rohit</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  {" "}
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Rohit Thakur
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Real Estate Agent</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto  dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500 ">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800  dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              <span className="text-teal-500"> agencies </span>
              Lorem ipsum dolor sit amet,
              <span className="text-teal-500"> consectetur </span>adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800  dark:text-gray-200">
              I offer ipsum dolor sit amet, consectetur adipiscing elit
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magn.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Homes</h3>
              <p className="py-2">
                Finding beatiful homes ipsum dolor sit amet, consectetur ad
              </p>
              <h4 className="py-4 text-teal-600">Homes I Can Offer</h4>
              <p className="text-gray-800  dark:text-gray-200 py-1">
                Detatched Houses
              </p>
              <p className="text-gray-800  dark:text-gray-200 py-1">
                Condominiums
              </p>
              <p className="text-gray-800  dark:text-gray-200 py-1"></p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Homes</h3>
              <p className="py-2">
                Finding beatiful homes ipsum dolor sit amet, consectetur ad
              </p>
              <h4 className="py-4 text-teal-600">Homes I Can Offer</h4>
              <p className="text-gray-800 py-1">Detatched Houses</p>
              <p className="text-gray-800 py-1">Condominiums</p>
              <p className="text-gray-800 py-1"></p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Homes</h3>
              <p className="py-2">
                Finding beatiful homes ipsum dolor sit amet, consectetur ad
              </p>
              <h4 className="py-4 text-teal-600">Homes I Can Offer</h4>
              <p className="text-gray-800 py-1">Detatched Houses</p>
              <p className="text-gray-800 py-1">Condominiums</p>
              <p className="text-gray-800 py-1"></p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              <span className="text-teal-500"> agencies </span>
              Lorem ipsum dolor sit amet,
              <span className="text-teal-500"> consectetur </span>adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer ipsum dolor sit amet, consectetur adipiscing elit
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magn.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex 1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="intrinsic"
              />
            </div>
            <div className="basis-1/3 flex 1">
              <Image
                src={web2}
                className="rounded-lg "
                width={"100%"}
                height={"100%"}
                layout="intrinsic"
              />
            </div>
            <div className="basis-1/3 flex 1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="intrinsic"
              />
            </div>
            <div className="basis-1/3 flex 1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="intrinsic"
              />
            </div>
            <div className="basis-1/3 flex 1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="intrinsic"
              />
            </div>
            <div className="basis-1/3 flex 1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="intrinsic"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
