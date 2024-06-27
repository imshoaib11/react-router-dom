import React from 'react'
import Card from 'react-bootstrap/Card';
import logo1 from '../assets/fsd1.jpg';
import logo2 from '../assets/fsd2.webp';
import logo3 from '../assets/fsd3.webp';
import logo4 from '../assets/fsd4.webp';
import logo5 from '../assets/fsd5.webp';
import logo6 from '../assets/fsd6.jpg';
import logo7 from '../assets/fsd7.jpg';
import logo8 from '../assets/fsd8.jpg';
import logo9 from '../assets/fsd9.webp';

function FullStack() {
    let fsdData = [
        {
            title: "Best Full-Stack Development Project Ideas in 2024",
            name: "By Isha Sharma",
            date: "14 June, 2024",
            time: "4 Min Read",
            image: `${logo1}`
        },
        {
            title: "How Long Would It Take To Be a Full Stack Developer?",
            name: "By Meghana D",
            date: "26 March, 2024",
            time: "3 Min Read",
            image: `${logo2}`

        },
        {
            title: "How Does Apache Work ? A Detailed Introduction to Apache",
            name: "By Tushar Vinocha",
            date: "26 March, 2024",
            time: "5 Min Read",
            image: `${logo3}`
        },
        {
            title: "10 Best Database Management Systems For Software Development",
            name: "By Isha Sharma",
            date: "22 March, 2024",
            time: "4 Min Read",
            image: `${logo4}`
        },
        {
            title: "Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 [UPDATED]",
            name: "By Archana",
            date: "26 March, 2024",
            time: "6 Min Read",
            image: `${logo5}`
        },
        {
            title: "Top 10 Full-Stack Developer Frameworks in 2024",
            name: "By Isha Sharma",
            date: "16 Apr, 2024",
            time: "5 Min Read",
            image: `${logo6}`
        },
        {
            title: "6 Essential Prerequisites For Learning ReactJS",
            name: "By Ramkumar",
            date: "25 Mar, 2024",
            time: "3 Min Read",
            image: `${logo7}`
        },
        {
            title: "Best Web Development Roadmap for Beginners 2024",
            name: "By Isha Sharma",
            date: "16 Apr, 2024",
            time: "5 Min Read",
            image: `${logo8}`
        },
        {
            title: "Full Stack Developer Roadmap: A Complete Guide [2024]",
            name: "By Meghana D",
            date: "19 Mar, 2024",
            time: "6 Min Read",
            image: `${logo9}`
        },

        
    ]
  return <>
        <h3 style={{textAlign:"center"}}>Full Stack</h3>
        <div className='card-container'>
        {
            fsdData.map((e,i)=> {
        return  <Card className='card-wrapper'key={i}>
        <Card.Img variant="top" src={e.image}/>
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

export default FullStack