import React, { useState } from 'react';
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
  // Perform form validation
  

  export default function writevalidation(title,value,cat,file) {
	const errors = [];
  
	if (title=== '') {
	  errors.push({ title: 'Title is required' });
	}
	if (value === '') {
	  errors.push({ value: 'Description is required' });
	}
	if (cat === '') {
	  errors.push({ cat: 'Category is required' });
	}
	if (!file) {
	  errors.push({ image: 'Image is required' });
	} else {
	  const allowedFormats = ['jpg', 'jpeg', 'png'];
	  const fileFormat = file.name.split('.').pop().toLowerCase();
	  if (!allowedFormats.includes(fileFormat)) {
		errors.push({ image: 'Invalid image format (allowed formats: jpg, jpeg, png)' });
	  }
	}
  
	console.log(errors);
	return errors.length > 0 ? errors : null;
  }