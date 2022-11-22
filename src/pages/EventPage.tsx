import { Button, Layout, Modal, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react'
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

const EventPage: FC = () => {

    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const { guests, events } = useTypedSelector(state => state.event);
    const { user } = useTypedSelector(state => state.auth);
    const { fetchGuests, createEvent, fetchEvents } = useActions();

    useEffect(() => {
        fetchGuests();
        fetchEvents(user.username);
    }, []);

    const addEvent = (event: IEvent) => {
        setModalVisible(false);
        createEvent(event);
    }

    return (
        <Layout>
            <EventCalendar events={events} />
            <Row justify='center'>
                <Button onClick={() => setModalVisible(true)}>
                    Добавить событие
                </Button>
                <Modal
                    title="Добавить событие"
                    visible={modalVisible}
                    footer={null}
                    onCancel={() => setModalVisible(false)}
                >
                    <EventForm
                        guests={guests}
                        submit={addEvent}
                    />
                </Modal>
            </Row>
        </Layout>
    )
}

export default EventPage;