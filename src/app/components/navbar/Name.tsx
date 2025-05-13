import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Name({ locale }: Readonly<{ locale: string }>) {
  return (
    <Link
      href={`/${locale}`}
      className="flex items-center gap-2 text-xl font-bold transition-opacity duration-300 whitespace-nowrap text-primary hover:text-primary-hover"
    >
      <Image
        src="/profile.jpg" // Make sure the image is in the public folder
        alt="Khalil Rebhi"
        width={32}
        height={32}
        className="rounded-full border border-gray-300"
      />
      <span className="rgb-text">Khalil Rebhi</span>
    </Link>
  );
}
