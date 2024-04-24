import './CounterComponent.css';

const CounterComponent = (props) => {
    const {
        title, number, eventColor
    } = props;

    return (
        <div className='class-counter'>
            <p
                className='class-counter-number'
                style={{ backgroundColor: eventColor }}
            >
                {number}
            </p>

            <h3
                className='class-counter-text'
                style={{ color: eventColor }}
            >
                {title}
            </h3>
        </div>
    );
};

export default CounterComponent;