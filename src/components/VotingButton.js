export const VotingButton = ({ bool, fn, counter }) => {
  return (
    <button
      type="button"
      onClick={(event) => fn(event, counter, bool ? "True" : "False")}
      className={bool ? "btn-true" : "btn-false"}
    >
      {bool ? `True` : `False`}
    </button>
  );
};
