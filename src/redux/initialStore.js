const getItemCount = () => {
  let userOrderAppDelivery;
  if (localStorage.getItem("userOrderAppDelivery")) {
    userOrderAppDelivery = JSON.parse(localStorage.getItem("userOrderAppDelivery"));
  } else {
    userOrderAppDelivery = [];
  }

  let tempItemCount = {};
  userOrderAppDelivery.forEach(product => {
    tempItemCount[product.idProduct] = product.quantity;
  });
  console.log(tempItemCount)
  return tempItemCount;
}

const initialStore = {
  quantityItems: getItemCount(),
}

export default initialStore;