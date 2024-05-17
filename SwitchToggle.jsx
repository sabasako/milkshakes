const ToggleSwitch = () => {
  return (
    <div className="container">
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name={"switch"}
          id={"switch"}
        />
        <label className="label" htmlFor={"switch"}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
