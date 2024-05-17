import { useState } from "react";
import Card from "./Card";

const default_products = [
  {
    image: "/public/milkshake-1.jpg",
    title: "Coffee milk Tea",
    price: 1000,
    category: "milk",
  },
  {
    image: "/public/milkshake-2.jpg",
    title: "Ear gray milk Tea",
    price: 2000,
    category: "milk",
  },
  {
    image: "/public/milkshake-3.jpg",
    title: "Oreo cake",
    price: 1500,
    category: "cake",
  },
  {
    image: "/public/milkshake-4.jpg",
    title: "Padding milk Tea",
    price: 3400,
    category: "milk",
  },
];

export default function Products() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const [products, setProducts] = useState(default_products);

  function handleSearch(event) {
    setSearch(event.target.value);
    setProducts(
      default_products.filter((item) =>
        item.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  }

  function handleSort(event) {
    setSort(event.target.value);
    if (event.target.value === "ascending") {
      setProducts([...products].sort((a, b) => a.price - b.price));
    } else if (event.target.value === "descending") {
      setProducts([...products].sort((a, b) => b.price - a.price));
    } else {
      setProducts(default_products);
    }
  }

  function handleFilter(event) {
    setFilter(event.target.value);
    if (event.target.value) {
      setProducts(
        default_products.filter(
          (item) =>
            item.category.toLowerCase() === event.target.value.toLowerCase()
        )
      );
    } else {
      setProducts(default_products);
    }
  }

  return (
    <section className="section-products">
      <div className="input-wrapper">
        <div className="label-wrapper" value={filter} onChange={handleFilter}>
          <label htmlFor="filter">Product Group</label>
          <select id="filter">
            <option value="">Select...</option>
            <option value="milk">Milk</option>
            <option value="cake">Cake</option>
          </select>
        </div>
        <div className="label-wrapper">
          <label htmlFor="sort">Sort by price</label>
          <select id="sort" value={sort} onChange={handleSort}>
            <option value="">Select...</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        <div className="label-wrapper">
          <label htmlFor="search">Search</label>
          <input
            type="text"
            id="search"
            value={search}
            onChange={(e) => handleSearch(e)}
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="card-wrapper">
        {products.map((item, i) => (
          <Card
            key={i}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}
