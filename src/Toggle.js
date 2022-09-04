import React, {useState} from 'react'
import { useTransition, animated } from 'react-spring'

export default function Toggle(props) {
    const [toggle, set] = useState(false)
  const transitions = useTransition(toggle, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 2000,
    // config: config.molasses,
    onRest: () => set(!toggle),
  })
  return transitions(({ opacity }, item) =>
  item ? (
    <animated.div
      style={{
        position: 'inherit',
        marginLeft: '59px',
        opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
      }}>
        {props.value1}
    </animated.div>
  ) : (
    <animated.div
      style={{
        position: 'inherit',
        opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
      }}>
        {props.value2}
    </animated.div>
  ) 
)
}
