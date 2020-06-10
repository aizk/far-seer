import React, { useState, useEffect } from 'react'
import styles from './cssom.css';

export default function() {
  let box = React.createRef()
  const [offsetWidth, setOffsetWidth ] = useState(0)
  const [offsetHeight, setOffsetHeight ] = useState(0)

  useEffect(() => {
    console.log('useEffect', box)
    let node = box.current
    console.log('node', node)
    setOffsetWidth(node.offsetWidth)
    setOffsetHeight(node.offsetHeight)
  }, [])

  let infoClick = () => {
    console.log(box)
  }

  return (
    <div>
      <div ref={box} className={styles.box} onClick={infoClick}></div>

      <p>offsetWidth（整个盒模型的宽度）: { offsetWidth }</p>
      <p>offsetHeight（整个盒模型的高度）: { offsetHeight }</p>
    </div>
  );
}
