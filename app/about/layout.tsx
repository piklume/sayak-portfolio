import NavMenuBar from '../common/components/navMenuBar';

export default function AboutLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavMenuBar />

      {children}
    </section>
  );
}
