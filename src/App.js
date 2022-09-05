import './App.scss'

function App() {
  function fullYear() {
    const dob = '19820219'
    const year = Number(dob.substr(0, 4))
    const month = Number(dob.substr(4, 2)) - 1
    const day = Number(dob.substr(6, 2))
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
          <div className="Body_resume_mainInfo_phrame">
            <div className="Body_resume_mainInfo_phrame_photo"></div>
          </div>
          <div className="Body_resume_mainInfo_text">
            <div className="Body_resume_mainInfo_text_title">
              Башктов Алексей Сергеевич
            </div>
            <div className="Body_resume_mainInfo_text_string">
              Локация: Екатеринбург
            </div>
            <div className="Body_resume_mainInfo_text_string">
              Полных лет: {fullYear()}
            </div>
            <div className="Body_resume_mainInfo_text_string">
              Почта: kometa.4m@gmail.com
            </div>
            <div className="Body_resume_mainInfo_text_string">
              Телефон: 8-901-201-701-восемь
            </div>
          </div>
        </div>
        <div className="Body_resume_personInfo">
          <div className="Body_resume_personInfo_skills">
            <div className="Body_resume_personInfo_skills_title">Навыки</div>
            <ul>
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
            <ul>
              <li>
                <div className="Body_resume_personInfo_variants_item">
                  <p className="Body_resume_personInfo_variants_item_name">
                    Лендинг для компании{' '}
                    <a href="https://alexbash82.github.io/website-bitafit/">
                      BitaFit
                    </a>
                  </p>
                  <p className="Body_resume_personInfo_variants_item_text">
                    Сайт адаптирован под различные экраны: от 320рх до 1920рх.
                  </p>
                  <p className="Body_resume_personInfo_variants_item_text">
                    В проекте применены: JS, React, SASS, Flex, React-hook-form,
                    <br />
                    React-input-mask.
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
              </li>
              <li>
                <p className="Body_resume_personInfo_variants_item_name">
                  Логическая игра "Пятнашки"
                </p>
                <p className="Body_resume_personInfo_variants_item_text">
                  Небольшой Pet-project, основной целью которого является
                  демострация работы с библиотекой Redux.
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
                  <a href="https://alexbash82.github.io/fifteen/">
                    Github pages
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
