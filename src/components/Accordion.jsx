import { useState } from 'react';
import styles from './Accordion.module.css';
import { BiSolidChevronDown } from 'react-icons/bi';

function Accordion({ data }) {
  const [curOpen, setIsOpen] = useState(null);
  return (
    <div
      className={`${styles.wrapper} ${curOpen ? styles.open : styles.closed}`}
    >
      {data.map((item, index) => (
        <AccordionItem
          title={item.phase}
          answer={item.text}
          num={index}
          curOpen={curOpen}
          onOpen={setIsOpen}
          key={index}
        />
      ))}
    </div>
  );
}

function AccordionItem({ title, answer, num, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  function handleOpen() {
    onOpen(isOpen ? null : num);
  }
  return (
    <>
      <div
        className={`${styles.title} ${isOpen ? styles.open : styles.closed}`}
        onClick={handleOpen}
      >
        <div className={styles.text}>
          <p
            className={`${styles.number} ${
              isOpen ? styles.open : styles.closed
            }`}
          >
            {`0${num + 1}`}
          </p>
          <p>{title}</p>
        </div>
        <BiSolidChevronDown
          size={24}
          className={`${styles.icon} ${isOpen ? styles.open : ''}`}
        />
      </div>
      {isOpen ? (
        <div>
          <p className={styles.answer}>{answer}</p>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default Accordion;
