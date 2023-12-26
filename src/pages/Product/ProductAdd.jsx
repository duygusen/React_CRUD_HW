import React, { useState } from "react";

export default function ProductAddPage() {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: null,
    discountPercentage: null,
    rating: null,
    stock: null,
    brand: "",
    category: "",
    thumbnail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New product added:", product);
  };

  return (
    <div className="container mt-5">
      <h2>New Product Adding Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={product.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={product.price !== null ? product.price : ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="discountPercentage" className="form-label">
            DiscountPercentage:
          </label>
          <input
            type="number"
            className="form-control"
            id="discountPercentage"
            name="discountPercentage"
            value={product.discountPercentage !== null ? product.discountPercentage : ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating:
          </label>
          <input
            type="number"
            className="form-control"
            id="rating"
            name="rating"
            value={product.rating !== null ? product.rating : ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock:
          </label>
          <input
            type="number"
            className="form-control"
            id="stock"
            name="stock"
            value={product.stock !== null ? product.stock : ""}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="brand" className="form-label">
            Brand:
          </label>
          <input
            type="text"
            className="form-control"
            id="brand"
            name="brand"
            value={product.brand}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category:
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={product.category}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">
            Thumbnail:
          </label>
          <input
            type="text"
            className="form-control"
            id="thumbnail"
            name="thumbnail"
            value={product.thumbnail}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}
