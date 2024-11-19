import { NewNewsCard } from "./NewNewsCard";

export function NewNewsSidebar() {
  return (
    <section className="px-8 pt-10 basis-1/3 bg-darkblue-500 mx-4 md:mx-0">
      <h2 className="mt-2 mb-9 font-bold text-5xl text-orange-200">New</h2>
      <NewNewsCard
        title="Hydrogen VS Electric Cars"
        description="Will hydrogen-fueled cars ever catch up to EVs?"
      />
      <hr className="text-greyblue-400" />
      <NewNewsCard
        title="The Downsides of AI Artistry"
        description="What are the possible adverse effects of on-demand AI image generation?"
      />
      <hr className="text-greyblue-400" />
      <NewNewsCard
        title="Is VC Funding Drying Up?"
        description="Private funding by VC firms is down 50% YOY. We take a look at what that means."
      />
    </section>
  );
}
