import styles from './Resume.module.scss';

function Resume() {
  const {
    'resume-wrapper': resumeWrapper,
    workplace,
    'company-title': companyTitle,
    'company-description': companyDescription,
    position,
    text: text,
    'resume-block': resumeBlock,
    'block-title': blockTitle,
    'technologies-list': technologiesList,
    'technologies-item': technologiesItem,
  } = styles;

  return (
    <div className={resumeWrapper}>
      <div className={resumeBlock}>
        <p className={blockTitle}>Summary:</p>
        <p className={text}>
          Опыт коммерческой разработки сайтов больше 2-х лет. Создала в общей сложности 11 сайтов.
        </p>
      </div>
      <div className={resumeBlock}>
        <p className={blockTitle}>Навыки:</p>
        <ul className={technologiesList}>
          <li className={technologiesItem}>
            - TypeScript, React, Next.js, JavaScript (ES5, ES6), анимация (GSAP, CSS)
          </li>
          <li className={technologiesItem}>
            - HTML, PUG, CSS, SCSS, Tailwind CSS, Styled Components, методология BEM, адаптивная
            верстка
          </li>
          <li className={technologiesItem}>
            - использование библиотек (swiper, simplebar, fancybox, locomotive scroll и других)
          </li>
          <li className={technologiesItem}>- прочее: Gulp, Webpack, Git</li>
        </ul>
      </div>

      <div className={resumeBlock}>
        <p className={blockTitle}>Опыт работы:</p>
      </div>

      <div className={resumeBlock}>
        <div className={workplace}>
          <h3 className={companyTitle}>Фриланс, проектная работа</h3>
        </div>
        {/* <p className={position}>GSAP Frontend-разработчик</p> */}
        <p className={text}>Создала 1 сайт на Next.js с анимацией на GSAP.</p>
      </div>

      <div className={resumeBlock}>
        <div className={workplace}>
          <h3 className={companyTitle}>
            <a
              href="https://ligaa.agency/portfolio.html"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              Лига А
            </a>
          </h3>
          <p className={companyDescription}>
            Вёрстка и фронтенд любой сложности для digital‑агентств, продуктовых компаний и
            фриланс‑команд.
          </p>
        </div>
        <p className={position}>Frontend-разработчик</p>
        <p className={text}>
          За 2 года создала 10 сайтов средней и легкой степени сложности. Моими обязанностями были:
          написание скриптов на JavaScript, анимация (GSAP, CSS), верстка и стилизация (HTML, PUG,
          SCSS), исправление выявленных багов в других проектах.
        </p>
        <p className={text}>
          Работа над проектами ведется в команде: тимлид, менеджер и несколько программистов.
        </p>
      </div>
    </div>
  );
}

export default Resume;
