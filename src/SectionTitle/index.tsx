import { textColor, typography } from "@thiagomoraesn13/design-tokens";

import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionTitleProps {
  title: string;
  subtitle: string;
  dataTestId?: string;
}

export const SectionTitle = ({
  title,
  subtitle,
  dataTestId,
}: SectionTitleProps) => (
  <>
    <h1 className={cn(typography("display"), "font-bold")}>{title}</h1>

    <p className={cn(typography("display"), textColor("brand"))}>{subtitle}</p>
  </>
);
