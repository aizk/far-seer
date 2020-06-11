import React, { useState } from 'react';
import styles from "./index.less";
import { Row, Col } from 'antd';

export default () => {
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null),
  }])

  return (
    <div>
      <div>
        <Board />
      </div>
      <div className={styles.info}>
        <div>status</div>
        <div>list</div>
      </div>
    </div>
  )
}

function Board() {
  // 第一个落子 X 下一个落子 O
  const [nextPlayer, setNextPlayer] = useState('X')

  // 把棋盘状态保存在父组件中，传递给子组件（提升子组件的状态）
  const [squares, setSquares] = useState(Array(9).fill(null))

  const clickSquare = (i : any) => {
    if (squares[i] || calculateWinner(squares)) {
      // alert('位置以落子或有胜出者')
      return
    }
    
    // 落子（set 会触发组件重新渲染）
    setSquares(state => {
      // 要返回一个新对象
      state[i] = nextPlayer
      return state.slice()
    })

    setNextPlayer(v => v === 'X' ? 'O' : 'X')
  }

  const renderSquare = (i : any) => {
    i = i - 1
    return <Square value={squares[i]} onClick={() => clickSquare(i)} />
  }

  // 判断是否胜出
  console.log('calculateWinner')
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next Palyer: ${nextPlayer}`
  }

  return (
    <div>
      <h1>{status}</h1>
      <div className={styles.board}>
        <Row>
          <Col span={8}>{renderSquare(1)}</Col>
          <Col span={8}>{renderSquare(2)}</Col>
          <Col span={8}>{renderSquare(3)}</Col>
        </Row>
        <Row>
          <Col span={8}>{renderSquare(4)}</Col>
          <Col span={8}>{renderSquare(5)}</Col>
          <Col span={8}>{renderSquare(6)}</Col>
        </Row>
        <Row>
          <Col span={8}>{renderSquare(7)}</Col>
          <Col span={8}>{renderSquare(8)}</Col>
          <Col span={8}>{renderSquare(9)}</Col>
        </Row>
      </div>
    </div>
  )
}

function calculateWinner(squares : any) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Square(props : any) {
  // const [value, setValue] = useState('')

  // const click = () => {
  //   setValue('X')
  // }

  return (
    <div className={styles.square} onClick={props.onClick}>
      { props.value }
    </div>
  )
}

