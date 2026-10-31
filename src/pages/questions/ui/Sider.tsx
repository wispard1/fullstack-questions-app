import { SearchInput } from "@/features/search-questions";
import { CollapsibleList } from "@/shared/ui/collapsible-list";
import { complexity } from "@/shared/config";
import { rates } from "@/shared/config";
import { useGetSkillsQuery } from "@/entities/skill"
import { useGetSpecsQuery } from "@/entities/specialization"
import "./Sider.css";

export function Sider() {
  const { data: skills = [], isLoading } = useGetSkillsQuery();
  const { data: specs = [] } = useGetSpecsQuery();

  return (
    <div className="sider">
      <SearchInput />
      {isLoading && <h3>Загрузка...</h3>}

      <CollapsibleList
        items={specs}
        title={"Специализация"}
        limit={4}
        listType={"spec"}
      />
      <CollapsibleList
        items={skills}
        title={"Выберите навыки"}
        limit={5}
        listType={"skill"}
        showIcon={true}
      />
      <CollapsibleList
        items={complexity}
        title={"Сложность"}
        listType={"rate"}
      />
      <CollapsibleList
        items={rates}
        title={"Рейтинг вопросов"}
        listType={"complexity"}
      />
    </div>
  );
}
