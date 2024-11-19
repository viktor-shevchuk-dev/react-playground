import { useContext } from 'react';

import UserMenu from '../UserMenu/UserMenu.component.js';

import authContext from '../../contexts/auth/context';

export default function Appbar() {
  const { isLoggedIn, user, onLogIn, onLogOut } = useContext(authContext);

  return (
    <header>
      {isLoggedIn ? (
        <UserMenu onLogOut={onLogOut} user={user} />
      ) : (
        <button type="button" onClick={onLogIn}>
          Log In
        </button>
      )}
    </header>
  );
}
