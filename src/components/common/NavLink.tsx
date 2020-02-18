import React from "react"
import { Link } from "@reach/router"

export const NavLink = (props: any) => (
  <Link
    {...props}
    getProps={({ href, isCurrent, isPartiallyCurrent }) => {
      let className = ""

      if (href === "/") {
        if (isCurrent) {
          className = "active"
        }
      } else if (isPartiallyCurrent) {
        className = "active"
      }

      return {
        className,
      }
    }}
  />
)
