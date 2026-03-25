import Hero from "../../components/Hero/Hero";
import ProductCard from "../../components/ProductCard/ProductCard";

function HomePage() {
  return (
    <div>
      <Hero />

      <section className="container" style={{ marginTop: "60px" }}>
        <h2 style={{ fontSize: "40px", marginBottom: "40px" }}>Товары</h2>

        <div style={{ display: "flex", gap: "40px" }}>
          <ProductCard
            image="https://i.imgur.com/PReV51j.png"
            name="Мужские Кроссовки Nike Air Zoom Pegasus"
            price="180"
          />
          <ProductCard
            image="https://i.imgur.com/PReV51j.png"
            name="Мужские Кроссовки Nike Air Zoom Pegasus"
            price="180"
          />
          <ProductCard
            image="https://i.imgur.com/PReV51j.png"
            name="Мужские Кроссовки Nike Air Zoom Pegasus"
            price="180"
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;