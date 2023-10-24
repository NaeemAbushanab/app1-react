function Product(props) {
  return (
    <div className="col-4">
      <div className="product">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
export default Product;
