import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
ReactDOM.render(<App />, document.getElementById('root'));

// //------
// const link = React.createElement(
//   "a",
//   {
//     href: "https://reactjs.org/",
//     target: "_blank",
//     rel: "noreferrer noopener"
//   },
//   "Link to react.org"
// );
// ReactDOM.render(link, document.getElementById("root"));

// //----------------------------

// <section class="statistics">
//   <h2 class="title">Upload stats</h2>

//   <ul class="stat-list">
//     <li class="item">
//       <span class="label">.docx</span>
//       <span class="percentage">4%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp3</span>
//       <span class="percentage">14%</span>
//     </li>
//     <li class="item">
//       <span class="label">.pdf</span>
//       <span class="percentage">41%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp4</span>
//       <span class="percentage">12%</span>
//     </li>
//   </ul>
// </section>;

// // import statisticalData from '/path/to/statistical-data.json';

// // ReactDOM.render(
// //     <Statistics title="Upload stats" stats={statisticalData} />,
// //     document.getElementById('root'),
// // );

// //-----------------------

// <li class="item">
//   <span class="status"></span>
//   <img class="avatar" src="" alt="" width="48" />
//   <p class="name"></p>
// </li>;

// import friends from "path/to/friends.json";

// // ReactDOM.render(
// //     <FriendList friends={friends} />,
// //     document.getElementById('root'),
// // );

// //------------------

// <table class="transaction-history">
//   <thead>
//     <tr>
//       <th>Type</th>
//       <th>Amount</th>
//       <th>Currency</th>
//     </tr>
//   </thead>

//   <tbody>
//     <tr>
//       <td>Invoice</td>
//       <td>125</td>
//       <td>USD</td>
//     </tr>
//     <tr>
//       <td>Withdrawal</td>
//       <td>85</td>
//       <td>USD</td>
//     </tr>
//   </tbody>
// </table>;

// // import transactions from 'path/to/transactions.json';

// // ReactDOM.render(
// //     <TransactionHistory items={transactions} />,
// //     document.getElementById('root'),
// // );
