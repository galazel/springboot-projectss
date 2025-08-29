import React, { useRef } from "react";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Select,
  FileInput,
  HelperText,
  Modal,
  Alert,
} from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
("use client");

import { useState } from "react";
import programs from "../src/assets/programs.json";
import ModalPopup from "./ModalPopup";

function FormRegister() {
  const [details, setDetails] = useState({
    profile: "",
    idNumber: "",
    fullName: "",
    program: "select",
  });
  const [showModal, setShowModal] = useState(false);
  const [showErrorAlert, setErrorAlert] = useState(false);
  const fileref = useRef(null);
  function handleRegister(e) {
    e.preventDefault();
    if (
      details.fullName == "" ||
      details.idNumber == "" ||
      details.profile == "" ||
      details.program == "select"
    ) {
      setErrorAlert(true);
      return;
    }
    localStorage.setItem("student-information", JSON.stringify(details));
    setShowModal(true);
    setErrorAlert(false);
    setDetails({
      profile: "",
      idNumber: "",
      fullName: "",
      program: "select",
    });
    fileref.current.value = "";
    
  }
  return (
    <form className="flex max-w-md flex-col gap-4" method="post">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name">Name</Label>
        </div>
        <TextInput
          value={details.fullName}
          name="fullname"
          id="fullname"
          type="text"
          placeholder="John Doe"
          required
          shadow
          onChange={(event) =>
            setDetails({ ...details, fullName: event.target.value })
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2">ID Number</Label>
        </div>
        <TextInput
          value={details.idNumber}
          name="idNumber"
          id="idNumber"
          type="text"
          placeholder="21225368"
          maxLength={8}
          required
          shadow
          onChange={(event) =>
            setDetails({ ...details, idNumber: event.target.value })
          }
        />
      </div>

      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="countries">Select your program</Label>
        </div>
        <Select
          value={details.program}
          id="countries"
          required
          onChange={(event) =>
            setDetails({ ...details, program: event.target.value })
          }
        >
          <option value="select" disabled>
            Select Program
          </option>
          {programs.map((item, index) => {
            return (
              <option value={item.program} key={index}>
                {item.program}
              </option>
            );
          })}
        </Select>
      </div>
      <div id="fileUpload" className="max-w-md">
        <Label className="mb-2 block" htmlFor="file">
          Profile Picture
        </Label>
        <FileInput
          ref={fileref}
          accept="image/*"
          id="file"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              const previewUrl = URL.createObjectURL(file);
              setDetails({ ...details, profile: previewUrl });
            }
          }}
          className="file:bg-black file:text-white file:px-4 file:py-2 file:rounded-md file:border-0 file:cursor-pointer"
        />
        <HelperText className="mt-1 font-semibold">
          This will be your profile for the rest of the school year
        </HelperText>
      </div>
      <div className="flex flex-row items-center justify-center">
        <Button
          type="submit"
          color="green"
          onClick={(event) => handleRegister(event)}
        >
          Register
        </Button>
      </div>
      {showModal && (
        <ModalPopup
          showModal={showModal}
          setShowModal={setShowModal}
          studentInfo={JSON.parse(localStorage.getItem("student-information"))}
        />
      )}
      {showErrorAlert && (
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">Info alert!</span> Fill out the required
          fields before submitting
        </Alert>
      )}
    </form>
  );
}

export default FormRegister;
