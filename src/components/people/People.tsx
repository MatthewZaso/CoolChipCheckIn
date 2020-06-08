import * as React from "react";
import Person from '../person/Person'

import './people.scss';

export interface IUser {
  id: number,
  name: string,
  notes: string,
  sign_out: string | null
}

interface IProps {
  users: IUser[]
}

export function People({ users }: IProps) {
  return (
    <table className="people">
      <th className="people__headings">
        <td>Name</td>
        <td>Notes</td>
        <td>Signed out</td>
      </th>
      {users && users.map((user) => (
        <Person name={user.name} notes={user.notes} signedIn={false} />
      ))}
      <Person name="Esteban Arango" notes="Frisbee and Vegan food" signedIn={false} />
      <Person name="Ryan Labouve" notes="Everything about Oklahoma" signedIn={false} />
    </table>
  )
}
