import { useCallback, useEffect, useState } from 'react';
import { WhatsAppButton } from './components/WhatsAppButton';

import Profile from './assets/profile.png';
import { Author } from './components/Author';
import { Form } from './components/Form';

export function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const escFunction = useCallback((event: { key: string }) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
  }, [escFunction]);

  return (
    <>
      <p className="message">Click WhatsApp button</p>

      <div id="wpp-fix" className="right shake">
        <WhatsAppButton isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="form-wpp">
          <div className="head-wpp">
            <img
              src={Profile}
              loading="lazy"
              width="50"
              height="50"
              alt="Imagem de perfil"
            />
            <h3>Call on WhatsApp</h3>
            <i
              className="material-symbols-sharp close"
              id="close-bt"
              onClick={handleClick}
            >
              close
            </i>
          </div>

          <div className="form-content">
            <p className="buss-msg">
              Hello, do you need a quote? Tell me your details please.
            </p>
            <Form />
          </div>
        </div>
        <div className="mask" onClick={handleClick}></div>
      </div>

      <Author />
    </>
  );
}
