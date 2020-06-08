import * as React from "react";

import './person.scss'

interface IProps {
  name: string,
  notes: string,
  signedIn: boolean,
  signedOutTime?: string
}

export default function Person({ name, notes }:IProps) {
  return (
    <tr className="person">
      <td className="person__name">{name}</td>
      <td className="person__notes">{notes}</td>
      <td className="person__signin">Signed Out</td>
    </tr>
  )
}
