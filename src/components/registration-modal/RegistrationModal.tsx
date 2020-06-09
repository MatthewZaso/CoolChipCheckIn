import * as React from "react";
import classnames from 'classnames'
import './registration-modal.scss'

interface IProps {
  modalOpen: boolean,
  onRegister: () => void
}

export default function RegistrationModal({ modalOpen, onRegister }:IProps) {
  const modalClasses = classnames('registration-modal', {
    'registration-modal--open': modalOpen,
  })

  return (
    <div className={modalClasses}>
      <div className="registration-modal__backdrop"></div>
      <div className="registration-modal__content">
        <button className="registration-modal__close-btn">
          <i className="far fa-window-close fa-2x"></i>
        </button>
        <form>
          <input type="text" name="name" />
          <input type="textfield" name="notes" />
        </form>
      </div>
    </div>
  )
}
