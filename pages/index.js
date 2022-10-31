/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import salim from "../public/salim.webp";
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
        <title>Portfolio Salim</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-around dark:text-white">
            <h1 className="font-burtons text-xl">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="mailto:salimrhamoumi@gmail.com"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Salim Rhamoumi
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developpeur Web
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              passionné d'informatique depuis des années, j'ai entamé une reconversion professionnelle.Récemment diplômé en développement web,
              je continue à me former sur différents langages. Je serais ravi de vous accompagner dans la création de vos différents projets. Vous trouverez ci-dessous les différents languages que j'utilise et les projets que j'ai récemment réalisés. Bonne visite !
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400 social">
              <a
                href="https://github.com/Salim-R"
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer" className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400 "> <AiFillGithub nav to={"google"} /> </a>
              <a
                href="https://www.linkedin.com/in/salim-rhamoumi"
                aria-label="Linkedin"
                target="_blank"
                rel="noopener noreferrer" className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400 "> <AiFillLinkedin /> </a>
              <a
                href="#"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer" className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400 "><AiOutlineInstagram /> </a>
            </div>
            <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={salim} alt="photo de profil" layout="fill" objectFit="cover" width={"100%"} height={"100%"} />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services à offrir</h3>

          </div>
          <div className="lg:flex gap-10 p-10 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Designs élégants
              </h3>
              <p className="py-2">
                Créons ensemble un design élégant qui vous convient et adaptés à vos besoins.
              </p>
              <h4 className="py-4 text-teal-600">Outils de conception que j'utilise</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">canva</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} alt="code" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Codez votre projet de rêve
              </h3>
              <p className="py-2">
                Vous avez une idée pour votre prochain grand site Web? Faisons-en une réalité.
              </p>
              <h4 className="py-4 text-teal-600">Outils de conception que j'utilise</h4>
              <p className="text-gray-800 py-1">Html/Css/Sass</p>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">ReactJs</p>
              <p className="text-gray-800 py-1">NodeJs</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} alt="consulting" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consultant</h3>
              <p className="py-2">
                Intéressé par des commentaires sur votre projet actuel ? Je peux vous aider à l'améliorer.
              </p>
              <h4 className="py-4 text-teal-600">Amélioration mise en place</h4>
              <p className="text-gray-800 py-1">Référencement SEO</p>
              <p className="text-gray-800 py-1">Temps de chargement</p>
              <p className="text-gray-800 py-1">Mise à jour</p>
              <p className="text-gray-800 py-1">Optimisation de code</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Depuis le début de mon parcours en tant que développeur web, j'ai travaillé sur des projets effectués pendant ma
              <span className="text-teal-500"> formation  </span>
              et créés de nouveaux  <span className="text-teal-500">projets  </span>
              avec des outils à jour
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              J'offre une large gamme de services, y compris l'optimisation de site existant, la création de logo et la programmation.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"  >
            <div className="basis-1/3 flex-1 project"  >
              <Image
                className="rounded-lg object-fill"
                alt="projet 1"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
              <div class="project-infos">
                <a href="https://github.com/Salim-R/groupomania" target="_blank">Groupomania x One Piece</a>
                <p>2022</p>
              </div>

            </div>
            <div className="basis-1/3 flex-1 project">
              <Image
                className="rounded-lg object-fill"
                alt="projet 2"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
              <div class="project-infos">
                <a href="https://assocplurielles.com/" target="_blank">Association Pluri'Elles</a>
                <p>2022</p>
              </div>
            </div>
            <div className="basis-1/3 flex-1 project">
              <Image
                className="rounded-lg object-fill"
                alt="projet 3"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
              <div class="project-infos">
                <a href="https://github.com/Salim-R/P6" target="_blank">Hot Takes</a>
                <p>2022</p>
              </div>
            </div>
            <div className="basis-1/3 flex-1 project">
              <Image
                className="rounded-lg object-fill"
                alt="projet 4"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
              <div class="project-infos">
                <a href="https://www.google.com" target="_blank">Php/Symfony</a>
                <p>2022</p>
              </div>
            </div>
            <div className="basis-1/3 flex-1 project">
              <Image
                className="rounded-lg object-fill"
                alt="projet 5"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
              <div class="project-infos">
                <a href="https://www.google.com" target="_blank">VueJs</a>
                <p>2022</p>
              </div>
            </div>
            <div className="basis-1/3 flex-1 project">
              <Image
                className="rounded-lg object-fill"
                alt="projet 6"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
              <div class="project-infos">
                <a href="#" target="_blank">Prochainement...</a>
                <p>2022</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div >
  );
}
