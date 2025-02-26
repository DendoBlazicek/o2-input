import CustomInput, { CustomInputProps } from '@/components/CustomInput.tsx';
import { Container, Stack } from '@mui/material';
import CustomThemeProvider from '@/ThemeProvider.tsx';

const inputVariants: CustomInputProps[] = [
  {
    label: 'Default',
    id: 'default',
    helperText: 'Optional helper text',
    placeholder: 'Placeholder Text'
  },
  {
    label: 'Disabled',
    id: 'disabled',
    placeholder: 'Placeholder Text',
    disabled: true
  },
  {
    label: 'Warning',
    id: 'warning',
    helperText: 'Warning message',
    warning: true
  },
  {
    label: 'Error',
    id: 'error',
    helperText: 'Error message',
    error: true
  },
  {
    label: 'Required',
    id: 'required',
    required: true
  },
  {
    label: 'Readonly',
    id: 'readonly',
    readOnly: true,
    value: 'Read only value'
  },
  {
    label: 'Password',
    id: 'password',
    type: 'password'
  }
];

const App = () => {
  return (
    <CustomThemeProvider>
      <Container
        component='div'
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          py: 4
        }}
      >
        <Stack
          direction='column'
          spacing={2}
          width={320}
          justifyContent='center'
          alignItems='center'
        >
          <h1>O2 input</h1>
          {inputVariants.map((props, index) => (
            <CustomInput key={index} {...props} />
          ))}
        </Stack>
      </Container>
    </CustomThemeProvider>
  );
};

export default App;
