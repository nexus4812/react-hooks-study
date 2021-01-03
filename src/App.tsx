import React, {useState, useEffect} from 'react';


type State = {
    price: number,
    name: string
}

function App() {
    const initialState: State = {
        price: 0,
        name: ''
    };

    const [state, setState] = useState(initialState);

    const increment = (): void => setState({...state, price: state.price + 1});
    const decrement = (): void => setState({...state, price: state.price - 1});
    const changeName = (event : React.BaseSyntheticEvent): void => setState({...state, name: event.target.value});

    return (
        <div className="App">
            <div>
                <p>Counter {state.price}</p>
                <p>{state.name}</p>
                <input type="text" onChange={changeName}/>
                <button onClick={increment}> + 1</button>
                <button onClick={decrement}> - 1</button>
            </div>
        </div>
    );
}

export default App;
