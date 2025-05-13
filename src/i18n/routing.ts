import { createNavigation } from "next-intl/navigation";
import { routing } from "./navigation";

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);