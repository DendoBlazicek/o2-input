import CustomInput, { CustomInputProps } from '@/components/CustomInput.tsx';
import { Container, Stack } from '@mui/material';
import CustomThemeProvider from '@/ThemeProvider.tsx';

const inputVariants: CustomInputProps[] = [
  { id: 'default', helperText: 'Optional helper text', placeholder: 'Placeholder Text' },
  {
    id: 'disabled',
    placeholder: 'Placeholder Text',
    disabled: true
  },
  {
    id: 'warning',
    warningText: 'Warning message'
  },
  {
    id: 'error',
    errorText: 'Error message'
  },
  {
    id: 'required',
    required: true
  },
  {
    id: 'readonly',
    readOnly: true,
    value: 'Read only value'
  },
  {
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
