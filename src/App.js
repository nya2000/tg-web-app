import './App.css';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';
const tg = window.Telegram.WebApp;

const cards = [
  { id: 1, label: 'First', benefit: 1000, interval: 10000 },
  { id: 2, label: 'Second', benefit: 1200, interval: 20000 },
  { id: 3, label: 'Third', benefit: 50, interval: 9000000 },
  { id: 4, label: 'Fourth', benefit: 99, interval: 1000 },
];
function App() {
  const [userBalance, setUserBalance] = useState(500);
  useEffect(() => {
    tg.ready();
  }, []);

  function onClose() {
    tg.close();
  }

  function onCardClick(card) {
    if (!card) return;
    const { benefit, interval } = card;
    setInterval(() => {
      setUserBalance((prev) => prev + benefit);
      toast(`Вы получили ${benefit} на ваш счет!}`);
    }, interval);
  }
  return (
    <div className='App'>
      <main className='w-full flex flex-col items-center'>
        <p className='font-bold mb-4'>Баланс:{userBalance}</p>
        <ul className='flex items-center gap-[10px]'>
          {cards.map((card) => {
            return (
              <li key={card.id}>
                <button
                  onClick={() => onCardClick(card)}
                  className='rounded-xl border-[2px] border-red-500 p-3'
                >
                  {card.label}
                </button>
              </li>
            );
          })}
        </ul>
        <button
          className='mt-4 p-4 bg-black text-white rounded-[50px]'
          onClick={onClose}
        >
          Close
        </button>
      </main>
    </div>
  );
}

export default App;
