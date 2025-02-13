// routes/order.js
module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/orders/customOrder',
      handler: 'order.customOrderController',
    },
    // {
    //   method: 'POST',
    //   path: '/orders/verify-payment',
    //   handler: 'order.verifyPayment',
    // }
  ],
};