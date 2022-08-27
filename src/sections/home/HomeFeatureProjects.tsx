import { m } from 'framer-motion';
import { useRef } from 'react';
import Slider from 'react-slick';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Card,
  Container,
  Typography,
  styled,
} from '@mui/material';
// components
import Image from '../../components/Image';
import { CarouselArrows } from '../../components/carousel';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const featureProjects = [
  {
    name: 'Oak + Fort',
    description: 'E-commerce website for a luxury Canadian fashion brand.',
    image: 'assets/featureprojects/oakandfort.png',
    link: 'https://ca.oakandfort.com/',
  },
  {
    name: 'Clean Over',
    description:
      'Custom Software Development: Schedule, manage and pay your cleaners with an all-in-one solutions',
    image: 'assets/featureprojects/cleanover.png',
    link: 'https://cleanover.com/',
  },
  {
    name: 'Revere Technologies',
    description:
      'Revere Technologies Platform is a fully functional real estate platform that allows users to post their own listings for advertisement. The platform currently is hosting more than 300,000 listings across entire Canada. I take pride in building the entire platform from the ground up with my team.',
    image: 'assets/featureprojects/revere.png',
    link: 'https://revere-tech.com/',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
}));

export default function HomeFeatureProjects() {
  const carouselRef = useRef<Slider>(null);

  const theme = useTheme();

  const settings = {
    arrows: false,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '0px',
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <RootStyle id="work">
      <Container
        component={MotionViewport}
        sx={{ pb: 10, textAlign: 'center' }}
      >
        <m.div variants={varFade().inDown}>
          <Typography
            component="p"
            variant="overline"
            sx={{ mb: 2, color: 'text.secondary' }}
          >
            Feature Work
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Projects That Stand Out
          </Typography>
        </m.div>

        <Box sx={{ position: 'relative' }}>
          <CarouselArrows
            filled
            onNext={handleNext}
            onPrevious={handlePrevious}
          >
            <Slider ref={carouselRef} {...settings}>
              {featureProjects.map((project) => (
                <Box
                  key={project.name}
                  component={m.div}
                  variants={varFade().in}
                  sx={{ px: 1.5, py: 10 }}
                >
                  <ProjectCard project={project} />
                </Box>
              ))}
            </Slider>
          </CarouselArrows>
        </Box>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type ProjectCardProps = {
  project: {
    name: string;
    description: string;
    image: string;
    link: string;
  };
};

function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, image, link } = project;
  return (
    <Card key={name} sx={{ p: 1 }}>
      <Typography variant="h5" sx={{ mt: 2, mb: 0.5 }}>
        {name}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
        {description}
      </Typography>
      <Image alt={name} src={image} sx={{ borderRadius: 1.5 }} />
      <Button
        href={link}
        variant="outlined"
        sx={{ marginTop: 1 }}
        target="_blank"
      >
        View More
      </Button>
    </Card>
  );
}
