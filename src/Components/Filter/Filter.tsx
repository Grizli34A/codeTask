import React from "react";

import CustomSelect from "../CustomSelect/CustomSelect";
import { useLanguages } from "../../Hooks/useLanguages";
import { useTopics } from "../../Hooks/useTopics";
import Difficulty from "../Difficulty/Difficulty";
import "./Filter.scss";

const Filter = React.memo(() => {
  const { data: dataLanguages } = useLanguages();
  const { data: dataTopics } = useTopics();

  console.log("filer");

  return (
    <div className="filter">
      <h1>Filters</h1>
      <Difficulty />
      <h3>Languages</h3>
      <CustomSelect data={dataLanguages?.data} type="language" />
      <h3>Topics</h3>
      <CustomSelect data={dataTopics?.data} type="topic" />
    </div>
  );
});

export default Filter;
