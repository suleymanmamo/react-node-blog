import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/15041149/pexels-photo-15041149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/14210231/pexels-photo-14210231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="info">
            <span>Sherlock</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src="https://www.seekpng.com/png/detail/202-2022672_edit-comments-edit-icon-png-circle.png" alt="" />
            </Link>
            <Link>
              <img src="https://www.seekpng.com/png/detail/202-2022743_edit-delete-icon-png-download-delete-icon-png.png" alt="" />
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Tenetur numquam voluptate quos minus recusandae harum iste necessitatibus ipsa, 
          suscipit quidem accusamus aliquam saepe aperiam a in tempore earum enim sequi est sunt nulla vero maxime aspernatur commodi!
          Explicabo a deleniti iste non, sapiente dignissimos dolore voluptate corrupti odit nemo, nostrum facere cum quae eum?
          <br />
          <br />
          Sed corporis repellendus maiores odit fuga debitis quod unde neque, 
          nobis quaerat eius veritatis eum consectetur esse explicabo, aut, nihil at nostrum. Molestias, temporibus tenetur.
          Quo eos fugit rem quam tenetur minima, exercitationem similique, 
          explicabo pariatur asperiores blanditiis delectus error praesentium eum, 
          aliquid temporibus saepe officiis dolorum quae tempora doloremque quod. 
          <br />
          <br />
          Voluptatibus cupiditate dolorum eligendi iure labore sint ut explicabo dolore odit ratione molestias dignissimos, 
          eius optio quae commodi, a quasi omnis delectus officiis? Ullam nam libero,
          exercitationem vel ab ipsam obcaecati nobis beatae? Eum repellat exercitationem officia ducimus non aut? 
          Est, temporibus adipisci animi quod at dignissimos eaque doloremque et earum tempore architecto possimus necessitatibus. 
          Alias sed, obcaecati molestias aspernatur excepturi tempore!
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> 
          <br />
          Veritatis atque odio quam deserunt blanditiis ullam. 
          Voluptate sint iure, quidem eveniet consequatur aspernatur in a hic aperiam tenetur nisi. 
          Suscipit molestias quibusdam repudiandae reprehenderit veritatis ab voluptas, rem sapiente qui, 
          enim aspernatur vitae voluptatem quaerat, temporibus ipsa! Perferendis ipsa quae iusto.
        </p>
      </div>
    <Menu />
    </div>
  )
}

export default Single