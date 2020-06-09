import * as React from 'react';
import { useState } from 'react';
import { signOutUser } from '../../lib/lib';
import './person.scss'

interface IProps {
  id: number,
  name: string,
  notes: string,
  signedOut: string | null,
}

export default function Person({ id, name, notes, signedOut }:IProps) {
  const [signingOut, setSigningOut] = useState<boolean>(false);

  function onSignOut() {
    setSigningOut(true);
    signOutUser(id).then(() => setSigningOut(false));
  }

  const date = new Date(signedOut);
  const formattedDate = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(date);

  return (
    <tr className="person">
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
