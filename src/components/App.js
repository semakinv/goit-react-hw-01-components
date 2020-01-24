import React from 'react';
import Profile from './social-profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friend-list/FriendList';
import TransactionHistory from './transaction-history/TransactionHistory';
import user from './social-profile/user.json';
import statisticalData from './statistics/statistical-data.json';
import friends from './friend-list/friends.json';
import transactions from './transaction-history/transactions.json';

export default function App() {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
