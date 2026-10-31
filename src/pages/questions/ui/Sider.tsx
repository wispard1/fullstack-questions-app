import { useSearchParams } from "react-router-dom";
import { SearchInput } from "@/features/search-questions";
import { CollapsibleList } from "@/shared/ui/collapsible-list";
import { complexity, rates } from "@/shared/config";
import { useGetSkillsQuery } from "@/entities/skill";
import { useGetSpecsQuery } from "@/entities/specialization";
import "./Sider.css";

export function Sider() {
  const { data: skills = [], isLoading } = useGetSkillsQuery();
  const { data: specs = [] } = useGetSpecsQuery();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedSpecId = searchParams.get("specId");
  const selectedSkills = searchParams.get("skills")?.split(",") || [];
  const selectedComplexity = searchParams.get("complexity");
  const selectedRate = searchParams.get("rate");

  const setSingleFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (newParams.get(key) === value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    newParams.set("page", "1");
    setSearchParams(newParams);
  };

  const toggleSkillFilter = (skillId: string) => {
    const newParams = new URLSearchParams(searchParams);
    const current = newParams.get("skills")?.split(",") || [];
    
    const newSkills = current.includes(skillId)
      ? current.filter((id) => id !== skillId)
      : [...current, skillId];

    if (newSkills.length > 0) {
      newParams.set("skills", newSkills.join(","));
    } else {
      newParams.delete("skills");
    }
    
    newParams.set("page", "1");
    setSearchParams(newParams);
  };

  return (
    <div className="sider">
      <SearchInput />
      {isLoading && <h3>Загрузка...</h3>}

      <CollapsibleList
        items={specs}
        title="Специализация"
        limit={4}
        selectedValues={selectedSpecId ? [selectedSpecId] : []}
        onSelect={(id) => setSingleFilter("specId", id)}
      />
      
      <CollapsibleList
        items={skills}
        title="Выберите навыки"
        limit={5}
        showIcon={true}
        selectedValues={selectedSkills}
        onSelect={toggleSkillFilter}
      />
      
      <CollapsibleList
        items={complexity}
        title="Сложность"
        limit={4}
        selectedValues={selectedComplexity ? [selectedComplexity] : []}
        onSelect={(id) => setSingleFilter("complexity", id)}
      />
      
      <CollapsibleList
        items={rates}
        title="Рейтинг вопросов"
        limit={5}
        selectedValues={selectedRate ? [selectedRate] : []}
        onSelect={(id) => setSingleFilter("rate", id)}
      />
    </div>
  );
}