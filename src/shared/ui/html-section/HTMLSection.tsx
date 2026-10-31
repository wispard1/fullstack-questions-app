export function HTMLSection({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="question_container ">
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
