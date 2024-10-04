export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 4,
      name: 'Work',
      href: '#work',
    },
    {
      id: 5,
      name: 'Contact',
      href: '#contact',
    },
    
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Tuan Dinh was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'TuanDinh’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Tuan Dinh. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Tuan Dinh was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'LYS - Ecommerce Website',
      desc: 'LYS is a modern, user-friendly online store that offers a wide range of high-quality healthcare products and exceptional customer service. Users can shop online and securely purchase products from our store.',
      subdesc:
        'Built as a unique e-commerce platform, utilizing Next.js with the help of Daisy UI for the font-end, creating an engaging and user-friendly interface. Used MongoDB and PrismaDB for the back-end, implement database management and ensure data interaction properly. Integrated secure payment gateways with Stripe and optimized site performance, enhancing user experience and facilitating smooth transactions for customers.',
      href: 'https://lysbyb2greene.com/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#3b9c65',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/nextjs.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'MongoDB',
          path: '/assets/mongodb.svg',
        },
      ],
    },
    {
      title: 'OpenCamera - Security Camera App',
      desc: 'OpenCamera App that uses Raspberry Pi attached to the camera to detect motion then send back to customer’s mobile app. The images and videos that send to customer protected with end-to-end Encrypted and Decrypted using Matrix Server.',
      subdesc:
        'The app used Python to implement most of function of application such as recording, capture, voice recording,....',
      href: 'https://opensourcecamera.netlify.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: '/assets/python.svg',
        },
        {
          id: 2,
          name: 'JavaScript',
          path: 'assets/java.svg',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'MongoDB',
          path: '/assets/mongodb.svg',
        },
      ],
    },
    {
      title: 'MovieRapid - Netflix Clone Project',
      desc: 'A Netflix clone website that allows users to watch movies in real time, with a user-friendly interface and a responsive design.',
      subdesc:
        'The project was built using Next.js and TailwindCSS with the help of MongoDB for the database and PrismaDB for the backend.',
      href: 'https://movie-rapid.vercel.app/auth',
      texture: '/textures/project/project3.mp4',

      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',

      
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/nextjs.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'MongoDB',
          path: '/assets/mongodb.svg',
        },
        {
          id: 4,
          name: 'PrismaDB',
          path: '/assets/prisma.svg',
        },
      ],
    },
    {
      title: 'BlingBlingStore - Online Store',
      desc: 'the BlingBlingStore website, an commerce platform specializing in Vietnamese Products..',
      subdesc:
        'Using React with Material UI components for the frontend. Integrated Commerce JS for the backend. Optimized site performance, enhancing user experience and facilitating smooth transactions for customers.',
      href: 'https://blingblingstore.netlify.app/',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'assets/css.svg',
        },
        {
          id: 3,
          name: 'MaterialUI',
          path: '/assets/material-ui.svg',
        },
        {
          id: 4,
          name: 'Javascript',
          path: '/assets/java.svg',
        },
      ],
    },
    {
      title: 'SpaceHunt - Online Game',
      desc: 'SpaceHunt is a web-based game where players can move around in space and try to avoid asteroids and other objects in their path.',
      subdesc:
        'The game is build using HTML, CSS, and JavaScript. The game is inspired by the classic arcade game, "Space Invaders".',
      href: 'https://spacehuntgame.netlify.app/',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: '/assets/html.svg',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'assets/css.svg',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/java.svg',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -8.5, -6] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [-4, -9.5, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -8, -10],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-22, 10, 0],
      ringScale : isSmall ? 0.05 : isMobile ? 0.06 : 0.065, 
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
      reactTimePosition: isSmall ? [3, 4, -2] : isMobile ? [5, 3, 0] : isTablet ? [5, 4, 0] : [10, 3, 0],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'ReactJS',
      pos: 'Software Engineer',
      duration: '2023 - Present',
      title: "Collaborate with development team to build the Highest Good Network software. The software used the React framework and JavaScript to manipulate the activities of staffs, allowing for precise clockin, clock-out and staff monitoring within the company.",
      icon: '/assets/react.svg',
      animation: 'salute',
    },
    {
      id: 2,
      name: 'Next.js',
      pos: 'Freelance Web Developer',
      duration: '2022 - 2023',
      title: "Developed a customized e-commerce website, LYS, utilizing Next.js with the help of Daisy UI for the front-end, creating an engaging and user-friendly interface. Used MongoDB and PrismaDB for the back-end, implement database management and ensure data interaction properly. Integrated secure payment gateways with Stripe and optimized site performance, enhancing user experience and facilitating smooth transactions for customers..",
      icon: '/assets/nextjs.svg',
      animation: 'victory',
    },
    {
      id: 3,
      name: 'React.js',
      pos: 'Junior Web Developer',
      duration: '2021 - 2022',
      title: "Collaborate with teammate to build a security OpenCamera App that uses Raspberry Pi attached to the camera to detect motion then send back to customer’s mobile app. The images and videos that send to customer protected with end-to-end Encrypted and Decrypted using Matrix Server. My roles include: UI/UX Designer, Front-end Developer using React JS. ",
      icon: '/assets/react.svg',
      animation: 'clapping',
    },
    {
      id: 4,
      name: 'Graduator from PSU University',
      pos: 'Bachelor’s Degree in Computer Science',
      duration: '2020 - 2022',
      title: "Graduated from PSU University. I received my Bachelor's Degree in Computer Science from PSU University.",
      icon: '/assets/PSU.png',
      animation: 'salute',
    },
  ];