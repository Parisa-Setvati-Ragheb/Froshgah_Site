
import { useCart,useCartAction } from "../../Provider/Provider";
import styles from "./Cart.module.css";
import { NavLink } from "react-router-dom";

import * as Data from "../../../Data/Data";
const Cart = () => {
  const { cart,total } = useCart();
  const dispatch=useCartAction();
  const IncHandler=((cartItem)=>{
    dispatch({type:"Add_One_Product",payload:cartItem});

  })
  const DecHandler=((cartItem)=>{
    dispatch({type:"Decrement-Product",payload:cartItem});

  })
  if (!cart.length)
    return (
      <main>
        <h3>No Item</h3>
      </main>
    );

  return (
    <main className={styles.originContainer}>
      <section className={styles.container}>
     
        {cart.map((item) => (
        <div className={styles.cartItem}>
 <div key={item.id} className={styles.cart}>
            <div className={styles.listItem}>
            <p>{item.name}</p>
            <p>{item.Size}</p>
            <p>{item.offPrice * item.quantity}</p>
            </div>
            <div className={styles.btn}>
            <button  onClick={()=>{ IncHandler(item)}}>+</button>
            <button>{item.quantity}</button>
            <button  onClick={()=>{ DecHandler(item)}}>-</button>
            </div>
          
          </div>
        </div>
        
          
        ))}
      </section>
      <CartSummary total={total} cart={cart}/>
    </main>
  );
};

export default Cart;
const CartSummary=({total,cart})=> {
  const OrginalTotalPrice=cart.length ? cart.reduce((acc,curr)=>acc+curr.quantity*curr.price,0):0;
  
 return(
  <section className={styles.summary}>
  <h3 >CartSummary</h3>
  <div className={styles.summaryItem}>
    <h6>OrginalTotalPrice:</h6>
    <span>{OrginalTotalPrice}$</span>
  </div>
  
 <div className={styles.summaryItem} >
    <h6>DiscountPrice:</h6>
    <span>{OrginalTotalPrice-total}$</span>
  </div>
<div className={styles.discount}></div>
 
  
  <div className={styles.summaryItem } >
    <h6>Total:</h6>
    <span>{total}$</span>
  </div>
  <NavLink to="/signup?redirect=/checkout" >
    <button className={styles.btncheckout}> go to CheckOut</button></NavLink>
</section>

 )
  
}