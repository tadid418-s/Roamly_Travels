// NAVIGATION
export const NAV_LINKS = [
  { href: '#about', key: 'about', label: 'About' },
  { href: '#services', key: 'services', label: 'Services' },
  { href: '/', key: 'tours', label: 'Tours' },
  { href: '#blog', key: 'blog', label: 'Blog' },
  { href: '/', key: 'contact', label: 'Contact' },
];

// STATISTICS
export const STATISTICS = [
  { value: '10M+', label: 'Total Customers', icon: '/user.svg' },
  { value: '09+', label: 'Years of Experience', icon: '/calendar.svg' },
  { value: '12K', label: 'Total Destinations', icon: '/location.svg' },
  { value: '5.0', label: 'Average Rating', icon: '/star.svg' },
];

// FEATURED DESTINATIONS
export const FEATURED_DESTINATIONS = [
  {
    id: 1,
    image: '/simien.jpg',
    destination: 'Simien Mountains Trek',
    location: 'Gondar, Amhara',
    description: 'Dramatic escarpments, endemic wildlife, and world-class highland trekking.',
  },
  {
    id: 2,
    image: '/lalibela.jpg',
    destination: 'Lalibela Rock-Hewn Churches',
    location: 'Lalibela, Amhara',
    description: 'UNESCO-listed medieval monolithic churches carved from solid rock.',
  },
  {
    id: 3,
    image: '/danakil.webp',
    destination: 'Danakil Depression Expedition',
    location: 'Afar Region',
    description: 'Otherworldly salt flats, neon hydrothermal fields, and active volcanism.',
  },
  {
    id: 4,
    image: '/omo.webp',
    destination: 'Omo Valley Cultural Circuit',
    location: 'South Omo, SNNPR',
    description: 'Immersive encounters with diverse cultures and living traditions.',
  },
];

// HOW IT WORKS STEPS
export const HOW_IT_WORKS = [
  {
    id: 1,
    icon: '/map.svg',
    title: 'Find your destination',
    description: 'Embark on a journey to discover your dream destination, where adventure and relaxation await.',
  },
  {
    id: 2,
    icon: '/calendar.svg',
    title: 'Book a ticket',
    description: 'Ensure a smooth travel experience by booking tickets to your preferred destination via our booking platform.',
  },
  {
    id: 3,
    icon: '/tech.svg',
    title: 'Make payment',
    description: 'We offer a variety of payment options to meet your preferences and ensure a hassle-free transaction process.',
  },
  {
    id: 4,
    icon: '/location.svg',
    title: 'Explore destination',
    description: 'You\'ll be immersed in a captivating tapestry of sights, sounds and tastes, as you wind your way through the ancient streets.',
  },
];

// TOUR PACKAGES
export const TOUR_PACKAGES = [
  {
    id: 1,
    image: '/simien.jpg',
    duration: '7 Days',
    rating: '4.9',
    dateRange: '12 OCTOBER - 18 OCTOBER',
    name: 'SIMIEN MOUNTAINS TREK',
    price: '$895',
    location: 'Gonder, Ethiopia',
  },
  {
    id: 2,
    image: '/lalibela.jpg',
    duration: '4 Days',
    rating: '4.8',
    dateRange: '05 NOVEMBER - 08 NOVEMBER',
    name: 'LALIBELA PILGRIMAGE',
    price: '$560',
    location: 'Lalibela, Ethiopia',
  },
  {
    id: 3,
    image: '/danakil.webp',
    duration: '3 Days',
    rating: '4.7',
    dateRange: '20 NOVEMBER - 22 NOVEMBER',
    name: 'DANAKIL DEPRESSION EXPEDITION',
    price: '$740',
    location: 'Afar Region, Ethiopia',
  },
  {
    id: 4,
    image: '/omo.webp',
    duration: '6 Days',
    rating: '4.6',
    dateRange: '01 DECEMBER - 06 DECEMBER',
    name: 'OMO VALLEY CULTURAL TOUR',
    price: '$1,050',
    location: 'South Omo, Ethiopia',
  },
];

// TESTIMONIALS
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Donald Sullivan',
    title: 'Founder Fika',
    image: '/person-1.png',
    text: 'This travel website is very informative and easy to use. I like how they present various destination options and travel packages with clear details. Offering pictures and destination descriptions helps me decide where I want to visit.',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    title: 'Travel Blogger',
    image: '/person-2.png',
    text: 'Roamly made my travel planning so much easier. The booking process was seamless and the destinations exceeded my expectations. Highly recommended!',
  },
  {
    id: 3,
    name: 'Michael Chen',
    title: 'Adventure Enthusiast',
    image: '/person-3.png',
    text: 'The cultural tours offered by Roamly are exceptional. I learned so much about local traditions and the guides were incredibly knowledgeable.',
  },
];

// BLOG POSTS
export const BLOG_POSTS = [
  {
    id: 1,
    image: '/simien.jpg',
    date: 'Jan 10, 2025',
    title: 'Highlands Calling: Trekking the Simien Mountains',
    excerpt: 'A practical guide to Ethiopia’s rooftop: when to go, permits, camps, and spotting gelada baboons along the escarpments.',
  },
  {
    id: 2,
    image: '/lalibela.jpg',
    date: 'Jan 22, 2025',
    title: 'Lalibela: The Living Wonder of the World',
    excerpt: 'Insider tips for visiting the rock-hewn churches respectfully—festival seasons, dress, local guides, and photography etiquette.',
  },
  {
    id: 3,
    image: '/omo.webp',
    date: 'Feb 02, 2025',
    title: 'Into the Omo Valley: Cultures, Markets, and Ceremonies',
    excerpt: 'How to travel responsibly in South Omo: choosing community-led tours, market days to plan around, and what to bring.',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'About',
    links: [
      'About Us',
      'Blog',
      'Careers',
      'Jobs',
      'In Press',
      'Gallery',
    ],
  },
  {
    title: 'Support',
    links: [
      'Contact Us',
      'Online Chat',
      'Whatsapp',
      'Telegram',
      'Ticketing',
      'Call Center',
    ],
  },
  {
    title: 'FAQ',
    links: [
      'Account',
      'Booking',
      'Payments',
      'Returns',
      'Privacy Policy',
      'Terms & Condition',
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Customer Service', value: '+1 (555) 123-4567' },
    { label: 'Email Support', value: 'hello@roamly.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
  ],
};
