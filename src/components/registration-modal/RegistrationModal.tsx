import * as React from 'react';
import { useState } from 'react';
import classnames from 'classnames'
import './registration-modal.scss'
import { registerUser } from '../../lib/lib';

interface IProps {
  modalOpen: boolean,
  onClose: () => void
}

export default function RegistrationModal({ modalOpen, onClose }:IProps) {
  const [name, setName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const modalClasses = classnames('registration-modal', {
    'registration-modal--open': modalOpen,
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    registerUser(name, notes).then(() => {
      onClose();
    })
  }

  return (
    <div className={modalClasses}>
      <div className="registration-modal__backdrop"></div>
      <div className="registration-modal__content">
        <button onClick={onClose} className="registration-modal__close-btn">
          <i className="far fa-window-close fa-2x"></i>
        </button>
        <h1 className="registration-modal__header">Hello! Please Register Below 👋</h1>
        <form className="registration-modal__form" onSubmit={onSubmit}>
          <label htmlFor="name">First and Last Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" name="name" id="names" required />
          <label htmlFor="notes">Notes:</label>
          <textarea onChange={(e) => setNotes(e.target.value)} placeholder="Notes" name="notes" id="notes" />
          <div className="registration-modal__btn-container">
            <button type="submit" className="register-btn btn btn--brand">
              Save&nbsp;&nbsp;<i className="far fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
