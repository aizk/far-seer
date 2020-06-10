
import styles from './scroll.css';
import { useState } from 'react'

export default function() {
  const [start, setStart] = useState(0)

  return (
    <div className={styles.normal}>
      <h1>Page scroll {start}</h1>
    </div>
  );
}
