function Blog() {
  return (
    <div className="grid gap-8 lg:grid-cols-3 lg:mt-10">
      <section className="flex gap-4 items-start">
        <img
          src="/images/image-retro-pcs.jpg"
          alt="Retro computer desktop"
          className="w-24 h-32 object-cover"
        />

        <div className="flex flex-col">
          <div className="text-c-red font-bold text-f-m leading-none">01</div>
          <a href="/" className="text-c-blue font-bold text-f-xs mb-2 mt-2">
            Reviving Retro PCs
          </a>
          <p className="text-c-gray text-f-body leading-tight">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </section>

      <section className="flex gap-4 items-start">
        <img
          src="/images/image-top-laptops.jpg"
          alt="Keyboard with backlight"
          className="w-24 h-32 object-cover"
        />
        <div className="flex flex-col">
          <div className="text-c-red font-bold text-f-m leading-none">02</div>
          <a href="/" className="text-c-blue font-bold text-f-xs mb-2 mt-2">
            Top 10 Laptops of 2022
          </a>
          <p className="text-c-gray text-f-body leading-tight">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </section>

      <section className="flex gap-4 items-start mb-16">
        <img
          src="/images/image-gaming-growth.jpg"
          alt="White PlayStation 4 controller"
          className="w-24 h-32 object-cover"
        />
        <div className="flex flex-col">
          <div className="text-c-red font-bold text-f-m leading-none">03</div>
          <a href="/" className="text-c-blue font-bold text-f-xs mb-2 mt-2">
            The Growth of Gaming
          </a>
          <p className="text-c-gray text-f-body leading-tight">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Blog;
