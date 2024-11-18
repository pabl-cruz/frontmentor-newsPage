export function NewNewsCard({ title, description }) {
  return (
    <div className="my-8">
      <h3 className="text-offwhite font-extrabold text-xl pb-2">{title}</h3>
      <p className="text-greyblue-200 leading-7">{description}</p>
    </div>
  );
}
