import React from "react"
import ProfileHeader from "../Headers/ProfileHeader"

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProfileHeader />
      {children}
    </>
  )
}

export default ProfileLayout
