import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isItem10Highlighted: false,
            isItem11Highlighted: false
        };
    }

    toggleItem10 = () => {
        this.setState(prevState => ({
            isItem10Highlighted: !prevState.isItem10Highlighted
        }));
    }

    toggleItem11 = () => {
        this.setState(prevState => ({
            isItem11Highlighted: !prevState.isItem11Highlighted
        }));
    }

    render() {
        return (
            <main>
                <p>Дата, місце народження: 14.10.2005, місто Марганець</p>
                <p>Освіта: Ліцей №9, м. Марганець 2012-2023; НТУУ "КПІ", м. Київ 2023-2027</p>

                <h3>Хобі:</h3>
                <ul>
                    <li>Настільний теніс</li>
                    <li>Баскетбол</li>
                    <li>Читання</li>
                </ul>

                <h3>Улюблені фільми:</h3>
                <ol>
                    <li>З міркувань совісті</li>
                    <li
                        className={this.state.isItem10Highlighted ? 'highlight' : ''}
                        onClick={this.toggleItem10}
                        style={{ cursor: 'pointer' }}
                    >
                        Вовк з Волл Стріт
                    </li>
                    <li
                        className={this.state.isItem11Highlighted ? 'highlight' : ''}
                        onClick={this.toggleItem11}
                        style={{ cursor: 'pointer' }}
                    >
                        Володар перснів: Повернення короля
                    </li>
                </ol>

                <h3>Улюблене місто</h3>
                <p>
                    Гданськ — місто на півночі Польщі, лежить на березі Гданської затоки Балтійського моря.
                </p>

                <div className="controls">
                    <button onClick={this.props.onAdd}>Додати</button>
                    <button onClick={this.props.onIncrease}>Збільшити</button>
                    <button onClick={this.props.onDecrease}>Зменшити</button>
                    <button onClick={this.props.onDelete}>Видалити</button>
                </div>
            </main>
        );
    }
}

export default Content;