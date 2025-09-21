export function isEmailValid(email) {
  return !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isPhoneValid(phone) {
  return !!phone?.trim() && /^\+?[\d\s\-()]+$/.test(phone);
}

export function isUserValid(user) {
  return (
    user.name?.trim() &&
    isPhoneValid(user.phone) &&
    isEmailValid(user.email)
  );
}
