export const isEmailValid = (email: string): boolean => {
  const emailRegex = new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
  return emailRegex.test(email);
};

export const isPasswordValid = (password: string): boolean => {
  const passwordRegex = new RegExp('^[a-zA-Z0-9]{8,}$');
  return passwordRegex.test(password);
};

export const isPhoneValid = (phone: string): boolean => {
  const phoneRegex = new RegExp('^[6-9]{1}[0-9]{9}$');
  return phoneRegex.test(phone);
};
