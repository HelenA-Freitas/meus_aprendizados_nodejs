import { zodResolver } from "@hookform/resolvers/zod";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { coerce, number, object, string, TypeOf } from "zod";
import { FormInput } from "../../../login/formlogin/FormInput";
import { update } from "./UpdateGame";

const date = new Date();

const registerSchema = object({
    title: string().nonempty('Por favor, informe o nome'),
    price: coerce.number()
        .positive('O preço precisa ser positivo e maior que zero'),
    year: coerce.number()
        .gte(1958, {message:'O ano precisa ser maior que 1958'})
        .lte(date.getFullYear(), {message:'O ano precisa ser menor que ou igual ao atual'})
  });
  
  type ResgisterInput = TypeOf<typeof registerSchema>;

  interface Props{
    id: number,
    titleGame: string,
    priceGame: number,
    yearGame: number
  }
  


export default function EditModal({id, titleGame, priceGame, yearGame}: Props){

    const methods = useForm<ResgisterInput>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
          title: titleGame,
          year: yearGame,
          price: priceGame
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
        const {title, year, price} = values;
        update({ id, title, year, price });
      };
      console.log(errors);

    return(
        <Container sx={{  position: 'absolute' as 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, borderRadius: 2, bgcolor: 'white',
        boxShadow: 24, p: 4,}}>
            <Box sx={{mb: 5}}>
                <AppBar sx={{borderRadius: 2}}>
                    <Toolbar sx={{color:'white'}}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 5, textAlign: 'center'}}>
                            Editar jogo
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <FormProvider {...methods}>
                <Box component="form" sx={{ mt: 1 }} noValidate autoComplete="off">
                    {/* <Typography variant='subtitle2' sx={{mt:3, mb:1, color:'red', textAlign:'justify'}}>
                        O ano precisa estar entre 1958 e o ano atual.
                    </Typography> 
                    <Typography variant='subtitle2' sx={{ mb:2, color:'red'}}>
                        O preço precisa ser positivo.
                    </Typography>  */}
                    <FormInput required fullWidth label='Título' {...register('title')} />
                    <FormInput required fullWidth label='Ano' type='number' InputProps={{inputProps: {min: 1958, max: date.getFullYear()}}} {...register('year')} />
                    <FormInput required fullWidth label='Preço' type='number' InputProps={{inputProps: {min: 0 }}} {...register('price')} />
                    <Button type="button" fullWidth variant="contained" color='secondary' onClick={handleSubmit(onSubmitHandler)} sx={{mt: 3, mb: 2, backgroundColor: '#FF7F11', color: 'white'}}>
                    Editar
                    </Button>
                </Box>
            </FormProvider>
            
        </Container>
    )
}