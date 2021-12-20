import PropTypes from "prop-types";
import style from "./Filter.module.css"
import { memo } from "react";
const Filter = ({ value, onFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <label>
        <input
          className={style.input}
          value={value}
          onChange={onFilter}
          name="filter"
          type="text"
          placeholder="Filter"
        />
      </label>
    </div>
  );
};

export default memo(Filter);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired
}