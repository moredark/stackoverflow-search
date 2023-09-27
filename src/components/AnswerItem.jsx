function AnswerItem({ displayName, img, body }) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center p-4 m-5 shadow-sm shadow-white border-gray-700">
        <div className="w-full flex items-center justify-center p-2">
          <img className="h-[50px] w-[50px] rounded-full" src={img} />
          <h2>{displayName}</h2>
        </div>
        <div className="my-1  flex flex-col items-center html w-full" dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </div>
  );
}

export default AnswerItem;
