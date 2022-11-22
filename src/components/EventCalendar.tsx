import { Calendar } from 'antd'
import React, { FC } from 'react'
import { IEvent } from '../models/IEvent'
import type { Dayjs } from 'dayjs';

interface EventCalendarProps {
    events: IEvent[]
}

const EventCalendar: FC<EventCalendarProps> = (props) => {

    const dateCellRender = (value: Dayjs) => {
        console.log(value.format('DD/MM/YYYY'))
        const currentDayEvents = props.events.filter(ev => ev.date === value.format('DD/MM/YYYY'))
        console.log(currentDayEvents)
        return (
            <div>
                {currentDayEvents.map((ev, index) =>
                    <div key={index}>{ev.description}</div>
                )}
            </div>
        );
    };

    return (
        <Calendar dateCellRender={dateCellRender} />
    )
}

export default EventCalendar