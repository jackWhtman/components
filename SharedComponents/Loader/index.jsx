import "./index.css";

const Loader = ({ noText = false, sml = false }) => {
  return (
    <div className="loader-container">
      <div className={"loader" + (sml ? " sml" : "")}></div>
      {!noText && <p>Loading...</p>}
    </div>
  );
};

export default Loader;
