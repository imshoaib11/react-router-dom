import React from 'react'
import { Card } from 'react-bootstrap'
import logo1 from '../assets/uiux1.webp'
import logo2 from '../assets/uiux2.webp'
import logo3 from '../assets/uiux3.webp'
import logo4 from '../assets/uiux4.jpg'
import logo5 from '../assets/uiux5.webp'
import logo6 from '../assets/uiux6.webp'
import logo7 from '../assets/uiux7.webp'
import logo8 from '../assets/uiux8.webp'
import logo9 from '../assets/uiux9.webp'
function Career() {
    let careerData = [
        {
            title: "Top 10 UI/UX Project Ideas for Beginners",
            name: "By Isha Sharma",
            date: "14 June, 2024",
            time: "4 Min Read",
            image: `${logo1}`
        },
        {
            title: "10 Skills Required to Become a UI/UX Designer",
            name: "By Isha Sharma",
            date: "14 June, 2024",
            time: "3 Min Read",
            image: `${logo2}`

        },
        {
            title: "UI/UX Syllabus | Complete Curriculum 2024",
            name: "By Lukesh S",
            date: "26 March, 2024",
            time: "5 Min Read",
            image: `${logo3}`
        },
        {
            title: "UI/UX Designer Job Description and Roles & Responsibilities",
            name: "By Meghana D",
            date: "16 Apr, 2024",
            time: "6 Min Read",
            image: `${logo4}`
        },
        {
            title: "UI/UX Salary Guide 2024: Is it a High-Paying Career?",
            name: "By Srinithi Sankar",
            date: "16 Apr, 2024",
            time: "6 Min Read",
            image: `${logo5}`
        },
        {
            title: "33 Interview Questions and Answers for UI/UX Designers",
            name: "By Meghana D",
            date: "04 Apr, 2024",
            time: "6 Min Read",
            image: `${logo6}`
        },
        {
            title: "How to Download an Image from Figma? A 5-Step Guide to Help You Out",
            name: "By Lukesh S",
            date: "25 Mar, 2024",
            time: "3 Min Read",
            image: `${logo7}`
        },
        {
            title: "How to Install Figma On Windows",
            name: "By Meghana D",
            date: "15 Apr, 2024",
            time: "5 Min Read",
            image: `${logo8}`
        },
        {
            title: "The Future and Scope of UI/UX Design: A Comprehensive Overview",
            name: "By Jaishree Tomar",
            date: "16 Apr, 2024",
            time: "6 Min Read",
            image: `${logo9}`
        }, 

    ]  
    return <>
    <h3 style={{textAlign:"center"}}>UI UX Designer</h3>
    <div className='card-container'>
        {
            careerData.map((e,i)=> {
            return <Card className='card-wrapper'key={i}>
                <Card.Img variant="top" src={e.image} />
                    <Card.Body>
                        <Card.Title>{e.title}</Card.Title>
                        <span>{e.name}</span>
                        <div className = 'span'>
                            <span>{e.date}</span>
                            <span>{e.time}</span>
                        </div>
                    </Card.Body>
            </Card>
            })
        }
    
</div>
</>
}

export default Career