import './Main.css';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input'
import { Card } from '../Card/Card'
import { Spinner } from '../Spinner/Spinner';
import { Header } from '../Header/Header';




export function Main({ cards, isLoading, value, onChange, onSubmit }) {





    return (
        <>
            <Header />
            <form className='app__form' onSubmit={onSubmit}>
                <Input value={value} onChange={onChange} />
                <Button text='Save' />
            </form>
            <div className='app__cards'>
                {isLoading ? <Spinner /> : cards.map((card) => {
                    return (
                        <Card key={card.id} imgSrc={card.urls.regular} title={card.description} subtitle={card.alt_description} />
                    )

                })}
            </div>
        </>
    )
}