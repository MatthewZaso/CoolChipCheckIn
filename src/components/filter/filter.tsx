import * as React from "react";

import './person.scss'

interface IProps {
  name: string,
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export default function Person({ name, onClick }:IProps) {
  return (
    <button className="filter" onClick={onClick}>{name}</button>
  )
}
