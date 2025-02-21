import { FC } from 'react';
import { FormControl, FormHelperText, FormLabel, TextField, TextFieldProps } from '@mui/material';

export type CustomInputProps = TextFieldProps & {
  id: string;
  readOnly?: boolean;
  errorText?: string;
  helperText?: string;
  warningText?: string;
};

const warningColor = 'warning.main';
const warningBorder = {
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: warningColor
      }
    }
  }
};

const firstLetterToUpperCase = (id: string) => id.charAt(0).toUpperCase() + id.slice(1);

const CustomInput: FC<CustomInputProps> = ({
  errorText,
  helperText,
  id,
  readOnly,
  required,
  warningText,
  ...props
}) => {
  const isWarning = !errorText && !!warningText;

  return (
    <FormControl fullWidth>
      <FormLabel
        error={errorText != null}
        htmlFor={id}
        sx={{ color: isWarning ? warningColor : undefined }}
      >
        {firstLetterToUpperCase(id)}
        {!required && <small> Optional</small>}
      </FormLabel>
      <TextField
        size='medium'
        color='primary'
        error={errorText != null}
        id={id}
        slotProps={{
          input: { readOnly, required }
        }}
        sx={isWarning ? warningBorder : undefined}
        {...props}
      />
      <FormHelperText
        error={errorText != null}
        sx={{ color: isWarning ? warningColor : undefined }}
      >
        {errorText ?? warningText ?? helperText ?? null}
      </FormHelperText>
    </FormControl>
  );
};

export default CustomInput;
