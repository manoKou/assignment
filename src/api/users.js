import { API_BASE_URL } from '../constants';

export const getAllUsers = async () => {
  const res = await fetch(API_BASE_URL);
  if (!res.ok) throw new Error('Failed to fetch users');
  return await res.json();
};

export const getUser = async (id) => {
  const res = await fetch(`${API_BASE_URL}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch user');
  return await res.json();
};

export const updateUser = async (id, data) => {
  // spec asks tha I do not send the id; 
  // so the code destructures from an object, sets the id of it in _omit, but then actually removes the id for the payload
  const { id: _omit, ...payload } = data || {};
  const res = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Failed to update user');
  return await res.json();
};
