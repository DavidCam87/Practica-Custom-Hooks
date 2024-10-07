import './App.css'
import Timer from './components/Timer/Timer';
import Calculator from './components/Calculator/Calculator';
import { useCurrentTime } from './customHooks/useCurrentTime';

const App = () => {
  const currentTime = useCurrentTime();

  return (
    <div className="App">
      <Timer time={currentTime} />
      <Calculator />
    </div>
  );
};

export default App;