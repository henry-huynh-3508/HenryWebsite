// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'About',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/#about',
  },
  {
    title: 'Skills',
    icon: <Iconify icon={'ic:round-grain'} {...ICON_SIZE} />,
    path: '/#skills',
  },
  {
    title: 'Work',
    path: '/#work',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
  },
  {
    title: 'Contact',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: '/#contact',
  },
];

export default menuConfig;
