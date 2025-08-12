const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/Peps2/EHYA',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Aroh Oluchukwu',
  role: 'Front End Engineer',
  description:`I’m a frontend engineer who enjoys building clean, responsive, and user-friendly websites using HTML5, CSS, JavaScript, and React. I focus on turning designs into smooth, functional interfaces that look great on any device. I care about writing code that’s organized, easy to maintain, and works well across different browsers. I enjoy working with others to bring ideas to life and create digital experiences that are both useful and enjoyable for users.
`,
  
  resume: '/oluchitechcv2.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/oluchukwuaroh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    github: 'https://github.com/Peps2/EHYA',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'TasteTracker–Smart Food Discovery Platform(Coming Soon)',
    description:
      `Currently building a React-based web app that helps users discover and track their favorite dishes.
       Features include a clean, component-driven architecture, real-time recommendations via WebSockets, live search, AI-driven suggestions, infinite scrolling, and list virtualization for smooth performance.`,
    stack: ['Javascript', 'CSS', 'HTML', 'React.js','Tailwind CSS'],
    sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Git',
  'Tailwind CSS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'aroholuchi61@gmail.com',
}

export { header, about, projects, skills, contact }
