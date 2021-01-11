import React, { ReactElement, useReducer} from 'react';
import Container from 'react-bootstrap/Container';

import reducer from "./reducers";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import {AppContext} from "./context/AppContenxt";

function App(): ReactElement {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <Container>
                <EventForm/>
                <EventList/>
            </Container>
        </AppContext.Provider>
    );
}

export default App;
