import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// const posts = [
//   {
//     id: 1,
//     title: 'lorem12 ipsum dolor sit amet',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur quasi eaque nobis expedita sapiente exercitationem quaerat laudantium voluptate vero voluptatum distinctio aut tempora officia, architecto fuga eos perspiciatis quam, aspernatur alias quibusdam. Nostrum provident sunt ea? Nobis expedita placeat ex officia tempore voluptatum deleniti tenetur veniam quae, blanditiis in.',
//     img: 'https://images.pexels.com/photos/3459901/pexels-photo-3459901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
//   },
//   {
//     id: 2,
//     title: 'lorem12 ipsum dolor sit amet',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur quasi eaque nobis expedita sapiente exercitationem quaerat laudantium voluptate vero voluptatum distinctio aut tempora officia, architecto fuga eos perspiciatis quam, aspernatur alias quibusdam. Nostrum provident sunt ea? Nobis expedita placeat ex officia tempore voluptatum deleniti tenetur veniam quae, blanditiis in.',
//     img: 'https://images.pexels.com/photos/3459901/pexels-photo-3459901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//   },
//   {
//     id: 3,
//     title: 'lorem12 ipsum dolor sit amet',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur quasi eaque nobis expedita sapiente exercitationem quaerat laudantium voluptate vero voluptatum distinctio aut tempora officia, architecto fuga eos perspiciatis quam, aspernatur alias quibusdam. Nostrum provident sunt ea? Nobis expedita placeat ex officia tempore voluptatum deleniti tenetur veniam quae, blanditiis in.',
//     img: 'https://images.pexels.com/photos/3459901/pexels-photo-3459901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//   },
//   {
//     id: 4,
//     title: 'lorem12 ipsum dolor sit amet',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur quasi eaque nobis expedita sapiente exercitationem quaerat laudantium voluptate vero voluptatum distinctio aut tempora officia, architecto fuga eos perspiciatis quam, aspernatur alias quibusdam. Nostrum provident sunt ea? Nobis expedita placeat ex officia tempore voluptatum deleniti tenetur veniam quae, blanditiis in.',
//     img: 'https://images.pexels.com/photos/3459901/pexels-photo-3459901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//   }
// ] 

const Home = () => {

  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map(post => (
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
                <p>{getText(post.desc)}</p>
                <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home