import PropTypes from 'prop-types';
import s from './FriendsList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={s.friends__list}>
      {friends.map(friend => (
        <li className={s.friends__listItem} key={friend.id}>
          <span
            className={friend.isOnline ? s.statusOnline : s.statusOffline}
          ></span>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
