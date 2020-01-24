import React from 'react';
import PropTypes from 'prop-types';
// import './social-profile.module.css';

const FriendListItem = ({ name, isOnline, avatar }) => (
  <li class="item">
    <span class="status">{isOnline ? 'online' : 'offline'}</span>
    <img class="avatar" src={avatar} alt="" width="48" />
    <p class="name">{name}</p>
  </li>
);

function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <FriendListItem {...friend} key={friend.id} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default FriendList;
