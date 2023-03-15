import TextField, { TextFieldProps } from "@mui/material/TextField/TextField";
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type IFormInputProps = {
    name: string;
  } & TextFieldProps;

export const UserInput : FC<IFormInputProps> = ({name, ...otherProps}) => {
    const {
        control,
        formState: { errors },
      } = useFormContext();

    return(
        <Controller control={control} name={name} defaultValue='' render={({field}) => (
            <TextField
            {...otherProps}
            {...field}
            error={!!errors[name]}
            helperText={errors[name]?.message?.toString() ?? ''}
            sx={{ backgroundColor: '#fff', mb: 2 }} 
            />
        )}
        />

    );
}