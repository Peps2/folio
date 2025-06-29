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
  
  resume: '/oluchi tech cv.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/oluchukwuaroh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    github: 'https://github.com/Peps2/EHYA',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Personal Blog Platform (Coming Soon)',
    description:
      'I am currently building a personal blog platform using React. This project will allow users to create, edit, and organize blog posts with a clean and simple interface. It will support Markdown for easy content formatting and include features like tagging and categories to help organize posts. This project helps me practice frontend development, React hooks, and state management.',
    stack: ['Javascript', 'CSS', 'HTML', 'React'],
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
  'React',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'aroholuchi61@gmail.com',
}

export { header, about, projects, skills, contact }
