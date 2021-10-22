

// let a = (-12345.67).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
// console.log(a);


//let amount = -12.009
//amount = amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
//console.log(amount);


const format = function (num) {
  let res = num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  return res
}

export default format;
