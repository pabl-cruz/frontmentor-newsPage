import { ArticleCard } from "./ArticleCard";
export function Articles() {
  return (
    <section className="flex flex-row basis-full mt-20 gap-4">
      <ArticleCard
        index="01"
        title="Reviving Retro PCs"
        description="What happens when old PCs are given modern upgrades?"
        img="../src/assets/images/image-retro-pcs.jpg"
      />
      <ArticleCard
        index="02"
        title="Top 10 Laptops of 2022"
        description="Our best picks for various needs and budgets."
        img="../src/assets/images/image-top-laptops.jpg"
      />
      <ArticleCard
        index="03"
        title="The Growth of Gaming"
        description="How the pandemic has sparked fresh opportunities."
        img="../src/assets/images/image-gaming-growth.jpg"
      />
    </section>
  );
}
