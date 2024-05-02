import MyNavbar from "./MyNavbar";
import MyMenuGenre from "./MyMenuGenre";
import Carousel from "./Courusel";
import MyFooter from "./MyFooter";

function Home({ togglePage }) {
  return (
    <>
      <MyNavbar showProfile={togglePage} />
      <MyMenuGenre />
      <Carousel url="Avengers" title="Trending Now" />
      <Carousel url="Harry Potter" title="Most view" />
      <Carousel url="The Lord Of The Rings" title="Selected For You" />
      <MyFooter />
    </>
  );
}

export default Home;
