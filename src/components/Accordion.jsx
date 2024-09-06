import { useState } from 'react';
import styles from './Accordion.module.css';
import { BiSolidChevronDown } from 'react-icons/bi';

function Accordion() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={`${styles.wrapper} ${isOpen ? styles.open : styles.closed}`}
    >
      <div
        className={`${styles.title} ${isOpen ? styles.open : styles.closed}`}
      >
        <p
          className={`${styles.number} ${isOpen ? styles.open : styles.closed}`}
        >
          01
        </p>
        <p>Render Phase (Virtual DOM Comparison)</p>
        <BiSolidChevronDown size={24} className={styles.icon} />
      </div>
      {isOpen ? (
        <div>
          <p className={styles.answer}>
            'When a component updates, React re-renders the component and
            creates a new virtual DOM tree.'
          </p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Accordion;
