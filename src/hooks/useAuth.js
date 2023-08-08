import React from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import endPoints from '@services/api';

const AuthContext = React.createContext();

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return React.useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(false);

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const {
      data: { access_token },
    } = await axios.post(endPoints.auth.login, { email, password }, options);
    console.log(access_token);

    if (access_token) {
      const token = access_token;
      Cookies.set('token', token, { expires: 5 });

      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      const { data: userData } = await axios.get(endPoints.auth.profile);
      console.log(userData);
      setUser(userData);
    }
  };

  return {
    user,
    signIn,
    error,
    setError,
  };
}
