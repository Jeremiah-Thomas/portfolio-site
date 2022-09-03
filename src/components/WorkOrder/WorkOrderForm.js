import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: var(--light-theme);
  width: 100%;

  h1,
  h2 {
    color: var(--red-theme);
  }

  input {
    background-color: var(--light-theme);
    color: var(--gray-theme);
    border-radius: 1rem;
    padding: 0.5rem;
    width: 50%;
  }

  input[type="file"] {
    display: none;
  }

  input[type="submit"] {
    margin-top: 3rem;
  }

  div {
    background-color: var(--light-theme);
    color: var(--gray-theme);
    font-weight: bold;
    font-size: 3rem;
    min-width: 25%;
    height: fit-content;
    max-width: 75%;
    width: fit-content;

    img {
      max-width: 100%;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 75%;
  }

  textarea {
    width: 50%;
    height: 10rem;
    background-color: var(--light-theme);
    color: var(--gray-theme);
    border-radius: 1rem;
    padding: 1rem;
    resize: none;
  }
`;

const WorkOrderForm = (props) => {
  const [designImage, setDesignImage] = useState();
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [siteName, setSiteName] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");

  const onChange = (e) => {
    if (e.target.name === "clientName") {
      setClientName(e.target.value);
    } else if (e.target.name === "clientEmail") {
      setClientEmail(e.target.value);
    } else if (e.target.name === "siteName") {
      setSiteName(e.target.value);
    } else if (e.target.name === "designImage") {
      console.log("b");
      setDesignImage(e.target.files[0]);
    } else if (e.target.name === "additionalDetails") {
      setAdditionalDetails(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("client_name", clientName);
    formData.append("client_email", clientEmail);
    formData.append("site_name", siteName);
    formData.append("design_image", designImage);
    formData.append("additional_details", additionalDetails);

    axios
      .post(`${process.env.REACT_APP_BACKEND}/api/work-order`, formData)
      .then((res) => {
        props.setMessage(res.data.message);
      });

    setClientName("");
    setClientEmail("");
    setSiteName("");
    setAdditionalDetails("");
    setDesignImage();
  };

  return (
    <Form onSubmit={onSubmit}>
      <h1>Work Order Form</h1>
      <p>
        I will send a response email detailing pricing and any questions or
        concerns you have as soon as I can!
      </p>
      <h2>Contact Info</h2>

      <label>
        Your Name{" "}
        <input
          name="clientName"
          type="text"
          placeholder="Full Name"
          onChange={onChange}
          value={clientName}
          required
        />
      </label>
      <label>
        Email Address{" "}
        <input
          name="clientEmail"
          type="email"
          placeholder="Email"
          onChange={onChange}
          value={clientEmail}
          required
        />
      </label>
      <h2>Website Details</h2>
      <label>
        Website Name{" "}
        <input
          name="siteName"
          type="text"
          placeholder="Website Name"
          onChange={onChange}
          value={siteName}
          required
        />
      </label>
      <label>
        Design (If available){" "}
        <input
          name="designImage"
          type="file"
          accept="image/*"
          onChange={onChange}
        />
        <div>
          {!designImage ? (
            "+"
          ) : (
            <img src={URL.createObjectURL(designImage)} alt="design preview" />
          )}
        </div>
      </label>

      <label>
        Additional Details{" "}
        <textarea
          name="additionalDetails"
          placeholder="Design Ideas if no file is available or other concerns ..."
          onChange={onChange}
          value={additionalDetails}
        />
      </label>
      <input type="submit" value="Submit" />
    </Form>
  );
};

export default WorkOrderForm;
