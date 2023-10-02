import { handleCheckboxChange } from '../../utils/handleCheckboxChange';
import styles from './Palette.module.scss';

const Palette = ({ state, setState }) => {
  const types = [...new Set(state.map(({ type }) => type))];

  return (
    <div className={styles.wrapper}>
      {types.map((type) => {
        return (
          <div className={styles.typess} key={type}>
            <h5>{type}</h5>
            {state.map((option, index) => (
              <div className={styles.inner}>
                {option.type === type && (
                  <label key={index}>
                    <input
                      key={index}
                      type="checkbox"
                      checked={option.active}
                      onChange={() => handleCheckboxChange(index, state, setState, option)}
                    />
                    {option.value}
                  </label>
                )}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Palette;
