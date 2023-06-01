import * as Data from "../../../Data/Data";
import styles from "./Home.module.css";
import { useCart, useCartAction } from "../../Provider/Provider";
import { toast } from "react-toastify";
function CheckOut(cart, product) {
 
  return cart.find((c) => c.id === product.id);
}
const Home = () => {
  const { cart } = useCart();
  const dispatch = useCartAction();
  const addHandler = (product) => {
    dispatch({ type: "Add_One_Product", payload: product });
    toast.success(`${product.name} added to product`);
  };
  return (
    <>
      <h3>Product List</h3>
      <section className={styles.sec}>
        {Data.Products.map((product) => {
          return (
            <section key={product.id}>
              <div className={styles.product}>
                <div className={styles.container}>
                  <p>{product.name}</p>
                  <p>{product.Size}</p>
                </div>
                <button
                  className={styles.btn}
                  onClick={() => {
                    addHandler(product);
                  }}
                >
                  {CheckOut(cart, product) ? "InCart" : "Add Cart"}
                </button>
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default Home;
