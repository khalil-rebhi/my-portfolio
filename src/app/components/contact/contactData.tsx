import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";


export const contactItems = [
    {
        id:1,
        icon: <FaEnvelope />,
        iconColor : "#D14836",
        label: "Email",
        value: "khalilrebhi5@gmail.com",
        link: "mailto:khalilrebhi5@gmail.com",
    },
    {
        id:2,
        icon: <FaLinkedin />,
        iconColor : "#0A66C2",
        label: "LinkedIn",
        value: "linkedin.com/in/rebhi-khalil/",
        link: "https://www.linkedin.com/in/rebhi-khalil",
    },
    {
        id:3,
        icon: <FaGithub />,
        iconColor : "#181717",
        label: "GitHub",
        value: "github.com/khalil-rebhi",
        link: "https://github.com/khalil-rebhi",
    },
    {
      id: 4,
      icon: <FaWhatsapp />,
      iconColor: "#25D366",
      label: "WhatsApp",
      value: "+216 52 907 048  ",
      link: "https://wa.me/21652907048", 
    },
];