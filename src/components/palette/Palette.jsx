import { handleCheckboxChange } from '../../utils/handleCheckboxChange';
import PropTypes from 'prop-types';
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
              <div key={index} className={styles.inner}>
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

Palette.propTypes = {
  state: PropTypes.array,
  setState: PropTypes.func,
};

export default Palette;
