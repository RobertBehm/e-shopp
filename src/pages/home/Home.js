//import styles from "./Home.module.scss";
import { useEffect } from "react";
import { Slider, Product } from "../../components";

const Home = () => {
  const url = window.location.href;

  const scrollToProducts = () => {
    if (url.includes("#products")) {
      window.scrollTo({
        top: 700,
        behavior: "smooth",
      });
      return;
    }
  };

  {
    /*useEffect(() => {
    scrollToProducts();
  }, []);*/
  }

  return (
    <div>
      {/*<Slider />*/}
      <Product />
    </div>
  );
};
export default Home;
