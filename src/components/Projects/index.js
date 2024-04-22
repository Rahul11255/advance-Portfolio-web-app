import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        I've built a diverse range of projects, primarily focusing on web development. One highlight is a full-stack application utilizing React and integrating with APIs for seamless functionality.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'fweb app' ?
            <ToggleButton active value="fweb app" onClick={() => setToggle('fweb app')}> Full Stack WEB APP'S</ToggleButton>
            :
            <ToggleButton value="fweb app" onClick={() => setToggle('fweb app')}>Full Stack WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'react app' ?
            <ToggleButton active value="react app" onClick={() => setToggle('react app')}>React APP'S</ToggleButton>
            :
            <ToggleButton value="react app" onClick={() => setToggle('react app')}>React APP'S</ToggleButton>
          }
          {/* <Divider /> */}
          {/* {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          } */}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects