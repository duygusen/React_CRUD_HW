import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetail();
  }, [id]);

  return (
    <div className="container mt-5">
      <h2>{product.title}</h2><br />
      <h6>Description : {product.description}</h6>
      <h6>Price : {product.price}</h6>
      <h6>DiscountPercentage : {product.discountPercentage}</h6>
      <h6>Rating : {product.rating}</h6>
      <h6>Stock : {product.stock}</h6>
      <h6>Brand : {product.brand}</h6>
      <h6>Category : {product.category}</h6>
      <h6>Thumbnail : {product.thumbnail}</h6>
    </div>
  );
}
