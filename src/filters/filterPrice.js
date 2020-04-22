 export default function (price, num) {
   if (num) {
     return parseFloat(price).toFixed(num)
   } else {
     return parseFloat(price).toFixed(2)
   }
 }
