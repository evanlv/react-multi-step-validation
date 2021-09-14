import { useRef } from "react";

const FoodStyle = (props) => {
  const { modifyIndex } = props;

  const preventFunc = (e) => {
    e.preventDefault();
    const styleData = {
      foodStyle: [],
    };

    allCheckBoxes.current.forEach((checkbox) => {
      if (checkbox.checked) {
        styleData.foodStyle.push(checkbox.value);
      }
    });
    modifyIndex(4, styleData);
  };

  const allCheckBoxes = useRef([]);
  const addCheck = (el) => {
    if (el && !allCheckBoxes.current.includes(el)) {
      allCheckBoxes.current.push(el);
    }
  };

  const handleReturn = () => {
    modifyIndex(2);
  };

  return (
    <form className="checkbox-form" onSubmit={preventFunc}>
      <p>What's your favorite food?</p>
      <span>Multipe choice</span>

      <label htmlFor="italian">Italian</label>
      <input ref={addCheck} type="checkbox" id="italian" value="italian" />
      <label htmlFor="japanese">Japanese</label>
      <input ref={addCheck} type="checkbox" id="japanese" value="japanese" />
      <label htmlFor="indian">Indian</label>
      <input ref={addCheck} type="checkbox" id="indian" value="indian" />
      <label htmlFor="thai">Thai</label>
      <input ref={addCheck} type="checkbox" id="thai" value="thai" />
      <label htmlFor="french">French</label>
      <input ref={addCheck} type="checkbox" id="french" value="french" />
      <label htmlFor="chinese">Chinese</label>
      <input ref={addCheck} type="checkbox" id="chinese" value="chinese" />

      <div className="container-nav-btns">
        <button type="button" className="prev" onClick={handleReturn}>
          Previous
        </button>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default FoodStyle;
