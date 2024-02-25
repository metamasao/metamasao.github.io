import React, { useState } from "react";

// type sidebarState = "sidebar-inactive" | "sidebar-active"

export const useSidebar = () => {
  const [sidebarState, setSidebarState] = useState<boolean>(false)

  const onClick = () => {
    setSidebarState(!sidebarState)
  }

  return {
    sidebarState: sidebarState,
    onClickSidebar: onClick
  }
}