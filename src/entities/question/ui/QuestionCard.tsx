import { useState } from "react";
import "./QuestionCard.css";
import { Link } from "react-router-dom";
import { QuestionMeta } from "./QuestionMeta";
import type { Question } from "../model";

export function QuestionCard({ question }: { question: Question }) {
  const [openQuestion, setOpenQuestion] = useState(false);
 
  return (
    <li className="question_item ">
      <div
        className="question_header"
        onClick={() => setOpenQuestion(!openQuestion)}
      >
        <span className="question">{question.title}</span>
        <button className="question_icon">
          <img
            src="https://cdn-eu.icons8.com/docs/YnSPHKs6ZkO6zo1Ynd0pMA/fzBDFS38cEK64TKorDcMsQ.zw4S4eZDNEaMVZYXJEShtw.hMgr5-7QUkaLrey_KQF-5g.svg"
            alt="icon"
          />
        </button>
      </div>

      {openQuestion && (
        <div className="answer">
          {question.rate !== undefined &&
            question.complexity !== undefined && (
              <QuestionMeta
                rate={question.rate}
                complexity={question.complexity}
              />
            )}

          <p>{question.description}</p>
          <Link to={`/questions/${question.id}`} className="link_answer">
            Подробнее
          </Link>
        </div>
      )}
    </li>
  );
}
