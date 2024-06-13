import './App.css';
import { useEffect } from 'react';
const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready();
  }, []);

  function onClose() {
    tg.close();
  }
  return (
    <div className='App'>
      test
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
