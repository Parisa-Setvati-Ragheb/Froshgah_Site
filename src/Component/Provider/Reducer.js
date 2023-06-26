const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "Add_One_Product": {
      const updateCart = [...state.cart];
      const index = updateCart.findIndex((p) => p._id === action.payload._id);
      if (index < 0) {
        updateCart.push({ ...action.payload, quantity: 1 });
      } else {
        const UpdateItem = { ...updateCart[index] };
        UpdateItem.quantity++;
        updateCart[index] = UpdateItem;
      }
      return {
        ...state,
        cart: updateCart,
        total: state.total + action.payload.offPrice,
      };
    }
    case "Decrement-Product": {
      const updateCart = [...state.cart];
      const index = updateCart.findIndex((p) => p._id === action.payload._id);
      const product = { ...updateCart[index] };
      if (product.quantity === 1) {
        const filterProducts = updateCart.filter(
          (p) => p._id !== action.payload._id
        );
        return {
          ...state,
          cart: filterProducts,
          total: state.total - action.payload.offPriceprice,
        };
      } else {
        product.quantity--;

        updateCart[index] = product;
        return {
          ...state,
          cart: updateCart,
          total: state.total - action.payload.offPrice,
        };
      }
    }

    default:
      return state;
  }
};
export default reducer;
