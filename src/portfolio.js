const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Imene KOLLI | Portfolio",
  description:
    "A Data Scientist with a Master's degree in Applied Statistics who thrives to create AI-based solutions using machine learning along with Natural Language Processing",
  og: {
    title: "Imene Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Hello!",
  sub: "Imene KOLLI",
  logo_name: "Imene KOLLI",
  resumeLink: "https://drive.google.com/file/d/19Y6VqLjncHbmL8nfNFqTkD9rA6uYfaei/view?usp=sharing",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/imenekolli/",
    },
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/imene-swaan",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/imene0swaaaan",
    },
    {
      siteName: "Sololearn",
      iconifyClassname: "simple-icons:sololearn",
      style: {
        color: "white",
      },
      profileLink: "https://www.sololearn.com/profile/16182357",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.hackerrank.com/imenekolli",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable Machine learning & Deep learning models",
        "⚡ Experience in working with NLP & Sentiment analysis projects",
        "⚡ Hands-on experience with Data cleaning, processing, & analysing ",
      ],
      softwareSkills: [
        {
          skillName: "SAS",
          icon_url: "sas.png",
        },
        {
          skillName: "XLstat",
          icon_url: "xlstat.png"
          
        },
      ],
    },
    {
      title: "Statistics",
      fileName: "FullStackImg",
      skills: [
        "⚡ Analyze and better understand data, and solve complex business and research problems.",
        "⚡ Ensured accurate data visualization and interpretation using various computer software and applications",
        "⚡ Produced final statistics reports outlining key project insights providing recommendations"],
      softwareSkills: [
        {
          skillName: "SAS",
          icon_url: "sas.png",
        },
        {
          skillName: "SPSS",
          icon_url: "spss3.png",
        }
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interfaces for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
        "⚡ Applying latest Design principles and experienced in product wireframing",
      ],
      softwareSkills: [
        {
          skillName: "SAS",
          icon_url: "sas.png",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "TEATH",
      img_path: "project-06.png",
      description:
        "A WebApp for Extracting Text from Images and applying various thresholding methods with sentiment analysis using TextBlob",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "TextBlob",
          color: "#820032",
        },
        {
          lang: "OpenCV",
          color: "#00a100",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://teath.herokuapp.com ",
      code: "https://github.com/rohankokkula/TEATH",
      linkcolor: "white",
    },

    {
      title: "Voice Gender Detection",
      img_path: "voice.gif",
      description:
        "A streamlit webapp which detects user's gender and emotion based on realtime audio input.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "tensorflow",
          color: "#4257f5",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "NeuralViz",
      img_path: "neural.gif",
      description:
        "A webapp to visualize Neural Networks based on no. of layers and neurons, calculate Loss and understand math behind Back Propagation algo.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "numpy",
          color: "#8700b0",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://neuralviz.herokuapp.com/",
      code: "https://github.com/rohankokkula/neuralviz",
      linkcolor: "white",
    },
    {
      title: "Semantic Search APP",
      img_path: "project-03.png",
      description:
        "Demo of OpenAI's GPT-3 model on Semantic search using streamlit.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Youtube Thumbnail Generator & AutoUploader",
      img_path: "project-02.png",
      description:
        "A python streamlit webapp to automate generating & uploading youtube thumbnails using Youtube v3 API",
      tags: [
        {
          lang: "internal project",
          color: "red",
        },
        {
          lang: "youtube v3 api",
          color: "red",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },

    {
      title: "Newsearcher",
      img_path: "news.gif",
      description:
        "Enter your search keyword and get a summary of news weblinks with images without actually opening the links.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "newspaper3k",
          color: "#303030",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "nltk",
          color: "#051c61",
        },
      ],
      link: "https://newsearcher.herokuapp.com/",
      code: "https://github.com/rohankokkula/Newsearcher",
      linkcolor: "white",
    },
    {
      title: "ActiWeight",
      img_path: "acti.gif",
      description:
        "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
      code: "https://github.com/rohankokkula/Actiweight",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Growth Developer",
        image: "bp.png",
        subtitle: "Botpress",
        date: "July 2021 - present",
        content: [
          "Used T5 Transformer Model to build a Question Answering Model which generates questions based on Keywords extracted (WordNet, Sense2Vec) from studyshot notes.",
          "Built an MCQ Generation model using BERT",
          "Developed a personalized Chatbot using Rasa (Botfront.io).",
          "Created an Automatic Thumbnail Generator & Uploader for our youtube videos using Youtube v3 API",
          "Worked on OpenAI's semantic search engine and it's various APIs",
          "Created a Clean MaterialUI Design for prototyping and design fixing before production-ready of APP",
          "Created FrontEnd components for StudyShot website",
          "Worked on recommendation system for concept notes and questions based on student's behavior on our Flutter App(tracking)",
        ],
      },
      {
        title: "Data Scientist",
        image: "nactus.png",
        subtitle: "Nactus India Services Private Limited",
        date: "July 2020 - June 2021",
        content: [
          "Used T5 Transformer Model to build a Question Answering Model which generates questions based on Keywords extracted (WordNet, Sense2Vec) from studyshot notes.",
          "Built an MCQ Generation model using BERT",
          "Developed a personalized Chatbot using Rasa (Botfront.io).",
          "Created an Automatic Thumbnail Generator & Uploader for our youtube videos using Youtube v3 API",
          "Worked on OpenAI's semantic search engine and it's various APIs",
          "Created a Clean MaterialUI Design for prototyping and design fixing before production-ready of APP",
          "Created FrontEnd components for StudyShot website",
          "Worked on recommendation system for concept notes and questions based on student's behavior on our Flutter App(tracking)",
        ],
      },
      {
        title: "Machine Learning Intern",
        image: "listnr.jpeg",
        subtitle: "Listnr",
        date: "April 2020 - June 2020",
        content: [
          "Intensive research on Human-like Speech Synthesis(Text-to-speech)",
          "Worked with Tensorflow WaveNet (Generative Neural Network)",
          "Had Hands-on with TacoTron2, FastSpeech2 & MozillaTTS API",
          "Implemented voice cloning architecture (WaveGlow) which clones input voices based on parsed text.",
        ],
      },
      {
        title: "Data Science Intern",
        image: "ineuron.png",
        subtitle: "iNeuron.ai",
        date: "Nov 2020 - January 2021",
        content: [
          "Data Cleaning & Data Annotation using LabelMe & LabelImg for the object detection tasks",
          "Used YOLO v5 on Fire Detection Project",
        ],
      },
      {
        title: "Summer Analytics Participant",
        subtitle: "IIT Guwahati",
        image: "iitg.svg",
        date: "April 2020 - June 2020",
        content: [
          "Learnt & applied various Machine Learning libraries",
          "Had hands-on with Data Visualization techniques using matplotlib, plotly, streamlit",
          "Understood and applied Neural networks using Tensorflow and finally competed in Kaggle Hackathon ranking 135 (top 16 percentile) among 854 Kaggle participants",
          "Ranked 85 out of 1500+ students for overall performance.",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor of Engineering in Information Technology",
          subtitle: "Vidyalankar Institute of Technology, Mumbai",
          date: "2016 - 2020",
          content: ["CGPA: 8.06/10"],
          image: "vit.png",
          
        },
        {
          title: "Higher Secondary Certificate [HSC]",
          subtitle: "Dr. Antonio Da Silva Technical Jr. College, Mumbai",
          date: "2014 - 2016",
          content: ["Precentage: 80%"],
          image: "bp.png",
        },
      ],
    },
    {
      title: ["Ranks and Achivements"],
      data: [
        {
          title: "Ranks",
          image: "bp.png",
          content: [
            "#135/854 in Summer Analytics Kaggle Competition by IITG",
            "#113/5064 in CV-NLP Hackathon by HackerEarth",
          ],
        },
        {
          title: "Achievements",
          image: "bp.png",
          content: [
            "Designing Team Head at ACM-VIT",
            "5⭐ Gold Badges for Python & Problem Solving at HackerRank ",
            "Tableau Analyst & Consumer Badge by Tableau Official",
          ],
        },
      ],
    },
    {
      title: ["Freelance Work"],
      data: [
        {
          title: "Consultancy Website",
          image: "bp.png",
          subtitle: "kidsworldeducationconsultants.com",
          content: [
            "Created and hosted a website for consultancy providers in Kids Education Domain",
          ],
        },
        {
          title: "Portfolio Website",
          subtitle: "pranavphulware.netlify.app",
          image: "bp.png",
          content: [
            "Built a personal Filmography portfolio for a friend and later hosted it at Netlify",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Tableau Analyst",
      subtitle: "Tableau",
      logo_path: "tabana-01.png",
      certificate_link:
        "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Tableau Consumer",
      subtitle: "Tableau",
      logo_path: "tabcon-01.png",
      certificate_link:
        "https://www.credly.com/badges/e5befe7b-2eec-486f-b77e-bd2458c18b26/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Problem solving",
      subtitle: "HackerRank",
      logo_path: "problem-01.png",
      certificate_link: "https://www.hackerrank.com/rohankokkula",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Python",
      subtitle: "HackerRank",
      logo_path: "python-01.png",
      certificate_link: "https://www.hackerrank.com/rohankokkula",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Certificate of Merit",
      subtitle: "Summer Analytics | IIT Guwahati",
      logo_path: "iitg-01.png",
      certificate_link:
        "https://drive.google.com/file/d/1cnJUb79Ycn8hDnN0xB7Xm5eZ5zn24UPY/view?usp=sharing",
      alt_name: "IITG",
      color_code: "#000000",
    },
    {
      title: "Tableau Desktop Qualified Associate",
      subtitle: "SimpliLearn",
      logo_path: "simplilearn-01.png",
      certificate_link: "https://certificates.simplicdn.net/share/1723378.pdf",
      alt_name: "Simplilearn",
      color_code: "#000000",
    },
    {
      title: "Question Generation using Transformers",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-b17c4c21-91e3-4f8b-b9c2-259468910985/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "Machine Learning",
      subtitle: "Stanford University",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/B5T96FW3DAX7",
      alt_name: "Stanford University",
      color_code: "#000000",
    },
    {
      title: "Data Visualization",
      subtitle: "University of Michigan",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/3F8B7AS9AZH4",
      alt_name: "University of Michigan",
      color_code: "#000000",
    },
    {
      title: "Data Scientist Career Track",
      subtitle: "DataCamp",
      logo_path: "datacamp-01.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/track/29f2ddab3fbfd0a470713a19c729c0f9d89c88aa",
      alt_name: "DataCamp",
      color_code: "#000000",
    },
    {
      title: "PowerBI Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/PB009929.pdf",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Tableau Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/TB000634.pdf",
      alt_name: "Tableau",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Prabhadevi, Mumbai-400025",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9022817659",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://www.github.com/rohankokkula/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rohankokkula/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:rohankokkula01@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/soberohan/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
