import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'

export default function Name() {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6',
      fontFamily: 'squidGameFont',
      display: 'inline-block',
      padding: '5px'
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#8fa5b6s' },
      { transform: 'perspective(600px) rotateX(0deg)'},
    ],
    leave: [{ color: '#FFBC30'}, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#F73D64'},
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Why', 'become', 'a', 'Campus Ambassador ?']), 2000))
    ref.current.push(setTimeout(() => set(['become', 'Campus Ambassador ?']), 5000))
    ref.current.push(setTimeout(() => set(['Why', 'become', 'a', 'Campus Ambassador ?']), 8000))
  }, [])

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [])

  {console.log(items)}
  return (
    <div >
      <div >
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div style={rest} onClick={reset}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight}}>{item}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}
