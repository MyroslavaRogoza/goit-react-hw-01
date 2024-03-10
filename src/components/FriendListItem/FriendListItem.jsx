import css from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.userInfoBox}>
      <img src={avatar} alt="Avatar" width="96" />
      <p>{name}</p>
      <p>{String(isOnline)}</p>
    </div>
  );
};

export default FriendListItem;
