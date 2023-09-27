import React from "react";
import { useNavigate } from "react-router-dom";
function Table({ data }) {
  const navigate = useNavigate();
  const emptyRows = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <div className="w-full overflow-hidden rounded-lg border-1 shadow-md shadow-white mb-10">
      <table className="w-full table-fixed">
        <thead>
          <tr className="border-b">
            <th className="columnTitle">Автор вопроса</th>
            <th className="columnTitle">Тема</th>
            <th className="columnTitle whitespace-normal">
              Количество <br /> ответов
            </th>
            <th className=" columnTitle">Теги</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((item) => (
                <tr
                  key={item.question_id}
                  className="transition-all hover:bg-gray-100 cursor-pointer "
                  onClick={() => {
                    navigate(`/${item.question_id}`);
                  }}
                >
                  <td className=" tableRow">{item.owner.display_name}</td>
                  <td className="tableRow">{item.title}</td>
                  <td className="tableRow">{item.answer_count}</td>
                  <td className="tableRow">
                    <div className="flex gap-1 flex-wrap">
                      {item.tags.map((tag) => {
                        return (
                          <div key={tag} className="p-2 bg-gray-700 rounded">
                            <p>{tag}</p>
                          </div>
                        );
                      })}
                    </div>
                  </td>
                </tr>
              ))
            : emptyRows.map((_, index) => (
                <tr key={index} className="transition-all hover:bg-gray-100 cursor-pointer ">
                  <td className="tableRow"></td>
                  <td className="tableRow"></td>
                  <td className="tableRow"></td>
                  <td className="tableRow">
                    <div className="flex gap-1 flex-wrap"></div>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
