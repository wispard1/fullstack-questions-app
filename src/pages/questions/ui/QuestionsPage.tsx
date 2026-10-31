import { Content } from "./Content";
import { Sider } from "./Sider";
import { useSearchParams } from "react-router-dom";

export function QuestionsPage() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  return (
    <>
      <Content page={page} />
      <Sider />
    </>
  );
}

export default QuestionsPage; 