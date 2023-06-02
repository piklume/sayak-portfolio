import SubPageLayout from '../common/components/subPageLayout';

export default function AboutLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <SubPageLayout>{children}</SubPageLayout>;
}
