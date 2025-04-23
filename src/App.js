import "./App.css";
import Benefits from "./components/benefits/Benefits";
import DescribeBlock from "./components/describeBlock/DescribeBlock";
import FAQ from "./components/faq/FAQ";
import Founder from "./components/founder/Founder";
import HeroSection from "./components/hero/HeroSection";
import InfoBanner from "./components/infoBanner/InfoBanner";
import Reviews from "./components/reviews/Reviews";
import Cta from "./components/cta/Cta";
import comment_women from "./images/comment-women.png";
import star from "./images/star.png";

function App() {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<img alt="star" key={i} src={star} />);
  }

  return (
    <div className="App">
      <div className="header-line">
        {`CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE
         SHIPPING on orders > $200 | easy 45 day return window.`}
      </div>
      <div className="container">
        <HeroSection />
      </div>

      <div className="comment-block">
        <div className="comment-info">
          <img alt="women" src={comment_women} className="comment-img" />
          <div className="comment-nameAndRating">
            <span className="comment-name">Amy P.</span>
            <div className="comment-rating">{stars}</div>
          </div>

          <div className="comment-head">One of 500+ 5 Star Reviews Online</div>
        </div>

        <div className="comment-text">
          Overjoyed with my Loungewear set. I have the jogger and the
          sweatshirt. Quality product on every level. From the compostable
          packaging, to the supplied washing bag, even the garments smells like
          fresh herbs when I first held them.
        </div>
      </div>

      <Benefits />
      <Founder />
      <DescribeBlock stars={stars} />
      <Reviews stars={stars} />
      <FAQ />
      <InfoBanner />
      <Cta />
    </div>
  );
}

export default App;
