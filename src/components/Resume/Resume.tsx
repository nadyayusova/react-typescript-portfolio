import styles from './Resume.module.scss';

function Resume() {
  const {
    'resume-wrapper': resumeWrapper,
    workplace,
    'company-title': companyTitle,
    'company-description': companyDescription,
    position,
    'project-text': projectText,
    'technologies-list': technologiesList,
    'technologies-item': technologiesItem,
  } = styles;

  return (
    <div className={resumeWrapper}>
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
      <p className={projectText}>
        Опыт коммерческой разработки сайтов 2 года. Создала 10 сайтов средней и легкой степени
        сложности. Моими обязанностями были: написание скриптов на JavaScript, анимация (GSAP, CSS),
        верстка и стилизация (HTML, PUG, SCSS), исправление выявленных багов в других проектах.
      </p>
      <p className={projectText}>
        Работа над проектами ведется в команде: тимлид, менеджер и несколько программистов.
      </p>
      <p className={projectText}>Мои навыки:</p>
      <ul className={technologiesList}>
        <li className={technologiesItem}>
          - TypeScript, React, JavaScript (ES5, ES6), анимация (GSAP, CSS)
        </li>
        <li className={technologiesItem}>
          - HTML, PUG, CSS, SCSS, методология BEM, адаптивная верстка
        </li>
        <li className={technologiesItem}>
          - использование библиотек (swiper, simplebar, fancybox, locomotive scroll и других)
        </li>
        <li className={technologiesItem}>- прочее: Gulp, Webpack, Git, GitHub, GitLab</li>
      </ul>
    </div>
  );
}

export default Resume;
