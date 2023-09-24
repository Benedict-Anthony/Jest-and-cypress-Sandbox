import React, { useEffect, useState } from 'react'
type SkillsProps = {
    skills: string[]
}
const Skills = ({ skills }: SkillsProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        setTimeout(() => setIsLoggedIn(true), 500)
    }, [])
    return (
        <div>
            <ul data-testid="skills">
                {skills.map((skill, idx) => {
                    return (
                        <li data-testid="list-item" key={idx}>{skill}</li>
                    )
                })}
            </ul>
            {isLoggedIn ? <p>Benedict Anthony</p> : <p>Not logged in</p>}

            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Click me</button>
        </div>
    )
}

export default Skills