import React from "react"
import { Link } from "@reach/router"

export const NavLink = (props: any) => (
  <Link
    {...props}
    getProps={({ isPartiallyCurrent }) => ({
      className: isPartiallyCurrent ? "active" : "",
    })}
  />
)
