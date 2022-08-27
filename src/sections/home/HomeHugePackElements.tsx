import { m } from 'framer-motion';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import {
  Box,
  Grid,
  Container,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardProps,
  Link,
  Button,
  ClickAwayListener,
} from '@mui/material';
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
} from '@mui/lab';
// components
import { MotionViewport, varFade } from '../../components/animate';
import { useState } from 'react';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(24, 0),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0,
  },
}));

// ----------------------------------------------------------------------

export default function HomeHugePackElements() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  return (
    <MotionViewport disableAnimatedMobile={false}>
      <RootStyle id="experience">
        <Container>
          <Grid container spacing={5} justifyContent="center">
            <Grid
              item
              xs={12}
              md={4}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <ContentStyle>
                <m.div variants={varFade().inUp}>
                  <Typography
                    component="div"
                    variant="overline"
                    sx={{ mb: 2, color: 'text.disabled' }}
                  >
                    Experience
                  </Typography>
                </m.div>

                <m.div variants={varFade().inUp}>
                  <Typography variant="h2" sx={{ mb: 3 }}>
                    Experience <br />
                    Diversity
                  </Typography>
                </m.div>

                <m.div variants={varFade().inUp}>
                  <Typography
                    sx={{
                      mb: 5,
                      color: isLight ? 'text.secondary' : 'common.white',
                    }}
                  >
                    With years of experience in the industry, I have come
                    through a long way to become a Technical Lead as of today.
                  </Typography>
                </m.div>
              </ContentStyle>
            </Grid>

            <Grid item xs={12} md={8} dir="ltr">
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  justifyContent: 'center',
                }}
              >
                <ExperienceTimeline title="Experience" list={experienceList} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </MotionViewport>
  );
}

type ItemProps = {
  id: number;
  title: string;
  time: string;
  company: string;
  companyLink: string;
  description: string;
};

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  list: ItemProps[];
}

function ExperienceTimeline({ title, subheader, list, ...other }: Props) {
  return (
    <Card {...other} sx={{ width: '700px' }}>
      <CardHeader title={title} subheader={subheader} />

      <CardContent
        sx={{
          '& .MuiTimelineItem-missingOppositeContent:before': {
            display: 'none',
          },
        }}
      >
        <Timeline>
          {list.map((item, index) => (
            <OrderItem
              key={item.id}
              item={item}
              isLast={index === list.length - 1}
            />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}

// ----------------------------------------------------------------------

type OrderItemProps = {
  item: ItemProps;
  isLast: boolean;
};

function OrderItem({ item, isLast }: OrderItemProps) {
  const { id, title, time, company, description, companyLink } = item;

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen((pre) => !pre);
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          color={
            (id === 0 && 'primary') ||
            (id === 1 && 'success') ||
            (id === 2 && 'info') ||
            (id === 3 && 'warning') ||
            'error'
          }
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="subtitle1">
          {title} @{' '}
          <Link href={companyLink} target="_blank">
            {company}
          </Link>
        </Typography>

        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {time}
        </Typography>

        <br />
        <ClickAwayListener onClickAway={handleClickAway}>
          <m.div variants={varFade().inUp}>
            {!open && (
              <Button variant="outlined" onClick={handleClickOpen}>
                Show more
              </Button>
            )}

            {open && <Typography variant="subtitle2">{description}</Typography>}
          </m.div>
        </ClickAwayListener>
      </TimelineContent>
    </TimelineItem>
  );
}

const experienceList: ItemProps[] = [
  {
    id: 0,
    title: 'Tech Lead',
    time: 'May 2022 - Present',
    company: 'Oak + Fort',
    description: 'hehe',
    companyLink: 'https://www.oakandfort.com/',
  },
  {
    id: 1,
    title: 'Tech Lead',
    time: 'Nov 2021 - Present',
    company: 'S&T Properties',
    description: '',
    companyLink: 'https://stproperties.com/',
  },
  {
    id: 2,
    title: 'Tech Lead',
    time: 'Mar 2019 - Oct 2021',
    company: 'Revere Technologies',
    description: '',
    companyLink: 'https://revere-tech.com/',
  },
  {
    id: 3,
    title: 'Backend Engineer',
    time: 'Jul 2018 - Mar 2019',
    company: 'Oak + Fort',
    description: '',
    companyLink: 'https://revere-tech.com/',
  },
];
