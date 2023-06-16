import React from 'react'
import "./TeamCard.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function TeamCard({
  imgUrl,
  name,
  linkedin,
  github
}) {
  return (
    <div className='team-card'>
      <div className='card-image'>
        <img src={imgUrl}></img>
      </div>
      <h3>{name}</h3>
      <a href={github}><GitHubIcon className='about-icons' style={{fontSize: "32px"}}></GitHubIcon></a>
      <a href={linkedin}><LinkedInIcon className='about-icons  icon1'style={{fontSize: "32px"}}/></a>
    </div>
  )
}
