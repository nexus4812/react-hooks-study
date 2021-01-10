import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import React, {Dispatch} from "react";
import {eventAction, eventItem} from "../reducers";

type props = {
    state: eventItem[],
    dispatch: Dispatch<eventAction>
}

export default function EventList({state, dispatch}: props) {
    const deleteTitle = (id: number): void => {
        dispatch({
            type: "DELETE_TYPE",
            deleteId: id
        });
    };

    return (
        <Row className='mt-4'>
            <Col>
                <h4> イベント一覧</h4>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>id</th>
                        <th>タイトル</th>
                        <th>ボディ</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {state.map((row, index) => (
                        <tr key={row.id}>
                            <td>{index}</td>
                            <td>{row.id}</td>
                            <td>{row.title}</td>
                            <td>{row.body}</td>
                            <td><Button variant="danger" onClick={(): void => deleteTitle(row.id)}>削除</Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    );

}