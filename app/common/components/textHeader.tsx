export default function TextHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="font-sans my-6 text-xl text-slate-700 tracking-wide">
      {children}
    </h2>
  );
}
