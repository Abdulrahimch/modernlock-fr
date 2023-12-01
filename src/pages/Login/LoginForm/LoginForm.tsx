import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { CircularProgress, InputLabel, TextField, Button, Grid } from '@material-ui/core';
import useStyles from './useStyles';

interface Props {
    handleSubmit: (
      {
        email,
        password,
      }: {
        email: string;
        password: string;
      },
      {
        setStatus,
        setSubmitting,
      }: FormikHelpers<{
        email: string;
        password: string;
      }>,
    ) => void;
    email: string;
    password: string
  }

function LoginForm ({ handleSubmit, email, password }: Props): JSX.Element { 
    const classes = useStyles();

    return (
        <>
            <Formik
                initialValues={{
                    email: email,
                    password: password
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().required('email is reqeuired!').email('Invalid Email'),
                    password: Yup.string().required('Password is requried!').min(5, 'Password is too short!')
                })}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
                <form onSubmit={handleSubmit} className={classes.form} noValidate>
                    <Grid container direction='column' justifyContent='center' alignItems='center'>
                        <Grid item>
                            <InputLabel className={classes.label}>
                                Email
                            </InputLabel>
                            <TextField
                                id='email'
                                name='email'
                                error={Boolean(errors.email)}
                                helperText={errors.email}
                                value={values.email}
                                onChange={handleChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    classes: { input: classes.inputs },
                                    disableUnderline: true
                                }}

                            />
                            <InputLabel className={classes.label}>
                                password
                            </InputLabel>
                            <TextField
                                id='password'
                                name='password'
                                type='password'
                                error={Boolean(errors.password)}
                                helperText={errors.password}
                                value={values.password}
                                onChange={handleChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    classes: { input: classes.inputs },
                                    disableUnderline: true
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Button size="large" type="submit" variant="contained" color="primary" className={classes.submit}>
                            {isSubmitting ? <CircularProgress className={classes.circularProgress} /> : 'Login'} 
                            </Button>
                        </Grid>
                    </Grid> 
                </form>
                )}   
            </Formik>
        </>
    )
}
export default LoginForm;
