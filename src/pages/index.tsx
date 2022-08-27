// @mui
import { styled } from '@mui/material/styles';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import {
  HomeHero,
  HomeAboutMe,
  HomeContact,
  HomeExperience,
} from '../sections/home';
import HomeFeatureProjects from 'src/sections/home/HomeFeatureProjects';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Henry H. - Tech Lead">
      <HomeHero />

      <ContentStyle>
        <HomeAboutMe />

        <HomeExperience />

        <HomeFeatureProjects />

        <HomeContact />
      </ContentStyle>
    </Page>
  );
}
