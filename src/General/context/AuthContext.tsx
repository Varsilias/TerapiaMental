import React, {
  createContext,
  PropsWithChildren,
  useState,
  useContext,
  useEffect,
} from 'react';
import {ACCESS_TOKEN, USER} from '../utils/constants';
import {IUser} from '../types';
import {storeData, getItemFor} from '../utils/storage';

interface IAuthState {
  isAuthenticated: boolean;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  token: string | undefined;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthState>({} as IAuthState);

export const AuthContextProvider = (props: PropsWithChildren) => {
  const {children} = props;

  const [token, setToken] = useState<string | undefined>(undefined);
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (token !== undefined) {
      storeData(ACCESS_TOKEN, token);
      setIsAuthenticated(true);
    }

    if (user !== null) {
      storeData(USER, JSON.stringify(user));
    }
  }, [token, setIsAuthenticated, user]);

  useEffect(() => {
    getItemFor(ACCESS_TOKEN).then(value => setToken(value));
    getItemFor(USER).then(value => setUser(JSON.parse(value as string)));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setToken,
        user,
        setUser,
        token,
        setIsAuthenticated,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authMetadata = useContext(AuthContext);

  const {isAuthenticated, setToken, user, setUser, setIsAuthenticated, token} =
    authMetadata;

  return {isAuthenticated, setToken, setUser, user, setIsAuthenticated, token};
};
