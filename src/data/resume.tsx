interface IResume {
  dateWorking: string;
  job: string;
  company: string;
  description: string;
}

export interface ISkill {
  skill: string;
  percent: number;
}

const Resume: IResume[] = [
  {
    dateWorking: "06/2020 - nay",
    job: "Front-End Developer",
    company: "FPT Software",
    description:
      "Phụ trách phát triển trang quản lý cho nhân viên lĩnh vực Chăm sóc sức khỏe. Ứng dụng React, NodeJs, PostgreSQL",
  },
  {
    dateWorking: "02/2020 - 06/2020",
    job: "Front-End Developer",
    company: "Freelancer",
    description:
      "Xây dựng ứng dụng, website theo yêu cầu của khách hàng. Sử dụng NodeJs, Python, ReactJS, MongoDB, GraphQL",
  },
  {
    dateWorking: "07/2017 - 01/2020",
    job: "Front-End Developer, PHP Developer",
    company: "Scuti., Ltd",
    description:
      "Xây dựng ứng dụng, website trên nhiều lĩnh vực: bất động sản, marketing,.. Sử dụng PHP, Laravel, MySQL, Docker, ReactJS, NodeJS",
  },
  {
    dateWorking: "06/2016 - 06/2017",
    job: "PHP Developer",
    company: "EUI.vn",
    description: "Phát triển website cho công ty bán hàng",
  },
  {
    dateWorking: "01/2016 - 06/2016",
    job: "Java Developer",
    company: "FTL",
    description:
      "Phát triển webapp quản lý bệnh viện, triển khai ứng dụng sms, viễn thông",
  },
  {
    dateWorking: "08/2013 - 10/2015",
    job: "Học lập trình",
    company: "FPT-Aptech",
    description:
      "Học chuyên ngành kỹ sư phần mềm theo chương trình Aptech. Môn học: SQL, Java, C, C#, .Net, Android,..",
  },
];

export const Skill: ISkill[] = [
  { skill: "HTML/CSS", percent: 85 },
  { skill: "JS", percent: 80 },
  { skill: "PHP", percent: 75 },
  { skill: "Sql", percent: 70 },
  { skill: "React", percent: 80 },
  { skill: "Node", percent: 70 },
  { skill: "Git", percent: 80 },
  { skill: "Docker", percent: 70 },
];

export default Resume;
