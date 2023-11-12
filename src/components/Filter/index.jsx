const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <label htmlFor="inputFindName">Find contacts by name</label>
      <input
        name="filter"
        type="text"
        id="inputFindName"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
