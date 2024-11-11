const Filter = ({ onFilterInputChange, filteredInputValue }) => {
  return (
    <label>
      Filter by text
      <input
        type="text"
        onChange={onFilterInputChange}
        value={filteredInputValue}
      />
    </label>
  );
};

export default Filter;
