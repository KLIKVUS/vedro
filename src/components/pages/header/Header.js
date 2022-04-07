import './header-style.css';


function Header() {
  return (
    <header>
      <div className="header-title">
        <h1><a href='/'>Ведро</a></h1>
      </div>

      <div className="header-info">
        <div className="header-info__text">
          <div><p>Настало время</p><p>обновить ведро</p></div>
          <div><p>Ограниченная</p><p>коллекция (200 шт)</p></div>
        </div>

        <a href="./info#info" className="header-info__link yakor">эбаут</a>
      </div>

      <div className="header-params">
        <p className="header-params__title">v&#8212;2.0</p>

        <div className="header-params__text">
          <p><span className="header-params__param">объем</span>16л</p>
          <p><span className="header-params__param">диаметр</span>24см</p>
          <p><span className="header-params__param">ручка</span>сталь</p>
        </div>
      </div>

      <img className="header-img" src="./img/vedro.webp" alt="vedro img"/>
    </header>
  );
}

export default Header;
