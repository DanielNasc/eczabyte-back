const password =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

const phone = /^\(\d{2}\)\s\d{4,5}-\d{4}$/; 

export const RegexHelper = {
  password,
  phone
};
