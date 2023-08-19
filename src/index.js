import React from 'react'
import ReactDOM from 'react-dom'
import SingleComment from './SingleComment'
import UserCard from './UserCard'
import profile1 from './images/1.jpg'
import profile2 from './images/2.jpg'
import profile3 from './images/3.jpg'

const App = () => {
  return (
    <div className='ui comments'>
      <UserCard>
        <SingleComment
          name={'Maher'}
          date={'today 5:00pm'}
          text={'this is cool'}
          avatar={profile3}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name={'Ahmed'}
          date={'today 6:00pm'}
          text={'incridable yeh'}
          avatar={profile2}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name={'Sarah'}
          date={'today 7:00pm'}
          text={'its amazing'}
          avatar={profile1}
        />
      </UserCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
