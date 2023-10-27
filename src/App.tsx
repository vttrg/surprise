import { useState } from 'react';
import './App.css';

import clsx from 'clsx';

type Gift = {
  id: string;
  text: string;
  text2: string;
  text3: string;
  code: string;
  image: string;
};

const gifts = [
  {
    id: 'd349115f-e252-4a49-8b77-5837d7d56806',
    text: 'Você sempre me pediu uma lima  limão e até então eu nunca pude te dar.',
    text2: 'É bem parecido e eu acredito que você vá gostar. Consegue adivinhar o que é?',
    text3: 'Novamente, parabéns pelo seu dia. Eu te amo muito! 💜',
    code: 'ziguinho',
    image:
      'https://imgur.com/huCOBOe.png',
  }
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
      setError('ERROOOOOOOOOU 🤣🤣🤣🤣');
    }
  };

  return (
    <>
      {gift ? (
        <div className="gift">
          <img src={gift.image} className="" />
          <p>{gift.text}</p>
          <p>{gift.text2}</p>
          <p>{gift.text3}</p>
        </div>
      ) : (
        <div>
          {error ? (
            <p className="text-center">{error}</p>
          ) : (
            <p className="text-center">Será se você descobre a senha? 🤔🤐</p>
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
            <button onClick={onCodeValidation}>Validar Senha</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
