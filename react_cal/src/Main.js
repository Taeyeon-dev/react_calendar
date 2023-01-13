import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import {getCalendarFB} from "./redux/modules/calendar"
import "./Main.css";
import Modal from './Modal'
import Hambuger from '@material-ui/icons/Menu';


function Main(props) {
  const schedule_list = useSelector((state) => state.calendar.schedule)
  const dispatch = useDispatch()
  const [todo_info, setTodo] = useState()
  const [time_info, setTime] = useState()
  const [day_info, setDay] = useState()
  const [date_info, setDate] = useState()
  const [id_info, setId] = useState()
  const [visible, isBtnOpen] = useState(true)
  const [status, isModalOpen] = useState(false)
  let calendar_list = []
  let complete_list = []

  const openModal = (id) => {
    let daily_schedule = schedule_list.filter((schedule) => {
      if(schedule.id == id){
        return schedule
      }})
    let time = daily_schedule[0].date.split('T')[1]
    let hour = time.split(':')[0] 
    let minute = time.split(':')[1]
    let day = "AM"
    if (hour >= 12){
      day = "PM"
    }
    if(hour > 12){
      hour = (hour-12)
    }
    setTodo(daily_schedule[0].title)
    setTime(hour+":"+minute)
    setDay(day)
    setDate(daily_schedule[0].date.split('T')[0])
    setId(id)
    isModalOpen(true)
  }

  const closeModal = () => {
    isModalOpen(false)
  }

  React.useEffect(() => {
    dispatch(getCalendarFB())
  }, [])

  calendar_list = schedule_list.map((r, idx) => {
    return {title: r.title, start: r.date, id: r.id, color: r.completed ? 'red': 'green'}
  }) 
  
  complete_list = calendar_list.filter((r, idx) => {
    if(r.color === 'red'){
      return {...complete_list, r}
    }
  })

  if (!complete_list[0]){
    complete_list = null
  }

  const toggleBtn = document.querySelector('.navbar_toggles');
  const menu = document.querySelector('.navbar_menu');
  
  toggleBtn.addEventListener('click', () =>{
      menu.classList.toggle('active');
  })

  return (
    <div className='headerNav'>
      <a href='#' className='navbar_toggles'>
          <Hambuger/>
      </a>
      <div className='navbar_menu'>
        <AddBtn >
          <button id='addBtn' aria-label="add"  variant="extended" onClick = {() => {
            props.history.push('/upload')}}>
              Add
          </button>
        </AddBtn>
      </div>
      <FullCalendar 
          plugins={[ dayGridPlugin ]}
          headerToolbar={{
            start: '',
            center : 'title',
            end: 'today prevYear,prev,next,nextYear',
          }}
          
          initialView="dayGridMonth"
          height = '80vh'
          events = {visible ? calendar_list: complete_list}
          eventClick ={(info) => {
            openModal(info.event.id)
          }}    
      /> 
  
          
     

      {/* <CompleteBtn >
          <button id='finishBtn' aria-label="add" variant="extended" onClick = {() => {
            isBtnOpen(true)
          }}>
            Finished Schedule
          </button>
     </CompleteBtn>
    
      <EntireBtn>
        <button id='fullBtn' aria-label="add" variant="extended" onClick = {() => {
          isBtnOpen(true)
        }}>
          Full Shcedule
        </button>
      </EntireBtn> */}


      <Modal id ={id_info} date = {date_info} day = {day_info} time = {time_info} todo = {todo_info}  status = {status} close={closeModal} />
    </div>  
  )
}

const AddBtn = styled.div`
  position: fixed;
  left: 30px;
  z-index: 10;
  @media (max-width:425px){
    top: 100px;

  }
  `
// const CompleteBtn = styled.div`
//   position: fixed;
//   top: 150px;
//   left: 30px;
//   z-index: 10;
//   `
// const EntireBtn = styled.div`
//   position: fixed;
//   top: 200px;
//   left: 30px;
//   z-index: 10;
// `

const Word = styled.span`
  @media (max-width:425px){
    display: none;

  }

  @media (max-width:820px){
    display: none;

  }
`

export default Main;