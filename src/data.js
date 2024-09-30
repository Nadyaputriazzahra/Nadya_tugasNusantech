//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// Import custom logo
import whatsapp from './assets/img/waxbg.png'; // Pastikan path sesuai dengan lokasi gambar logo TikTok Anda


// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/zimzalabimBIM.png';
import Project2 from './assets/img/projects/kall.png';
import Project3 from './assets/img/projects/cv.png';
import Project4 from './assets/img/projects/Screenshot 2024-09-30 183710.png';
import Project5 from './assets/img/projects/Screenshot 2024-09-30 183316.png';
import Project6 from './assets/img/projects/menuJS.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';


// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';


// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portofolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'overview',
    href: 'overview',
  },
  // {
  //   name: 'testimonials',
  //   href: 'testimonials',
  // },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  // {
  //   icon: <FiYoutube />,
  //   href: '',
  // },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/nadya._.zahfa?igsh=MmV6aWFnZW1zcnNx',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Nadyaputriazzahra',
  },
  // {
  //   icon: <FiDribbble />,
  //   href: '',
  // },
  {
    icon: <img src={whatsapp} alt='whatsapp' className='h-6 w-6' />, // Custom TikTok logo
    href: 'https://wa.me/qr/C5EX5BDDK5QVC1',  // Ganti dengan link profil TikTok Anda
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'web toko roti (html)',
    category: 'Html/css',
  },
  {
    id: '2',
    image: Project2,
    name: 'kalkulator (+js)',
    category: 'java script',
  },
  {
    id: '3',
    image: Project3,
    name: 'cv',
    category: 'Html/css',
  },
  {
    id: '4',
    image: Project4,
    name: 'cv portofolio',
    category: 'react',
  },
  {
    id: '5',
    image: Project5,
    name: 'lokal storage',
    category: 'java script',
  },
  {
    id: '6',
    image: Project6,
    name: 'menu berulang',
    category: 'java script',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Html/css',
  },
  {
    name: 'java script',
  },
  {
    name: 'react',
  },
];

// skill
export const Skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
];

export const skills = [
  {
    name: 'html',
    image: SkillImg1,
    percentage: 80,
  },
  {
    name: 'css',
    image: SkillImg2,
    percentage: 50,
  },
  {
    name: 'javascript',
    image: SkillImg3,
    percentage: 50,
  },
  {
    name: 'react',
    image: SkillImg4,
    percentage: 40,
  },
  
];


// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'saya telah bisa mendisain sebuah web menggunakan html maupun react.',
  },
  {
    icon: <FiSettings />,
    name: 'Java script',
    description:
      'saya telah berhasil menggunakan java script di beberapa project yang pernah saya buat',
  },
  {
    icon: <FiPenTool />,
    name: 'React',
    description:
      'saya telah bisa menggunakan react di cv portofolio saya',
  },
  // {
  //   icon: <FiTag />,
  //   name: 'SEO',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  // },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at nadiaputrii4566@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'kendal,jateng',
    description: 'Kunjungi saya secara langsung',
  },
];

// In your Nav.js or wherever your navigation is defined
const Nav = [
  {
    name: 'overview',
    href: '/overview',
  },
  // other links
];

