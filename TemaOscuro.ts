import { MD3DarkTheme } from 'react-native-paper';

export const temaOscuro= {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,    
    primary: '#82B1FF',    
    secondary: '#80D8FF',  
    tertiary: '#FF6E6E',
    background: '#121212',
    surface: '#1E1E1E',
    onSurface: '#E1E1E1',
    onSurfaceVariant: '#A0A0A0',
    outline: '#444444',
    error: '#CF6679',  
    onError: '#370617',
    secondaryContainer: '#004C63', 
    onSecondaryContainer: '#B3E5FC',    
    elevation: {
      level0: 'transparent',
      level1: '#1C1C1C',
      level2: '#242424',
      level3: '#2B2B2B',
      level4: '#323232',
      level5: '#383838',
    }
  }
};
