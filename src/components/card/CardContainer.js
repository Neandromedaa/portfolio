import { v4 as uuidv4 } from 'uuid';
import Card from './Card';

function CardContainer(){
    const cardsVideo = [
        {id: uuidv4(), link: 'hGAASEZkLak', description: 'Закрытие сезона 2023 с клубом Gt86 СПБ.', src: '0'},
        {id: uuidv4(), link: 'j0JsV6ifIgQ', description: 'Свадебный видеоклип, собранный из кадров фильма.', src: '4'},
        {id: uuidv4(), link: '6ACGNsbkXms', description: 'Видео эдит Subaru BRZ.', src: '8'},
        {id: uuidv4(), link: '-rJUGk6q4cc', description: 'Видео эдит Subaru BRZ.', src: '5'},
        {id: uuidv4(), link: 'PRwYDVff0Ks', description: 'Легкий монтаж и пиксельная графика.', src: '6'},
        {id: uuidv4(), link: 'upURXX3WyU0', description: 'Фонк ремикс из всех кадров за 2023 год вместе с клубом Gt-86.', src: '3'},
        {id: uuidv4(), link: '41MwTMvTY4s', description: 'Видео эдит с нейросетью и Subaru Brz.', src: '1'},
        {id: uuidv4(), link: 'jss5Kd3sbp0', description: 'Лайт нарезка кадров.', src: '7'},
        {id: uuidv4(), link: 'lx-nysC-mcQ', description: 'Трендовое видео из инстаграмма.', src: '2'},
    ];
    const cardsMotion = [
        {id: uuidv4(), link: 'yMdVwbwMm40', description: 'Первый раз запустил блендер.', src: '7'},
        {id: uuidv4(), link: '-uZqxAsMN-I', description: 'Рекламный ролик к 8-му марта.', src: '9'},
        {id: uuidv4(), link: 'KqU7Pes4j_4', description: '2д анимация выйгрыша.', src: '11'},
        {id: uuidv4(), link: 'Tm8b7p7jRRk', description: '2д анимация - рассказ истории через нейросеть.', src: '12'},
        {id: uuidv4(), link: '4fOcrOI6DNg', description: '2д моушн анимация неоновых линий и текста в киберпанк стиле.', src: '3'},
        {id: uuidv4(), link: 'Ba-zz9qCqT4', description: 'Моушн анимация неоновых вывесок, надписей и света.', src: '0'},
        {id: uuidv4(), link: 'lHIWOkENpsM', description: '3д анимация логотипа и 2д генерация в нейросети.', src: '1'},
        {id: uuidv4(), link: '4qo1xkHSFaQ', description: 'Второй раз запустил блендер.', src: '8'},
        {id: uuidv4(), link: 'gN_E_fpI1ec', description: 'Флэт моушн анимация преображения автомобиля сквозь года.', src: '6'},
        {id: uuidv4(), link: 'wvAUYSfbrfY', description: 'Анимация движения BMW E30 в 2d графике.', src: '4'},
        {id: uuidv4(), link: 'Q4lRU5wKoao', description: '2д анимация преезд автосервиса.', src: '2'},
        {id: uuidv4(), link: 'x-_5pSTIpF8', description: 'Реклама толстовки для individ в аниме стиле Initial D.', src: '5'},
        {id: uuidv4(), link: 'jP8phs5C3zs', description: 'Игровой автомат, анимация в 3d.', src: '10'},
        {id: uuidv4(), link: 'BCitFP8IEVM', description: 'Анимация для пиццерии', src: '13'},
    ];
    const cardsDesign = [
        {id: uuidv4(), description: 'Арт, постер, толстовка в векторной графике в Adobe Illustrator, Subaru BRZ в Японском ситле.', src: '0'},
        {id: uuidv4(), description: 'Обложка для трека на день матери в Adobe Illustrator, Трек и обложку можно найти на площадках https://bnd.lc/nakedmom', src: '1'},
        {id: uuidv4(), description: 'Дизайн стикера, нарисованный в Adobe Illustrator.', src: '6'},
        {id: uuidv4(), description: 'Дизайн вышивки, нарисованный в Adobe Illustrator.', src: '7'},
        {id: uuidv4(), description: 'Наклейки для (inst: @nightcoder) нарисованные в векторе в Adobe ilustrator.', src: '4'},
        {id: uuidv4(), description: 'Арт и постер в векторной графике в Adobe Illustrator, Toyota GT86 для inst: @akamenyar.', src: '2'},
        {id: uuidv4(), description: 'Дизайн вышивки, нарисованный в Adobe Illustrator.', src: '8'},
        {id: uuidv4(), description: 'Постер машины Toyota GT86, нарисованный в Adobe Illustrator.', src: '9'},
        {id: uuidv4(), description: 'Постер машины HONDA JADE, нарисованный в Adobe Illustrator.', src: '10'},
        {id: uuidv4(), description: 'Обложка на музыкальный альбом (http://bnd.lc/jFsK8) созданная в Adobe Photoshop.', src: '5'},
        {id: uuidv4(), description: 'Картина, нарисованная в Adobe Illustrator.', src: '11'},
        {id: uuidv4(), description: 'Наклейки для (inst: @borislav911) нарисованные в векторе в Adobe ilustrator.', src: '3'},
        // {id: uuidv4(), description: 'Лайт нарезка кадров.'},
        // {id: uuidv4(), description: 'Трендовое видео из инстаграмма.'}
    ];

    const video = cardsVideo.map(card => {
        return  <Card 
                    key={card.id} 
                    src={card.src}
                    link={card.link}
                    description={card.description}
                    type={'video'}
                />
    })

    const motion = cardsMotion.map(card => {
        return  <Card 
                    key={card.id} 
                    src={card.src}
                    link={card.link}
                    description={card.description}
                    type={'motion'}
                />
    })

    const design = cardsDesign.map(card => {
        return  <Card 
                    key={card.id} 
                    src={card.src}
                    description={card.description}
                    type={'design'}
                />
    })

    return <div className='container'>
        <h1>Видео</h1>
        <div id='video' className='anchor'></div>
        <div className='classContainer'>
            {video}
        </div> 

        <h1>Моушн</h1>
        <div className='anchor' id='motion'></div>
        <div className='classContainer'>
            {motion} 
        </div>

        <h1>Дизайн</h1>
        <div className='anchor' id='design'></div>
        <div className='classContainer'>
            {design}  
        </div> 
    </div>
}

export default CardContainer;