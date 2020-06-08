import * as React from "react";
import { useEffect, useState } from "react";
import Search from '../search/Search';
import { IUser, People } from '../people/People';

import './main.scss';

interface IData {
  data: IEntries[]
}

interface IEntries {
  type: string,
  id: number,
  attributes: {
    name: string,
    notes: string,
    sign_out: string | null,
  }
}

export default function CoolChipCheckin() {
  const [users, setUsers] = useState<IUser[] | null>(null)

  useEffect(() => {
    fetch(`https://mini-visitors-service.herokuapp.com/api/entries`,{
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'bd28e4cd57cb8e704214'
      },
    })
      .then((res) => res.json())
      .then((json: IData) => {
        console.log(json)
        setUsers(
          json.data.map((entry) => {
            return {
              id: entry.id,
              name: entry.attributes.name,
              notes: entry.attributes.notes,
              sign_out: entry.attributes.sign_out
            }
          }) || [],
        )
      })
  }, [])

  return (
    <section className="cool-chip-check-in">
      <div className="nav">
        <img src="https://dashboard.envoy.com/assets/images/logo-small-red-ba0cf4a025dd5296cf6e002e28ad38be.svg" alt="Envoy Logo" width="31" />
      </div>
      <Search />
      <button className="register-btn"><i className="fas fa-user"></i>&nbsp;&nbsp;New visitor</button>
      <People users={users} />
    </section>
  )
}
