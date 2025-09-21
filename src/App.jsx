import React from 'react';
import useUsers from './hooks/useUsers';
import UserList from './components/UserList';
import UserEditor from './components/UserEditor';
import Loader from './components/Loader';
import './styles/App.css';

function App() {
  const {
    users,
    selectedUser,
    editedUser,
    loading,
    handleSelectUser,
    handleChange,
    handleSave,
    handleCancel,
    isModified
  } = useUsers();

  return (
    <div className="app-container">
      {loading && <Loader />}
      <div className="left-panel">
        <UserList users={users} onSelect={handleSelectUser} selectedUserId={selectedUser?.id} />
      </div>
      <div className="right-panel">
        <UserEditor
          user={editedUser}
          originalUser={selectedUser}
          onChange={handleChange}
          onSave={handleSave}
          onCancel={handleCancel}
          isModified={isModified}
        />
      </div>
    </div>
  );
}

export default App;
