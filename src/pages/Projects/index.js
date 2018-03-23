import React, { Component } from 'react'

import "./projects.css"

import project1 from "../../images/project1.png"
import project2 from "../../images/project2.png"
import project3 from "../../images/project3.png"

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            project1Small: true,
            project1Big: false,
            project2Small: true,
            project2Big: false,
            project3Small: true,
            project3Big: false,
        }
        this.handleProject1Change = this.handleProject1Change.bind(this)
        this.handleProject2Change = this.handleProject2Change.bind(this)
        this.handleProject3Change = this.handleProject3Change.bind(this)
    }
    handleProject1Change() {
        console.log("clicked1")
        this.setState({
            project1Small: !this.state.project1Small,
            project1Big: !this.state.project1Big
        })
    }
    handleProject2Change() {
        console.log("clicked2")
        this.setState({
            project2Small: !this.state.project2Small,
            project2Big: !this.state.project2Big
        })
    }
    handleProject3Change() {
        console.log("clicked2")
        this.setState({
            project3Small: !this.state.project3Small,
            project3Big: !this.state.project3Big
        })
    }
    render() {
        let project1Small = { display: this.state.project1Small ? "block" : "none" };
        let project1Big = { display: this.state.project1Big ? "block" : "none" }
        let project2Small = { display: this.state.project2Small ? "block" : "none" }
        let project2Big = { display: this.state.project2Big ? "block" : "none" }
        let project3Small = { display: this.state.project3Small ? "block" : "none" }
        let project3Big = { display: this.state.project3Big ? "block" : "none" }
        return (
            <div className="projects">
                <h2 className="projectsText" >Examples of projects</h2>
                <div className="projectBox">
                    <h3 className="projectsText" >Business Time Project</h3>
                    <p className="projectsText" >"A simple website of a business idea" - I went with a fantasy space ork workshop. It links three different pages together, responsive, and using inline/block.</p>
                    <img src={project1} onClick={this.handleProject1Change} className="projectSmall" style={project1Small} alt="something" />
                    <img src={project1} onClick={this.handleProject1Change} className="projectBig" style={project1Big} alt="something" />
                </div>
                <div className="projectBox">
                    <h3 className="projectsText" >Personal React/Redux Site</h3>
                    <p className="projectsText" >"React/Redux site with a theme of my choosing, with the use of an api." - Found a Dnd 5th edition api and created my own spellbook app. First big project with react and redux, had a lot of fun with the css on this one. Met the MVP, minimum viable product fro a working website. </p>
                    <img src={project2} onClick={this.handleProject2Change} className="projectSmall" style={project2Small} alt="something" />
                    <img src={project2} onClick={this.handleProject2Change} className="projectBig" style={project2Big} alt="something" />
                </div>
                <div className="projectBox">
                    <h3 className="projectsText" >My DnD Project</h3>
                    <p className="projectsText" >"My personal project for the use of dnd" - Expanded on pervious projects with full user authentication and databases. The first project that has been deployed. It will be updated over time.
                <a href="https://my-dnd-project.herokuapp.com/ " > https://my-dnd-project.herokuapp.com/ </a>
                    </p>
                    <img src={project3} onClick={this.handleProject3Change} className="projectSmall" style={project3Small} alt="something" />
                    <img src={project3} onClick={this.handleProject3Change} className="projectBig" style={project3Big} alt="something" />
                </div>
            </div>
        )
    }
}

export default Projects