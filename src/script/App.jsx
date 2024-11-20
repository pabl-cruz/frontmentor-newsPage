import { Fragment } from "react";
import { NavBar } from "../components/NavBar";
import { Articles } from "../components/Articles";
import { FeaturedArticle } from "../components/FeaturedArticle";
import { NewNewsSidebar } from "../components/NewNewsSidebar";
function App() {
  return (
    <Fragment>
      <header className="container">
        <NavBar />
      </header>
      <main className="container flex">
        <div className="flex-col">
          <div className="flex flex-col md:flex-row gap-10 mb-8">
            <FeaturedArticle />
            <NewNewsSidebar />
          </div>
          <Articles />
        </div>
      </main>
      <footer className="mt-5">
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/pabl-cruz">
            Pablo Cruz
          </a>
          .
        </div>
      </footer>
    </Fragment>
  );
}

export default App;
