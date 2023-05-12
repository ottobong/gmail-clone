import React from 'react'
import './Sidebar.css'
import { Button } from '@mui/material'
import { Edit, Inbox } from '@mui/icons-material'
import SidebarOption from './SidebarOption'

function Sidebar() {
  return (
    <div className='sidebar'>
      <Button 
      startIcon={<Edit fontSize='large' />}
      className='sidebar__compose'
      >Compose</Button>


      <SidebarOption Icon={Inbox} title='Inbox' number={62}/>
    </div>
  )
}

export default Sidebar
