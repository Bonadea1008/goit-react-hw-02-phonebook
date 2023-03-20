import css from '../Filter/Filter.module.css';

export const Filter = ({ value, filterInputHandler }) => {
  return (
    <>
      <label htmlFor="">
        Find contacts by name:
        <input
          className={css.input}
          type="text"
          name="filter"
          onChange={filterInputHandler}
          value={value}
        />
      </label>
    </>
  );
};
