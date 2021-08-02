import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) => {
  const [dark, setDark] = React.useState(true);
  const [UserId, setUserId] = React.useState('');

  const ToggleTheme = item => {
    setDark(item);
  };

  const ChangeUserId = id => {
    setUserId(id);
  };

  const styles = {
    Background: dark ? '#1E1818' : '#eaeaea',
    cardBackground: dark ? '#222222' : 'white',
    textColor: dark ? 'white' : 'black',
    IconColor: dark ? 'white' : 'black',
    profileCard: dark ? '#444444' : '#eaeaea',
    borderColor: dark ? 'grey' : 'white',
    timeStampColor: dark ? '#eaeaea' : 'grey',
    inputBackground: dark ? '#444444' : 'white',
    bagdeBackground: dark ? '#444444' : '#cccccc',
  };

  return (
    <ThemeContext.Provider
      value={{dark, ToggleTheme, styles, ChangeUserId, UserId}}>
      {children}
    </ThemeContext.Provider>
  );
};
