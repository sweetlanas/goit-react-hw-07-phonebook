import { connect } from "react-redux";
import React from "react";
import s from "../PhoneBookForm/PhoneBookForm.module.css";

import { handleFilter } from "../../redux/rtk/filter-contacts";

const PhonebookFilter = ({ onSetFilter, filterValue }) => {
  return (
    <>
      <label>
        <p>Find contacts by name</p>
        <input
          className={s.input}
          name="filter"
          onInput={onSetFilter}
          type="text"
          value={filterValue}
        />
      </label>
    </>
  );
};

const mapStateToProps = (state, props) => ({
  filterValue: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onSetFilter: (e) => dispatch(handleFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookFilter);
