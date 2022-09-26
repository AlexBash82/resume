import './App.scss'

function App() {
  function fullYear(year, month, day) {
    const today = new Date()
    let age = today.getFullYear() - year
    if (
      today.getMonth() < month ||
      (today.getMonth() === month && today.getDate() < day)
    ) {
      age--
    }
    return age
  }

  const skills = [
    'JavaScript',
    'React',
    'TypeScript',
    'Redux',
    'SASS',
    'Flex',
    'Grid',
    'GitHub',
    'Bootstrap',
  ]

  return (
    <div className="Body">
      <div className="Body_resume">
        <div className="Body_resume_title">Junior Frontend Developer</div>
        <div className="Body_resume_mainInfo">
          <div className="Body_resume_mainInfo_photo"></div>
          <div className="Body_resume_mainInfo_text">
            <div className="Body_resume_mainInfo_text_title">
              Башкатов Алексей Сергеевич
            </div>
            <div className="Body_resume_mainInfo_text_string">
              Локация: Екатеринбург
            </div>
            <div className="Body_resume_mainInfo_text_string">
              Полных лет: {fullYear(1982, 2, 19)}
            </div>
            <div className="Body_resume_mainInfo_text_string">
              Почта: kometa.4m@gmail.com
            </div>
            <div className="Body_resume_mainInfo_text_string">
              Телефон: 8-901-201-70-18
            </div>
          </div>
        </div>
        <div className="Body_resume_personInfo">
          <div className="Body_resume_personInfo_skills">
            <div className="Body_resume_personInfo_skills_title">Навыки</div>
            <ul className="Body_resume_personInfo_skills_title_ul">
              {skills.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="Body_resume_personInfo_skills_item">
                      {item}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="Body_resume_personInfo_variants">
            <div className="Body_resume_personInfo_variants_title">
              Список работ
            </div>

            <div className="Body_resume_personInfo_variants_item">
              <p className="Body_resume_personInfo_variants_item_name">
                Лендинг для приложения{' '}
                <a href="https://alexbash82.github.io/website-bitafit/">
                  BitaFit
                </a>
              </p>
              <p className="Body_resume_personInfo_variants_item_text">
                Сайт адаптирован под различные экраны: от 320рх до 3200рх.
                <br />В зависимости от версии браузера используются изображения
                в различных форматах: jpeg, png или webp.
              </p>
              <p className="Body_resume_personInfo_variants_item_text">
                В проекте применены: JS, React, SASS, Flex, React-hook-form,
                React-input-mask, кастомный хук: useScroll.
              </p>
              <p className="Body_resume_personInfo_variants_item_text">
                Ссылка на репозиторий{' '}
                <a href="https://github.com/AlexBash82/website-bitafit">
                  GitHub
                </a>
              </p>
              <p className="Body_resume_personInfo_variants_item_text">
                Ссылка на{' '}
                <a href="https://alexbash82.github.io/website-bitafit/">
                  Github pages
                </a>
              </p>
            </div>

            <div className="Body_resume_personInfo_variants_item">
              <p className="Body_resume_personInfo_variants_item_name">
                Логическая игра "Пятнашки"
              </p>
              <p className="Body_resume_personInfo_variants_item_text">
                Небольшой Pet-project, основной целью которого - это
                демонстрация работы с библиотекой Redux.
              </p>
              <p className="Body_resume_personInfo_variants_item_text">
                В проекте применены: JS, React, SASS, Grid, Flex, Redux, а так
                же кастомный хук useReAssign()
              </p>
              <p className="Body_resume_personInfo_variants_item_text">
                Ссылка на репозиторий{' '}
                <a href="https://github.com/AlexBash82/fifteen">GitHub</a>
              </p>
              <p className="Body_resume_personInfo_variants_item_text">
                Ссылка на{' '}
                <a href="https://alexbash82.github.io/fifteen/">Github pages</a>
              </p>
            </div>
          </div>
        </div>

        <div className="Body_resume_experience">
          <div className="Body_resume_experience_title">Опыт работы:</div>
          <div className="Body_resume_experience_item">
            1) Фриланс: с мая 2022 по настоящее время
          </div>
        </div>

        <div className="Body_resume_aboutme">
          <div className="Body_resume_aboutme_title">О себе</div>
          <div className="Body_resume_aboutme_item">
            <p>
              Люблю учиться и осваивать что-то новое. Нравится разбираться в том
              как всё устроено. Самостоятельно изучаю английский язык. Люблю
              логические игры и загадки. Имею инженерный склад ума: работал
              замерщиком, проектировщиком и сборщиком встроенной корпусной
              мебели, а так-же техником по монтажу и обслуживанию систем
              безопасности. В последнее время стал задумываться о преимуществах
              работы без географической привязки. Хорошо всё обдумав, решил
              освоить программирование. По совету друзей, для освоения выбрал
              язык JavaScript. С января 2022 года начал самостоятельное
              обучение. На данный момент уже пишу небольшие программы и получаю
              удовольствие от процесса и результата. Предвкушаю ещё много нового
              и интересного!
            </p>
          </div>
        </div>
        <div className="Body_resume_footer">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="Body_resume_footer_button"
          >
            Вернуться наверх
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
