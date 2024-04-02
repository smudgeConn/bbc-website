import React from "react";

const headerLinks = {
  BBC: "https://www.bbc.co.uk",
  "Sign in": "https://www.bbc.co.uk/signin",
  Home: "https://www.bbc.co.uk/home",
  News: "https://www.bbc.co.uk/news",
  Sport: "https://www.bbc.co.uk/sport",
  Reel: "https://www.bbc.co.uk/reel",
  Worklife: "https://www.bbc.co.uk/worklife",
  Travel: "https://www.bbc.co.uk/travel",
  Future: "https://www.bbc.co.uk/future",
  Culture: "https://www.bbc.co.uk/culture",
  More: "https://www.bbc.co.uk/more",
  Search: "https://www.bbc.co.uk/search",
};

function Header() {
  return (
    <header>
      <nav>
        <ul>
          {Object.keys(headerLinks).map((link) => (
            <li key={link}>
              <a href={headerLinks[link]}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function TopNewsSection() {
  return (
    <div>
      <img src="https://picsum.photos/300/200" alt="" />
      <h1>Welcome to BBC.com</h1>
      <section>
        <h2>Israel and UAE strike historic peace deal</h2>
        <p>
          Israel and the UAE agree to normalise relations, marking the third
          Israel-Arab peace deal.
        </p>
        <span>MIDDLE EAST</span>
      </section>
    </div>
  );
}

function TopNewsSection2() {
  return (
    <div>
      <section>
        <h3>Title</h3>
        <span>Topic</span>
      </section>
      <section>
        <h3>Title</h3>
        <span>Topic</span>
      </section>
      <section>
        <h3>Title</h3>
        <span>Topic</span>
      </section>
      <section>
        <h3>Title</h3>
        <span>Topic</span>
      </section>
    </div>
  );
}

function News() {
  return (
    <>
      <h1>News</h1>
      <section>
        <img src="https://picsum.photos/300/200" alt="" />
        <h4>Title</h4>
        <p>Here is the story</p>
        <span>Topic</span>
      </section>
      <section>
        <img src="https://picsum.photos/300/200" alt="" />
        <h4>Title</h4>
        <p>Here is the story</p>
        <span>Topic</span>
      </section>
      <section>
        <img src="https://picsum.photos/300/200" alt="" />
        <h4>Title</h4>
        <p>Here is the story</p>
        <span>Topic</span>
      </section>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <TopNewsSection />
        <TopNewsSection2 />
      </section>
      <section>
        <News />
      </section>
    </div>
  );
}

export default App;
