import React, { useState } from "react";

const ProductList = () => {
  const [cart, setCart] = useState([]); // State to track cart items

  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Short description of product 1.",
      price: "$49.99",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Short description of product 2.",
      price: "$59.99",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Short description of product 3.",
      price: "$69.99",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      name: "Product 4",
      description: "Short description of product 4.",
      price: "$79.99",
      image: "https://via.placeholder.com/300",
    },
  ];

  // Function to add a product to the cart
  const handleAddToCart = (product) => {
    const quantity = parseInt(
      window.prompt(`Enter quantity for ${product.name}:`, "1"),
      10
    );

    if (isNaN(quantity) || quantity <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    const cartItem = { ...product, quantity };
    setCart((prevCart) => [...prevCart, cartItem]);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Product List</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-2">
              <h3 className="text-sm font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600 mt-1 text-xs">
                {product.description}
              </p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-sm font-bold text-gray-800">
                  {product.price}
                </span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Cart</h2>
        {cart.length > 0 ? (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded shadow"
              >
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span className="font-bold">{item.price}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
