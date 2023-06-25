import React from 'react'
import LinkedinLogo from '../../../assets/linkedinLogo2.png'
import UserIcon from '../../../assets/usericon.png'
import './Topbar.scss'
import { AiOutlineHome, AiOutlineUserSwitch, AiOutlineSearch, AiOutlineMessage, AiOutlineBell } from 'react-icons/ai';
import {BsBriefcase} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';


export default function Topbar() {
  let navigate = useNavigate()
  const goToRoute =(route)=>{
navigate(route)
  }
  return (
    <div className='topbar-main'>
      <img className='linkedin-logo' src={LinkedinLogo} alt="linkedinlogo" />
      <div className='react-icons'>
      <AiOutlineSearch size={30} className='react-icon' onClick={()=>goToRoute
      ('/search')}/>
      <AiOutlineHome size={30} className='react-icon' onClick={()=>goToRoute
      ('/home')}/>
      <AiOutlineUserSwitch size={30} className='react-icon' onClick={()=>goToRoute
      ('/profile')}/>
      <BsBriefcase size={30} className='react-icon' onClick={()=>goToRoute
      ('/home')}/>
      <AiOutlineMessage size={30} className='react-icon' onClick={()=>goToRoute
      ('/home')}/>
      <AiOutlineBell size={30} className='react-icon' onClick={()=>goToRoute
      ('/home')}/>
      </div>
      <img src={UserIcon} alt="user" className='user-logo'/>
    </div>
  )
}
