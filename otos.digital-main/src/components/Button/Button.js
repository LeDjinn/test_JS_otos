import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ContactForm from '../ContactForm/ContactForm';
import { CgCloseR } from 'react-icons/cg';
import './Button.css';

export default function MyButton() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="align-items-center">
        <button className="btn-custom" onClick={handleShow}>
          Parler de mon projet
        </button>
      </div>

      <Modal show={show}>
        <Modal.Header className="custom">
          <Modal.Title>Contactez nous</Modal.Title>
          <div className="custom-button">
            <CgCloseR onClick={handleClose} size={24} />
          </div>
        </Modal.Header>
        <Modal.Body className="custom-body">
          <ContactForm />
        </Modal.Body>
      </Modal>
    </>
  );
}
