import React, { useState } from "react";
import "./../styles/styles.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    town: "",
    region: "",
    postcode: "",
    country: "United Kingdom",
  });

  const [errors, setErrors] = useState({});

  // Validation using regular expressions
  const validate = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // First Name validation
    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
    } else if (formData.firstName.length > 4) {
      newErrors.firstName = "First Name must be less than or equal to 4 characters";
    }

    // Last Name validation
    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
    }

    // Phone Number validation
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone Number must be numeric";
    }

    // Address validation
    if (!formData.address) {
      newErrors.address = "Address is required";
    }
    // Region validation
     if (!formData.region) {
        newErrors.region = "Region is required";
      }

    // Postcode validation
    if (!formData.postcode) {
      newErrors.postcode = "Postcode is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
      alert("Registration Successful!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <h2>USER REGISTRATION</h2>
      <p>Fields marked <span className="text-danger">*</span> are required.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Email <span className="text-danger">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-danger">{errors.email}</p>}

        <label>
          Password <span className="text-danger">*</span>
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="text-danger">{errors.password}</p>}

        <label>
          Retype Password <span className="text-danger">*</span>
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="text-danger">{errors.confirmPassword}</p>
        )}

        <label>
          First Name <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p className="text-danger">{errors.firstName}</p>}

        <label>
          Last Name <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p className="text-danger">{errors.lastName}</p>}

        <label>
          Phone Number <span className="text-danger">*</span>
        </label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && (
          <p className="text-danger">{errors.phoneNumber}</p>
        )}

        <label>
          Address <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <p className="text-danger">{errors.address}</p>}

        <label>Town</label>
        <input
          type="text"
          name="town"
          value={formData.town}
          onChange={handleChange}
        />

        <label>Region <span className="text-danger">*</span></label>
        <input
          type="text"
          name="region"
          value={formData.region}
          onChange={handleChange}
        />
        {errors.region && <p className="text-danger">{errors.region}</p>}

        <label>
          Postcode / Zip <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="postcode"
          value={formData.postcode}
          onChange={handleChange}
        />
        {errors.postcode && <p className="text-danger">{errors.postcode}</p>}

        <label>
          Country <span className="text-danger">*</span>
        </label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option>United Kingdom</option>
          <option>United States</option>
          <option>India</option>
          <option>Australia</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
