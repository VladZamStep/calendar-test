import { Button, DatePicker, DatePickerProps, Form, Input, Row, Select } from 'antd'
import { Dayjs } from 'dayjs'
import { Moment } from 'moment'
import { ChangeEventHandler, FC, useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IEvent } from '../models/IEvent'
import { IUser } from '../models/IUser'
import { rules } from '../utils/rules'

interface GuestsProps {
    guests: IUser[],
    submit: (event: IEvent) => void
}

const EventForm: FC<GuestsProps> = (props) => {

    const { user } = useTypedSelector(state => state.auth);

    const [event, setEvent] = useState<IEvent>({
        author: '',
        guest: '',
        date: '',
        description: '',
    });

    const selectDate: DatePickerProps['onChange'] = (date) => {
        if (date) {
            console.log(date.format('DD/MM/YYYY'))
            setEvent({ ...event, date: date.format('DD/MM/YYYY') })
        }
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const submitForm = () => {
        props.submit({ ...event, author: user.username })
    }

    return (
        <Form
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    onChange={e => setEvent({ ...event, description: e.target.value })}
                    value={event.description}
                />
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker
                    onChange={selectDate}
                />
            </Form.Item>
            <Form.Item
                label="Гость события"
                name="guest"
                rules={[rules.required()]}>
                <Select
                    onChange={(guest) => setEvent({ ...event, guest })}
                    showSearch
                    placeholder="Выберите гостя"
                    options={props.guests.map(guest => ({
                        value: guest.username,
                        label: guest.username
                    }))}
                />
            </Form.Item>
            <Row justify='end'>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        onClick={submitForm}
                    >
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    )
}

export default EventForm