import React from 'react'
import { Card } from 'react-bootstrap'
import logo1 from '../assets/cs1.webp'
import logo2 from '../assets/cs2.webp'
import logo3 from '../assets/cs3.webp'
import logo4 from '../assets/cs4.webp'
import logo5 from '../assets/cs5.gif'
import logo6 from '../assets/cs6.webp'
import logo7 from '../assets/cs7.webp'
import logo8 from '../assets/cs8.webp'
function CyberSecurity() {

    let cyberData = [
        {
            title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
            name: "By Tushar Vinocha",
            date: "16 Apr, 2024",
            time: "4 Min Read",
            image: `${logo1}`
        },
        {
            title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
            name: "By Jaishree Tomar",
            date: "26 March, 2024",
            time: "3 Min Read",
            image: `${logo2}`

        },
        {
            title: "Cybersecurity vs Artificial Intelligence | Better Career",
            name: "By admin",
            date: "26 March, 2024",
            time: "5 Min Read",
            image: ""
        },
        {
            title: "What Is Hacking? Types of Hacking & More",
            name: "By Meghana D",
            date: "25 Mar, 2024",
            time: "4 Min Read",
            image: `${logo3}`
        },
        {
            title: "8 Different Types of Cybersecurity and Threats Involved",
            name: "By Tushar Vinocha",
            date: "08 Sep, 2023",
            time: "6 Min Read",
            image: `${logo4}`
        },
        {
            title: "What is Cybersecurity? Importance and its uses & the growing challenge...",
            name: "By Tushar Vinocha",
            date: "04 Oct, 2023",
            time: "5 Min Read",
            image: `${logo5}`
        },
        {
            title: "Is coding required for cybersecurity? If yes, how crucial is coding for cyb...",
            name: "By Tushar Vinocha",
            date: "25 Mar, 2024",
            time: "3 Min Read",
            image: `${logo6}`
        },
        {
            title: "The Ultimate Cybersecurity Roadmap for Beginners",
            name: "By Srinithi Sankar",
            date: "23 Mar, 2024",
            time: "5 Min Read",
            image: `${logo7}`
        },
        {
            title: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
            name: "By Tushar Vinocha",
            date: "25 Mar, 2024",
            time: "6 Min Read",
            image: `${logo8}`
        }, 
    ]

    return <>
    <h3 style={{textAlign:"center"}}>CyberSecurity</h3>
    <div className='card-container'>
        {
            cyberData.map((e,i)=> {
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

export default CyberSecurity