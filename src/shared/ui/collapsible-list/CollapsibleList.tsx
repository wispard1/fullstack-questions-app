import { useState } from "react";
import { FilterButton } from "../filter-button/FilterButton";
import type { SelectOption } from "@/shared/types";

type ListType = "skill" | "spec" | "complexity" | "rate";

export interface CollapsibleListProps {
  title: string;
  items: SelectOption[];
  limit?: number;
  listType: ListType;
  showIcon?: boolean;
  selectedValue?: SelectOption | SelectOption[] | null;
  onSelect?: (item: SelectOption) => void;
}

export function CollapsibleList({
  title,
  items,
  limit = 6,
  listType,
  showIcon = false,
  selectedValue,
  onSelect,
}: CollapsibleListProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleItems = isExpanded ? items : items.slice(0, limit);
  const conteinerClass =
    listType === "skill" ? "skills_container" : "specs_container";

  return (
    <>
      <p className="title_sider_main">{title}</p>
      <div className={conteinerClass}>
        {visibleItems.map((item) => {
          const isActive = Array.isArray(selectedValue)
            ? selectedValue.some((value) => value.id === item.id)
            : selectedValue?.id === item.id;

          return (
            <FilterButton
              key={item.id}
              title={item.title}
              icon={showIcon}
              active={isActive}
              onClick={() => onSelect?.(item)}
            />
          );
        })}
      </div>
      {items.length > limit && (
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="show_spec"
        >
          {isExpanded ? "Скрыть" : "Поcмотреть все"}
        </button>
      )}
    </>
  );
}
