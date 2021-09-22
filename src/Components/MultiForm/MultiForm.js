import { useState } from "react";

import Indicator from "./Indicator/Indicator";
import CardBegin from "./Infos/CardBegin";
import CardEnd from "./Infos/CardEnd";
import DietForm from "./SubForms/DietForm";
import FoodStyle from "./SubForms/FoodStyle";
import Allergies from "./SubForms/Allergies";
import HateLove from "./SubForms/HateLove";

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

  const elements = [
    <CardBegin modifyIndex={modifyIndex} />,
    <DietForm modifyIndex={modifyIndex} />,
    <FoodStyle modifyIndex={modifyIndex} />,
    <Allergies modifyIndex={modifyIndex} />,
    <HateLove modifyIndex={modifyIndex} />,
    <CardEnd modifyIndex={modifyIndex} />,
  ];

  return (
    <div className="container-multiform">
      <Indicator formIndex={formIndex} />

      {elements.map((elememt, index) => {
        if (index + 1 === formIndex) {
          return elements[index];
        }
        return null;
      })}
    </div>
  );
};

export default MultiForm;
