import * as React from 'react';
import { useEffect, useState } from 'react';
import Search from '../search/Search';
import Filter from '../filter/Filter';
import RegistrationModal from '../registration-modal/RegistrationModal';
import { IUser, People } from '../people/People';
import { getEntries } from "../../lib/lib";
import './main.scss';

export default function CoolChipCheckin() {
  const [search, setSearch] = useState<string | null>(null);
  const [users, setUsers] = useState<IUser[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [signedOutOnly, setSignedOutOnly] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getEntries(search).then((users) => {
      setUsers(users);
    }).catch((err) => {
      setError(err);
    })
  }, [search])

  function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setSearch(val);
  }

  function onRegister(entry: IUser) {
    setModalOpen(false);
    setUsers([ entry, ...users ]);
  }

  const filtered = users.filter((user: IUser) => {
    return signedOutOnly ? user.sign_out !== null : true;
  })

  return (
    <section className="cool-chip-check-in">
      <div className="nav">
        <img src="https://dashboard.envoy.com/assets/images/logo-small-red-ba0cf4a025dd5296cf6e002e28ad38be.svg" alt="Envoy Logo" width="31" />
      </div>
      <Search onSearch={onSearch} />
      <button onClick={() => setModalOpen(true)} className="register-btn btn btn--brand">
        <i className="fas fa-user"></i>&nbsp;&nbsp;New visitor
      </button>
      <Filter name="Signed Out" onClick={(active: boolean) => setSignedOutOnly(active)} />
      <People users={filtered} />
      {error && (
        <div className="error-message">{error}</div>
      )}
      <RegistrationModal modalOpen={modalOpen} onClose={() => setModalOpen(false)} onRegister={(entry) => onRegister(entry)} />
    </section>
  )
}
