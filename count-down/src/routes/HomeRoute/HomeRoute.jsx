import {
    useContext, useState
} from 'react';

import {
    useNavigate
} from 'react-router-dom';

import {
    CountdownContext
} from '../../context/CountdownContext.jsx';

import './HomeRoute.css';

const HomeRoute = () => {
    const [
        title, setTitle
    ] = useState();

    const [
        date, setDate
    ] = useState();

    const [
        image, setImage
    ] = useState();

    const [
        color, setColor
    ] = useState();

    const {
        setEvent
    } = useContext(CountdownContext);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const eventObject = {
            title, date, image, color
        };

        setEvent(eventObject);
        navigate('/countdown');
    };

    return (
        <div className='class-home'>
            <h2>
                Monte a sua contagem regressiva
            </h2>

            <form
                className='class-countdown-form'
                onSubmit={handleSubmit}
            >
                <label>
                    <span>
                        Título
                    </span>

                    <input
                        type='text'
                        name='title'
                        placeholder='Digite o título...'
                        onChange={(event) => setTitle(event.target.value)}
                        required
                    />
                </label>

                <label>
                    <span>
                        Data do evento
                    </span>

                    <input
                        type='date'
                        name='date'
                        onChange={(event) => setDate(event.target.value)}
                        required
                    />
                </label>

                <label>
                    <span>
                        Imagem
                    </span>

                    <input
                        type='text'
                        name='image'
                        placeholder='Insira a url...'
                        onChange={(event) => setImage(event.target.value)}
                    />
                </label>

                <label>
                    <span>
                        Cor do tema
                    </span>

                    <input
                        type='color'
                        name='color'
                        onChange={(event) => setColor(event.target.value)}
                        required
                    />
                </label>

                <input
                    type='submit'
                    value='Enviar'
                />
            </form>
        </div>
    );
};

export default HomeRoute;