import React from "react";
import { useLanguages } from "hooks/useLanguages";
import { useTopics } from "hooks/useTopics";
import CustomSelect from "components/CustomSelect/CustomSelect";
import Difficulty from "components/Difficulty/Difficulty";
import "./Filter.scss";

const Filter = React.memo(() => {
  const { data: dataLanguages } = useLanguages();
  const { data: dataTopics } = useTopics();

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
