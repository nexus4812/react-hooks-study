import React, { ReactElement, useReducer,} from 'react';
import Container from 'react-bootstrap/Container';

import reducer from "./reducers";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";

function App(): ReactElement {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <Container>
            <EventForm state={state} dispatch={dispatch}/>
            <EventList state={state} dispatch={dispatch}/>
        </Container>
    );
}

export default App;
