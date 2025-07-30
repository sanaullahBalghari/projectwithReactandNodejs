import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../components/common/Card.jsx";
import Button from "../../components/common/Button.jsx";
import { useCart } from "../../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [adding, setAdding] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/products/${id}`,
          {
            withCredentials: true,
          }
        );
        setProduct(response.data.data);
      } catch (error) {
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (product && product.stock >= quantity) {
      setAdding(true);
      try {
        const success = await addToCart(product._id, quantity);
        if (success) {
          alert(`${product.name} added to cart!`);
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setAdding(false);
      }
    } else {
      alert("Not enough stock available.");
    }
  };

  if (loading)
    return <div className="text-center mt-10 text-gray-600">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!product)
    return <div className="text-center mt-10">Product not found</div>;

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <img
              src={product.images?.[0] || "https://via.placeholder.com/300"}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/300")
              }
            />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 text-lg mb-2">${product.price}</p>
            <p className="text-gray-500 mb-4">{product.description}</p>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Category:</span>{" "}
              {product.category.name}
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-medium">Stock:</span>{" "}
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </p>

            <Button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              onClick={handleAddToCart}
              disabled={product.stock === 0 || adding}
            >
              {adding ? "Adding..." : "Add to Cart"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProductDetails;
