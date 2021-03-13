import React from 'react'

export default function MenuTree(props) {
  return (
    <li className="treeview" data-widget="treeview">
      <a href='#'> 
        <i className={`fa ${props.icon}`}></i> {props.label}
        <i className="fa fa-angle-down pull-right"></i>
      </a>
      <ul className="treeview-menu">
        {props.children}
      </ul>
    </li>
  )
}
