import * as React from "react";

import './person.scss'

interface IProps {
  name: string,
  notes: string,
  signedIn: boolean,
  signedOutTime?: string
}

export default function Person({ name, notes, signedIn }:IProps) {
  return (
    <tr className="person">
      <td className="person__name">{name}</td>
      <td className="person__notes">{notes}</td>
      <td className="person__signin">
        {signedIn ? (
          <button className="btn btn--smaller btn--outline">Sign out</button>
        ) : (
          <p>Signed Out</p>
        )}
      </td>
    </tr>
  )
}
