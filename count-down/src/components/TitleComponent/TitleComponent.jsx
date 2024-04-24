import './TitleComponent.css';

const TitleComponent = (props) => {
    const {
        title, eventColor
    } = props;

    return (
        <h1
            className='class-title'
            style={{ color: eventColor }}
        >
            {title}
        </h1>
    );
};

export default TitleComponent;