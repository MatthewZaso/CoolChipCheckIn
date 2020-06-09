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
      <thead>
        <tr className="people__headings">
          <th>Name</th>
          <th>Notes</th>
          <th>Signed out</th>
        </tr>
      </thead>
      <tbody>
        {users ? users.map((user, key) => (
          <Person key={key} id={user.id} name={user.name} notes={user.notes} signedOut={user.sign_out} />
        )) : (
          <p>No records found!</p>
        )}
      </tbody>
    </table>
  )
}
