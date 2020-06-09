import * as React from "react";
import { throttle } from 'lodash';
import './search.scss';

interface IProps {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Search({ onSearch }: IProps) {

  const throttled = throttle(onSearch, 500);

  return (
    <div className="search">
      <form>
        <input type="text" onChange={throttled} placeholder="Search"></input>
      </form>
    </div>
  )
}
