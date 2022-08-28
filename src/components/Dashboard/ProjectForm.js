import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
  margin-top: 5vh;
  h1,
  h2 {
    color: var(--red-theme);
  }

  label {
    color: var(--light-theme);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      cursor: pointer;
      border: solid black 2px;
      width: 50%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-width: 100%;
      }
    }
  }

  input {
    background-color: var(--gray-theme);
    color: var(--light-theme);
    border-radius: 1rem;
    width: 70ch;
    padding: 0.5rem;
    text-align: center;
  }

  textarea {
    background-color: var(--gray-theme);
    color: var(--light-theme);
    width: 70ch;
    height: 5ch;
    text-align: center;
    border-radius: 1rem;
    resize: none;
  }

  input[type="file"] {
    display: none;
  }

  input[type="submit"] {
    cursor: pointer;
  }
`;

const ProjectForm = (props) => {
  const [imagePreview, setImagePreview] = useState();
  const [projectName, setProjectName] = useState("");
  const [techUsed, setTechUsed] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("image", imagePreview);
    formData.append("project_name", projectName);
    formData.append("technologies_used", techUsed);

    axios
      .post(
        `${process.env.REACT_APP_BACKEND}api/projects` || "/api/projects",
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        setImagePreview();
        setProjectName("");
        setTechUsed("");
        props.setMessage(res.statusText);
      });
  };

  return (
    <Form onSubmit={onSubmit}>
      <h1>Project Form</h1>
      <label>
        <h2>Project Name</h2>
        <input
          type="text"
          placeholder="Project Name"
          onChange={(e) => {
            setProjectName(e.target.value);
          }}
          value={projectName}
          required
        />
      </label>
      <label>
        <h2>Project Screenshot</h2>
        <div>
          {imagePreview == null ? (
            <p>Click here to select a screenshot.</p>
          ) : (
            <img
              src={URL.createObjectURL(imagePreview)}
              alt="Preview of project"
            />
          )}
        </div>

        <input
          type="file"
          onChange={(e) => {
            setImagePreview(e.target.files[0]);
          }}
          required
        />
      </label>
      <label>
        <h2>Technologies Used</h2>
        <textarea
          placeholder="Technologies used in project"
          onChange={(e) => {
            setTechUsed(e.target.value);
          }}
          value={techUsed}
          required
        ></textarea>
      </label>
      <input type="submit" value="Upload Project" />
    </Form>
  );
};

export default ProjectForm;
