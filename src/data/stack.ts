import type { Tech } from '../types'

const dv = (p: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${p}.svg`

export const stack: { title: string; items: Tech[] }[] = [
  { title: 'Frontend', items: [
    { name: 'HTML5', src: dv('html5/html5-original') }, { name: 'CSS3', src: dv('css3/css3-original') },
    { name: 'JavaScript', src: dv('javascript/javascript-original') }, { name: 'TypeScript', src: dv('typescript/typescript-original') },
    { name: 'React', src: dv('react/react-original') }, { name: 'Tailwind CSS', src: dv('tailwindcss/tailwindcss-original') } ] },
  { title: 'Backend', items: [
    { name: 'Node.js', src: dv('nodejs/nodejs-original') }, { name: 'Express.js', src: dv('express/express-original') },
    { name: 'REST APIs' }, { name: 'JWT Auth', src: 'https://cdn.simpleicons.org/jsonwebtokens/000000' } ] },
  { title: 'Databases', items: [
    { name: 'MongoDB', src: dv('mongodb/mongodb-original') }, { name: 'MySQL', src: dv('mysql/mysql-original') } ] },
  { title: 'Tools and platforms', items: [
    { name: 'Git', src: dv('git/git-original') }, { name: 'GitHub', src: dv('github/github-original') },
    { name: 'VS Code', src: dv('vscode/vscode-original') }, { name: 'Vercel', src: dv('vercel/vercel-original') },
    { name: 'Render', src: 'https://cdn.simpleicons.org/render/000000' }, { name: 'WordPress', src: dv('wordpress/wordpress-plain') } ] },
]
