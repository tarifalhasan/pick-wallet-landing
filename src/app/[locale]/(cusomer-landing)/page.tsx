import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/" locale="ro">
        {t("about")}
      </Link>
    </div>
  );
}
