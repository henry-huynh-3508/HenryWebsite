/* eslint-disable @typescript-eslint/no-var-requires */
import { m } from 'framer-motion';
// @mui
import { Button, TextField, Stack } from '@mui/material';
// components
import { MotionViewport, varFade } from '../../components/animate';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { sendMessage } from '../../../firebase';

// ----------------------------------------------------------------------

export default function ContactForm() {
  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Not a valid email')
      .required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: { name: '', email: '', subject: '', message: '' },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      const { name, email, subject, message } = values;
      try {
        await sendMessage({ name, email, subject, message }).then(() => {
          formik.resetForm();
          alert('Submitted successfully');
        });
      } catch (error) {
        console.error(error);
        setErrors(error);
        setSubmitting(false);
      }
    },
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack component={MotionViewport} spacing={5}>
          <Stack spacing={3}>
            <m.div variants={varFade().inUp}>
              <TextField
                fullWidth
                label="Name"
                {...getFieldProps('name')}
                error={Boolean(touched.name && errors.name)}
                helperText={touched.name && errors.name}
              />
            </m.div>

            <m.div variants={varFade().inUp}>
              <TextField
                fullWidth
                label="Email"
                {...getFieldProps('email')}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />
            </m.div>

            <m.div variants={varFade().inUp}>
              <TextField
                fullWidth
                label="Subject"
                {...getFieldProps('subject')}
                error={Boolean(touched.subject && errors.subject)}
                helperText={touched.subject && errors.subject}
              />
            </m.div>

            <m.div variants={varFade().inUp}>
              <TextField
                fullWidth
                label="Enter your message here."
                multiline
                rows={4}
                {...getFieldProps('message')}
                error={Boolean(touched.message && errors.message)}
                helperText={touched.message && errors.message}
              />
            </m.div>
          </Stack>

          <m.div variants={varFade().inUp}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              disabled={!formik.isValid}
            >
              Submit Now
            </Button>
          </m.div>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
