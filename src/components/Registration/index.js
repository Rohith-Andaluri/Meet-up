import RegisterContext from '../../context/RegisterContext'
import Header from '../Header'
import {
  LoginContainer,
  BannerImage,
  LoginForm,
  LoginHeading,
  InputLabel,
  Input,
  Select,
  Option,
  RegisterButton,
  ErrorMsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Registration = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        Name,
        topic,
        changeRegistrationStatus,
        showError,
        updateError,
        updateUserName,
        updateTopicName,
      } = value

      const onChangeTopic = event => {
        updateTopicName(event.target.value)
      }

      const onChangeUsername = event => {
        updateUserName(event.target.value)
      }

      const onClickRegister = event => {
        event.preventDefault()

        if (Name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          changeRegistrationStatus()
        } else {
          updateError()
        }
      }

      return (
        <>
          <Header />
          <LoginContainer>
            <BannerImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <LoginForm onSubmit={onClickRegister}>
              <LoginHeading>Let us join</LoginHeading>
              <InputLabel htmlFor="username">NAME</InputLabel>
              <Input
                type="text"
                value={Name}
                onChange={onChangeUsername}
                placeholder="Your Name"
                id="username"
              />
              <InputLabel htmlFor="topic">TOPICS</InputLabel>
              <Select
                type="dropdown"
                value={topic}
                onChange={onChangeTopic}
                id="topic"
              >
                {topicsList.map(eachTopic => (
                  <Option key={eachTopic.id} value={eachTopic.id}>
                    {eachTopic.displayText}
                  </Option>
                ))}
              </Select>
              <RegisterButton type="submit">Register Now</RegisterButton>
              {showError && <ErrorMsg>Please enter your name</ErrorMsg>}
            </LoginForm>
          </LoginContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Registration
