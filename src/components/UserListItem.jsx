import React from 'react';
import '../styles/UserList.css';

const FALLBACK_AVATAR =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><rect width="100%" height="100%" fill="%23ececec"/><text x="50%" y="54%" font-family="Arial" font-size="12" text-anchor="middle" fill="%23999">No Img</text></svg>';

const UserListItem = ({ user, onClick, isSelected }) => {
  const { name, email, profilePicture } = user;

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <li
      className={`user-list-item ${isSelected ? 'selected' : ''}`}
      role="option"
      aria-selected={isSelected}
    >
      <button
        type="button"
        className="user-list-button"
        onClick={onClick}
        onKeyDown={onKeyDown}
        aria-label={`Select user ${name}${email ? `, ${email}` : ''}`}
      >
        <img
          src={profilePicture || FALLBACK_AVATAR}
          alt={name ? `${name}'s avatar` : 'User avatar'}
          className="avatar"
          onError={(e) => { e.currentTarget.src = FALLBACK_AVATAR; }}
        />
        <div className="user-info">
          <div className="user-name">{name}</div>
          {email && <div className="user-email">{email}</div>}
        </div>
      </button>
    </li>
  );
};

export default UserListItem;



