import style from './FriendList.module.scss'

export const Friends = ({ friends }) => {
  return (
    <ul className={style.friendsList}>
      {friends.map((friend) => (
        <li className={style.item} key={friend.id}>
          <span
            className={style.status}
            style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
          ></span>
          <img
            className={style.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={style.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};