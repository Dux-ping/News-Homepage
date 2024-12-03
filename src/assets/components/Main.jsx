function Main() {
  return (
    <main className="max-w-screen-xl mx-auto grid gap-8 lg:grid-cols-3">
      <article className="lg:col-span-2 lg:row-span-2 ">
        <section className="space-y-4 grid grid-cols-1 gap-2 items-center">
          <picture>
            <source
              media="(min-width: 1024px)"
              width={730}
              height={300}
              srcSet="/images/image-web-3-desktop.jpg"
            />
            <img
              src="/images/image-web-3-mobile.jpg"
              width={343}
              height={300}
              alt="Colorful geometric wooden shapes"
              className="w-full"
            />
          </picture>
          <section className="grid lg:grid-cols-2 gap-8 items-center">
            <h1 className="text-f-xl font-bold  lg:col-span-1">The Bright Future of Web 3.0?</h1>
            <div className="space-y-6 lg:col-span-1">
              <p>
                We dive into the next evolution of the web that claims to put the power of the
                platforms back into the hands of the people. But is it really fulfilling its
                promise?
              </p>
              <a className="btn-custom" href="/about">
                Read More
              </a>
            </div>
          </section>
        </section>
      </article>
      <section className="bg-c-blue py-10 px-6 mt-6 mb-12 lg:mt-0 lg:mb-0 lg:col-span-1">
        <h2 className="text-c-yellow text-f-l mb-9 font-bold">New</h2>
        <article className="mb-6">
          <h3 className="text-c-white text-f-s font-bold mb-2">
            <a href="/">Hydrogen VS Electric Cars</a>
          </h3>
          <p className="text-c-silver text-f-body border-b border-solid border-c-gray pb-6">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </article>
        <article className="mb-6">
          <h3 className="text-c-white text-f-s font-bold mb-2">
            <a href="/">The Downsides of AI Artistry</a>
          </h3>
          <p className="text-c-silver text-f-body border-b border-solid border-c-gray pb-6">
            What are the possible adverse effects of on-demand AI image generation?
          </p>
        </article>
        <article className="mb-2">
          <h3 className="text-c-white text-f-s font-bold mb-2">
            <a href="/">Is VC Funding Drying Up?</a>
          </h3>
          <p className="text-c-silver text-f-body">
            Private funding by VC firms is down 50% YOY. We take a look at what that means.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Main;
