import { useRef } from "react";

const Allergies = (props) => {
  const { modifyIndex } = props;

  const preventFunc = (e) => {
    e.preventDefault();
    const styleData = {
      allergies: [],
    };

    allCheckBoxes.current.forEach((checkbox) => {
      if (checkbox.checked) {
        styleData.foodStyle.push(checkbox.value);
      }
    });
    modifyIndex(5, styleData);
  };

  const allCheckBoxes = useRef([]);
  const addCheck = (el) => {
    if (el && !allCheckBoxes.current.includes(el)) {
      allCheckBoxes.current.push(el);
    }
  };

  const handleReturn = () => {
    modifyIndex(3);
  };

  return (
    <form className="checkbox-form" onSubmit={preventFunc}>
      <p>What's your allergies?</p>
      <span>Multipe choice</span>

      <label htmlFor="milk">Milk</label>
      <input ref={addCheck} type="checkbox" id="milk" value="milk" />
      <label htmlFor="pollen">Pollen</label>
      <input ref={addCheck} type="checkbox" id="pollen" value="pollen" />
      <label htmlFor="nuts">Nuts</label>
      <input ref={addCheck} type="checkbox" id="nuts" value="nuts" />
      <label htmlFor="eggs">Eggs</label>
      <input ref={addCheck} type="checkbox" id="eggs" value="eggs" />
      <label htmlFor="shellfish">Shellfish</label>
      <input ref={addCheck} type="checkbox" id="shellfish" value="shellfish" />

      <div className="container-nav-btns">
        <button type="button" className="prev" onClick={handleReturn}>
          Previous
        </button>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Allergies;
