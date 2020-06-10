import * as React from 'react';
import { useState } from 'react';
import { signOutUser } from '../../lib/lib';
import classnames from 'classnames'
import './person.scss'

interface IProps {
  id: number,
  name: string,
  notes: string,
  signedOut: string | null,
}

export default function Person({ id, name, notes, signedOut }:IProps) {
  const [signingOut, setSigningOut] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const [signedOutTimestamp, setSignedOutTimestamp] = useState<string | null>(signedOut);

  function onSignOut() {
    setSigningOut(true);
    signOutUser(id).then((sign_out) => {
      if (sign_out) {
        setSignedOutTimestamp(sign_out)
        setSigningOut(false);
        setHidden(true);
      }
    });
  }

  const date = new Date(signedOut || signedOutTimestamp);
  const formattedDate = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(date);

  const personClasses = classnames('person', {
    'person--hidden': hidden,
  })

  return (
    <tr className={personClasses}>
      <td className="person__name">{name}</td>
      <td className="person__notes">{notes}</td>
      <td className="person__signin">
        {signedOut === null ? (
          <button onClick={onSignOut} className="btn btn--smaller btn--outline" disabled={signingOut}>
            Sign out<i className="person__signin--spinner fas fa-spinner"></i>
          </button>
        ) : (
          <p>{formattedDate}</p>
        )}
      </td>
    </tr>
  )
}
