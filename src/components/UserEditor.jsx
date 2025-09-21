import React from 'react';
import '../styles/UserEditor.css';
import { isUserValid, isEmailValid } from '../utils/validators';

const UserEditor = ({ user, onChange, onSave, onCancel, isModified }) => {
  if (!user) return <div className="placeholder">Select a user to edit</div>;

  const handleInput = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const showError = (field) => {
    if (field === 'name') return !user.name?.trim();
    if (field === 'phone') return !user.phone?.trim();
    if (field === 'email') return !isEmailValid(user.email);
    return false;
  };

  const formValid = isUserValid(user);

  return (
    <form className="user-form" onSubmit={(e) => e.preventDefault()} aria-live="polite">
      <label htmlFor="name">Name*</label>
      <input id="name" name="name" value={user.name || ''} onChange={handleInput} />
      {showError('name') && <span className="error-msg">Name is required</span>}

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" value={user.email || ''} onChange={handleInput} />
      {showError('email') && <span className="error-msg">Invalid email format</span>}

      <label htmlFor="phone">Phone*</label>
      <input id="phone" name="phone" value={user.phone || ''} onChange={handleInput} />
      {showError('phone') && <span className="error-msg">Phone is required</span>}

      <label htmlFor="address">Address</label>
      <input id="address" name="address" value={user.address || ''} onChange={handleInput} />

      <label htmlFor="company">Company</label>
      <input id="company" name="company" value={user.company || ''} onChange={handleInput} />

      <div className="form-actions">
        {isModified && (
          <button type="button" onClick={onCancel} className="cancel-btn">
            Cancel
          </button>
        )}
        <button
          type="submit"
          onClick={onSave}
          className="save-btn"
          disabled={!isModified || !formValid}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default UserEditor;
