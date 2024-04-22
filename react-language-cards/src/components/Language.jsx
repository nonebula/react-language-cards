import PropTypes from "prop-types";
import "../App.css";
import { useState } from "react";

const Language = ({ name, img, options }) => {
  const [show, setShow] = useState(true);
  return (
    <div
      className="bg-yellow-200 rounded-lg hover:bg-yellow-400 shadow-lg"
      onClick={() => setShow(!show)}
    >
      {show && (
        <div>
          <h2>{name}</h2>
          <img className="size-24" src={img} alt="Logo" />
        </div>
      )}
      {!show && (
        <div>
          <ul className="list-none mt-4">
            {options.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Language.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default Language;
