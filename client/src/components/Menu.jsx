import React from 'react'

const posts = [
    {
      id: 1,
      title: 'lorem12 ipsum dolor sit amet',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur quasi eaque nobis expedita sapiente exercitationem quaerat laudantium voluptate vero voluptatum distinctio aut tempora officia, architecto fuga eos perspiciatis quam, aspernatur alias quibusdam. Nostrum provident sunt ea? Nobis expedita placeat ex officia tempore voluptatum deleniti tenetur veniam quae, blanditiis in.',
      img: 'https://images.pexels.com/photos/3459901/pexels-photo-3459901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
    },
    {
      id: 2,
      title: 'lorem12 ipsum dolor sit amet',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur quasi eaque nobis expedita sapiente exercitationem quaerat laudantium voluptate vero voluptatum distinctio aut tempora officia, architecto fuga eos perspiciatis quam, aspernatur alias quibusdam. Nostrum provident sunt ea? Nobis expedita placeat ex officia tempore voluptatum deleniti tenetur veniam quae, blanditiis in.',
      img: 'https://images.pexels.com/photos/3459901/pexels-photo-3459901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'lorem12 ipsum dolor sit amet',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur quasi eaque nobis expedita sapiente exercitationem quaerat laudantium voluptate vero voluptatum distinctio aut tempora officia, architecto fuga eos perspiciatis quam, aspernatur alias quibusdam. Nostrum provident sunt ea? Nobis expedita placeat ex officia tempore voluptatum deleniti tenetur veniam quae, blanditiis in.',
      img: 'https://images.pexels.com/photos/3459901/pexels-photo-3459901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      title: 'lorem12 ipsum dolor sit amet',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur quasi eaque nobis expedita sapiente exercitationem quaerat laudantium voluptate vero voluptatum distinctio aut tempora officia, architecto fuga eos perspiciatis quam, aspernatur alias quibusdam. Nostrum provident sunt ea? Nobis expedita placeat ex officia tempore voluptatum deleniti tenetur veniam quae, blanditiis in.',
      img: 'https://images.pexels.com/photos/3459901/pexels-photo-3459901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ] 

export const Menu = () => {
  return (
    <div className="menu">
        <h1>Others posts you may like</h1>
        {posts.map((post) => (
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
    )
}
