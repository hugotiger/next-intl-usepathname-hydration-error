import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Demo } from "../demo";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function IndexPage({ params }: Props) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  return <Demo />;
}
