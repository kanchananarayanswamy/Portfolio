export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  featured?: boolean;
  technologies: string[];
  highlights: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  companyOrFocus: string;
  period: string;
  type: string;
  isFeatured?: boolean;
  focusTags: string[];
  responsibilities: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  isPrimary?: boolean;
  coursework?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuerCategory?: string;
  issued: string;
  credentialLabel: string;
  badgeColor?: string;
  fileUrl: string;
  credentialUrl?: string;
  tags: string[];
  description: string;
}

export interface ProblemSolvingPlatform {
  name: string;
  metric: string;
  focus: string;
  url: string;
  color: string;
  badge: string;
}

export const PERSONAL_INFO = {
  name: "Kanchana P",
  location: "Bangalore, India",
  primaryRole: "Aspiring Data Scientist",
  secondaryRole: "Technical Trainer",
  otherRoles: [
    "Machine Learning Enthusiast",
    "Python Developer",
    "Data Science Enthusiast"
  ],
  email: "kanchanap595@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/forkanchana/",
    github: "https://github.com/kanchananarayanswamy",
    leetcode: "https://leetcode.com/u/kanchanapnarayanaswamy/",
    hackerrank: "https://www.hackerrank.com/profile/kanchanap595",
    codechef: "https://www.codechef.com/users/kanchanap",
    pinterest: "https://pin.it/5CxIiywFA",
    quora: "https://www.quora.com/profile/Kanchana-P-25"
  },
  tagline: "Turning data into meaningful insights and complex technical concepts into clear, simple ideas.",
  quote: "Learn it. Understand it. Simplify it. Teach it.",
  aboutText: [
    "Hi! I'm Kanchana — a Computer Science graduate passionate about Data Science, Machine Learning, and technical education. I love exploring datasets to uncover patterns, training predictive models, and building software that solves practical problems.",
    "My experience as a Technical Trainer has deeply influenced how I build and think. Mentoring students in Python and core programming fundamentals taught me the importance of active listening, breaking down intricate topics into bite-sized steps, and writing clean, readable code.",
    "Whether I'm analyzing data, developing algorithms, or helping learners master technical concepts, I bring curiosity, patience, and a constant drive to grow."
  ]
};

export const ABOUT_HIGHLIGHTS = [
  {
    icon: "Teacher",
    title: "Technical Mentorship",
    desc: "Guiding learners through Python, logic building, and hands-on coding",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: "Graduation",
    title: "Academic Background",
    desc: "B.E. in Computer Science Engineering with a specialization in Data Science",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: "BarChart",
    title: "Data Science & ML",
    desc: "Hands-on experience in exploratory data analysis and predictive modeling",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: "Code",
    title: "Python Stack",
    desc: "Proficient with Python, SQL, Pandas, NumPy, Scikit-Learn, and Git",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: "Puzzle",
    title: "Analytical Approach",
    desc: "Decomposing complex real-world problems into structured, modular solutions",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: "Lightbulb",
    title: "Clear Communication",
    desc: "Translating deep technical concepts into intuitive, easy-to-grasp explanations",
    color: "from-cyan-500 to-blue-600"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Technical Trainer",
    role: "Technical Trainer",
    companyOrFocus: "Python | Data Structures & Algorithms | Problem Solving",
    period: "February - July 2026",
    type: "Training & Mentorship",
    isFeatured: true,
    focusTags: ["Python", "Data Structures & Algorithms", "Problem Solving", "Mentorship", "Teaching"],
    responsibilities: [
      "Conducted technical training sessions on Python, Data Structures & Algorithms, and problem-solving.",
      "Explained complex programming concepts using simple examples and structured approaches.",
      "Adapted explanations according to different learning levels and understanding abilities.",
      "Helped students approach coding problems by breaking them into smaller, manageable steps.",
      "Developed strong communication, presentation, mentoring, and problem-solving skills."
    ]
  },
  {
    id: "exp-2",
    title: "Data Science Intern",
    role: "Data Science Intern",
    companyOrFocus: "Data Analysis | Machine Learning | Python",
    period: "January - May 2026",
    type: "Industry Internship",
    isFeatured: false,
    focusTags: ["Data Preprocessing", "EDA", "Feature Engineering", "Machine Learning", "Model Evaluation"],
    responsibilities: [
      "Worked with real-world datasets involving data cleaning, preprocessing, and exploratory data analysis.",
      "Developed and evaluated machine learning models using Python, Pandas, NumPy, and Scikit-learn.",
      "Worked with mentors to understand requirements and develop data-driven solutions."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming",
    iconName: "Code2",
    skills: [
      "Python",
      "C"
    ]
  },
  {
    category: "Data Science",
    iconName: "BrainCircuit",
    skills: [
      "Pandas",
      "NumPy",
      "Exploratory Data Analysis",
      "Data Preprocessing",
      "Feature Engineering",
      "Statistical Analysis"
    ]
  },
  {
    category: "Machine Learning",
    iconName: "Cpu",
    skills: [
      "Scikit-learn",
      "Supervised Learning",
      "Unsupervised Learning",
      "Model Evaluation",
      "TensorFlow",
      "Keras",
      "Deep Learning",
      "CNN"
    ]
  },
  {
    category: "Data Visualization",
    iconName: "PieChart",
    skills: [
      "Matplotlib",
      "Seaborn",
      "Power BI",
      "Tableau"
    ]
  },
  {
    category: "Databases",
    iconName: "Database",
    skills: [
      "PostgreSQL"
    ]
  },
  {
    category: "Tools & Frameworks",
    iconName: "Wrench",
    skills: [
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "VS Code",
      "Anaconda",
      "Streamlit",
      "OpenCV",
      "Antigravity"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "fraud-detection",
    title: "Healthcare Provider Fraud Detection",
    category: "Machine Learning & Healthcare",
    description: "Developed a supervised binary classification model to identify potentially fraudulent healthcare providers using healthcare claim data.",
    featured: true,
    technologies: ["Python", "Pandas", "Scikit-learn", "Random Forest", "Streamlit"],
    metrics: [
      { label: "Model Accuracy", value: "93.99%" },
      { label: "Precision Rate", value: "73.08%" },
      { label: "F1-Score", value: "63.69%" },
      { label: "Flagged Fraudsters", value: "83 / 1,353" }
    ],
    highlights: [
      "End-to-end data preprocessing and exploratory data analysis on complex claim datasets.",
      "Rigorous outlier analysis and provider-level feature engineering.",
      "Comprehensive benchmarking of Logistic Regression, Random Forest, KNN, and Decision Trees.",
      "Selected Random Forest for optimal precision and generalizability.",
      "Deployed model to 1,353 unseen providers, successfully flagging 83 high-risk fraudulent entities.",
      "Built an interactive Streamlit web dashboard for real-time risk assessment."
    ],
    githubUrl: "https://github.com/kanchananarayanswamy",
    demoUrl: "https://kanchanasubmission123456.streamlit.app/"
  },
  {
    id: "startup-prediction",
    title: "Startup Success Prediction",
    category: "Predictive Analytics",
    description: "Developed a machine learning model to predict startup success using business and market-related financial & organizational metrics.",
    featured: false,
    technologies: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "Seaborn"],
    highlights: [
      "Exploratory data analysis uncovering key factors influencing startup longevity.",
      "Custom feature engineering combining funding rounds, market trends, and team metrics.",
      "Rigorous model evaluation and cross-validation for robust performance.",
      "Visualized actionable business insights for investment risk assessment."
    ],
    githubUrl: "https://github.com/kanchananarayanswamy"
  },
  {
    id: "emotion-recognition",
    title: "Real-Time Emotion Recognition",
    category: "Computer Vision & Deep Learning",
    description: "Developed a CNN-based facial emotion recognition system operating in real-time via camera stream.",
    featured: false,
    technologies: ["Python", "TensorFlow", "CNN", "OpenCV"],
    metrics: [
      // { label: "Test Accuracy", value: "89%" },
      { label: "Dataset", value: "FER-2013" }
    ],
    highlights: [
      "Trained Deep Convolutional Neural Networks on the FER-2013 facial expression dataset.",
      "Achieved 89% classification accuracy across multiple facial emotion classes.",
      "Integrated OpenCV webcam feeds for low-latency real-time emotion detection.",
      "Implemented face detection bounding boxes with live probability distributions."
    ],
    githubUrl: "https://github.com/kanchananarayanswamy"
  },
  {
    id: "crime-investigator",
    title: "Crime Investigator",
    category: "Exploratory Data Analysis",
    description: "Explored multi-year crime datasets to identify meaningful geographic, temporal, and category-based patterns and trends.",
    featured: false,
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    highlights: [
      "In-depth exploratory data analysis across high-volume incident records.",
      "Pattern identification for peak crime hours, high-risk zones, and incident categories.",
      "Rich static and interactive visualizations created using Seaborn & Matplotlib.",
      "Formulated data-driven policy recommendations based on temporal trends."
    ],
    githubUrl: "https://github.com/kanchananarayanswamy"
  }
];

export const PROBLEM_SOLVING_PLATFORMS: ProblemSolvingPlatform[] = [
  {
    name: "LeetCode",
    metric: "900+ Problems Solved",
    focus: "DSA & Algorithmic Problem Solving",
    url: "https://leetcode.com/u/kanchanapnarayanaswamy/",
    color: "from-amber-500 to-yellow-600",
    badge: "900+ Solved"
  },
  {
    name: "HackerRank",
    metric: "Problem Solving Badges",
    focus: "Python & SQL Practice",
    url: "https://www.hackerrank.com/profile/kanchanap595",
    color: "from-emerald-500 to-green-600",
    badge: "Verified Skills"
  },
  {
    name: "CodeChef",
    metric: "Competitive Programmer",
    focus: "Algorithmic Problem Solving",
    url: "https://www.codechef.com/users/kanchanap",
    color: "from-amber-700 to-amber-900",
    badge: "Contest Ready"
  }
];

export const PROBLEM_SOLVING_STEPS = [
  { step: "01", title: "Understand the Problem", desc: "Analyze constraints, edge cases, input/output specifications" },
  { step: "02", title: "Break It Into Smaller Parts", desc: "Decompose complex conditions into modular sub-problems" },
  { step: "03", title: "Identify Patterns", desc: "Map requirements to known DSA patterns (Two Pointers, DP, Graphs)" },
  { step: "04", title: "Design the Approach", desc: "Formulate pseudo-code and evaluate Time & Space complexities" },
  { step: "05", title: "Write the Solution", desc: "Implement clean, maintainable Python/C code" },
  { step: "06", title: "Test & Optimize", desc: "Validate against edge cases and refine memory/time efficiency" }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.E. Computer Science Engineering — Data Science",
    institution: "Alva's Institute of Engineering and Technology",
    location: "Mangalore, India",
    period: "2022 – 2026",
    grade: "CGPA: 8.02 / 10",
    isPrimary: true,
    coursework: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Statistics",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering"
    ]
  },
  {
    degree: "PUC (Pre-University Course)",
    institution: "ST Francis Composite PU College",
    location: "Bangalore, India",
    period: "Completed",
    grade: "57.5%",
    isPrimary: false
  },
  {
    degree: "10th Standard (SSLC)",
    institution: "Anikethan Public School",
    location: "Bangalore, India",
    period: "Completed",
    grade: "90.24%",
    isPrimary: false
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-prinston-internship",
    title: "Data Science Internship",
    issuer: "Prinston Smart Engineers",
    issuerCategory: "Internship",
    issued: "2026",
    credentialLabel: "Internship Certificate",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    fileUrl: "/certificates/KANCHANA P.pdf",
    tags: ["Data Science", "Industry Internship"],
    description: "Successfully completed an industry internship in Data Science from January to May 2026."
  },
  {
    id: "cert-tcs-codevita",
    title: "TCS CodeVita Season 13 — Rank Certificate",
    issuer: "TCS",
    issuerCategory: "TCS",
    issued: "2025",
    credentialLabel: "Global Rank 7248",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    fileUrl: "/certificates/TCS_CodeVita.pdf",
    credentialUrl: "https://codevita.tcsapps.com",
    tags: ["TCS CodeVita", "Competitive Programming", "Problem Solving"],
    description: "Secured a global rank of 7248 in TCS CodeVita Season 13, demonstrating competitive programming skills."
  },
  {
    id: "cert-google-cloud-da",
    title: "Google Cloud Career Launchpad — Data Analytics",
    issuer: "Google Cloud",
    issuerCategory: "Google Cloud",
    issued: "2025",
    credentialLabel: "Google Cloud Track",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    fileUrl: "/certificates/Google_DA.pdf",
    credentialUrl: "https://cloud.google.com/learn/training",
    tags: ["Google Cloud", "Data Analytics"],
    description: "Successfully completed all courses and labs in the Google Cloud Career Launchpad Data Analytics track."
  },
  {
    id: "cert-nptel-python",
    title: "Data Analytics with Python",
    issuer: "NPTEL",
    issuerCategory: "NPTEL",
    issued: "2025",
    credentialLabel: "Course Certificate",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    fileUrl: "/certificates/Data Analytics with Python.pdf",
    credentialUrl: "https://nptel.ac.in",
    tags: ["NPTEL", "Python", "Data Analytics"],
    description: "Completed a 12-week NPTEL course focused on data analytics using Python."
  }
];

export const CURRENTLY_LEARNING = [
  {
    icon: "⚡",
    title: "Vibe Coding & AI-Assisted Development",
    desc: "Exploring AI-assisted development workflows and building applications faster with Antigravity and modern AI coding tools."
  },
  {
    icon: "🔗",
    title: "RAG Pipelines & LLM Applications",
    desc: "Learning to build retrieval-augmented generation pipelines that connect LLMs with external knowledge and documents."
  },
  {
    icon: "🤖",
    title: "Generative AI",
    desc: "Exploring LLMs, prompt engineering, AI application development, and practical Generative AI workflows."
  },
  {
    icon: "🗄️",
    title: "PostgreSQL & Advanced SQL",
    desc: "Strengthening SQL skills through complex queries, subqueries, CTEs, joins, window functions, and PostgreSQL."
  }
];

