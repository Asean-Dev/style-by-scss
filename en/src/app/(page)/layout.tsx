import { FooterView } from "@/layouts/footer/view/footer-view";
import { Header } from "@/layouts/header/view/header";
import Accessibility from "@/components/ui/accessibility";
import "@/assets/scss/components/accessibility.scss";
import { TabMenu } from "@/layouts/tab-menu/tab-menu";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        {children}
        <Accessibility />
      </main>
      <TabMenu />
      <FooterView />
    </>
  );
}
