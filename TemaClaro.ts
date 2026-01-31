import {MD3LightTheme} from "react-native-paper"

export const temaClaro = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#2979FF',              
    secondary: '#00B0FF',            
    tertiary: '#D32F2F',    
    background: '#F4F6FB',          
    surface: '#FFFFFF',    
    onSurface: '#1C1E21',
    onSurfaceVariant: "#666",
    outline: '#C7D0E0',
    error: '#e0e0ff',  
    onError: "#3f51b5",
    secondaryContainer: '#E1F5FE',
    onSecondaryContainer: '#01579B',
    elevation: {
      level0: 'transparent',
      level1: '#F8FAFF',  
      level2: '#F3F5FA',
      level3: '#E8ECF4',
      level4: '#DDE3EF',
      level5: '#D1D9EA',
    }
  }
}

