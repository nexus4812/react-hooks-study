import {eventAction, eventItem} from "../reducers";
import React, {Dispatch, ReactElement, useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

type props = {
    state: eventItem[],
    dispatch: Dispatch<eventAction>
}

export default function EventForm({state, dispatch}: props): ReactElement {

    const [title, setTitle] = useState('');
    const changeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value)
    };

    const [body, setBody] = useState('');
    const changeBody = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setBody(e.target.value)
    };

    const addTitle = (): void => {
        dispatch({
            type: "CREATE_TYPE",
            title: title,
            body: body,
        });
        setTitle('');
        setBody('');
    };

    const deleteAllTitle = (): void => {
        dispatch({
            type: "DELETE_ALL_TYPE",
        });
    };

    return (
        <Row>
            <Col>
                <h4> イベント作成フォーム</h4>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>タイトル</Form.Label>
                        <Form.Control type="text" value={title} onChange={changeTitle}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>ボディ</Form.Label>
                        <Form.Control as="textarea" rows={3} value={body} onChange={changeBody}/>
                    </Form.Group>

                    <Button variant="primary" onClick={addTitle}
                            disabled={title === '' || body === ''}>イベントを作成する</Button>{' '}
                    <Button variant="danger" onClick={deleteAllTitle}
                            disabled={state.length === 0}>全て削除する</Button>{' '}
                    <Button variant="danger">Danger</Button>
                </Form>
            </Col>
        </Row>)
}