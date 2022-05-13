import { useState } from "react";
import "./App.css";

const initialState = {
  fullName: "",
  address: "",
  phoneNumber: "",
  email: "",
  complaint: "",
  contactType: "",
  terms: false,
};

export default function App() {
  const [userData, setUserData] = useState(initialState);

  function handleChange(event) {
    const { name, type, value, checked } = event.target;

    if (name === "name" && type === "text") {
      setUserData({ ...userData, fullName: value });
    }
    if (name === "address" && type === "text") {
      setUserData({ ...userData, address: value });
    }
    if (name === "phone" && type === "telephone") {
      setUserData({ ...userData, phoneNumber: value });
    }
    if (name === "email" && type === "email") {
      setUserData({ ...userData, email: value });
    }
    if (name === "complaint") {
      setUserData({ ...userData, complaint: value });
    }
    if (name === "contact" && type === "radio") {
      setUserData({ ...userData, contactType: value });
    }
    if (name === "consent" && type === "checkbox") {
      setUserData({ ...userData, terms: checked });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(userData);
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              value={userData.fullName}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              onChange={handleChange}
              value={userData.address}
            />
          </label>
          <label>
            Phone Number
            <input
              type="telephone"
              name="phone"
              onChange={handleChange}
              value={userData.phoneNumber}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={userData.email}
            />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={handleChange}
              value={userData.complaint}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                onChange={handleChange}
                checked={userData.contactType === "phone"}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                onChange={handleChange}
                checked={userData.contactType === "email"}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                onChange={handleChange}
                checked={userData.contactType === "post"}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                onChange={handleChange}
                checked={userData.contactType === "none"}
              />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input
              type="checkbox"
              name="consent"
              id="consent"
              onChange={handleChange}
              value={userData.terms}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
