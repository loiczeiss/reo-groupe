"use client"
import { Button } from '../ui/button'
import { redirect } from 'next/navigation'

export default function LogOutButton() {
  const button = {
    label: 'Log Out',
    url: '',
  }

  return<Button onClick={()=> redirect("/admin/logout")} >Se déconnecter</Button>
}