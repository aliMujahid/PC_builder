export default function ProductListItem({ product, handleClick }) {
  return (
    <div
      className="productCard"
      style={{ border: "1px solid black", margin: "10px" }}
    >
      <h3>{product.name}</h3>
      <p>model:{product.model}</p>
      <p>
        <i>price:</i>
        {product.price}
      </p>
      <button
        onClick={() => {
          handleClick(product);
        }}
      >
        ADD
      </button>
    </div>
  );
}
