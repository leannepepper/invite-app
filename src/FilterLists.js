import React from "react";

const FilterLists = props => {
  return (
    <label className="fliter-list">
      <input
        type="checkbox"
        onChange={props.toggleFilter}
        checked={props.isFiltered}
      />
      Hide those who haven't responded
    </label>
  );
};
export default FilterLists;
