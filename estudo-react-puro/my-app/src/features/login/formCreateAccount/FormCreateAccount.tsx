import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { FormInput } from "../formlogin/FormInput";
import { createAccount } from "./CreateAccout";

const registerSchema = object({
  email: string().nonempty('Por favor, informe seu e-mail').email('E-mail inválido'),
  password: string()
    .nonempty('Por favor, informe sua senha')
    .min(4, 'A senha precisa ter mais de 4 caracteres')
    .max(32, 'A senha precisa ter menos de 32 caracteres'),
  passwordConfirm: string().nonempty('Por favor, confirme sua senha'),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ['passwordConfirm'],
  message: 'As senhas não são iguais',
});

type ResgisterInput = TypeOf<typeof registerSchema>;


export default function FormCreateAccount(){

  const methods = useForm<ResgisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email:'',
      password:'',
      passwordConfirm:''
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
    const {email, password, passwordConfirm} = values;
    createAccount({email,password});
  };
  console.log(errors);

    return(
        <Container component="main" maxWidth="xs">
          <Box sx={{marginTop: 25, display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: '#639FAB', borderRadius: 10, padding: 5}}>
            <Typography component="h1" variant="h5">
              Criar conta
            </Typography>
            <FormProvider {...methods}>
              <Box component="form" sx={{ mt: 1 }} noValidate autoComplete="off">
                <FormInput required fullWidth label='E-mail' {...register('email')} />
                <FormInput required fullWidth type='password' label='Senha' {...register('password')} />
                <FormInput required fullWidth type='password' label='Confirmar senha' {...register('passwordConfirm')} />
                <Button type="button" fullWidth
                  variant="contained"
                  color='secondary'
                  onClick={handleSubmit(onSubmitHandler)}
                  sx={{
                    mt: 3, mb: 2, backgroundColor: '#FF7F11'}}>
                    Criar
                </Button>
              </Box>
            </FormProvider>
          </Box>
        </Container>
    )
}