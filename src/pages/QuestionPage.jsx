import { useParams } from "react-router-dom";
import { useGetQuestionInfoQuery } from "../store/stackoverflow/stackoverflow.api";
import Answers from "../components/Answers";
import Loader from "../components/Loader";
import HomeButton from "../components/UI/HomeButton";

function QuestionPage() {
  const { questionId } = useParams();
  const { isError, isLoading, data } = useGetQuestionInfoQuery(questionId);

  if (isError) {
    return <h2 className="errorText">Что-то пошло не так...</h2>;
  }

  if (isLoading) {
    return (
      <div className="h-full w-full flex justify-center pt-32">
        <Loader />
      </div>
    );
  }
  return (
    <div className="container">
      <div className="relative w-full overflow-hidden rounded-lg border-1 shadow-md shadow-white mb-10">
        <HomeButton />
        <div className="flex flex-col items-center p-6">
          <div className="w-full flex items-center justify-center border-b p-2 mb-2">
            <img className="h-[50px] w-[50px] rounded-full" src={data.owner.profile_image} />
            <h2>{data?.owner.display_name}</h2>
          </div>
          <p className="text-2xl">{data?.title}</p>
          <div className="mt-3 flex gap-2">
            {data?.tags.map((tag) => {
              return (
                <div key={tag} className="p-2 bg-gray-700 rounded">
                  <p>{tag}</p>
                </div>
              );
            })}
          </div>
          <div className="my-5 html w-full" dangerouslySetInnerHTML={{ __html: data?.body }} />
          <Answers questionId={questionId} />
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
