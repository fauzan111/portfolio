/**
 * Single source of truth for all resume / portfolio content.
 *
 * The UI components only read from here. When you replace the visual design
 * later, keep this file as-is (or extend it) and rebuild the components around
 * the same data shape — no content edits needed.
 */

export type Profile = {
  name: string;
  title: string;
  location: string;
  phones: string[];
  email: string;
  links: { label: string; href: string }[];
  objective: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  context?: string;
  location: string;
  period: string;
  highlights: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  note?: string;
  period: string;
};

export type ProjectItem = {
  name: string;
  description: string;
  tags?: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type LanguageItem = {
  name: string;
  level: string;
};

export const profile: Profile = {
  name: "Fauzan Ejaz",
  title: "Data Scientist",
  location: "Napoli, Italy",
  phones: ["+39 342 1014345", "+91 9832887252"],
  email: "ejazfauzan14@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/fauzan111" },
    { label: "Website", href: "https://fauzan-ejaz.runit.in" },
  ],
  objective:
    "Data-driven professional with hands-on experience in data analysis, statistical modeling, and machine learning. Transformed into a Data Scientist. Skilled in Python, SQL, and predictive analytics with a strong foundation in automation and MLOps practices. Passionate about transforming complex data into actionable insights that enhance decision-making, optimize performance, and drive business growth within collaborative, innovation-focused teams.",
};

export const skills: SkillGroup[] = [
  {
    category: "Technical",
    items: [
      "Python",
      "R",
      "SQL",
      "Scala",
      "Apache Spark",
      "ETL Pipelines",
      "Data Warehousing",
      "AWS (S3, EC2, Lambda, Redshift)",
      "Machine Learning",
      "Generative AI",
      "Big Data Processing",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Power BI",
      "Model Optimization",
      "CI/CD",
      "Git",
      "Agile & Scrum",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Analytical Thinking",
      "Problem Solving",
      "Ownership & Accountability",
      "Collaboration & Communication",
      "Time Management",
      "Adaptability",
      "Self-Motivated & Goal-Oriented",
    ],
  },
];

export const languages: LanguageItem[] = [
  { name: "Italian", level: "B1" },
  { name: "English", level: "C1" },
  { name: "Arabic", level: "A1" },
  { name: "Hindi", level: "C1" },
  { name: "Urdu", level: "C1" },
  { name: "Bengali", level: "B1" },
];

export const experience: ExperienceItem[] = [
  {
    role: "Data Scientist",
    company: "GEKO S.p.A",
    context: "Energy & Ambient",
    location: "Naples, Italy",
    period: "Jul 2025 – Present",
    highlights: [
      "Developed a production-ready time series forecasting pipeline using Python, Pandas, Scikit-learn, and XGBoost, predicting hourly electricity consumption across Italian zones with improved accuracy through Optuna hyperparameter tuning and temporal cross-validation.",
      "Implemented unsupervised clustering (K-Means, DTW, HAC) on zone-wise consumption and weather patterns to identify region-specific behaviours, enabling cluster-based model training that improved RMSE and R² performance by over 15% compared to baseline models.",
      "Engineered advanced features including lag variables, rolling statistics, Fourier seasonality terms, and weather-based indicators (temperature, humidity, altitude), and automated model training, evaluation, and saving workflows for each cluster — preparing the pipeline for production deployment and monitoring.",
    ],
  },
  {
    role: "Data Analyst",
    company: "LTIMindtree",
    location: "Kolkata, India",
    period: "Jan 2022 – Oct 2023",
    highlights: [
      "Utilized SQL for database querying and data extraction, Python for data wrangling and analysis, and Excel for data manipulation and visualization.",
      "Developed and maintained automated reporting dashboards using Tableau to track key performance indicators and metrics.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Master's in Data Science",
    institution: "University of Napoli Federico II, Italy",
    period: "2023 – 2025",
  },
  {
    degree: "Bachelor of Computer Application",
    institution: "Asansol Engineering College",
    note: "Grade 9/10",
    period: "2018 – 2021",
  },
];

export const projects: ProjectItem[] = [
  {
    name: "End-to-End Visual Quality Control System (MLOps)",
    description:
      "Designed an end-to-end visual quality control system for manufacturing, leveraging YOLOv8 and PyTorch to achieve 78.9% mAP on the MVTec AD dataset. Engineered an automated data pipeline handling versioning and segmentation-mask-to-bounding-box conversion for reproducibility. Optimized the model for edge deployment via ONNX export, reducing inference latency on CPU, with a Streamlit dashboard and MLflow for real-time visualization and experiment tracking.",
    tags: ["YOLOv8", "PyTorch", "ONNX", "MLflow", "Streamlit"],
  },
  {
    name: "GDPR-Guardian",
    description:
      "A GDPR compliance & privacy-by-design service for the Italian/European market that automatically detects and redacts sensitive data such as the Codice Fiscale using custom Presidio recognizers and spaCy's Italian model, ensuring data safety before it reaches the database. Demonstrates full end-to-end containerization with Docker, an API gateway for data governance, and full-stack data science from custom logic to deployment.",
    tags: ["Presidio", "spaCy", "Docker", "Data Governance"],
  },
  {
    name: "Sentiment Analysis on Amazon Food Reviews (BERT/RoBERTa)",
    description:
      "Preprocessed 360K+ Amazon food reviews using NLP techniques (tokenization, stop-word removal, TF-IDF). Fine-tuned a transformer-based BERT/RoBERTa model to classify sentiment into positive, neutral, and negative, achieving an 88% F1-score and outperforming VADER and baseline models. Handled imbalanced classes, implemented multilingual detection, and served the model with MLflow plus live monitoring via Weights & Biases in a Docker-ready deployment.",
    tags: ["BERT", "RoBERTa", "NLP", "MLflow", "Weights & Biases"],
  },
  {
    name: "Drug Store Price Prediction",
    description:
      "Analyzed sales data for Rossmann, a major German drugstore chain with a strong European presence, using an open-source Rossmann dataset to surface insights that enhance the company's decision-making and operational strategies.",
    tags: ["Forecasting", "EDA", "Machine Learning"],
  },
  {
    name: "Gesture Detection — Volume Control",
    description:
      "Enables gesture-based control of computer volume using hand tracking. A hand-tracking module detects key landmarks to recognize gestures; moving the hand closer or farther adjusts the volume for a seamless, hands-free experience, built with a modular approach that simplifies development.",
    tags: ["Computer Vision", "Hand Tracking", "Python"],
  },
  {
    name: "AI-Powered Commerce Agent",
    description:
      "An AI-powered commerce agent built with LangGraph and the OpenAI API to automate product recommendations, order lookups, and policy-based cancellations. Implemented strict policy enforcement, traceable decision logging, and modular testing for intelligent and secure e-commerce interactions.",
    tags: ["LangGraph", "OpenAI API", "Agents"],
  },
];
