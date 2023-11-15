const accountsInfo = require("./apis/assets");
const orderCryptocurrency = require("./apis/order");
const getCandlesInfo = require("./apis/ticker");

// console.log("Get Accounts Info: Before ordering Cryptocurrency");

// accountsInfo
//   .getAllAccountsInfo()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// console.log("Start ordering crypto");

// orderCryptocurrency
//   .orderCryptocurrency()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// console.log("Get Accounts Info: After ordering Cryptocurrency");

// accountsInfo
//   .getAllAccountsInfo()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

getCandlesInfo
  .getCandlesInfo()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
