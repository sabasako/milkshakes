export default function Card({ image, title, price }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{price} VND</p>
      <div className="button-wrapper">
        <button>Add to cart</button>
      </div>
    </div>
  );
}
