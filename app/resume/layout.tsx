import SubPageLayout from '../common/components/subPageLayout';

export default function ResumeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <SubPageLayout>{children}</SubPageLayout>;
}
