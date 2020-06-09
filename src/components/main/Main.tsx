import * as React from "react";
import { useEffect, useState } from "react";
import Search from '../search/Search';
import RegistrationModal from '../registration-modal/RegistrationModal';
import { IUser, People } from '../people/People';
import { getEntries } from "../../lib/lib";
import './main.scss';

export default function CoolChipCheckin() {
  const [search, setSearch] = useState<string | null>(null)
  const [users, setUsers] = useState<IUser[] | null>(null)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  useEffect(() => {
    getEntries(search).then((users) => {
      setUsers(users);
    })
  }, [search])

  function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setSearch(val)
  }

  function onRegister() {
    setModalOpen(false)
  }

  return (
    <section className="cool-chip-check-in">
      <div className="nav">
        <img src="https://dashboard.envoy.com/assets/images/logo-small-red-ba0cf4a025dd5296cf6e002e28ad38be.svg" alt="Envoy Logo" width="31" />
      </div>
      <Search onSearch={onSearch} />
      <button className="register-btn btn btn--brand">
        <i className="fas fa-user"></i>&nbsp;&nbsp;New visitor
      </button>
      <People users={users} />
      <RegistrationModal modalOpen={modalOpen} onRegister={onRegister} />
    </section>
  )
}
