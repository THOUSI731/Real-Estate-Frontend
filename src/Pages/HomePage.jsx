import React from 'react'
import NavbarComp from '../components/Home/NavbarComp'
import { useLocation, useParams } from 'react-router-dom'
import LoginComp from '../components/Authentication/LoginComp'
import SignupComp from '../components/Authentication/SignupComp'
import PropertyComp from '../components/Home/PropertyComp'

const HomePage = () => {
    const location = useLocation()
  return (
    <>
    <NavbarComp/>
    <LoginComp path={location.pathname} />
    <SignupComp path={location.pathname}/>
    <PropertyComp path={location.pathname}/>
    </>
  )
}

export default HomePage