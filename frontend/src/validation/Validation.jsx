export const validateEmail = (email) => {
	const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
	return re.test(String(email).toLowerCase());
  };
  
  export const validatePassword = (password) => {
	const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
	return re.test(String(password));
  };
  
  export const validateUsername = (username) => {
	return username.length > 0;
  };