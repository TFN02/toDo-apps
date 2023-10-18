import React, { createContext, useContext, ReactNode } from "react";

interface ItemContextType {
  name: string;
  qty: number;
  price: number | string;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

interface ItemProviderProps {
  children: ReactNode;
  itemData: ItemContextType;
}

export const ItemProvider: React.FC<ItemProviderProps> = ({ children, itemData }) => {
  return <ItemContext.Provider value={itemData}>{children}</ItemContext.Provider>;
};

export const useItem = (): ItemContextType => {
  const context = useContext(ItemContext);
  if (context === undefined) {
    throw new Error("useItem must be used within an ItemProvider");
  }
  return context;
};
