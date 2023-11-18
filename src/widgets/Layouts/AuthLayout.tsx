import React from "react"
import AuthHeader from "../Headers/AuthHeader"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthHeader />
      {children}
    </>
  )
}

export default AuthLayout
