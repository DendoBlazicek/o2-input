import { PropsWithChildren } from 'react';
import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  Theme,
  ThemeOptions,
  ThemeProvider
} from '@mui/material';

const CustomThemeProvider = ({ children }: PropsWithChildren) => {
  const themeOptions: ThemeOptions = {
    typography: {
      fontFamily: 'On Air Var, sans-serif'
    },
    palette: {
      primary: {
        main: '#0050FF'
      },
      error: {
        main: '#DC2828'
      },
      warning: {
        main: '#A56315'
      }
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderWidth: '3px'
              }
            }
          },
          input: {
            paddingTop: '12px',
            paddingBottom: '12px',
            paddingLeft: '16px',
            paddingRight: '8px',
            gap: '8px'
          },
          notchedOutline: {
            borderColor: '#8C8C9A',
            borderRadius: 12
          }
        }
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '22px',
            letterSpacing: '0.16px',
            marginBottom: '8px',
            '& small': {
              fontSize: '14px',
              fontWeight: 550,
              lineHeight: '17px',
              letterSpacing: '0.16px'
            }
          }
        }
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            fontSize: '14px',
            fontWeight: 550,
            lineHeight: '17px',
            letterSpacing: '0.16px',
            marginTop: '8px',
            marginLeft: 0,
            marginRight: 0
          }
        }
      }
    }
  };

  const theme: Theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default CustomThemeProvider;
