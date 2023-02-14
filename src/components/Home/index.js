import {Link} from 'react-router-dom'

import RegisterContext from '../../context/RegisterContext'

import Header from '../Header'
import {
  HomeMainContainer,
  UserName,
  TopicGreeting,
  Image,
  GreetingsMsg,
  RegisterDesc,
  Button,
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

const Home = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }
  return (
    <RegisterContext.Consumer>
      {value => {
        const {registrationStatus, Name, topic} = value

        const topicName =
          topicsList[topicsList.findIndex(eachTopic => eachTopic.id === topic)]
            .displayText

        return (
          <>
            <Header />
            <HomeMainContainer>
              {registrationStatus ? (
                <>
                  <UserName>Hello {Name}</UserName>
                  <TopicGreeting>Welcome to {topicName}</TopicGreeting>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </>
              ) : (
                <>
                  <GreetingsMsg>Welcome to Meetup</GreetingsMsg>
                  <RegisterDesc>Please register for the topic</RegisterDesc>
                  <Link to="/register">
                    <Button type="button" onClick={onClickRegister}>
                      Register
                    </Button>
                  </Link>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </>
              )}
            </HomeMainContainer>
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
