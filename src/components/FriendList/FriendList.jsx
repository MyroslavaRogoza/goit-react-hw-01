import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
const FriendList = ({ friends }) => {
  const markup = friends.map((friend) => {
    return (
      <li key={friend.id} className={css.userFriendItem}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    );
  });
  return <ul className={css.userFriendContainer}>{markup}</ul>;
};
export default FriendList;
