import React from "react"
import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import {useDispatch} from "react-redux"
import { addCalendarFB } from "./redux/modules/calendar";
import './Upload.css'




function Upload(props) {

  const time_text = React.useRef();
  const input_text = React.useRef();
  const dispatch = useDispatch();
  console.log(time_text.current)
  console.log(input_text.current)

  return (
    <div>
      <Component onClick = {() => {
          props.history.push('/')
        }}/>
      <Container>
        <h1>Add Schedule</h1>

        <TextField
          inputRef ={time_text}
          id="datetime-local"
          label="Set the date"
          type="datetime-local"
          defaultValue="0000-00-00T00:00"
          InputLabelProps={{
            shrink: true,
          }}/>
          
        <TextField id="standard-basic" label="What is your schedule?" inputRef ={input_text} />
        <Button variant="contained" color="primary" onClick = {() => {
          let schedule = {
            date_time: time_text.current.value,
            todo: input_text.current.value,
          }
          if (!time_text.current.value){
            window.alert("Select the date")
          } 
          else if (!input_text.current.value){
            window.alert("What is your schedule?")
          }
          else {
            dispatch(addCalendarFB(schedule))
            window.setTimeout(()=>{
              props.history.push('/')
            }, 1000)
          }
        }}>
          Add Schedule
        </Button>
        <ExitBtn onClick = {() => {
        props.history.push('/')
        }}>
          <CloseIcon/>
        </ExitBtn>
      </Container>
    </div>
  )
}

const Component = styled.div`
  opacity: 0.3;
  height: 100vh;
  width: 100vw;
  background-color:floralwhite;
  z-index: 20;
`

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 30vw;
  max-width: 700px; 
  height: 50vh;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  align-items: center; 
  flex-direction: column; 
  z-index: 30;
  box-shadow: 0 3px 6px rgba(0,0,0,0.12), 0 2px 5px rgba(0,0,0,0.24);
  border: 3px solid black;
  @media (max-width:700px){
    width: 100vw;
  }
  @media (max-width:450px){
    width:60vw;
  }
`
const ExitBtn = styled.button`
  position: fixed;
  right: 5px;
  top: 5px;
  background-color: white;
  outline: none;
  border: none;
  cursor: pointer;
  @media (max-width:450px){
    right: 30px;
  }
`


export default Upload