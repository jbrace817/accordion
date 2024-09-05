import { useState } from 'react';
import styles from './Accordion.module.css';

function Accordion() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={styles.wrapper}>
      <h2>1. Render Phase (Virtual DOM Comparison)</h2>
      {isOpen ? (
        <div>
          <p>
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
