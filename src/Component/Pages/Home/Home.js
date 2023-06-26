import * as Data from "../../../Data/Data";
import styles from "./Home.module.css";
import { useCart, useCartAction } from "../../Provider/Provider";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { getAllProductsServices } from "../../../services/getAllProductsServices";
function CheckOut(cart, product) {
  return cart.find((c) => c._id === product._id);
}
const Home = () => {
  const [datas, setDatas] = useState(null);
  const { cart } = useCart();
  const dispatch = useCartAction();
  const addHandler = (product) => {
    dispatch({ type: "Add_One_Product", payload: product });
    toast.success(`${product.name} added to product`);
  };
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getAllProductsServices();
        console.log(data);
        setDatas(data);

        console.log(datas);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProducts();
  }, []);
  return (
    <>
      <h3>Product List</h3>
      <section className={styles.sec}>
        {datas ? (
          datas.map((product) => {
            return (
              <section key={product.id}>
                
                <div className={styles.product}>
                  <div className={styles.container}>
                    <div className={styles.imagecontainer}>   <img className={styles.images} src={product.image}></img>

                    </div>
               
                  <div className={styles.information} >
                  <span>{product.name}</span>
                    <div className={styles.prices}>
                   
                    <span>{product.offPrice}</span>
                  <span className={styles.price}>{product.price}</span>
                    </div>

                  </div>
                 
             
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
          })
        ) : (
          <p>loading...</p>
        )}
      </section>
    </>
  );
};

export default Home;
