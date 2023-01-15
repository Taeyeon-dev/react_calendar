import React from 'react'
import styled from "styled-components"
import {useDispatch} from "react-redux";
import CloseIcon from '@material-ui/icons/Close';
import { removeCalendarFB, updateCalendarFB } from './redux/modules/calendar';
import './Modal.css';
import Alarm from '@material-ui/icons/Alarm';



function Modal({status, close, day,date, time, todo, id}) {
const dispatch = useDispatch()

  return (
    <>
      {status ? (
        <div>
          <Component onClick = {close} />
          <ModalContainer>
            <h1>MY SCHEDULE</h1>
            <Text>
              &nbsp;{date} {day} {time}
            </Text>
            <Text><Alarm/>TODO LIST</Text>
            <Text>{todo}</Text>
            <div className = 'modalBtn'>
              <button id='deleteBtn' onClick = {() => {
                dispatch(removeCalendarFB(id))
                close()
              }}>
                DELETE
              </button>
              <button id='successBtn' style={{marginLeft : '20px'}} onClick= {()=> {
                dispatch(updateCalendarFB(id))
                close()
              }}>
                SUCCESS
              </button >
            </div>
            <ExitBtn onClick = {close} >
              <CloseIcon/>
            </ExitBtn>
          </ModalContainer>
        </div>
      ): null}
    </>
  )
}

const Component = styled.div`
  position: fixed;
  top: 0;
  opacity: 0.4;
  height: 100vh;
  width: 100%;
  background-color: yellow;
  z-index: 10;
`

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: beige;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  max-width: 700px; 
  width: 30vw;
  height: 50vh;
  border-radius: 10px;
  padding: 30px;
  z-index: 20;
  opacity: 1;
  box-shadow: 0 3px 6px rgba(0,0,0,0.12), 0 2px 5px rgba(0,0,0,0.24);
  @media (max-width:700px){
    width: 60vw;
  }
  @media (max-width:450px){
    width: 60vw;
  }
`
const ExitBtn = styled.button`
  position: fixed;
  right: 5px;
  top: 5px;
  background-color: yellowgreen;
  outline: none;
  border: none;
  cursor: pointer;
  @media (max-width:450px){
    right: 5px;
  }
`
const Text = styled.div`
  font-size: 18px;
`


export default Modal