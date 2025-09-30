// import { useState } from "react";

// export default function App() {
//   return (
//     <>
//       <Calculator />
//     </>
//   );
// }
// function Calculator() {
//   const [bill, setBill] = useState("");
//   const [tip1, setTip1] = useState("");
//   const [tip2, setTip2] = useState("");
//   const [per1, setPer1] = useState(0);
//   const [per2, setPer2] = useState(0);
//   let tip = (per1 / 200) * Number(bill) + (per2 / 200) * Number(bill);
//   let totalAmount = bill != "" ? Number(bill) + tip : 0;
//   function onTip1Change(e) {
//     if (e.target.value === "okay") {
//       setPer1(5);
//     } else if (e.target.value === "good") {
//       setPer1(10);
//     } else if (e.target.value === "amazing") {
//       setPer1(20);
//     } else {
//       setPer1(0);
//     }
//     setTip1(e.target.value);
//   }
//   function onTip2Change(e) {
//     if (e.target.value === "okay") {
//       setPer2(5);
//     } else if (e.target.value === "good") {
//       setPer2(10);
//     } else if (e.target.value === "amazing") {
//       setPer2(20);
//     } else {
//       setPer2(0);
//     }
//     setTip2(e.target.value);
//   }
//   function onReset() {
//     setPer1(0);
//     setPer2(0);
//     setBill("");
//     setTip1("");
//     setTip2("");
//   }
//   return (
//     <div>
//       <div>
//         <label>How much was the bill?</label>
//         <input
//           type="text"
//           value={bill}
//           onChange={(e) => setBill(e.target.value)}
//           placeholder="Bill value"
//         />
//       </div>
//       <div>
//         <label>How did you like the service?</label>
//         <select value={tip1} onChange={(e) => onTip1Change(e)}>
//           <option value="dissatisfied">Dissatisfied (0%)</option>
//           <option value="okay">It was okay (5%)</option>
//           <option value="good">It was good (10%)</option>
//           <option value="amazing">Absolutely amazing! (20%)</option>
//         </select>
//       </div>
//       <div>
//         <label>How did you like the service?</label>
//         <select value={tip2} onChange={(e) => onTip2Change(e)}>
//           <option value="dissatisfied">Dissatisfied (0%)</option>
//           <option value="okay">It was okay (5%)</option>
//           <option value="good">It was good (10%)</option>
//           <option value="amazing">Absolutely amazing! (20%)</option>
//         </select>
//       </div>
//       <br />
//       <div>
//         {totalAmount > 0
//           ? `You pay $${totalAmount} ($${bill} + $${tip} tip)`
//           : ""}
//       </div>
//       <br />
//       <div>{totalAmount > 0 && <button onClick={onReset}>Reset</button>}</div>
//     </div>
//   );
// }
