import { useState } from "react/cjs/react.development";
import "./SubForm.css";

const DietForm = (props) => {
  const { modifyIndex } = props;
  const [formData, setFormData] = useState({ dietform: "nodiet" });

  const preventFunc = (e) => e.preventDefault();

  const handleRadio = (e) => {
    setFormData({ dietform: e.target.value });
  };

  return (
    <form onSubmit={preventFunc} className="diet-form">
      <p>What's yout diet?</p>

      <label htmlFor="nodiet"> No special diet</label>
      <input
        type="radio"
        onChange={handleRadio}
        name="diet"
        id="nodiet"
        value="nodiet"
      />

      <label htmlFor="homnivorous"> Homnivorous</label>
      <input
        type="radio"
        onChange={handleRadio}
        name="diet"
        id="homnivorous"
        value="homnivorous"
      />

      <label htmlFor="vegetarian"> Vegetarian</label>
      <input
        type="radio"
        onChange={handleRadio}
        name="diet"
        id="vegetarian"
        value="vegetarian"
      />

      <label htmlFor="vegan"> Vegan</label>
      <input
        type="radio"
        onChange={handleRadio}
        name="diet"
        id="vegan"
        value="vegan"
      />
      <button onClick={() => modifyIndex(3, formData)}>Submit</button>
    </form>
  );
};
export default DietForm;
