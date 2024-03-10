import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.userDataContainer}>
      <div className={css.userData}>
        <img src={image} alt="User avatar" className={css.userAvatar} />
        <p className={css.userDataName}>{name}</p>
        <p className={css.userDataTag}>@{tag}</p>
        <p className={css.userDataLocation}>{location}</p>
      </div>

      <ul className={css.UserStatusContainer}>
        <li className={css.UserStatusContainerItem}>
          <span className={css.UserStatusContainerItemContent}>Followers</span>
          <span> {stats.followers}</span>
        </li>
        <li className={css.UserStatusContainerItem}>
          <span className={css.UserStatusContainerItemContent}>Views</span>
          <span> {stats.views}</span>
        </li>
        <li className={css.UserStatusContainerItem}>
          <span className={css.UserStatusContainerItemContent}>Likes</span>
          <span> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
