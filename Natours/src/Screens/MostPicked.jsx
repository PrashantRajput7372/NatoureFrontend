import React from 'react'
import "./CssFiles/MostPicked.css"

function MostPicked
() {
    
  const favPlace =[
      {
        icon: "https://images.unsplash.com/photo-1686575192618-9bbf73aba0d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWElMjB0b3VyaXNtfGVufDB8fDB8fHww",
        tittle: "Agra",
        details:
          "Witness the timeless beauty of the Taj Mahal, a symbol of love.",
      },
      {
          icon: "https://s7ap1.scene7.com/is/image/incredibleindia/tsomgo-lake-gangtok-sikkim-2-attr-hero?qlt=82&ts=1727355185446",
          tittle: "Gangtok",
          details:
            "Discover the serene beauty of Gangtok surrounded by snowy peaks and pristine lakes.",
        },
        {
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9T1EqELWvCxohHEiBQ6IfbeQ_szcDqs8bLf_t5Ep_pnmpyrZTn1avz0&s",
          tittle: "Rajasthan",
          details:
            "Explore the golden deserts and royal palaces of Rajasthan.",
        },
        {
          icon: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWElMjB0b3VyaXNtfGVufDB8fDB8fHww",
          tittle: "Kerela",
          details:
            "Relax in serene backwaters on a traditional Kerala boat house.",
        },
      ];
  return (
    
      
        <div className="fav-wrapper">
    <h1>Travelers' favorite choices</h1>
    <br />
    <div className="fav-content">
      {favPlace.map((item, index) => (
        <div key={index} className="fav-card">
          <img src={item.icon} alt={item.title} className='fav_img' />
          <div className='fav_text'>
            <h3>{item.tittle}</h3>
            <p>{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default MostPicked

