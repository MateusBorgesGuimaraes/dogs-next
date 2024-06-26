'use client';

import { SetStateAction, createContext, useContext, useState } from 'react';

type User = {
  id: number;
  nome: string;
  email: string;
  username: string;
};

type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<SetStateAction<User | null>>;
};

const UserContext = createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error('useContext deve estar dentro do provider');
  }
  return context;
};

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const [userState, setUser] = useState<User | null>(user);
  return (
    <UserContext.Provider value={{ user: userState, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
