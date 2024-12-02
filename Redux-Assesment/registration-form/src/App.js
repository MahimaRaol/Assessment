import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    retypePassword: '',
    username: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    town: '',
    region: '',
    postcode: '',
    country: 'United Kingdom',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error as the user types
  };

  // Validate inputs
  const validate = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    // Retype password validation
    if (!formData.retypePassword) {
      newErrors.retypePassword = 'Please retype your password.';
    } else if (formData.retypePassword !== formData.password) {
      newErrors.retypePassword = 'Passwords do not match.';
    }

    // Username validation
    if (!formData.username) {
      newErrors.username = 'Username is required.';
    } else if (formData.username.length > 4) {
      newErrors.username = 'Username must be 4 characters or less.';
    }

    // First name validation
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required.';
    }

    // Last name validation
    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required.';
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits.';
    }

    // Address validation
    if (!formData.address) {
      newErrors.address = 'Address is required.';
    }

    // Town validation
    if (!formData.town) {
      newErrors.town = 'Town is required.';
    }

    // Region validation
    if (!formData.region) {
      newErrors.region = 'Region is required.';
    }

    // Postcode validation
    if (!formData.postcode) {
      newErrors.postcode = 'Postcode is required.';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      // If there are no errors, show success message and clear form
      setSubmitted(true);
      setFormData({
        email: '',
        password: '',
        retypePassword: '',
        username: '',
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        town: '',
        region: '',
        postcode: '',
        country: 'United Kingdom',
      });
      console.log('Form submitted successfully!', formData);
    } else {
      // If there are errors, display them
      setErrors(newErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Register Here</h2>
      {submitted && <p className="success-message">Form submitted successfully!</p>}
      <form className="registration-form" onSubmit={handleSubmit}>
        {[
          { label: 'Email*', name: 'email', type: 'email', placeholder: 'Enter your email' },
          { label: 'Password*', name: 'password', type: 'password', placeholder: 'Enter your password' },
          { label: 'Retype Password*', name: 'retypePassword', type: 'password', placeholder: 'Retype your password' },
          { label: 'Username (max 4 characters)*', name: 'username', type: 'text', placeholder: 'Enter your username' },
          { label: 'First Name*', name: 'firstName', type: 'text', placeholder: 'Enter your first name' },
          { label: 'Last Name*', name: 'lastName', type: 'text', placeholder: 'Enter your last name' },
          { label: 'Phone Number*', name: 'phone', type: 'tel', placeholder: 'Enter your phone number' },
          { label: 'Address*', name: 'address', type: 'text', placeholder: 'Enter your address' },
          { label: 'Town*', name: 'town', type: 'text', placeholder: 'Enter your town' },
          { label: 'Region*', name: 'region', type: 'text', placeholder: 'Enter your region' },
          { label: 'Postcode / Zip*', name: 'postcode', type: 'text', placeholder: 'Enter your postcode/zip' },
        ].map((field, index) => (
          <div key={index} className="form-group">
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
            />
            {errors[field.name] && <span className="error-message">{errors[field.name]}</span>}
          </div>
        ))}
        <label>
          Country*
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="India">India</option>
          </select>
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default App;
