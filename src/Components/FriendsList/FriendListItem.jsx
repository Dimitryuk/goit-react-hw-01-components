import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendsList.module.css';

const FriendListItem = function ({ name, avatar, isOnline }) {
  return (
    <li className={s.friends__listItem}>
      <span className={isOnline ? s.statusOnline : s.statusOffline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendListItem;
