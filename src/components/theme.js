import { createTheme } from '@material-ui/core/styles';

export default createTheme({
    palette: {
        primary: {
          // main: '#D0D0D0',
          main: '#B0B0B0'
        },
        secondary: {
          main: '#D3D3D3',
        },
      },
    typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        // 'Chilanka',
        // 'cursive',
      ].join(','),
    },
});
