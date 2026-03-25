import Hero from "../../components/Hero/Hero";
import ProductsList from "../../components/ProductsList/ProductsList";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <Hero />

      <section className="products-section container">
        <h2 className="products-section__title">Товары</h2>
        <div className="products-section__line"></div>
        <ProductsList />
      </section>
    </div>
  );
}

export default HomePage;