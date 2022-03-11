import Card from '../partials/Card';


let cardData = [
    {cardParamData: "16л", cardParam: "Объем", cardText:"Человеку для выживания необходимо примерно 1,5 литра воды в день. Полное ведро продлит жизнь на 10 дней"},
    {cardParamData: "24см", cardParam: "Диаметр", cardText:"ЧКомпактное ведро, которое можно взять даже в поход"},
    {cardParamData: "сталь", cardParam: "Ручка", cardText:"Стальная ручка позволит переносить в ведре больше, чем ты сможешь поднять"}
]

function Info() {
    return (
    <section>
        <h1 id="info" className="main-title">На все случаи жизни</h1>

        <div className="main-cards">
          {cardData.map((elem) => <Card key={cardData.indexOf(elem)} cardParamData={elem.cardParamData} cardParam={elem.cardParam} cardText={elem.cardText}/>)}
        </div>
    </section>
    );
}

export default Info;