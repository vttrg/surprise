import { useState } from 'react';
import './App.css';

import clsx from 'clsx';

type Gift = {
  id: string;
  name: string;
  code: string;
  image: string;
};

const gifts = [
  {
    id: 'd349115f-e252-4a49-8b77-5837d7d56806',
    name: '1 mês de netflix',
    code: 'netflix',
    image:
      'https://store-images.s-microsoft.com/image/apps.56161.9007199266246365.1d5a6a53-3c49-4f80-95d7-78d76b0e05d0.a3e87fea-e03e-4c0a-8f26-9ecef205fa7b',
  },
  {
    id: '4ceeae25-52b2-4c92-9799-cde91fe2b88b',
    name: '2 mês de netflix',
    code: 'netflix2',
    image:
      'https://store-images.s-microsoft.com/image/apps.56161.9007199266246365.1d5a6a53-3c49-4f80-95d7-78d76b0e05d0.a3e87fea-e03e-4c0a-8f26-9ecef205fa7b',
  },
];

function App() {
  const [error, setError] = useState('');
  const [value, setValue] = useState('');
  const [gift, setGift] = useState<Gift | null>(null);

  const onCodeValidation = () => {
    const gift = gifts.find((gift) => {
      return gift.code === value;
    });

    if (gift) {
      setGift(gift);
      setError('');
    } else {
      setError('Errou feio');
    }
  };

  return (
    <>
      {gift ? (
        <div className="gift">
          <img src={gift.name} className="" />
          <p>{gift.name}</p>
        </div>
      ) : (
        <div>
          {error ? (
            <p className="text-center">{error}</p>
          ) : (
            <p className="text-center">Digita algo ai, caralho</p>
          )}
          <div className="flex">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={clsx({
                'border-error': !!error,
              })}
            />
            <button onClick={onCodeValidation}>Validar Código</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
