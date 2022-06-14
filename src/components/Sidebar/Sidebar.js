import React from 'react'
import "./sidebar.css"
import Logo from "../../images/logo.png"
import Check from "../../images/check.png"
import Book from "../../images/book-stack.png"

function Sidebar({step}) {

  let Steps = [
    {
      checked: false,
      text: "Votre demande"
    },
    {
      checked: false,
      text: "Nos propositions"
    },
    {
      checked: false,
      text: "Paiement"
    }
  ]

  return (
    <section className='sidebar'>
      <img src={Logo} alt="Logo" width={"100px"}/>
      <div className='steps'>
          {
            Steps.map((value, index) => {
              if(index + 1 < step) value.checked = true;
              return (
                <div key={index} className={value.checked ? "step checked" : "step"}>
                 {value.checked ? <img src={Check} width={"15px"} /> : <span className='index'>{index + 1}</span>}
                  <span> {value.text}</span>
                </div>
              )
            })
          }
      </div>
      <img src={Book} className="book-image" />
    </section>
  )
}

export default Sidebar