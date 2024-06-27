import React from 'react'
import { Card } from 'react-bootstrap'
import logo1 from '../assets/ds1.webp'
import logo2 from '../assets/ds2.webp'
import logo3 from '../assets/ds3.webp'
import logo4 from '../assets/ds4.webp'
import logo5 from '../assets/ds5.webp'
import logo6 from '../assets/ds6.webp'
import logo7 from '../assets/ds7.webp'
import logo8 from '../assets/ds8.webp'
import logo9 from '../assets/ds9.jpg'

function DataScience() {

    let dataScience = [
        {
            title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
            name: "By Isha Sharma",
            date: "14 June, 2024",
            time: "4 Min Read",
            image: `${logo1}`
        },
        {
            title: "12 Real-World Data Science Examples: Power Of Data Science",
            name: "By Lukesh S",
            date: "25 Mar, 2024",
            time: "7 Min Read",
            image: `${logo2}`

        },
        {
            title: "Can A Commerce Student Do Data Science?",
            name: "By Saakshi Priyadarshini",
            date: "16 Apr, 2024",
            time: "5 Min Read",
            image: `${logo3}`
        },
        {
            title: "Roles and Responsibilities of a Data Scientist",
            name: "By Jaishree Tomar",
            date: "16 Apr, 2024",
            time: "4 Min Read",
            image: `${logo4}`
        },
        {
            title: "Top Product-Based Companies for Data Scientists in 2024",
            name: "By Jaishree Tomar",
            date: "26 Mar, 2024",
            time: "6 Min Read",
            image: `${logo5}`
        },
        {
            title: "10 Best Data Science Online Courses for Beginners | 2024",
            name: "By Srinithi Sankar",
            date: "02 Apr, 2024",
            time: "5 Min Read",
            image: `${logo6}`
        },
        {
            title: "<strong>How Long Would It Take to Learn Data Science?</strong>",
            name: "By Meghana D",
            date: "16 Apr, 2024",
            time: "5 Min Read",
            image: `${logo7}`
        },
        {
            title: "Everything about Data Scientist Salary in India | 2024",
            name: "By Srinithi Sanka",
            date: "02 Apr, 2024",
            time: "6 Min Read",
            image: `${logo8}`
        },
        {
            title: "How to become a Data Scientist after Mechanical Engineering?",
            name: "By Lahari Chandana",
            date: "16 Apr, 2024",
            time: "6 Min Read",
            image: `${logo9}`
        }, 
    ]
  return <>
        <h3 style={{textAlign:"center"}}>Data Science</h3>
        <div className='card-container'>
            {
            dataScience.map((e,i)=> {
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

export default DataScience