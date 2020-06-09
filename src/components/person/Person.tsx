import * as React from "react";
import { signOutUser } from '../../lib/lib';
import './person.scss'

interface IProps {
  id: number,
  name: string,
  notes: string,
  signedOut: string | null,
}

export default function Person({ id, name, notes, signedOut }:IProps) {
  function onSignOut() {
    signOutUser(id);
  }

  const date = new Date(signedOut);
  const formattedDate = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(date);

  return (
    <tr className="person">
      <td className="person__name">{name}</td>
      <td className="person__notes">{notes}</td>
      <td className="person__signin">
        {signedOut === null ? (
          <button onClick={onSignOut} className="btn btn--smaller btn--outline">Sign out</button>
        ) : (
          <p>{formattedDate}</p>
        )}
      </td>
    </tr>
  )
}
