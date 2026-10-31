import { useSearchParams } from "react-router-dom";
import { Content } from "./Content";
import { Sider } from "./Sider";

export function QuestionsPage() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const searchValue = searchParams.get("q") || "";
  
  const filters = {
    specializationId: searchParams.get("specId") || "",
    skills: searchParams.get("skills")?.split(",") || [],
    complexity: searchParams.get("complexity") || "",
    rate: searchParams.get("rate") || "",
  };

  return (
    <>
      <Content page={page} filters={filters} searchValue={searchValue} />
      <Sider />
    </>
  );
}

export default QuestionsPage;