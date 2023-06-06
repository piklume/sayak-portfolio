export default function TextHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="container mx-auto font-sans font-bold my-6 md:ml-20 text-xl text-slate-700 tracking-wide text-left">
      {children}
    </h2>
  );
}
