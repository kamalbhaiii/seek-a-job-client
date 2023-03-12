export const sampleJobData = [
  {
    _id: 2702202320050001,
    companyName: "TCS",
    position: "Full Stack Developer",
    positionType: "Internship",
    salary: 10000,
    src: "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260",
    startDate: "Immediately",
    applyBy: "28 Feb, 2023",
    duration: "6 Months",
    location: "Mumbai, India",
    modeOfWork: "W.F.H",
    roles: [
      "Creating REST APIs using Node.js and express Framework, designing DB schema for given applications in MySQL (mandatory).",
      "Working extensively around MYSQL queries and optimization of application performance",
      "Ensuring responsiveness to front-end requests",
      "Collaborating with front-end developers on the integration of elements",
      "Keeping informed of advancements in the field of Node.js development",
    ],
    skillsRequired: ["ReactJs", "NodeJs", "ExpressJs", "MongoDb", "MySQL"],
    perks: ["5 days a week"],
    about:
      "Tata Consultancy Services is an Indian multinational information technology services and consulting company with its headquarters in Mumbai. It is a part of the Tata Group and operates in 150 locations across 46 countries. In July 2022, it was reported that TCS had over 600,000 employees worldwide.",
    companyUrl: "https://www.tcs.com",
  },
  {
    _id: 2702202320050002,
    companyName: "OYO",
    position: "Digital Marketing",
    positionType: "Internship",
    salary: 7500,
    src: "https://upload.wikimedia.org/wikipedia/commons/1/19/OYO_Rooms_%28logo%29.png",
    startDate: "March, 2023",
    applyBy: "31 Mar, 2023, ",
    duration: "3 Months",
    location: "Bangalore, India",
    modeOfWork: "Remote",
    roles: [
      "Creating REST APIs using Node.js and express Framework, designing DB schema for given applications in MySQL (mandatory).",
      "Working extensively around MYSQL queries and optimization of application performance",
      "Ensuring responsiveness to front-end requests",
      "Collaborating with front-end developers on the integration of elements",
    ],
    skillsRequired: ["ReactJs", "NodeJs", "ExpressJs", "MongoDb"],
    perks: ["5 days a week", "Job Offer"],
    additionalInformation:
      "Job offer will be decided on the basis of Performance during the internship/probation period.",
    about:
      "OYO Rooms, also known as OYO Hotels & Homes, is an Indian multinational hospitality chain of leased and franchised hotels, homes, and living spaces. Founded in 2012 by Ritesh Agarwal, OYO initially consisted mainly of budget hotels.",
    companyUrl: "https://www.oyorooms.com",
  },
  {
    _id: 2702202320050003,
    companyName: "Apple Inc.",
    position: "Software Engineer",
    positionType: "Full-time Job",
    salary: 25000,
    src: "https://static.vecteezy.com/system/resources/thumbnails/002/520/838/small/apple-logo-black-isolated-on-transparent-background-free-vector.jpg",
    startDate: "Immediately",
    applyBy: "05 Mar, 2023",
    duration: "2 Years",
    location: "Bangalore, India",
    modeOfWork: "W.F.O",
    roles: [
      "Creating REST APIs using Node.js and express Framework, designing DB schema for given applications in MySQL (mandatory).",
      "Working extensively around MYSQL queries and optimization of application performance",
    ],
    skillsRequired: [
      "ReactJs",
      "NodeJs",
      "ExpressJs",
      "MongoDb",
      "MySQL",
      "Java",
      "DSA",
    ],
    perks: ["5 days a week", "Job Offer", "Flexible Timing"],
    additionalInformation:
      "Job offer will be decided on the basis of Performance during the internship/probation period.",
    about:
      "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, United States.",
    companyUrl: "https://www.apple.com",
  },
];

export const sampleCandidateData = [
  // {
  //   _id: 1911101070580203,
  //   src: "https://i.kym-cdn.com/entries/icons/original/000/018/385/Rs_634x1024-130605092844-634.DespMe2.mh.060513.jpg",
  //   candidateName: "Kamal Sharma",
  //   highestQualification: "B.E in Computer Engineering",
  //   skills: [
  //     "MERN Stack",
  //     "MySQL",
  //     "QA Testing",
  //     "Data Analyst",
  //     "Computer Engineer",
  //   ],
  //   about: "This is about Kamal Sharma.",
  //   internship: ["Internship 1", "Internship 2", "Internship 3"],
  //   project: ["P-1", "P-2"],
  // },
  // {
  //   _id: 1911101070000203,
  //   src: "https://i.kym-cdn.com/entries/icons/original/000/018/385/Rs_634x1024-130605092844-634.DespMe2.mh.060513.jpg",
  //   candidateName: "Avadhesh Sharma",
  //   highestQualification: "Diploma in Mechanical Engineering",
  //   skills: [
  //     "Radiography Testing",
  //     "RTL-2",
  //     "Mechanical Engineer",
  //     "PCN Level-2",
  //   ],
  //   about: "This is about Avadhesh Sharma.",
  //   job: ["Job 1", "Job 2", "Job 3", "Job 4"],
  //   project: ["P-1", "P-2", "P-3", "P-4"],
  // },
  {
    _id: 1911101070010203,
    src: "https://i.kym-cdn.com/entries/icons/original/000/018/385/Rs_634x1024-130605092844-634.DespMe2.mh.060513.jpg",
    candidateName: "Kamal Sharma",
    highestQualification: "BE Computer Enginnering",
    skills: ["Full Stack Developer", "Computer Engineer", "Data Analyst"],
    about:
      "I am a last year under graduate, Computer Engineering student and Data Science Enthusiast. I have worked as an intern in various companies as a Data Science Trainee, also I am an intermediate Full-Stack Web Developer and learning daily to improve my self. Currently I am focusing more towards learning the fundamentals of Data Science and creating my own Metaverse and I worked as a Software Engineer Associate at Blackcoffer (OPC) Pvt. Ltd. for the duration of July-2022 till Dec-2022.",
    job: [
      {
        position: "Full Stack Developer",
        companyName: "Modgenics Technology Solution",
        roles: [
          "HTML",
          "CSS",
          "JS",
          "ReactJs",
          "ExpressJs",
          "MongoDb",
          "NodeJs",
          "MySQL",
        ],
        location: "Heyderabad, India",
        joinedDate: new Date("3 march 2021"),
        leftDate: new Date("1 december 2022"),
      },
      {
        position: "QA Tester",
        companyName: "TCS",
        roles: ["Selenium with Java", "Cypress Automation", "Mocha", "Chai"],
        location: "Heyderabad, India",
        joinedDate: new Date("3 march 2021"),
        // leftDate: new Date("1 december 2022"),
      },
    ],
    internship: [
      {
        position: "Full Stack Developer (Intern)",
        companyName: "Modgenics Technology Solution",
        roles: [
          "HTML",
          "CSS",
          "JS",
          "ReactJs",
          "ExpressJs",
          "MongoDb",
          "NodeJs",
          "MySQL",
        ],
        location: "Heyderabad, India",
        joinedDate: new Date("30 january 2023"),
        // leftDate: new Date("1 december 2022"),
      },
    ],
    project: [
      {
        headline: "Portfolio Web",
        description:
          "This is my portfolio website which i have made using ReactJs.",
        topics: ["HTML", "CSS", "JS", "NextJs"],
        joinedDate: new Date("3 march 2021"),
        // leftDate: new Date("1 december 2022"),
        projectLink: "https://github.com/Kamal040102/portfolio-web",
      },
      {
        headline: "Seek-a-Job",
        description:
          "Seek-a-Job is a online job protal which comees with the best functionalities in the world and enhance the experience of finding the right jobs and candidates for job seekers and recruiters respectively. This project is made using the MERN Stack technology and in future many more functionality are gonna be implemented.",
        topics: ["HTML", "CSS", "JS", "MERN Stack", "Tailwind CSS"],
        joinedDate: new Date("3 march 2021"),
        leftDate: new Date("1 december 2022"),
        projectLink: "https://github.com/Kamal040102/seek-a-job-client",
      },
    ],
    schooling: [
      {
        position: "10th Examination",
        companyName: "DCHS",
        location: "Surat, Gujarat",
        joinedDate: new Date("1 april 2016"),
        leftDate: new Date("31 march 2017"),
        board: "CBSE",
        topics: [
          "English",
          "Hindi",
          "Maths",
          "Science",
          "Social Science",
          "7.2 CGPA",
        ],
      },
      {
        position: "12th Examination",
        companyName: "DCHS",
        location: "Surat, Gujarat",
        joinedDate: new Date("1 april 2018"),
        leftDate: new Date("31 march 2019"),
        board: "CBSE",
        topics: ["Physics", "Chemistry", "Maths", "79%"],
      },
    ],
    degree: [
      {
        position: "Bachelor's of Engineering",
        companyName: "Gujarat Technological University",
        location: "Ahmedabad, Gujarat",
        joinedDate: new Date("1 august 2019"),
        leftDate: new Date("31 july 2023"),
        board: "Computer Engg.",
        topics: ["8.2 CPI", "DSA", "OOPs", "DAA"],
      },
    ],
    work: ["Work-1", "Work-2"],
    achievement: ["Ach-1"],
  },
];
