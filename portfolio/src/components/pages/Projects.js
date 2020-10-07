import React from "react";

function Projects(props) {
    // console.log(props)
    return (
        <>
            <div className="col-md-6">
                <p>{props.title}</p>
                <img className="image" src={props.image} alt = {props.title}></img>
                <a rel="noopener noreferrer" className="ancorTag" target="_blank" href={props.Link}><p>{props.title} Link</p></a>
                <a rel="noopener noreferrer" className = "ancorTag" target = "_blank" href = {props.GitHubLink}>GitHubLink</a>
            </div>
        </>
    )
}

export default Projects;