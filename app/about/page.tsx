import ContentCard from '../common/components/contentCard';

export default function About() {
  const content =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores aperiam consectetur blanditiis doloribus laborum laboriosam officiis quidem illum vero. Nemo commodi facilis eos quo aliquam possimus? Consequuntur recusandae velit magni culpa eligendi illum voluptas nemo quibusdam molestias praesentium? Optio aspernatur nostrum quam voluptate aperiam nam aliquam, aliquid expedita excepturi magni fugiat, asperiores nobis dolor modi et odit non suscipit! Temporibus illo corporis laudantium magni necessitatibus similique voluptate commodi, blanditiis sint rem totam, maxime qui aperiam culpa minus ab eligendi. Aliquam dolorum esse provident doloremque quibusdam tempore. Quaerat suscipit enim ab, inventore provident quia quas illo facere! Quod nulla fugit magni.';
  return (
    <div className="mt-8">
      <ContentCard title="About me" content={content} />
    </div>
  );
}
