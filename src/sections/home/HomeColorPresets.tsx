import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
// components
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
}));

// ----------------------------------------------------------------------

export default function HomeColorPresets() {
  return (
    <RootStyle>
      <Container
        component={MotionViewport}
        sx={{ position: 'relative', textAlign: 'center' }}
        id="work"
      >
        <m.div variants={varFade().inUp}>
          <Typography
            component="div"
            variant="overline"
            sx={{ mb: 2, color: 'text.disabled' }}
          >
            Feature work
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Projects that stand out
          </Typography>
        </m.div>

        <Box sx={{ position: 'relative' }}>Hi</Box>
      </Container>
    </RootStyle>
  );
}
