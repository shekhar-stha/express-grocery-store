import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Rice", src: "/img/rice.png" },
  { name: "Snacks", src: "/img/snacks.png" },
  { name: "Spices", src: "/img/spices.png" },
  { name: "Vegetables", src: "/img/vegetable.png" }
];

export default function ProductCategories() {
  return (
    <section className="product-categories">
      <div className="container">
        <h3 className="header text-center">Product Categories</h3>
        <div className="grid">
          {categories.map(category => (
            <Link className="category" href={`/search/genre-${category.name.toLowerCase()}`} key={category.name}>
              <div className="img-div">
                <Image width={300} height={150} src={category.src} alt={category.name} />
              </div>
              <p className="category-name">{category.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
