import React, {
  createContext,
  PropsWithChildren,
  useState,
  useContext,
  useEffect,
} from 'react';
import {ACCESS_TOKEN, REFRESH_TOKEN, USER} from '../utils/constants';
import {IUser} from '../types';
import {storeData, getItemFor} from '../utils/storage';

interface IAuthState {
  isAuthenticated: boolean;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  token: string | undefined;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  refreshToken: string | undefined;
  setRefreshToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const AuthContext = createContext<IAuthState>({} as IAuthState);

export const AuthContextProvider = (props: PropsWithChildren) => {
  const {children} = props;

  const [token, setToken] = useState<string | undefined>(undefined);
  const [refreshToken, setRefreshToken] = useState<string | undefined>(
    undefined,
  );
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (token !== undefined) {
      storeData(ACCESS_TOKEN, token);
      setIsAuthenticated(true);
    }

    if (refreshToken !== undefined) {
      storeData(REFRESH_TOKEN, refreshToken);
    }

    if (user !== null) {
      storeData(USER, JSON.stringify(user));
    }
  }, [token, setIsAuthenticated, user, refreshToken]);

  useEffect(() => {
    getItemFor(ACCESS_TOKEN).then(value => setToken(value));
    getItemFor(USER)
      .then(value => setUser(JSON.parse(value as string)))
      .catch(error => console.log(error));
    getItemFor(REFRESH_TOKEN).then(value => setRefreshToken(value));
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
        refreshToken,
        setRefreshToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authMetadata = useContext(AuthContext);

  const {
    isAuthenticated,
    setToken,
    user,
    setUser,
    setIsAuthenticated,
    token,
    refreshToken,
    setRefreshToken,
  } = authMetadata;

  return {
    isAuthenticated,
    setToken,
    setUser,
    user,
    setIsAuthenticated,
    token,
    refreshToken,
    setRefreshToken,
  };
};
