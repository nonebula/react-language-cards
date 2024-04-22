import Language from "./Language";
import "../App.css";
import data from "../data/data.js";

const Card = () => {
  return (
    <div className="container bg-orange-600 ring-8 ring-gray-800 rounded-xl flex flex-col mx-6 px-6 justify-center align-middle mt-12 mb-8">
      <h1 className="text-5xl text-center pt-5 font-bold underline">Choose a Language:</h1>
      <div className="text-xl text-center container w-full flex flex-wrap justify-center gap-8 mt-4">
        {data.map((lang, index) => (
          <Language {...lang} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Card;
