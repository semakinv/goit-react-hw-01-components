import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({ name, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;
  const { profile, description, label, quantity } = styles;
  return (
    <div className={profile}>
      <div className={description}>
        <img src={avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={label}>Followers</span>
          <span className={quantity}>{followers}</span>
        </li>
        <li>
          <span className={label}>Views</span>
          <span className={quantity}>{views}</span>
        </li>
        <li>
          <span className={label}>Likes</span>
          <span className={quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
