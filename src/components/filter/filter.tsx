import * as React from 'react';
import { useState } from 'react';
import classnames from 'classnames'

import './filter.scss'

interface IProps {
  name: string,
  onClick: (active: boolean) => void
}

export default function Person({ name, onClick }:IProps) {
  const [active, setActive] = useState<boolean>(false);

  function filterToggle() {
    onClick(!active);
    setActive(!active);
  }

  const filterClasses = classnames('filter', {
    'filter--active': active,
  })

  return (
    <div className="filter-container">
      <p className="filter-text">Filter by:</p>
      <div>
        <button className={filterClasses} onClick={() => filterToggle()}>{name}</button>
      </div>
    </div>
  )
}
