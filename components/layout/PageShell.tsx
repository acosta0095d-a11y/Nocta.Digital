import SiteFooter from "@/components/layout/SiteFooter";

type PageShellProps = {
  children: React.ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <>
      <main className="bg-black min-h-screen text-white">{children}</main>
      <SiteFooter />
    </>
  );
}
