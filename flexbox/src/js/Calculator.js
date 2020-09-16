function multiItemsPrice(price,volume){
   const totalValue = price * volume;
   return totalValue;
}

function checkout(checkoutLists){
    let totalPrice = 0;
    checkoutLists.map((item)=>(
        totalPrice += item.price
    ))
    return totalPrice;
}



module.exports = {
    multiItemsPrice,
    checkout
};
  