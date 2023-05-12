import React from 'react'
import './Header.css'
import { Apps, ArrowDropDown, Menu, Notifications, Search } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'

function Header() {
  return (
    <div className='header'>

      <div className="header__left">
        <IconButton>
          <Menu />  
        </IconButton>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png" alt="" />
      </div>



      <div className="header__middle">
        <Search />
        <input type="text" placeholder='Search mail' />
        <ArrowDropDown className='header__inputCaret'/>
      </div>



      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>

        <Avatar />
      </div>
    </div>
  )
}

export default Header
