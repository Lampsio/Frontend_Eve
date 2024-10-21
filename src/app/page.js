"use client";

import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("main");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const borderStyle = {
    borderImage: 'url(/images/contact-frame.png) 300 stretch',
    borderImageSlice: '30%',
    borderWidth: '150px',
    fontFamily: "Georgia, serif"
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-black text-white py-4 shadow-lg z-10 border-b">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <ul className="flex space-x-4 items-center">
            <li className="hover:pt-1">
              <a
                href="#"
                className="hover:text-gray-300"
                style={{ fontFamily: "Georgia, serif" }}
                onClick={() => handleNavClick("news")}
              >
                News
              </a>
            </li>
            <li className="hover:pt-1">
              <a
                href="#"
                className="hover:text-gray-300"
                style={{ fontFamily: "Georgia, serif" }}
                onClick={() => handleNavClick("characters")}
              >
                Albums
              </a>
            </li>
            <li className="hover:pt-1">
              <img
                src="/images/logo_hat.png"
                alt="Logo"
                className="h-12 w-auto mx-4"
                onClick={() => handleNavClick("main")}
              />
            </li>
            <li className="hover:pt-1">
              <a
                href="#"
                className="hover:text-gray-300"
                style={{ fontFamily: "Georgia, serif" }}
                onClick={() => handleNavClick("about")}
              >
                About
              </a>
            </li>
            <li className="hover:pt-1">
              <a
                href="#"
                className="hover:text-gray-300"
                style={{ fontFamily: "Georgia, serif" }}
                onClick={() => handleNavClick("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Container for sections */}
      <div className="relative min-h-screen">
        {/* Main Section */}
        <section
          className={`${
            activeSection === "main" ? "translate-x-0" : "-translate-x-full"
          } transform transition-transform duration-500 ease-in-out absolute inset-0 flex flex-col items-center justify-center text-white pb-20 `}
        >
          <img
            src="/images/main.png"
            alt="Main Picture"
            className="h-max w-max object-cover px-52 pt-32 pt-96-small2"
          />
          <button
            className="bg-white text-black rounded-full mb-24 px-12 py-2 font-black transition-transform transform hover:scale-105 hover:bg-gray-200 hover:text-gray-800 hover:shadow-lg"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Buy
          </button>
        </section>

        {/* News Section */}
        <section
  className={`${
    activeSection === "news" ? "translate-x-0" : "-translate-x-full"
  } transform transition-transform duration-500 ease-in-out absolute inset-0 flex flex-col items-center justify-center text-white`}
>
  {/* Container for the three items */}
  <div className="flex flex-col space-y-8">
    {/* First Item */}
    <div className="relative flex items-center space-x-4 rounded-2xl border-t-2 border-l-2 border-white p-3 transition-transform duration-300 hover:translate-y-2">
      <div className="w-28 h-28 bg-white flex flex-col items-center justify-center rounded-lg">
        <p className="text-black text-lg font-bold">26.02</p>
        <p className="text-black text-lg font-bold">2025</p>
      </div>
      <div className="flex flex-col justify-center text-white">
        <h2 className="text-xl font-bold mb-2">Tokyo</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>

    {/* Second Item */}
    <div className="relative flex items-center space-x-4 rounded-2xl border-t-2 border-l-2 border-white p-3 transition-transform duration-300 hover:translate-y-2">
      <div className="w-28 h-28 bg-white flex flex-col items-center justify-center rounded-lg">
        <p className="text-black text-lg font-bold">15.03</p>
        <p className="text-black text-lg font-bold">2025</p>
      </div>
      <div className="flex flex-col justify-center text-white">
        <h2 className="text-xl font-bold mb-2">Osaka</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>

    {/* Third Item */}
    <div className="relative flex items-center space-x-4 rounded-2xl border-t-2 border-l-2 border-white p-3 transition-transform duration-300 hover:translate-y-2">
      <div className="w-28 h-28 bg-white flex flex-col items-center justify-center rounded-lg">
        <p className="text-black text-lg font-bold">10.04</p>
        <p className="text-black text-lg font-bold">2025</p>
      </div>
      <div className="flex flex-col justify-center text-white">
        <h2 className="text-xl font-bold mb-2">Kyoto</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* Albums Section */}
        <section
          className={`${
            activeSection === "characters" ? "translate-x-0" : "-translate-x-full"
          } transform transition-transform duration-500 ease-in-out absolute inset-0 flex flex-col items-center justify-start text-white overflow-y-auto pt-24 pb-8`}
          
        >
          <h1 className="text-3xl mt-2">Albums</h1>

          {/* Album Grid */}
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pt-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {/* Album Item */}
            <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-95">
              <img
                src="/images/p1.png"
                alt="Album 1"
                className="w-full h-auto max-w-[200px] 2xl:max-w-[300px] mb-2"
              />
              <p className="text-lg mb-1">ジャポニーズ</p> {/* Japoński tekst */}
              <p className="text-sm">Japanese</p> {/* Angielski tekst */}
            </div>

            {/* Album Item */}
            <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-95">
              <img
                src="/images/p2.png"
                alt="Album 2"
                className="w-full h-auto max-w-[200px] 2xl:max-w-[300px] mb-2"
              />
              <p className="text-lg mb-1">ジャポニーズ</p> {/* Japoński tekst */}
              <p className="text-sm">Japanese</p> {/* Angielski tekst */}
            </div>

            {/* Album Item */}
            <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-95">
              <img
                src="/images/p3.png"
                alt="Album 3"
                className="w-full h-auto max-w-[200px] 2xl:max-w-[300px] mb-2"
              />
              <p className="text-lg mb-1">ジャポニーズ</p> {/* Japoński tekst */}
              <p className="text-sm">Japanese</p> {/* Angielski tekst */}
            </div>

            {/* Album Item */}
            <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-95">
              <img
                src="/images/p4.png"
                alt="Album 4"
                className="w-full h-auto max-w-[200px] 2xl:max-w-[300px] mb-2"
              />
              <p className="text-lg mb-1">ジャポニーズ</p> {/* Japoński tekst */}
              <p className="text-sm">Japanese</p> {/* Angielski tekst */}
            </div>

            {/* Album Item */}
            <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-95">
              <img
                src="/images/p5.png"
                alt="Album 5"
                className="w-full h-auto max-w-[200px] 2xl:max-w-[300px] mb-2"
              />
              <p className="text-lg mb-1">ジャポニーズ</p> {/* Japoński tekst */}
              <p className="text-sm">Japanese</p> {/* Angielski tekst */}
            </div>

            {/* Album Item */}
            <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-95">
              <img
                src="/images/p6.png"
                alt="Album 6"
                className="w-full h-auto max-w-[200px] 2xl:max-w-[300px] mb-2"
              />
              <p className="text-lg mb-1">ジャポニーズ</p> {/* Japoński tekst */}
              <p className="text-sm">Japanese</p> {/* Angielski tekst */}
            </div>
          </div>
        </section>


        {/* About Section */}
        <section
        className={`${
          activeSection === "about" ? "translate-x-0" : "translate-x-full"
        } transform transition-transform duration-500 ease-in-out absolute inset-0 flex items-center justify-center text-white overflow-y-auto pt-96-small`}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12">
          {/* Left column with image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img src="/images/picture_eve.png" alt="Description of image" className="max-w-full h-auto" />
          </div>

          {/* Right column with text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 px-16" style={{ fontFamily: "Georgia, serif" }}>Eve</h1>
            <p className="text-sm leading-relaxed px-16" style={{ fontFamily: "Georgia, serif" }}>
            Eve born 23 May 1995 is a Japanese singer-songwriter and Vocaloid producer. He entered the music industry by singing covers of popular music on Niconico.
          He signed to Toy's Factory in 2019, moving away from his independently owned label, Harapeco Records, of whom Eve had produced under since the release of his debut album, Wonder Word. He was also a guest in "School of Lock!" by Tokyo FM
          His style of music was reportedly influenced by pop culture, such as movies.
          His music has been featured as the theme song for various anime, such as "Dark Night" (闇夜) for Dororo, "Kaikai Kitan" (廻廻奇譚, lit.'Round Round Mysterious Story') for Jujutsu Kaisen, "Ao No Waltz" (蒼のワルツ, lit.'Blue Waltz') for Josee, the Tiger and the Fish, "Fight Song" (ファイトソング, Faito Songu) for Chainsaw Man, and "Bokurano" (ぼくらの, lit. 'Our') for My Hero Academia.
            </p>
          </div>
        </div>
      </section>


        {/* Contact Section */}
<section
  className={`${
    activeSection === "contact" ? "translate-x-0" : "translate-x-full"
  } transform transition-transform duration-500 ease-in-out absolute inset-0 flex flex-col items-center justify-center text-white`}
>
  <div className="relative bg-transparent border rounded-lg pr-20" style={borderStyle}>
    {/* Nagłówek */}
    <h1 className="text-center text-2xl mb-6">Contact</h1>

    {/* Formularz */}
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Name"
          className="border-b border-dashed border-white bg-transparent p-2 text-white focus:outline-none w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Email"
          className="border-b border-dashed border-white bg-transparent p-2 text-white focus:outline-none w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <textarea
          placeholder="Message"
          className="border border-white bg-transparent p-2 text-white resize-none h-full"
        />
      </div>
    </form>
  </div>
</section>
      </div>

      
    </div>
  );
}
