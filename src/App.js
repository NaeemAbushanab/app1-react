import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Products from "./components/products/Products.jsx";
function App() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <Products />
      </div>
      <Footer />
    </>
  );
}

export default App;
