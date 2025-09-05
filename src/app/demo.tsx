"use client";

import { usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function Demo() {
  const t = useTranslations("IndexPage");
  const pathname = usePathname();
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{pathname}</p>
    </div>
  );
}
