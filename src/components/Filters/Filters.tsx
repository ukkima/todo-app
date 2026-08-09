import cls from "./Filter.module.css";

export const Filters = ({ setFilter }) => {
  return (
    <form className={cls.form}>
      <label htmlFor="all">
        <input
          type="radio"
          id="all"
          name="filter"
          value={"all"}
          className={cls.input}
          onChange={(e) => setFilter(e.target.value)}
        />
        All
      </label>
      <label htmlFor="active">
        <input
          type="radio"
          id="active"
          name="filter"
          value={"active"}
          className={cls.input}
          onChange={(e) => setFilter(e.target.value)}
        />
        Active
      </label>
      <label htmlFor="completed">
        <input
          type="radio"
          id="completed"
          name="filter"
          value={"completed"}
          className={cls.input}
          onChange={(e) => setFilter(e.target.value)}
        />
        Completed
      </label>
    </form>
  );
};
