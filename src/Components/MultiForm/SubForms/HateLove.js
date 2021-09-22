import { useState } from "react";

const HateLove = (props) => {
  const { modifyIndex } = props;
  const [formData, setFormData] = useState({ pref: { love: "", hate: "" } });

  const preventFunc = (e) => {
    e.preventDefault();
  };

  const handleTxtArea = (e, pref) => {
    if (pref === "love") {
      setFormData({
        prefs: { ...formData.prefs, love: e.target.value },
      });
    } else if (pref === "hate") {
      setFormData({
        prefs: { ...formData.prefs, hate: e.target.value },
      });
    }
  };

  const handleReturn = () => {
    modifyIndex(4);
  };

  return (
    <form className="preferences-form" onSubmit={preventFunc}>
      <p>Can you tell us what's your favorite and hated food?</p>
      <label htmlFor="prefered">
        Your favorite food, separate with a comma
      </label>
      <textarea
        id="prefered"
        placeholder=" One or more, if you have"
        onChange={(e) => {
          handleTxtArea(e, "love");
        }}
      ></textarea>

      <label htmlFor="hated">Your hated food, separate with a comma</label>
      <textarea
        id="hated"
        placeholder="One or more, if you have"
        onChange={(e) => {
          handleTxtArea(e, "love");
        }}
      ></textarea>

      <div className="container-nav-btns">
        <button type="button" classname="prev" onClick={handleReturn}>
          Previous
        </button>
        <button onClick={() => modifyIndex(6, formData)}>Submit</button>
      </div>
    </form>
  );
};

export default HateLove;
