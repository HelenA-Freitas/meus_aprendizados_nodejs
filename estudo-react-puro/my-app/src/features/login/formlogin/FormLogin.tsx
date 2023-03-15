import { Container, Box, Typography, FormControlLabel, Checkbox, Button } from "@mui/material";
import { useEffect } from "react";
import {PasswordInput} from "./PasswordInput";
import {UserInput} from "./UserInput";
import { login } from "../auth";
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { object, string, TypeOf } from "zod";

const registerSchema = object({
  email: string().nonempty('Por favor, informe seu e-mail!').email('E-mail inválido!'),
  password: string()
    .nonempty('Por favor, informe sua senha!')
    .min(4, 'A senha precisa ter mais de 4 caracteres.')
    .max(32, 'A senha precisa ter menos de 32 caracteres.'),
});

type ResgisterInput = TypeOf<typeof registerSchema>;

export const FormLogin = () => {
  
  const methods = useForm<ResgisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email:'',
      password:''
    }
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { isSubmitSuccessful, errors },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<ResgisterInput> = (values) => {
    const {email, password} = values;
    login({email, password});
  };
  console.log(errors);

    return(
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 25,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: '#639FAB',
              borderRadius: 10,
              padding: 5,
            }}
          >
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <FormProvider {...methods}>
              <Box component="form" sx={{ mt: 1 }} noValidate autoComplete="off" >
                  <UserInput required fullWidth label='E-mail' {...register('email')} />
                  <PasswordInput required fullWidth label='Senha' type='password' {...register('password')}/>
                  <FormControlLabel control={<Checkbox value="remember" />} label="Lembre de mim" />
                  <Button fullWidth onClick={handleSubmit(onSubmitHandler)} variant="contained" color='secondary' sx={{mt: 3, mb: 2, backgroundColor: '#FF7F11'}}>
                    Entrar
                  </Button>
              </Box>
            </FormProvider>
          </Box>
        </Container>
    )
}