import React from "react";

function Projects(props) {
    // console.log(props)
    return (
        <>
            <div className="col-sm-3 col-md-6">
                <p>{props.title} {props.name}</p>
                <img className="image" src={props.image} alt={props.title}></img>
                <a rel="noopener noreferrer" className="ancorTag" target="_blank" href={props.Link || props.YouTubeLink}><p>{props.title} {props.foo}{props.Node}</p></a>
                <a rel="noopener noreferrer" className="ancorTag" target="_blank" href={props.GitHubLink}>GitHubLink</a>
            </div>
        </>
    )
}

export default Projects;