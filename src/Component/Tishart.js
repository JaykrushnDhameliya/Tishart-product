// import React from "react";

// const Tishart = () => {
//   return <>
//    <section className="banner-wrapper">
//       <nav className="navbar">
//         <a href="index.html" className="navbar-brand">
//           <img src="images/shirt-icon.png" alt="site icon" />
//           <span>TEESHIRT</span>
//         </a>
//         <div className="nav-icons">
//           <a href="#">
//             <img src="images/shopping-cart.png" />
//           </a>
//           <a href="#">
//             <img src="images/heart.png" />
//           </a>
//         </div>
//       </nav>
//       <div className="banner-content">
//         {/* banner left */}
//         <div className="banner-left">
//           <h2>
//             <span>get t-shirt</span> of your selection
//           </h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
//             expedita eveniet, atque facilis id cum delectus maxime labore alias
//             dicta voluptatem aliquam earum, ea repudiandae laudantium velit
//             assumenda asperiores nostrum?
//           </p>
//           <button type="button">read more</button>
//           <div className="color-content">
//             <h3>select any color</h3>
//             <div className="color-groups">
//               <div className="color color-white active-color" />
//               <div className="color color-black" />
//               <div className="color color-yellow" />
//               <div className="color color-blue" />
//               <div className="color color-red" />
//             </div>
//           </div>
//         </div>
//         {/* banner right */}
//         <div className="banner-right">
//           <img src="images/tshirt_white.png" />
//         </div>
//       </div>
//     </section>
//   </>;
// };

// export default Tishart;
import React, { useState } from "react";
import "./style.css"; // Make sure to import your CSS file
import ner from "../assets/images/shopping-cart.png";
function ProductPage() {
  const [activeColor, setActiveColor] = useState("white"); // State to track the active color

  // Function to handle color button click
  const handleColorClick = (color) => {
    resetActiveBtns();
    setActiveColor(color);
  };

  // Function to reset all color buttons
  const resetActiveBtns = () => {
    setActiveColor(null);
  };

  // Function to set the new color for the banner right
  const setNewColor = (color) => {
    // You can replace this with the actual path to your images
    // return `../assets/images/tshirt_red.png`;
    return `images/tshirt_${color}.png`;
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>Product Page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="style.css" />
      <header>
        <section className="banner-wrapper">
          <nav className="navbar">
            <a href="index.html" className="navbar-brand">
              <img
                src={require("../assets/images/shopping-cart.png")}
                alt="site icon"
              />
              <span>TEESHIRT</span>
            </a>
            <div className="nav-icons">
              <a href="#">
                <img
                  src={require("../assets/images/shopping-cart.png")}
                  alt="Cart"
                />
              </a>
              <a href="#">
                <img src={require("../assets/images/heart.png")} alt="Heart" />
              </a>
            </div>
          </nav>
          <div className="banner-content">
            {/* banner left */}
            <div className="banner-left">
              <h2>
                <span>get t-shirt</span> Multiple choice color
              </h2>
              <p>
                Buy the Best Men's T-shirts Online in India at Bewakoof.com.
                Bewakoof.com is an online shopping website that offers a wide
                range of stylish and fashionable tees for men in India.
              </p>
              <button type="button">read more</button>
              <div className="color-content">
                <h3>select any color</h3>
                <div className="color-groups">
                  <div
                    className={`color color-white ${
                      activeColor === "white" ? "active-color" : ""
                    }`}
                    onMouseOver={() => handleColorClick("white")}
                  />
                  <div
                    className={`color color-black ${
                      activeColor === "black" ? "active-color" : ""
                    }`}
                    onMouseOver={() => handleColorClick("black")}
                  />
                  <div
                    className={`color color-blue ${
                      activeColor === "blue" ? "active-color" : ""
                    }`}
                    onMouseOver={() => handleColorClick("blue")}
                  />
                  <div
                    className={`color color-yellow ${
                      activeColor === "yellow" ? "active-color" : ""
                    }`}
                    onMouseOver={() => handleColorClick("yellow")}
                  />
                  <div
                    className={`color color-red ${
                      activeColor === "red" ? "active-color" : ""
                    }`}
                    onMouseOver={() => handleColorClick("red")}
                  />
                  {/* Add more color buttons here */}
                </div>
              </div>
            </div>
            {/* banner right */}
            <div className="banner-right">
              <img
                src={require(`../assets/images/tshirt_${activeColor}.png`)}
                alt={`T-shirt in ${activeColor}`}
              />
              {/* src={setNewColor(activeColor)} */}
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

export default ProductPage;
