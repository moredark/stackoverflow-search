import { useGetAnswersQuery } from "../store/stackoverflow/stackoverflow.api";
import AnswerItem from "./AnswerItem";
import Loader from "./Loader";

function Answers({ questionId }) {
  const { isError, isLoading, data } = useGetAnswersQuery(questionId);

  if (isError) {
    return <h2 className="errorText">Ответы не найдены</h2>;
  }
  if (isLoading) {
    return (
      <div className="flex flex-col items-center mt-6 container">
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl text-center">Комментарии</h2>

      <div className="flex flex-col items-center mt-2 container">
        {data.map((answer) => {
          return <AnswerItem key={answer.answer_id} displayName={answer.owner.display_name} img={answer.owner.profile_image} body={answer.body} />;
        })}
      </div>
    </div>
  );
}

export default Answers;
