import Image from "next/image";
import Link from "next/link";
import { Project } from "./projectsData";
import { useTranslations } from "next-intl";
import { getLogoBySkill } from "../skills/skillsData";

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tasks,
  technologies,
}: Readonly<Project>) {
  const hasImage = !!imageUrl;
  const t = useTranslations("Projects");
  return (
    <div
      className={`flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden max-w-6xl mx-auto h-96 ${
        hasImage ? "" : "items-center justify-center text-center"
      } p-4`}
    >
      {hasImage && (
        <div className="relative md:w-1/3 w-full h-64 md:h-auto">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div
        className={`flex flex-col justify-between w-full md:w-2/3 mt-4 md:mt-0 md:ml-4 `}
      >
        <div
          className={`flex flex-col mr-2 ${
            !hasImage ? "items-center" : "items-start"
          }`}
        >
          <h2 className="text-xl font-semibold text-gray-800">{t(title)}</h2>
          <p className="mt-2 text-gray-600 text-sm max-w-prose">
            {t(description)}
          </p>
        </div>
        <div className="flex justify-around mt-4">
          {technologies.map((tech) => (
            <Image
              key={tech}
              src={getLogoBySkill(tech)}
              alt={tech}
              width={48}
              height={48}
              className="object-contain"
            />
          ))}
        </div>
        {tasks && (
          <div className={`mt-4 text-end`}>
            <Link
              href="#"
              className="inline-block bg-primary text-white font-bold text-sm px-4 py-2 rounded-md hover:bg-primary-hover transition"
            >
              View Details
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
