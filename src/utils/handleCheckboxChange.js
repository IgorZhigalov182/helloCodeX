export const handleCheckboxChange = (index, arrState, setState, selectOpiton) => {
  const newOptionsState = arrState.map((option, i) => {
    if (i === index) {
      return { ...option, active: true };
    } else if (selectOpiton.type === option.type) {
      return { ...option, active: false };
    } else {
      return { ...option };
    }
  });
  setState(newOptionsState);
};
