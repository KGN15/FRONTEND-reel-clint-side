import "./UploadLoader.css";

const UploadLoader = () => {
  return (
    <div className="loader-overlay">
      <svg width="200" height="200" className="loader-svg">
        <circle className="shape dot1" />
        <circle className="shape dot2" />
        <circle className="shape dot3" />
        <circle className="shape dot4" />
      </svg>

      <p className="loader-text">
        Uploading video…<br />
        Please wait ⏳
      </p>
    </div>
  );
};

export default UploadLoader;
