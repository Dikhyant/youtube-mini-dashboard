"use client"

import Cookies from 'js-cookie'


export default function Signout() {
    const handleSignout = () => {
        const cookieNames = Object.keys(Cookies.get());
  cookieNames.forEach(name => {
    Cookies.remove(name, { path: '/' });
  });
    }
    return (
        <button onClick={handleSignout} >Sign out</button>
    )
}