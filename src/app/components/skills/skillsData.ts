const skills = [
    { name: 'Angular', category: 'Frontend', logo: '/skills/Angular.png' },
    { name: 'React', category: 'Frontend', logo: '/skills/React.png' },
    { name: 'Next.js', category: 'Frontend', logo: '/skills/Next.js.png' },
    { name: 'TailwindCSS', category: 'Frontend', logo: '/skills/TailwindCSS.png' },
    { name: 'JavaFX', category: 'Frontenda', logo: '/skills/javaFX.png' },
    { name: 'Java', category: 'Frontenda', logo: '/skills/Java.png' },
    { name: 'Bootstrap', category: 'Frontend', logo: '/skills/Bootstrap.png' },
    { name: 'Spring Boot', category: 'Backend', logo: '/skills/Spring.png' },
    { name: 'Node.js', category: 'Backend', logo: '/skills/Node.js.png' },
    { name: 'Express.js', category: 'Backend', logo: '/skills/Express.png' },
    { name: 'Nest.js', category: 'Backend', logo: '/skills/Nest.js.png' },
    { name: 'Symfony', category: 'Backend', logo: '/skills/Symfony.png' },
    { name: '.Net', category: 'Backend', logo: '/skills/NETcore.png' },
    { name: 'R', category: 'Tools', logo: '/skills/R.png' },
    { name: 'Python', category: 'Tools', logo: '/skills/Python.png' },
    { name: 'MySQL', category: 'Database', logo: '/skills/Mysql.png' },
    { name: 'MongoDB', category: 'Database', logo: '/skills/Mongodb.png' },
    { name: 'GitHub', category: 'Tools', logo: '/skills/GitHub.png' },
    { name: 'Postman', category: 'Tools', logo: '/skills/Postman.png' },
    { name: 'Linux', category: 'Tools', logo: '/skills/Linux.png' },
    { name: 'Docker', category: 'Tools', logo: '/skills/Docker.png' },
    { name: 'Jenkins', category: 'Tools', logo: '/skills/Jenkins.png' },
    { name: 'Prometheus', category: 'Tools', logo: '/skills/Prometheus.png' },
    { name: 'Grafana', category: 'Tools', logo: '/skills/Grafana.png' },
    { name: 'SonarQube', category: 'Tools', logo: '/skills/SonarQube.png' },
    { name: 'Power Automate', category: 'Microsoft', logo: '/skills/powerAutomate.png' },
    { name: 'Power Apps', category: 'Microsoft', logo: '/skills/powerApps.png' },
    { name: 'SharePoint', category: 'Microsoft', logo: '/skills/sharePoint.png' },
];

export const getSkillsByCategory = (category: string) => {
    return skills.filter((skill) => skill.category === category);
}

export const getLogoBySkill = (skill: string) => {
    return skills.filter(element => element.name === skill)[0].logo
}