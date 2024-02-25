import React, { useState } from "react";
// import axios from 'axios';
import "./Contact.css";
import Person1 from "../../Assets/images/sampleimg3.avif";
import Contact1 from "../../Assets/svg/Yuppies Chat.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
  });
  const peopleData = [
    { name: 'Alina Bark', role: 'Product Manager', imgSrc: Person1 },
    { name: 'John Doe', role: 'Developer', imgSrc: Person1 },
    { name: 'Jane Smith', role: 'Designer', imgSrc: Person1 },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      errors: {
        ...formData.errors,
        [name]: "",
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailPattern)) {
      errors.email = "Invalid email address";
    }

    if (formData.phoneNumber.trim().length !== 10) {
      errors.phoneNumber = "Phone number must be 10 digits";
    }

    setFormData({
      ...formData,
      errors: errors,
    });

    if (Object.keys(errors).length === 0) {
      // Submit the form data
    }
  };

  return (
    <>
    <div className="contact-circle-top"></div>
      <div className="contact-page">
        <h5>Contact Us</h5>
        <form className="form" onSubmit={handleSubmit}>
          <div className="contact-left-side">
            <div className="name-field">
              <div className="firstname">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                {formData.errors.firstName && (
                  <span >{formData.errors.firstName}</span>
                )}
              </div>
              <div className="lastname">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
                {formData.errors.lastName && (
                  <span>{formData.errors.lastName}</span>
                )}
              </div>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email Address"
            />
            {formData.errors.email &&( <span>{formData.errors.email}</span>)}
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            {formData.errors.phoneNumber && (
              <span>{formData.errors.phoneNumber}</span>
            )}
            <input type="textarea" placeholder="Leave a Message" />
            <button type="submit">Send a Message</button>
          </div>
          <div className="contact-right-side">
            <img src={Contact1} alt="icon" />
          </div>
        </form>
        <div className="c-section2">
          <h3>
            Our <span>Member</span>
          </h3>
          <h6>
            With our intuitive interface and user-friendly features, you can
            easily create and manage your data, reports, and more.{" "}
          </h6>
          <div className="photos">
            {peopleData.map((person, index) => (
              <div className="person1" key={index}>
                <img src={person.imgSrc} alt="img" />
                <h3>{person.name}</h3>
                <span>{person.role}</span>
              </div>
            ))}
          </div>
          <div className="photos">
            {peopleData.map((person, index) => (
              <div className="person1" key={index}>
                <img src={person.imgSrc} alt="img" />
                <h3>{person.name}</h3>
                <span>{person.role}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="FAQ-section">
          <div className="faq-head">
            <h6>FAQs</h6>
            Frequently Asked Questions
          </div>
          <div className="questions">
          <div className="faq-1">
            <details>
              <summary>What is Sum It Up?</summary>
              <p>
                Sum It Up is a platform designed to help you take notes, keep
                records, and stay on top of your tasks. With our intuitive
                interface and user-friendly features, you can easily create and
                manage your notes, to-do lists, and more.
              </p>
            </details>
          </div>
          <div className="faq-1">
            <details>
              <summary>What is Sum It Up?</summary>
              <p>
                Sum It Up is a platform designed to help you take notes, keep
                records, and stay on top of your tasks. With our intuitive
                interface and user-friendly features, you can easily create and
                manage your notes, to-do lists, and more.
              </p>
            </details>
          </div>
          <div className="faq-1">
            <details>
              <summary>What is Sum It Up?</summary>
              <p>
                Sum It Up is a platform designed to help you take notes, keep
                records, and stay on top of your tasks. With our intuitive
                interface and user-friendly features, you can easily create and
                manage your notes, to-do lists, and more.
              </p>
            </details>
          </div>
          <div className="faq-1">
            <details>
              <summary>What is Sum It Up?</summary>
              <p>
                Sum It Up is a platform designed to help you take notes, keep
                records, and stay on top of your tasks. With our intuitive
                interface and user-friendly features, you can easily create and
                manage your notes, to-do lists, and more.
              </p>
            </details>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
