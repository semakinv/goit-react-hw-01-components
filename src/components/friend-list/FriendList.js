import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './FriendList.module.css';

const { item, status } = styles;
const Status = styled.span`
  background-color: ${props => (props.statusValue ? 'green' : 'red')};
`;
const FriendListItem = ({ name, isOnline, avatar }) => (
  <li className={item}>
    <Status className={status} statusValue={isOnline}>
      {' '}
    </Status>
    <img className={styles.avatar} src={avatar} alt="" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem {...friend} key={friend.id} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default FriendList;
