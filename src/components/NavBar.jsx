//navbar component
export function NavBar() {
  return (
    <nav className="flex flex-row justify-between mt-24 mb-16">
      <div>
        <img src="../src/assets/images/logo.svg" alt="logo" />
      </div>
      <div className="text-greyblue-400">
        <a href="#" className="pr-6">
          Home
        </a>
        <a href="#" className="px-6">
          New
        </a>
        <a href="#" className="px-6">
          Popular
        </a>
        <a href="#" className="px-6">
          Trending
        </a>
        <a href="#" className="pl-6">
          Categories
        </a>
      </div>
    </nav>
  );
}
