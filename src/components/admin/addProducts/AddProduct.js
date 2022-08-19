import React, { useState } from "react";
import styles from "./AddProduct.module.scss";
import Card from "../../card/Card";

const AddProducts = () => {
  const [product, setProduct] = useState({
    name: "",
    imageURL: "",
    price: null,
    category: "",
    brand: "",
    desc: "",
  });

  const handleInputChange = (e) => {};
  const handleImageChange = (e) => {};

  return (
    <div className={styles.product}>
      <h1>Add New Product</h1>
      <Card cardClass={styles.card}>
        <form>
          <label>Product name:</label>
          <input
            type="text"
            placeholder="Product name"
            name="name"
            value={product.name}
            onChange={(e) => handleInputChange(e)}
            required
          />
          <label>Product image:</label>
          <Card cardClass={styles.group}>
            <div className={styles.progress}>
              <div className={styles["progress-bar"]} style={{ width: "50%" }}>
                Uploading 50%
              </div>
            </div>
          </Card>
        </form>
      </Card>
    </div>
  );
};
export default AddProducts;
