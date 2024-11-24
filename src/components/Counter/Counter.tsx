import React, { useReducer } from 'react'
import styled from 'styled-components'

const CounterContainer = styled.div`
    text-align: center;
    margin-top: 20px;
`

const Button = styled.button<{ color: string }>`
    margin: 5px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.color};
    background-color: ${(props) => props.color};
    color: #fff;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`

type CounterAction =
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'reset' }

const counterReducer = (state: number, action: CounterAction): number => {
    switch (action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return 0
        default:
            throw new Error('Unknown action type')
    }
}

const Counter: React.FC = () => {
    const [count, dispatch] = useReducer(counterReducer, 0)

    return (
        <CounterContainer>
            <h3>Counter: {count}</h3>
            <Button
                color="#007bff"
                onClick={() => dispatch({ type: 'increment' })}
            >
                Increment
            </Button>
            <Button
                color="#dc3545"
                onClick={() => dispatch({ type: 'decrement' })}
            >
                Decrement
            </Button>
            <Button color="#6c757d" onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </Button>
        </CounterContainer>
    )
}

export default Counter
