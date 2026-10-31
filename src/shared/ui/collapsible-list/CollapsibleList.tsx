import { useState } from "react";
import { FilterButton } from "../filter-button";
import type { SelectOption } from "@/shared/types";
import "./CollapsibleList.css"; 

interface CollapsibleListProps {
  items: SelectOption[];
  title: string;
  limit?: number;
  showIcon?: boolean;
  selectedValues?: (string | number)[]; 
  onSelect: (id: string) => void;
}

export function CollapsibleList({ 
  items, 
  title, 
  limit = 5, 
  showIcon = false,
  selectedValues = [],
  onSelect
}: CollapsibleListProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleItems = isExpanded ? items : items.slice(0, limit);

  return (
    <div className="collapsible-list">
      <h4 className="collapsible-list__title">{title}</h4>
      
      <ul className="collapsible-list__items">
        {visibleItems.map((item) => {
          const value = String(item.id);
          const isActive = selectedValues.map(String).includes(value);
          
          return (
            <li key={value} className="collapsible-list__item">
              <FilterButton
                title={item.title}
                icon={showIcon}
                active={isActive}
                onClick={() => onSelect(value)}
              />
            </li>
          );
        })}
      </ul>

      {items.length > limit && (
        <button 
          type="button" 
          className="collapsible-list__toggle" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Скрыть" : "Посмотреть все"}
        </button>
      )}
    </div>
  );
}