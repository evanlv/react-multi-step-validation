import { useState } from "react";

import Indicator from "./Indicator/Indicator";
import CardBegin from "./Infos/CardBegin";
import DietForm from "./SubForms/DietForm";
import FoodStyle from "./SubForms/FoodStyle";
import Allergies from "./SubForms/Allergies";

import "./MultiForm.css";

const MultiForm = () => {
  const [formIndex, setFormIndex] = useState(1);
  const [allFormData, setAllFormData] = useState({
    dietForm: "",
    foodStyle: [],
    allergies: [],
    prefs: {},
  });

  const modifyIndex = (index, data) => {
    setFormIndex(index);

    if (data) {
      const newData = { ...allFormData };
      const firstPropNewData = Object.keys(data)[0];
      newData[firstPropNewData] = data[firstPropNewData];
      setAllFormData(newData);
    }
  };

  return (
    <div className="container-multiform">
      <Indicator />

      {formIndex === 1 ? (
        <CardBegin modifyIndex={modifyIndex} />
      ) : formIndex === 2 ? (
        <DietForm modifyIndex={modifyIndex} />
      ) : formIndex === 3 ? (
        <FoodStyle modifyIndex={modifyIndex} />
      ) : formIndex === 4 ? (
        <Allergies modifyIndex={modifyIndex} />
      ) : (
        ""
      )}
    </div>
  );
};

export default MultiForm;
