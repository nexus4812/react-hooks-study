

export type eventAction = createAction | deleteAction | deleteAllAction;

type createAction = {
    type: 'CREATE_TYPE'
    title: string
    body: string
};

type deleteAction = {
    type: 'DELETE_TYPE'
    deleteId: number
};

type deleteAllAction = {
    type: 'DELETE_ALL_TYPE'
};

export type eventItem = {
    id: number,
    title: string,
    body: string
}

const event = (state: eventItem[], action: eventAction) => {
    switch (action.type) {
        case "CREATE_TYPE":
            return [...state, {
                id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
                title: action.title,
                body: action.body
            }];

        case "DELETE_TYPE":
            return state.filter(row => row.id !== action.deleteId);

        case "DELETE_ALL_TYPE":
            return [];
    }
};


export default event;