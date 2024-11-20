export function NewNewsCard({ title, description }) {
  return (
    <div className="my-8">
      <a href="#">
        <h3 className="text-offwhite font-extrabold text-xl pb-2 active:text-orange-200">
          {title}
        </h3>
      </a>
      <p className="text-greyblue-200 leading-7">{description}</p>
    </div>
  );
}
