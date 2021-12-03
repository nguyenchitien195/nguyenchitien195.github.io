export interface IProject {
  title: string;
  url: string;
  desc: string;
  img: string;
  tags: string[];
}

const projects: IProject[] = [
  {
    'title': 'nguyenchitien195.github.io',
    'url': 'https://nguyenchitien195.github.io/',
    'desc': 'Portfolio, CV and personal blog',
    'img': '../../nguyenchitien195.github.io_resume.png',
    'tags': ['gatsby', 'react'],
  },
  {
    'title': 'Slack Management',
    'url': 'https://nguyenchitien195.github.io/slack-manager-v2/',
    'desc': 'Manage file (Search, sort, delete multiple files), List User',
    'img': '../../nguyenchitien195.github.io_resume.png',
    'tags': ['react'],
  },
  {
    'title': 'Girlabc',
    'url': '',
    'desc': 'Collect the images of the girls around the world',
    'img': '../../nguyenchitien195.github.io_resume.png',
    'tags': ['nextjs', 'react'],
  },
  {
    'title': 'Shortcut',
    'url': '',
    'desc': 'Note the shortcut to find and help people speed up',
    'img': '../../nguyenchitien195.github.io_resume.png',
    'tags': ['react'],
  },
  {
    'title': 'Tumblr explore',
    'url': '',
    'desc': 'Using Tumblr api to show the content of Tumblr blog',
    'img': '../../nguyenchitien195.github.io_resume.png',
    'tags': ['react'],
  }
]

export default projects;