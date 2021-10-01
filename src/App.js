import React from 'react';
import Profile from './Components/SocialProfile/Profile';
import Statistics from './Components/Statistics/Statistics.jsx';
import FriendList from './Components/FriendsList/FriendsList';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory.jsx';
import user from './Components/Data/user.json';
import friends from './Components/Data/friends.json';
import statisticalData from './Components/Data/statistical-data.json';
import transactions from './Components/Data/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
