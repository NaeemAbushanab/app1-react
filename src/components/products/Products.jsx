import Product from "../product/Product";
const products = [
  { id: "1", title: "Computer", desc: "Mouse | Keyboard" },
  { id: "2", title: "Clothes", desc: "Cap | T-shirt" },
  { id: "3", title: "Phones", desc: "Samsung | Iphone" },
  { id: "4", title: "electronics", desc: "Washer | Refrigerator" },
];
function Products() {
  return (
    <div className="row row-gap-5">
      {products.map((product) => (
        <Product title={product.title} desc={product.desc} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
