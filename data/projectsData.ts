interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Updating Soon',
    description: `launch Sequence Initiated`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
]

export default projectsData
