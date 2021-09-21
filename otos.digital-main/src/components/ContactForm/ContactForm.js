import React from 'react';
import Form from 'react-bootstrap/Form';
import { BiMailSend } from 'react-icons/bi';

import './ContactForm.css';

import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((result) => {
        console.log('Email successfully sent!');
      })
      .catch((err) =>
        console.error(
          'There has been an error.  Here some thoughts on the error that occured:',
          err
        )
      );
  };
  const onSubmit = (data, r) => {
    alert(`Thank you for your message from ${data.email}`);
    const templateId = 'template_lw40g3b';
    const serviceID = 'gmail';
    sendFeedback(serviceID, templateId, {
      name: data.name,
      message: data.message,
      phone: data.phone,
      email: data.email,
      service: data.service,
    });
    r.target.reset();
  };

  return (
    <div className="ContactForm">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Control
            name="name"
            placeholder="Nom / Raison Sociale"
            ref={register({
              required:
                'Merci de bien vouloir saisir votre nom / raison sociale',
              maxLength: {
                value: 20,
                message: 'Veuillez entrer un nom de moins de 20 caractères',
              },
            })}
          />
          {errors.name && (
            <p className="alert-message">{errors.name.message}</p>
          )}
          <br />
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            ref={register({
              required: 'Merci de bien vouloir saisir votre email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Addresse email invalide ',
              },
            })}
          />
          {errors.email && (
            <p className="alert-message">{errors.email.message}</p>
          )}
          <br />
          <Form.Control
            name="phone"
            placeholder="Numéro de téléphone"
            ref={register({
              required:
                'Merci de bien vouloir saisir votre numéro de téléphone',
              pattern: {
                value: /^-?[0-9]\d*\.?\d*$/i,
                message: 'Numéro de téléphone invalid',
              },
            })}
          />
          {errors.phone && (
            <p className="alert-message">{errors.phone.message}</p>
          )}
          <br />
          <Form.Control
            as="select"
            name="service"
            ref={register({
              required: 'Merci de bien vouloir choisir un service',
            })}
          >
            <option value="" hidden>
              Choisir un service...
            </option>
            <option value="Application Web">Application Web</option>
            <option value="Site E-commerce">Site E-commerce</option>
            <option value="Site Vitrine">Site Vitrine</option>
            <option value="Blog">Blog</option>
            <option value="Porfolio">Portfolio</option>
          </Form.Control>

          {errors.service && (
            <p className="alert-message">{errors.service.message}</p>
          )}
          <br />
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            placeholder="Votre message"
            ref={register({
              required: true,
            })}
          />
          {errors.message && (
            <p className="alert-message">
              oops, vous avez oublié d'écire votre message!
            </p>
          )}
          <br />
        </Form.Group>

        <div className="text-center">
          <button className="button-form" type="submit" value="Envoyer">
            Envoyer
            <BiMailSend />
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
