import NavMenuBar from './navMenuBar';

export default function SubPageLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavMenuBar />
      <section>{children}</section>
    </>
  );
}
