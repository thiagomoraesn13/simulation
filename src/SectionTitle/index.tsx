import { typography, textColor } from "@thiagomoraesn13/design-tokens";

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
    <h1
      className={`${typography.size("h1-mobile")} ${typography.size("h1", "lg")}
        ${textColor("brand")}
        font-bold`}
      data-testid={dataTestId}
    >
      {title}
    </h1>
    <p className="text-body">{subtitle}</p>
  </>
);
