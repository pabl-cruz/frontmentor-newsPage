export function FeaturedArticle() {
  return (
    <section className="basis-2/3">
      <img
        src="../src/assets/images/image-web-3-desktop.jpg"
        alt="web3"
        className="w-full hidden md:block"
      />
      <img
        src="../src/assets/images/image-web-3-mobile.jpg"
        alt="web3-mobile"
        className="block px-4 w-full md:hidden"
      />
      <div className="flex flex-col md:flex-row">
        <div className="basis-full md:basis-2/4">
          <h2 className="font-extrabold text-5xl md:text-6xl mt-9 text-darkblue-500 px-4 md:px-0">
            The Bright Future of Web 3.0?
          </h2>
        </div>
        <div className="basis-full md:basis-2/4 mt-8 px-4 md:pl-4 md:pr-0">
          <p className="pt-3 leading-7 mb-10 text-greyblue-400">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <a
            href="#"
            className="font-extrabold tracking-widest text-darkblue-500 bg-red-200 py-4 px-8 active:bg-darkblue-500 active:text-offwhite"
          >
            READ MORE
          </a>
        </div>
      </div>
    </section>
  );
}
