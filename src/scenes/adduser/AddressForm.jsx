import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Button, TextField } from "@mui/material";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp = 
/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("Обязательное поле"),
  lastName: yup.string().required("Обязательное поле"),
  email: yup
  .string()
  .email("Неверный формат email")
  .required("Обязательное поле"),
  contact: yup
      .string()
      .matches(phoneRegExp, "Телефон введен неправильно")
      .required("Обязательное поле"),
  address1: yup.string().required("Обязательное поле"),
  address2: yup.string().required("Обязательное поле"),
});

export default function AddressForm() {
  
  const isNonMobile = useMediaQuery("(min-width:600px)");
  
  const handleFormSubmit = (values) => {
      console.log(values);
  }

  return (
    <React.Fragment>
      {/* <Typography variant="h6" gutterBottom>
        Информация о пользователе
      </Typography> */}
      <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={userSchema}
      >
          {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                  {/* gridTemplateColumns="repeat(4, minmax(0, 1fr)) - позволит создать четыре секции с минимальным количеством элементов в каждой равным 0, а максимальным = 1 */}
                  <Box 
                      display="grid" 
                      gap ="30px"    
                      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                      sx={{
                          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
                          // если версия мобильная, то поле ввода займет всю ширину страницы, в обратном случае в одной сроке могут быть два поля 
                      }}
                  > 
                      <TextField 
                          fullWidth
                          variant="filled"
                          type="text"
                          label="Имя"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.firstName}
                          name="firstName"
                          error={!!touched.firstName && !!errors.firstName}
                          helperText={touched.firstName && errors.firstName}
                          sx={{ gridColumn: "span 2" }}
                      />
                      <TextField 
                          fullWidth
                          variant="filled"
                          type="text"
                          label="Фамилия"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.lastName}
                          name="lastName"
                          error={!!touched.lastName && !!errors.lastName}
                          helperText={touched.lastName && errors.lastName}
                          sx={{ gridColumn: "span 2" }}
                      />
                      <TextField 
                          fullWidth
                          variant="filled"
                          type="text"
                          label="Email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.email}
                          name="email"
                          error={!!touched.email && !!errors.email}
                          helperText={touched.email && errors.email}
                          sx={{ gridColumn: "span 4" }}
                      />
                        <TextField 
                          fullWidth
                          variant="filled"
                          type="text"
                          label="Номер телефона"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.contact}
                          name="contact"
                          error={!!touched.contact && !!errors.contact}
                          helperText={touched.contact && errors.contact}
                          sx={{ gridColumn: "span 4" }}
                      />
                        <TextField 
                          fullWidth
                          variant="filled"
                          type="text"
                          label="Рабочее место"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.address1}
                          name="address1"
                          error={!!touched.address1 && !!errors.address1}
                          helperText={touched.address1 && errors.address1}
                          sx={{ gridColumn: "span 4" }}
                      />
                  </Box>
                  <Box display="flex" justifyContent="end" mt="20px" >
                      {/* <Button type="submit" color="secondary" variant="contained">
                          Create New User
                      </Button> */}
                  </Box>
              </form>
          )}
      </Formik>
    </React.Fragment>
  );
}