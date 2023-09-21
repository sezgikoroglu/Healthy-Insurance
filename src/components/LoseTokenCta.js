import React,{ useEffect } from 'react'
import { gsap } from 'gsap/gsap-core';
import { useApp } from '../context/state';

const LoseTokenCta = ({tokens}) => {

  const {currentPatient,setCurrentPatient} = useApp();

  useEffect(()=>{
    if(parseInt(tokens) <= 0 ){
      gsap.set(".lose-token-btn",{top:"0",background:"none",color:"black",duration:0.5})
      gsap.to(".lose-token-btn",{top:"20%",background:"rgba(214, 97, 147, 1)",color:"white",boxShadow:"16px 16px 16px 0px rgba(30, 52, 75, 0.1)",duration:0.5,delay:1.8,onStart(){
        //new Audio("./lose.mp3")?.play();
      }});
    }
  },[])

  return (
    <div className='btn-wrap lose-token-btn'>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="16" fill="#EBB0C9"/>
        <path d="M19.15 15.1C19.525 15.1 19.8438 14.9688 20.1062 14.7062C20.3687 14.4437 20.5 14.125 20.5 13.75C20.5 13.375 20.3687 13.0563 20.1062 12.7937C19.8438 12.5312 19.525 12.4 19.15 12.4C18.775 12.4 18.4563 12.5312 18.1937 12.7937C17.9312 13.0563 17.8 13.375 17.8 13.75C17.8 14.125 17.9312 14.4437 18.1937 14.7062C18.4563 14.9688 18.775 15.1 19.15 15.1ZM12.85 15.1C13.225 15.1 13.5437 14.9688 13.8062 14.7062C14.0687 14.4437 14.2 14.125 14.2 13.75C14.2 13.375 14.0687 13.0563 13.8062 12.7937C13.5437 12.5312 13.225 12.4 12.85 12.4C12.475 12.4 12.1562 12.5312 11.8937 12.7937C11.6312 13.0563 11.5 13.375 11.5 13.75C11.5 14.125 11.6312 14.4437 11.8937 14.7062C12.1562 14.9688 12.475 15.1 12.85 15.1ZM16 17.35C14.98 17.35 14.0537 17.6388 13.2212 18.2163C12.3887 18.7937 11.785 19.555 11.41 20.5H20.59C20.215 19.555 19.6112 18.7937 18.7788 18.2163C17.9462 17.6388 17.02 17.35 16 17.35ZM16 25C14.755 25 13.585 24.7638 12.49 24.2912C11.395 23.8187 10.4425 23.1775 9.6325 22.3675C8.8225 21.5575 8.18125 20.605 7.70875 19.51C7.23625 18.415 7 17.245 7 16C7 14.755 7.23625 13.585 7.70875 12.49C8.18125 11.395 8.8225 10.4425 9.6325 9.6325C10.4425 8.8225 11.395 8.18125 12.49 7.70875C13.585 7.23625 14.755 7 16 7C17.245 7 18.415 7.23625 19.51 7.70875C20.605 8.18125 21.5575 8.8225 22.3675 9.6325C23.1775 10.4425 23.8187 11.395 24.2912 12.49C24.7638 13.585 25 14.755 25 16C25 17.245 24.7638 18.415 24.2912 19.51C23.8187 20.605 23.1775 21.5575 22.3675 22.3675C21.5575 23.1775 20.605 23.8187 19.51 24.2912C18.415 24.7638 17.245 25 16 25ZM16 23.2C18.01 23.2 19.7125 22.5025 21.1075 21.1075C22.5025 19.7125 23.2 18.01 23.2 16C23.2 13.99 22.5025 12.2875 21.1075 10.8925C19.7125 9.4975 18.01 8.8 16 8.8C13.99 8.8 12.2875 9.4975 10.8925 10.8925C9.4975 12.2875 8.8 13.99 8.8 16C8.8 18.01 9.4975 19.7125 10.8925 21.1075C12.2875 22.5025 13.99 23.2 16 23.2Z" fill="#A42F61"/>
        </svg>
        <p className='tokens-title'>Lose Tokens!</p>
    </div>
  )
}

export default LoseTokenCta