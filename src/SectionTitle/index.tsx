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
    <h1 className="typography-display font-bold">display</h1>

    <h1 className="typography-body">body</h1>

    <h1 className="typography-mini">mini</h1>
  </>
);
