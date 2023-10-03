import classNames from 'classnames';
import SVG from 'react-inlinesvg';
import { IconPlus, IconBrackets } from '@codexteam/icons';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ color, size, style, iconType, state, handler, title }) => {
  const btnClass = classNames(
    'btn',
    color,
    style,
    size,
    state,
    { leading: iconType === 'leading' },
    { trailing: iconType === 'trailing' },
    { LeadingTrailing: iconType === 'LeadingTrailing' },
    { standalone: iconType === 'standalone' },
    { noIcon: iconType === 'noIcon' },
  );

  return (
    <div className={btnClass} onClick={handler}>
      <SVG className="lead" src={IconPlus}></SVG>
      <button>{title}</button>
      <SVG className="trail" src={IconBrackets}></SVG>
    </div>
  );
};

Button.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  iconType: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  state: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  handler: PropTypes.func,
  title: PropTypes.string,
};

export default Button;
