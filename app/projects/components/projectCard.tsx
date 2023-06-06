type props = {
  title: string;
  content: string;
  children?: React.ReactNode;
};

export default function ProjectCard({ title, content, children }: props) {
  return (
    <div className="w-fit h-auto max-w-xs p-4 border-2 rounded-xl font-sans bg-slate-50/30 text-slate-700 hover:shadow-inner">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-base mt-2">{content}</p>
      {children && <p className="text-base mt-1">{children}</p>}
    </div>
  );
}
