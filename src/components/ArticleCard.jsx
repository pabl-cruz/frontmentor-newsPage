export function ArticleCard({ index, title, description, img }) {
  return (
    <div className="flex basis-1/3 my-3 md:mt-0">
      <div className="basis-1/3">
        <img src={img} alt={title} className="article__img pr-4 md:px-0" />
      </div>
      <div className="basis-2/3">
        <span className="text-4xl font-bold text-red-200">{index}</span>
        <h4 className="font-extrabold text-darkblue-500 text-xl py-2">
          {title}
        </h4>
        <p className="text-greyblue-400 leading-7">{description}</p>
      </div>
    </div>
  );
}
