import React from 'react';
import UserListItem from './UserListItem';
import '../styles/UserList.css';

const UserList = ({ users, onSelect, selectedUserId }) => {
  if (users.length === 0) {
    return <p className="empty-message" role="status">No users loaded.</p>;
  }

  return (
    <ul className="user-list" role="listbox" aria-label="Users">
      {users.map(user => (
        <UserListItem
          key={user.id}
          user={user}
          onClick={() => onSelect(user.id)}
          isSelected={user.id === selectedUserId}
        />
      ))}
    </ul>
  );
};

export default UserList;
