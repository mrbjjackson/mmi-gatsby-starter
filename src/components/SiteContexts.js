import React, { useState, useMemo } from "react"

// Create the menu context
export const MenuContext = React.createContext()

export function ContextsProvider( { children}) {

  const [navOpen, setNav] = useState(false)

  const menuMemo = useMemo(()=> ([navOpen, setNav]), [navOpen, setNav])

  return (
    <MenuContext.Provider value={menuMemo}>
      {children}
    </MenuContext.Provider>
  )
}

