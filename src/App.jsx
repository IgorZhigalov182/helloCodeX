import { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import './App.css';
import Button from './components/common/button/Button';
import Palette from './components/palette/Palette';
import { options } from './data/btnStyleOptions';

function App() {
  const { theme, setTheme } = useTheme();
  const [optionsStyle, setOptionsStyle] = useState(options);
  const [countClick, setCountClick] = useState(0);

  const handleSwitchMode = () => (theme === 'dark' ? setTheme('light') : setTheme('dark'));

  const handleSetBtnStyle = (typeStyle) => {
    return optionsStyle.filter(({ active, type }) => active && type === typeStyle)[0].value;
  };

  if (countClick === 100) {
    alert('Good Job!');
  }

  return (
    <div className="container">
      <Button
        iconType="noIcon"
        size="medium"
        style={theme === 'dark' ? 'solid' : 'outline'}
        color="secondary"
        handler={handleSwitchMode}
        title={theme === 'dark' ? 'light' : 'dark'}
        state="default"
      />
      <h1>Hello CodeX</h1>
      <h4>Количество кликов - {countClick}/100</h4>
      <div className="wrapper">
        <Palette state={optionsStyle} setState={setOptionsStyle} />
        <div className="btnWrapper">
          <Button
            handler={() => setCountClick(countClick + 1)}
            color={handleSetBtnStyle('color')}
            style={handleSetBtnStyle('style')}
            size={handleSetBtnStyle('size')}
            state={handleSetBtnStyle('state')}
            iconType={handleSetBtnStyle('iconType')}
            title="Button"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
