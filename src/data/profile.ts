export const profile = {
  name: 'Vikram M',
  role: 'Siebel Administrator & Salesforce Developer',
  location: 'Chennai, Tamil Nadu, India',
  email: 'm8vikram@gmail.com',
  linkedin: 'https://linkedin.com/in/vikram-in',
  linktree: 'https://linktr.ee/m8vikram',
  github: 'https://github.com/Vikram-M-hub',
  trailhead: 'https://www.salesforce.com/trailblazer/m8vikram',
  medium: 'https://medium.com/@m8vikram',
  hackerrank: 'https://www.hackerrank.com/profile/m8vikra',
  heroTagline:
    'I design and build Salesforce and CRM experiences that make complex processes feel simple.',
  heroIntro:
    'Results-driven Siebel Administrator and Salesforce Developer with 1+ years of experience at Cognizant, supporting one of the largest retail accounts.',
  currently:
    'I’m working as a Programmer Analyst at Cognizant, supporting a major retail client as an Oracle Siebel Admin while actively keeping my Salesforce skills sharp.',
}

export type ExperienceItem = {
  company: string
  title: string
  location: string
  period: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Cognizant',
    title: 'Programmer Analyst — Siebel Administration (Timeline)',
    location: 'Chennai, Tamil Nadu, India',
    period: 'Aug 2024 – Present',
    bullets: [
      'Nov 2024 – Present · Programmer Analyst — Siebel Administration · Cognizant, Chennai.',
      'Aug 2024 – Nov 2024 · Programmer Analyst Trainee — Siebel Admin & Salesforce · Cognizant, Bengaluru.',
      'Jul 2024 – Sep 2024 · CSD Intern — Salesforce CRM configuration and testing · Cognizant, Coimbatore.',
      'Day-to-day focus now is Siebel server administration, performance tuning, and stable CRM operations.',
      'In parallel, I keep my Salesforce skills active through certifications, learning projects, and hands-on practice.',
    ],
  },
  {
    company: 'Hexaware Technologies',
    title: 'Graduate Engineer Trainee — SEGUE Program',
    location: 'Chennai, Tamil Nadu, India',
    period: 'Jan 2024 – Jul 2024',
    bullets: [
      'Completed structured training in Python programming, data engineering pipelines, and professional communication.',
      'Cleared assessments on data structures, Python scripting, and SQL-based data workflows as a top performer.',
    ],
  },
  {
    company: 'Tactii (formerly TalentAccurate)',
    title: 'Front-End Developer Intern — Team Lead',
    location: 'Remote · Toronto, Ontario, Canada',
    period: 'May 2022 – Dec 2022',
    bullets: [
      'Developed responsive, accessible front-end UI components for the Featurepreneur Community platform using HTML, CSS, and JavaScript.',
      'Promoted to Team Lead for consistent delivery and initiative in sprint planning and coordination.',
      'Collaborated with cross-functional developers to define technical requirements and ship features ahead of deadlines.',
    ],
  },
]

export const certifications = [
  'Salesforce Certified Administrator — Salesforce (Active)',
  'Salesforce Certified Platform Developer — Salesforce (Active)',
  'Salesforce Certified AI Associate — Salesforce (Active)',
  'Google Certified Cloud Digital Leader — Google Cloud (Active)',
  'Certified DevOps Associate — DevOps Institute (Completed)',
  'Agile Job Simulation — JPMorgan Chase & Co. (Completed)',
  'IT Academy: Network Virtualization Concepts — VMware (Completed)',
  'Google Colab Machine Learning Application — Google (Completed)',
]

export const education = [
  {
    institution: 'St. Joseph’s College of Engineering',
    degree: 'Bachelor of Engineering — Computer Science (CGPA: 8.29)',
    location: 'Chennai, Tamil Nadu, India',
    period: 'Nov 2020 – May 2024',
  },
  {
    institution: 'Gateway International School',
    degree:
      'Class 12 — CBSE (Computer Science, Mathematics, Physics, Chemistry) · 80.6%',
    location: 'Chennai, Tamil Nadu, India',
    period: 'Class 12 — 2020',
  },
  {
    institution: 'The PSBB Millennium School',
    degree: 'Class 10 — CBSE · 75.8%',
    location: 'Chennai, Tamil Nadu, India',
    period: 'Class 10 — 2018',
  },
]

export const projectsAndResearch = [
  {
    title:
      'Prognostic Analytics Framework for Streamlining Cloud Selection in ML Deployments',
    description:
      'Predictive analytics framework to choose optimal cloud platforms (GCP, AWS, Azure) for machine learning workloads, balancing cost efficiency with performance.',
    highlights: [
      'Designed evaluation across multiple cloud providers with cost and performance trade-offs.',
      'Relevant to Google Cloud and Salesforce Einstein AI deployment strategies.',
    ],
  },
  {
    title: 'Car Sales Portal — Salesforce Web Application',
    description:
      'Salesforce-based web portal designed for multiple user roles, enabling customers, sales agents, and managers to collaborate around vehicle sales.',
    highlights: [
      'Collaborated on a portal supporting Customers, Sales Agents, and Sales Managers with role-specific access.',
      'Enabled customers to browse a dynamic vehicle catalog and access a knowledge base for product information.',
      'Built features for sales reps to place orders, view inventory, and track availability and order history.',
      'Added tools for sales managers including feedback review, performance dashboards, and team oversight.',
      'Applied Salesforce admin concepts like custom objects, workflows, validation rules, and permission sets.',
      'Developed responsive UIs using Lightning Web Components (LWC) for a clean, consistent experience.',
    ],
  },
  {
    title: 'Cryptix ’23 Symposium Website',
    description:
      'Website for a college symposium for the CSE and ADS departments.',
    highlights: [
      'Designed and built a responsive single-page site using HTML, CSS, and Bootstrap.',
      'Used animations and modern layout techniques to make schedules and event information easy to scan.',
      'Deployed the site publicly so attendees could quickly find event details.',
    ],
  },
]

export const conferences = [
  // Add real entries here when you have them; for now we keep this gracefully minimal
]

