import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) => {
  const [dark, setDark] = React.useState(false);

  const ToggleTheme = () => {
    setDark();
  };

  const styles = {
    Background: dark ? 'black' : '#eaeaea',
    cardBackground: dark ? '#222222' : 'white',
    textColor: dark ? 'white' : 'black',
    IconColor: dark ? 'white' : 'black',
    profileCard: dark ? '#444444' : '#eaeaea',
    borderColor: dark ? 'grey' : 'white',
    timeStampColor: dark ? '#eaeaea' : 'grey',
  };

  return (
    <ThemeContext.Provider value={{dark, ToggleTheme, styles}}>
      {children}
    </ThemeContext.Provider>
  );
};
