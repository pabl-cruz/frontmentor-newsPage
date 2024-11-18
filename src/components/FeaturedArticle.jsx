export function FeaturedArticle() {
  return (
    <section className="basis-2/3">
      <img
        src="../src/assets/images/image-web-3-desktop.jpg"
        alt="web3"
        className="w-full"
      />
      <div className="flex flex-row">
        <div className="basis-2/4">
          <h2 className="font-extrabold text-6xl mt-9 text-darkblue-500">
            The Bright Future of Web 3.0?
          </h2>
        </div>
        <div className="basis-2/4 mt-8 pl-4">
          <p className="pt-3 leading-7 mb-10 text-greyblue-400">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <a
            href="#"
            className="font-extrabold tracking-widest text-darkblue-500 bg-red-200 py-4 px-8"
          >
            READ MORE
          </a>
        </div>
      </div>
    </section>
  );
}
