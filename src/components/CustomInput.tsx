import { FC } from 'react';
import { FormControl, FormLabel, TextField, TextFieldProps, Typography } from '@mui/material';

export type CustomInputProps = TextFieldProps & {
  id: string;
  readOnly?: boolean;
  helperText?: string;
  warning?: boolean;
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

const CustomInput: FC<CustomInputProps> = ({
  error,
  helperText,
  id,
  label,
  readOnly,
  required,
  warning,
  ...props
}) => {
  return (
    <FormControl fullWidth>
      <FormLabel error={error} htmlFor={id} sx={{ color: warning ? warningColor : undefined }}>
        {label}
        {!required && <small> Optional</small>}
      </FormLabel>
      <TextField
        size='medium'
        color='primary'
        error={error}
        id={id}
        slotProps={{
          input: { readOnly, required }
        }}
        sx={warning ? warningBorder : undefined}
        helperText={
          <Typography sx={{ color: warning ? warningColor : undefined }}>
            {helperText ?? ''}
          </Typography>
        }
        {...props}
      />
    </FormControl>
  );
};

export default CustomInput;
