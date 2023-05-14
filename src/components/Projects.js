import React, { useState } from "react"
import { useProjectsValue, useSelectedProjectValue } from "../context"

export const Projects = ({ activeValue = null}) => {
    const [active, setActive] = useState(activeValue)
    const { setSelectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();

    return (
        projects &&
        projects.map(project => (
            <li
                key = {project.projectid}
                data-doc-id = {project.docId}
                data-testid = "project-action"
                className={
                    active === project.projectid
                        ? 'active sidebar__project'
                        : 'sidebar__proejct'
                }
                onKeyDown={() => {
                    setActive(project.projectid);
                    setSelectedProject(project.projectid);
                }}
                onClick={() => {
                    setActive(project.projectid);
                    setSelectedProject(project.projectid);
                }}
                >
                    {('Proejct', JSON.stringify(project))}
                </li>
        ))
    )
}