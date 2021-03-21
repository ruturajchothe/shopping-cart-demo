import logo from "./logo.svg";
import "./App.css";
import ProductCard from "./ProductCard";
import { useState } from "react";

function App() {
  let products = [
    {
      productName: "iPhone 12 Pro Max",
      price: 1199,
      description: "6.1″ or 6.7″  Super Retina XDR display3",
    },
    {
      productName: "iPhone 12",
      price: 999,
      description: "5.4″ or 6.1″ Super Retina XDR display3",
    },
    {
      productName: "iPhone SE",
      price: 499,
      description: "4.7″ Retina HD display",
    },
    {
      productName: "iPhone 11",
      price: 799,
      description: "6.1″ Liquid Retina HD display3",
    },
    {
      productName: "Samsung S21 Ultra 5G",
      price: 1299,
      description: "6.8″ infinity-O 120Hz Display2",
    },
    {
      productName: "Samsung Note 20 Ultra 5G",
      price: 1199,
      description: "6.9″ 120Hz Dynamic AMOLED",
    },
  ];

  const [cartItems, setcartItem] = useState([]);
  const [total, setTotal] = useState(0);


  let handleAddToCart = (product) => {
      setcartItem([...cartItems, product]);
      setTotal(total + product.price)
  };

  let handleRemoveCart = (index) => {
    setTotal(total - cartItems[index].price)
    cartItems.splice(index, 1)
    setcartItem([...cartItems])
    
  }



  return (
    <>
      <div className="container" style={{marginTop:'25px'}}>
        <div className="row">
          <div class="col-lg-3">
            <h1 class="my-4">Online Shop Demo Using React</h1>
            <div class="list-group">
              <ul class="list-group">
              {cartItems.map((product, index) => {
                return (
                  <li class="list-group-item d-flexjustify-content-between align-items-center">
                    {product.productName} : ${product.price} 
                    <br></br>
                    Quantity : {product.frequency}
                    <button class="btn" onClick={() => handleRemoveCart(index)}>
                      <span class="badge bg-warning rounded-pill">Remove from Cart</span>
                    </button>
                  </li>
                );
              })}
              </ul>
              <h4>Total Amount = ${total}</h4>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              {products.map((product) => {
                return (
                  <ProductCard
                    data={product}
                    handleAddToCart={handleAddToCart}
                  ></ProductCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
