import { useContext } from 'react';

import { ThemesContext } from "../../context/ThemesContext";

import './footer-style.css';


function Footer(props) {
  const {selectedTheme, setSelectedTheme} = props;
  const themes = useContext(ThemesContext);
  const changeTheme = () => {
    setSelectedTheme((theme) => theme.title != themes[0].title ? themes[0] : themes[1]);
  }

  return (
    <footer>
        <button onClick={changeTheme} className="change-theme-btn">
          Смена темы
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 64V448C362 448 448 362 448 256C448 149.1 362 64 256 64z"/></svg>
        </button>

        <p>Сайт был сделан по <a href="https://www.behance.net/gallery/116685881/promo-sajt-vedra?tracking_source=search_projects%7Cwebdesign" target="_blanck">референсу</a> для пары по React-у</p>
    </footer>
  );
}

export default Footer;
