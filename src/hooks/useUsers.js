import { useEffect, useState } from 'react';
import { getAllUsers, getUser, updateUser } from '../api/users';

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUser, setEditedUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const users = await getAllUsers();
        setUsers(users);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (!selectedUserId) {
      setSelectedUser(null);
      return;
    }

    (async () => {
      setLoading(true);
      try {
        const user = await getUser(selectedUserId);
        setSelectedUser(user);
        setEditedUser(user);
      } finally {
        setLoading(false);
      }
    })();
  }, [selectedUserId]);

  const handleSelectUser = (id) => {
    if (id === selectedUserId) return;
    setSelectedUserId(id);
  };

  const handleChange = (field, value) => {
    setEditedUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    if (!selectedUserId || !editedUser) return;
    setLoading(true);
    try {
      const updated = await updateUser(selectedUserId, editedUser);
      setUsers((prev) =>
        prev.map((user) => (user.id === selectedUserId ? updated : user))
      );
      setSelectedUser(updated);
      setEditedUser(updated);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEditedUser(selectedUser);
  };

  const isModified = JSON.stringify(selectedUser) !== JSON.stringify(editedUser);

  return {
    users,
    selectedUser,
    editedUser,
    loading,
    handleSelectUser,
    handleChange,
    handleSave,
    handleCancel,
    isModified,
  };
}
