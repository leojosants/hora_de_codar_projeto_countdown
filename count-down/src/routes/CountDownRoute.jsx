import {
    useContext
} from 'react';

import {
    Navigate
} from 'react-router-dom';

import {
    CountdownContext
} from '../context/CountdownContext.jsx';

import CounterComponent from '../components/CounterComponent/CounterComponent.jsx';
import TitleComponent from '../components/TitleComponent/TitleComponent.jsx';
import useCountDownCustomHook from '../customHooks/useCountDownCustomHook.jsx';

const CountDownRoute = () => {
    const {
        event
    } = useContext(CountdownContext);

    if (!event) {
        return <Navigate to='/' />;
    }

    const eventTitle = event.title;
    const eventColor = event.color;

    const [
        day, hour, minute, second
    ] = useCountDownCustomHook(event.date);

    return (
        <>
            <TitleComponent
                title={eventTitle}
                eventColor={eventColor}
            />

            <div className='class-countdown-container'>
                <CounterComponent
                    title='Dias'
                    number={day}
                     eventColor={eventColor}
                />

                <CounterComponent
                    title='Horas'
                    number={hour}
                     eventColor={eventColor}
                />

                <CounterComponent
                    title='Minutos'
                    number={minute}
                     eventColor={eventColor}
                />

                <CounterComponent
                    title='Segundos'
                    number={second}
                     eventColor={eventColor}
                />
            </div>
        </>
    );
};

export default CountDownRoute;