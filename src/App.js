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
          </div>
        </div>
        <div className="Body_resume_personInfo">
          <div className="Body_resume_personInfo_skills">
            <div className="Body_resume_personInfo_skills_title">Навыки</div>
            <ul>
              {skills.map((item, index) => {
                return (
                  <li>
                    <div
                      key={index}
                      className="Body_resume_personInfo_skills_item"
                    >
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
                  Лендинг для компании{' '}
                  <a href="https://alexbash82.github.io/website-bitafit/">
                    BitaFit
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
