import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Container, Stack, Typography, useTheme } from '@mui/material';
// components
import { MotionViewport, varFade } from '../../components/animate';
import { ContactForm } from '../contact';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const ContentStyle = styled(Stack)(({ theme }) => ({
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'left',
}));

// ----------------------------------------------------------------------

export default function HomeContact() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle id="contact">
      <Container component={MotionViewport}>
        <ContentStyle>
          <m.div variants={varFade().inUp}>
            <Typography
              component="div"
              variant="overline"
              sx={{ mb: 2, color: 'text.disabled' }}
            >
              Contact
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              variant="h2"
              paragraph
              sx={{
                ...(!isLight && {
                  textShadow: (theme) =>
                    `4px 4px 16px ${alpha(theme.palette.grey[800], 0.48)}`,
                }),
              }}
            >
              Get in touch with me, my inbox is always open!
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <ContactForm />
          </m.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
