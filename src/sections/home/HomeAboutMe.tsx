import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Link, Stack } from '@mui/material';
import { TrendingFlat } from '@mui/icons-material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}));

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  return (
    <RootStyle id="about">
      <Container component={MotionViewport}>
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
                Properties. Because I've already held all the other positions in
                this field, I have keen insight into what it takes to run a
                successful project. My career goal is to move into management as
                a CTO, and I know this role would help me hone my leadership
                skills.
                <br />
                <br />
              </Typography>
              <Typography align="left">
                <TrendingFlat color="primary" /> Frontend: React, Next,
                Typescript, Javascript, Material UI, Tailwind, styled component,
                Apollo Client, Axios
                <br />
                <TrendingFlat color="primary" /> Backend: Nest, Typescript,
                Express, FastAPI, GraphQL, SQL, TypeORM
                <br />
                <TrendingFlat color="primary" /> DevOps: Azure, AWS, Docker,
                Kubernetes, Google Cloud Platform, CI/CD
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
