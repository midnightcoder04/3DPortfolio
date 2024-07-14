import {
    twitter,
    contact,
    css,
    discord,
    leetcode,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    sass,
    tailwindcss,
    python,
    java,
    c,
    mysql,
    flask,
    pg1,
    pg2,
    pg3,
    pg4,
    pg5,
    pg6    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySqL",
        type: "Database",
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Backend",
    }
];

export const experiences = [
    // {
    //     title: "Python Programmer?",
    //     company_name: "xxxxxxx",
    //     icon: leetcode,
    //     iconBg: "#3ccbe1",
    //     date: "March 20XX - April 20XX",
    //     points: [
    //         "Developing and maintaining web applications using xxxxx.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Data Science?",
    //     company_name: "xxxxxx",
    //     icon: pg5,
    //     iconBg: "#fbc3bc",
    //     date: "Jan 20XX - Feb 20XX",
    //     points: [
    //         "Developing and maintaining web applications using xxxxx.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "xxxxx",
    //     icon: discord,
    //     iconBg: "#b7e4a7",
    //     date: "Jan 20XX - Jan 20XX",
    //     points: [
    //         "Developing and maintaining web applications using xxxxx.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "xxxxxx",
    //     icon: pg4,
    //     iconBg: "#aa96da",
    //     date: "Jan 20XX - Present",
    //     points: [
    //         "Developing and maintaining web applications using xxxxx.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'Leetcode',
        iconUrl: leetcode,
        link: 'https://leetcode.com/',
    },
    {
        name: 'Twitter',
        iconUrl: twitter,
        link: 'https://twitter.com/',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pg1,
        theme: 'btn-back-red',
        name: '2D Portfolio website',
        description: 'Developed a web application that is responsive and has night mode feature (Do check that out). Used the basics of html,css,js in heavy amounts.',
        link: 'https://midnightcoder04-portfolio.vercel.app/#home',
    },
    {
        iconUrl: pg2,
        theme: 'btn-back-green',
        name: 'Patient-Doctor Consultancy',
        description: 'Created a full-stack website with Nodejs, Python, Flask and MySQL as backend in 2 days time as a part of a freelance task I was assigned.',
        link: 'https://github.com/midnightcoder04/high/tree/main/Patient-Doctor%20Consultancy',
    },
    {
        iconUrl: pg3,
        theme: 'btn-back-blue',
        name: 'Solar Predict',
        description: 'Created a machine learning model that leverages past solar panel energy output to weather data and other factors to predict future power output.',
        link: 'https://github.com/midnightcoder04',
    },
    {
        iconUrl: pg4,
        theme: 'btn-back-pink',
        name: 'Pikachu web-extension',
        description: 'A simple web-extension made out of curiosity of add-on workings. It displays Pikachu images from the internet.',
        link: 'https://github.com/midnightcoder04p',
    },
    {
        iconUrl: pg5,
        theme: 'btn-back-black',
        name: 'ASCI Website',
        description: 'Developed a website for listings some basic information about a community. Static webpage for the purpose of providal of information.',
        link: 'https://github.com/midnightcoder04',
    },
    {
        iconUrl: pg6,
        theme: 'btn-back-yellow',
        name: 'Bizzaro Application',
        description: 'An app that was orginally intended to connect local suppliers with local people and markets, but ended with just a UI and information.',
        link: 'https://github.com/midnightcoder04',
    }
];