import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
} from "flowbite-react";

function ModalPopup({ showModal, setShowModal, studentInfo }) {
  console.log(studentInfo);
  return (
    <Modal
      dismissible
      show={showModal}
      onClose={() => setShowModal(false)}
      size="lg" // can be "sm", "md", "lg", "xl", "2xl"
    >
      <ModalHeader>Student Information</ModalHeader>
      <ModalBody>
        <div className="space-y-2 p-5">
          <div className="flex flex-cols gap-2 ">
            <div className="p-2">
              <img src="/uc_logo.png" alt="uc_logo" className="w-20" />
            </div>
            <div>
              <h2 className="text-lg font-bold">UNIVERSITY OF CEBU</h2>
              <h3 className="text-m">LAPU-LAPU & MANDAUE</h3>
              <p style={{ fontSize: "9px" }}>
                A.C. Cortes Ave,. Looc, Mandaue City, Philippines
              </p>
            </div>
          </div>
          <ul className="space-y-2 flex flex-col gap-3">
            {Object.entries(studentInfo).map(([key, value], index) => {
              if (key === "profile") {
                return (
                  <div
                    key={key}
                    className="flex flex-row items-center justify-center max-w-25"
                  >
                    <img
                      src={value}
                      alt="profile-pic"
                      className="w-25 h-30 border-4 border-black-500"
                    />
                  </div>
                );
              } else {
                return (
                  <li key={key}>
                    {key[0].toUpperCase() + key.slice(1)}: {value}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="green" onClick={() => setShowModal(false)}>
          Ok
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModalPopup;
