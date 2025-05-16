import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

export const formations = [
  {
    id: 1,
    degree: "highSchoolDiploma",
    institution: "highSchool",
    duration: "2016",
    icon: <FaGraduationCap />,
    color: "var(--secondary)",
    description: "highSchoolDesc",
    position:"left"
  },
  {
    id: 2,
    degree: "finalInternship",
    institution: "sntp",
    duration: "03/2021 - 06/2021",
    icon: <MdOutlineWork  />,
    color: "var(--tertiary)",
    description: "finalInternshipSNDP",
    position:"right"
  },
  {
    id: 3,
    degree: "bachelorDegree",
    institution: "fst",
    duration: "2018 - 2021",
    icon: <FaGraduationCap />,
    color: "var(--secondary)",
    description: "bachelor",
    position:"left"
  },
  {
    id: 4,
    degree: "immersionInternship",
    institution: "ministry",
    duration: "07/2022 - 08/2022",
    icon: <MdOutlineWork />,
    color: "var(--tertiary)",
    description: "immersionMinistry",
    position:"right"
  },
  {
    id: 5,
    degree: "engineeringInternship",
    institution: "zitounaBank",
    duration: "07/2023 - 08/2023",
    icon: <MdOutlineWork />,
    color: "var(--tertiary)",
    description: "engineeringInternshipZitouna",
    position:"right"
  },
  {
    id: 6,
    degree: "finalInternship",
    institution: "zitounaBank",
    duration: "03/2024 - 08/2024",
    icon: <MdOutlineWork />,
    color: "var(--tertiary)",
    description: "finalInternshipZitouna",
    position:"right"
  },
  {
    id: 7,
    degree: "engineerDegree",
    institution: "esprit",
    duration: "2021 - 2024",
    icon: <FaGraduationCap />,
    color: "var(--secondary)",
    description: "espritDescription",
    position:"left"
  }
];
