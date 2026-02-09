
import { Project, Experience, Skill, Education, Certification } from './types';

export const CHARLES_INFO = {
  name: "Charles Galea",
  title: "Data Scientist & Biomedical Researcher",
  email: "galea.charlesa@gmail.com",
  location: "Melbourne, Australia",
  bio: "Organized, energetic, and highly resourceful Data Scientist with 5 years of experience at Ford Motor Company and a prior 10+ year career as a biomedical researcher. My background combines technical expertise in machine learning and statistical modeling with deep domain knowledge in scientific experimental design.",
  summary: "Founder of BioPort AI with a PhD in Biochemistry. Proven track record of delivering business value, including a 30% reduction in warranty costs and engineering time at Ford via NLP and Dashboarding solutions. Skilled at prioritizing strategies to ensure delivery of sustainable and ethical business outcomes.",
  links: {
    linkedin: "https://www.linkedin.com/in/charles-galea-data-scientist/",
    github: "https://github.com/capgalea?tab=repositories"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "bioscout",
    title: "BioPort AI",
    description: "Founder of an information portal for the Australian Biotechnology sector. Developed Agentic AI (RAG-LLM & multi-agent) models for answering general queries and generating reports on clinical trials, patents, and drug pipelines.",
    tags: ["Agentic AI", "RAG", "LLMs", "Bioinformatics"],
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop",
    link: "https://bioport-ai-792979449034.us-west1.run.app/",
    metrics: [
      { label: "Role", value: "Founder" },
      { label: "Tech", value: "Multi-Agent" }
    ]
  },
  {
    id: "clinical-chatbot",
    title: "Clinical Trials Information Chatbot",
    description: "Agentic AI Chatbot that retrieves information from the clinical_trial.gov database and related news articles. Output includes a brief summary of the data, a data table and references.",
    tags: ["Python", "React", "Agentic AI", "Docker", "API", "Google Cloud Run", "Vercel"],
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    link: "https://multi-agent-biotech-chatbot-792979449034.us-central1.run.app/",
    metrics: [
      { label: "Year", value: "2025" },
      { label: "Type", value: "Professional" }
    ]
  },
  {
    id: "melb-city-trees",
    title: "Melbourne City Trees App",
    description: "Streamlit app showing the current distribution of trees across Melbourne City. The app provides information regarding species, vicinity to local landmarks (park, street, etc).",
    tags: ["Python", "Streamlit", "API"],
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    link: "https://citytreesapp-wpriqxrgfgpmc2woh3gyaf.streamlit.app/",
    metrics: [
      { label: "Year", value: "2024" },
      { label: "Type", value: "Personal" }
    ]
  },
  {
    id: "melb-bike-traffic",
    title: "Melbourne Bike Trail and Traffic App",
    description: "This RShiny app has been developed to investigate how bicycle traffic is affected by seasonal and shorter-term weather conditions in Melbourne.",
    tags: ["R", "RShiny"],
    imageUrl: "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?q=80&w=800&auto=format&fit=crop",
    link: "https://cgalea.shinyapps.io/melb_bike_trails/",
    metrics: [
      { label: "Year", value: "2024" },
      { label: "Type", value: "Personal" }
    ]
  },
  {
    id: "knowledge-app",
    title: "Test Your Knowledge App",
    description: "This RShiny app is a Question and Answer game to test the users general knowledge.",
    tags: ["R", "RShiny"],
    imageUrl: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=800&auto=format&fit=crop",
    link: "https://019547a2-0315-8740-e330-6c31af1cdd0f.share.connect.posit.cloud/",
    metrics: [
      { label: "Year", value: "2023" },
      { label: "Type", value: "Personal" }
    ]
  },
  {
    id: "device-transmittal",
    title: "Device Transmittal Dashboard",
    description: "Dashboard providing key metrics and KPIs for the electrical integration team at Ford of Australia.",
    tags: ["Qlik Sense", "Alteryx"],
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    metrics: [
      { label: "Year", value: "2023" },
      { label: "Client", value: "Ford" }
    ]
  },
  {
    id: "innovation-dashboard",
    title: "Innovation Dashboard",
    description: "Dashboard providing key metrics and KPIs for innovation projects at Ford of Australia team. Recognized with a Certificate of Appreciation under the Rewards and Recognition Program.",
    tags: ["Qlik Sense", "Alteryx"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    metrics: [
      { label: "Year", value: "2022" },
      { label: "Award", value: "Rewards and Recognition Program" }
    ]
  },
  {
    id: "part-volume-dashboard",
    title: "Part-Volume Entry Dashboard",
    description: "Dashboard to enable D&R engineers to quickly determine part production volumes and volumes required for each vehicle line.",
    tags: ["Qlik Sense", "Alteryx"],
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800&auto=format&fit=crop",
    metrics: [
      { label: "Year", value: "2021" },
      { label: "Client", value: "Ford" }
    ]
  },
  {
    id: "ford-warranty",
    title: "Warranty Cost Reduction",
    description: "Created data pipelines and dashboards to identify root causes for warranty issues. Facilitated a 30% reduction in warranty costs for the 2020-2021 year by enabling management to identify roadblocks and implement fixes timely.",
    tags: ["Data Pipeline", "Dashboard", "Analytics"],
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    metrics: [
      { label: "Impact", value: "30% Cost Red." },
      { label: "Award", value: "Ford Asia-Pac" }
    ]
  },
  {
    id: "ford-nlp",
    title: "Automated Claims Classification",
    description: "Developed an Ensemble NLP/XGBoost model to automatically categorize warranty claims. Incorporated into a production pipeline, resulting in a 30% reduction in engineering time spent on categorization.",
    tags: ["NLP", "XGBoost", "Python", "Automation"],
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop", 
    metrics: [
      { label: "Efficiency", value: "30% Time Saved" },
      { label: "Award", value: "VCSE Innovation" }
    ]
  },
  {
    id: "lease-feedback",
    title: "Lease Vehicle Quality Tool",
    description: "Identified a major quality issue affecting the majority of lease vehicles by creating a Python-based feedback tool. The insights led to a permanent fix, saving significant warranty costs and preventing customer issues.",
    tags: ["Python", "Visualization", "Quality Control"],
    imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop", 
    metrics: [
      { label: "Outcome", value: "Major Fix" },
      { label: "Status", value: "Production" }
    ]
  },
  {
    id: "prog-gateway",
    title: "Real-Time Program Gateway",
    description: "Built a centralized dashboard using Google Cloud Platform (BigQuery) to replace manual Excel timelines. Provided engineers with real-time data in an easy-to-read format, now used globally.",
    tags: ["GCP", "BigQuery", "SQL", "Dashboard"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", 
    metrics: [
      { label: "Scale", value: "Global Use" },
      { label: "Data", value: "Real-Time" }
    ]
  },
  {
    id: "proto-weight",
    title: "Prototype Weight Prediction",
    description: "Developed a Random Forest Regression model to predict prototype part weights, achieving 5-10% accuracy. Helped avoid unnecessary incorporation of heavier duty parts and reduced vehicle costs.",
    tags: ["Random Forest", "Scikit-Learn", "Regression"],
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop", 
    metrics: [
      { label: "Accuracy", value: "5-10% Error" },
      { label: "Model", value: "Random Forest" }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "BioPort AI",
    role: "Founder",
    period: "Jul 2024 – Present",
    description: [
      "Founded an information portal for the Australian Biotechnology sector to enhance academic/industry collaboration.",
      "Developed Agentic AI (RAG-LLM & multi-agent) models for generating reports on clinical trials, drug pipelines, and patents.",
      "Created a Drug Discovery site for analyzing biochemical and drug chemical structures."
    ]
  },
  {
    company: "Ford Motor Company",
    role: "Data Scientist",
    period: "Feb 2020 – Jun 2024",
    description: [
      "Achieved 30% reduction in warranty costs (2020-2021) by creating dashboards to identify root causes and prioritize fixes.",
      "Reduced engineering time by 30% by developing an Ensemble NLP/XGBoost model to automatically categorize warranty claims.",
      "Developed real-time dashboards using GCP/BigQuery to monitor program gateways, replacing manual Excel processes.",
      "Built a feedback tool that identified major quality issues in lease vehicles, leading to significant cost savings.",
      "Engaged stakeholders to identify data-based strategies prioritizing customer safety and satisfaction."
    ]
  },
  {
    company: "Ford Motor Company",
    role: "Data Science Intern",
    period: "Jul 2019 – Oct 2019",
    description: [
      "Developed a Random Forest Regression model to predict prototype part weights to within 5-10% of actual values.",
      "Processed dataset from vehicle teardown database (A2Mac1) and optimized various ML models (Regularized regression, Ridge, Lasso, Elastic Nets)."
    ]
  },
  {
    company: "Monash Institute of Pharm. Sciences",
    role: "Senior Postdoctoral Fellow",
    period: "Dec 2010 – Apr 2019",
    description: [
      "Conducted genetic studies on neurodegenerative diseases (Friedreich ataxia) and the DCC gene's role in split-brain syndrome.",
      "Developed drugs for autoimmune diseases and novel antibiotics targeting resistant bacteria.",
      "Published 14 articles in peer-reviewed scientific journals and a book chapter."
    ]
  },
  {
    company: "Walter and Eliza Hall Institute",
    role: "Senior Research Fellow",
    period: "Feb 2008 – Dec 2010",
    description: [
      "Developed novel therapeutics based on cone snail toxins for the treatment of Multiple Sclerosis.",
      "Published 3 papers in peer-reviewed scientific journals."
    ]
  }
];

export const SKILLS: Skill[] = [
  // Languages
  { name: "Python", level: 98, category: "Languages" },
  { name: "R", level: 90, category: "Languages" },
  { name: "SQL", level: 88, category: "Languages" },
  
  // ML & AI
  { name: "Agentic AI / RAG", level: 95, category: "ML/DL" },
  { name: "Scikit-Learn / Keras", level: 92, category: "ML/DL" },
  { name: "NLP / XGBoost", level: 90, category: "ML/DL" },
  { name: "LangGraph", level: 85, category: "ML/DL" },

  // Scientific
  { name: "Experimental Design", level: 95, category: "Scientific" },
  { name: "Proteomics / Metabolomics", level: 90, category: "Scientific" },
  { name: "Drug Discovery", level: 88, category: "Scientific" },
  { name: "Statistical Analysis", level: 92, category: "Scientific" },

  // Visualization & Apps
  { name: "Streamlit / RShiny", level: 92, category: "Visualization" },
  { name: "Qlik Sense", level: 88, category: "Visualization" },
  { name: "Flask", level: 85, category: "Visualization" },

  // Tools
  { name: "Git / GitHub", level: 90, category: "Tools" },
  { name: "Jira / Confluence", level: 88, category: "Tools" },
  { name: "Selenium (Automation)", level: 85, category: "Tools" },
  { name: "Docker", level: 80, category: "Tools" },

  // Cloud
  { name: "GCP", level: 85, category: "Cloud" },
  { name: "Hadoop", level: 80, category: "Cloud" },
];

export const EDUCATION: Education[] = [
  {
    degree: "Master of Data Science",
    institution: "Royal Melbourne Institute of Technology (RMIT)",
    year: "Distinction"
  },
  {
    degree: "PhD, Biochemistry",
    institution: "University of Queensland",
    year: ""
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "AI Pathfinder Program", issuer: "SMEC AI" },
  { name: "Introduction to LangGraph", issuer: "LangChain Academy", id: "89jjmq2xnm" },
  { name: "Deep Learning Specialization", issuer: "Coursera", id: "F93WV5XKDD2D" },
  { name: "Google Cloud Big Data & ML Fundamentals", issuer: "Coursera", id: "PANX6DRATJ45" },
  { name: "Statistical Learning", issuer: "Stanford Online", id: "6485c12..." },
  { name: "GenAI Apps with Gemini and Streamlit", issuer: "Google" },
  { name: "Intro to Snowflake", issuer: "Coursera", id: "KUMDKCKQ08VS" }
];
