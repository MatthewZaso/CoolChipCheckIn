import * as React from "react";

import './search.scss';

interface IProps {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Search({ onSearch }: IProps) {
  return (
    <div className="search">
      <form>
        <input type="text" onChange={onSearch} placeholder="Search"></input>
      </form>
    </div>
  )
}
