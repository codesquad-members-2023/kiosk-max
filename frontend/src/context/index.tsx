import React, { useState, useMemo, createContext } from "react";

type TMenu = [string, number];
type TMenusContext = { menus: TMenu[]; setMenus: (state: TMenu[]) => void };

export const MenusContext = createContext<TMenusContext | null>(null);

export function MenusContextProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [menus, setMenus] = useState<TMenu[]>([]);

  const value = useMemo(() => ({ menus, setMenus }), [menus, setMenus]);

  return (
    <MenusContext.Provider value={value}>{children}</MenusContext.Provider>
  );
}
