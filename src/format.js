
const format = function (num) {
  let res = num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  return res
}

export default format;
