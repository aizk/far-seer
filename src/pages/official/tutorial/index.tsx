import React, { useState } from 'react';
import styles from "./index.less";
import { Row, Col } from 'antd';

export default () => {
  // 第一个落子 X 下一个落子 O
  const [nextPlayer, setNextPlayer] = useState('X')
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null),
  }])
  const current = history[history.length - 1];
  const clickSquare = (i : any) => {
    if (current.squares[i] || calculateWinner(current.squares)) {
      // alert('位置以落子或有胜出者')
      return
    }
    
    // 落子（set 会触发组件重新渲染）
    setHistory(state => {
      // 要返回一个新对象
      const squares = current.squares.slice()
      squares[i] = nextPlayer
      return state.concat([{
        squares: squares,
      }])
    })
    
    // 反转
    setNextPlayer(v => v === 'X' ? 'O' : 'X')
  }
  
  // 判断是否胜出
  const winner = calculateWinner(current.squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next Palyer: ${nextPlayer}`
  }

  const jumpTo = (move : any) => {
    setHistory(history.slice(0, move))
  }

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{ desc }</button>
        </li>
      )
  })

  return (
    <Row justify="center">
      <Col span={6}>
        <div>
          <Board
            squares={current.squares}
            onClick={(i : any) => clickSquare(i)}
          />
        </div>
        <div className={styles.info}>
          <h1>{status}</h1>
          <ol>{moves}</ol>
        </div>
      </Col>
    </Row>
  )
}

function Board(props : any) {
  const renderSquare = (i : any) => {
    i = i - 1
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />
  }

  return (
    <div>
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
  return (
    <div className={styles.square} onClick={props.onClick}>
      { props.value }
    </div>
  )
}

