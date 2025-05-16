import { MouseEventHandler } from "react";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function CustomLink({
  href,
  children,
  onClick,
}: Readonly<CustomLinkProps>) {
  const scroll = (id: string) => {
    const dest = document.getElementById(id);
    if (dest) {
      dest.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={(e) => {
        if (onClick) onClick(e);
        scroll(href);
      }}
      className="font-semibold font-sans mr-0.5 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-secondary-hover text-primary hover:text-primary-hover hover:font-semibold after:transition-all after:duration-300 hover:after:w-full focus:after:w-full cursor-pointer"
    >
      {children}
    </button>
  );
}
