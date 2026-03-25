import "./Hero.css";
import banner from "../../assets/banner.png";

function Hero() {
  return (
    <section className="hero container">
      <img src={banner} alt="banner" className="hero__img" />
    </section>
  );
}

export default Hero;