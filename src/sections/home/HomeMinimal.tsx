import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Link, Stack } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: 'https://minimal-assets-api-dev.vercel.app/assets/icons/ic_design.svg',
    title: 'UI & UX Design',
    description:
      'The set is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.',
  },
  {
    icon: 'https://minimal-assets-api-dev.vercel.app/assets/icons/ic_code.svg',
    title: 'Development',
    description:
      'Easy to customize and extend each component, saving you time and money.',
  },
  {
    icon: '/logo/logo_single.svg',
    title: 'Branding',
    description:
      'Consistent design in colors, fonts ... makes brand recognition easy.',
  },
];

const shadowIcon = (color: string) =>
  `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity: number) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    border: 0,
    maxWidth: 380,
    minHeight: 440,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(10, 5, 0),
    boxShadow: theme.customShadows.z12,
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    '&.cardLeft': {
      [theme.breakpoints.up('md')]: { marginTop: -40 },
    },
    '&.cardCenter': {
      [theme.breakpoints.up('md')]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 40px)',
          borderRadius: Number(theme.shape.borderRadius) * 2,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`,
        },
      },
    },
  };
});

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  const theme = useTheme();

  return (
    <RootStyle>
      <Container component={MotionViewport} id="about">
        <Stack alignItems="center">
          <Box
            sx={{
              textAlign: 'center',
              mb: { xs: 10, md: 10 },
              maxWidth: '800px',
            }}
          >
            <m.div variants={varFade().inUp}>
              <Typography
                component="div"
                variant="overline"
                sx={{ mb: 2, color: 'text.disabled' }}
              >
                About me
              </Typography>
            </m.div>
            <m.div variants={varFade().inDown}>
              <Typography>
                I'm Henry Huynh - Technical Manager at{' '}
                <Link href="https://www.oakandfort.com/" target="_blank">
                  Oak + Fort
                </Link>{' '}
                and recently CEO/Founder at{' '}
                <Link href="https://www.innolandsolutions.com/" target="_blank">
                  Innoland Solutions.
                </Link>
                <br />
                <br />
                I've worked in software engineering for my entire 10-year
                career, and my commitment to integrity and project management
                have gotten me to where I am today: a technical manager for Oak
                + Fort.
                <br />
                <br />
                I have a passion for processes, and I'm an experienced team
                leader who typically manages small-to-medium-size developers at
                any given time. Prior to my senior role, I worked as a full
                stack software engineer for Revere Technologies Company and S&T
                Properties.
                <br />
                <br />
                Because I've already held all the other positions in this field,
                I have keen insight into what it takes to run a successful
                project. My career goal is to move into management as a CTO, and
                I know this role would help me hone my leadership skills.
              </Typography>
            </m.div>
          </Box>
        </Stack>

        <Card
          sx={{
            display: 'grid',
            gap: { xs: 5, lg: 10 },
          }}
        >
          {/* {CARDS.map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <CardStyle
                className={
                  (index === 0 && 'cardLeft') ||
                  (index === 1 && 'cardCenter') ||
                  ''
                }
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  sx={{
                    mb: 10,
                    mx: 'auto',
                    width: 40,
                    height: 40,
                    filter: (theme) => shadowIcon(theme.palette.primary.main),
                    ...(index === 0 && {
                      filter: (theme) => shadowIcon(theme.palette.info.main),
                    }),
                    ...(index === 1 && {
                      filter: (theme) => shadowIcon(theme.palette.error.main),
                    }),
                  }}
                />
                <Typography variant="h5" paragraph>
                  {card.title}
                </Typography>
                <Typography
                  sx={{ color: isLight ? 'text.secondary' : 'common.white' }}
                >
                  {card.description}
                </Typography>
              </CardStyle>
            </m.div>
          ))} */}
          <Image src="/assets/henry.png" alt="henry" />
        </Card>
      </Container>
    </RootStyle>
  );
}
