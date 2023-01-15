import React from 'react'
import Main from './Main'
import Upload from './Upload'
import Calendar from './redux/modules/calendar'
import NotFound from './NotFound'
import {Route} from 'react-router-dom'
import {withRouter} from 'react-router'



function App() {
  return (
    <div>
      <Route>
        <Route exact path="/" component={Main}/>
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/calendar" component={Calendar} />      </Route>
    </div>
  )
}

export default (withRouter(App));
