import { useState, useContext, createContext, FunctionComponent, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthApiData, AuthApiDataSuccess } from '../interface/AuthApiData';
import { User } from '../interface/User';
import loginWithCookies from '../helpers/APICalls/loginWithCookies';
import logoutAPI from '../helpers/APICalls/logout';
import { Property, PropertyApiDataSuccess } from "../interface/Property";
import { getProperties } from '../helpers/APICalls/properties';

interface IAuthContext {
  loggedInUser: User | null | undefined;
  userProperties: Property [] | null | undefined;
  updateLoginContext: (data: AuthApiDataSuccess) => void;
  updateUserProperties: (data: PropertyApiDataSuccess) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  loggedInUser: undefined,
  userProperties: [],
  updateLoginContext: () => null,
  updateUserProperties: () => null,
  logout: () => null,
});

export const AuthProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [loggedInUser, setLoggedInUser] = useState<User | null | undefined>();
  const [userProperties, setUserProperties] = useState<Property [] | null | undefined >([])
  const history = useHistory();

  const updateLoginContext = useCallback(
    (data: AuthApiDataSuccess) => {
      setLoggedInUser(data.user);
      data.user.accountType === "owner" ? history.push("/home/owner") : history.push("/home/client")
    },
    [history],
  );

  const updateUserProperties = useCallback(
    (data: PropertyApiDataSuccess) => {
      setUserProperties(data.properties);
    },
    [history],
  );

  const logout = useCallback(async () => {
    await logoutAPI()
      .then(() => {
        history.push('/login');
        setLoggedInUser(null);
      })
      .catch((error: any) => console.error(error));
  }, [history]);

  useEffect(() => {
    const checkLoginWithCookies = async () => {
      await loginWithCookies().then((data: AuthApiData) => {
        if (data.success) {
          updateLoginContext(data.success);
        } else {
          setLoggedInUser(null);
        }
      });
    };
    checkLoginWithCookies();
  }, [updateLoginContext, history]);

  useEffect(() => {
    getProperties().then((data) => {
        if (data.error) {
            console.log(data.error.message);
        } else if (data.success){
            updateUserProperties(data.success)
        } else {
            console.log('An unexpected error occurred. Please try again !');
        }
    });
}, [updateUserProperties])

  return <AuthContext.Provider value={{ loggedInUser, updateLoginContext, logout, updateUserProperties, userProperties }}>{children}</AuthContext.Provider>;
};

export function useAuth(): IAuthContext {
  return useContext(AuthContext);
}