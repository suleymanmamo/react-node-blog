import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {  AuthContext } from '../context/AuthContext'
import { Menu } from '../components/Menu'
import moment from 'moment'

const Single = () => {

  const [post, setPost] = useState({});

  const location = useLocation()

  const navigate = useNavigate()

  const postId = location.search.split('/')[2];

  const {currentUser} = useContext(AuthContext);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPost();
  }, [postId]);

  handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className='single'>
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          {post.userImg && <img src={`../upload/${post?.userImg}`} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username &&
          <div className="edit">
            <Link to={`/write?edit=2`} state={post}>
              <img src="https://www.seekpng.com/png/detail/202-2022672_edit-comments-edit-icon-png-circle.png" alt="" />
            </Link>
            <Link>
              <img onClick={handleDelete} src="https://www.seekpng.com/png/detail/202-2022743_edit-delete-icon-png-download-delete-icon-png.png" alt="" />
            </Link>
          </div>}
        </div>
        <h1>{post.title}</h1>
        <p dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p> 
      </div>
    <Menu cat={post.cat}/>
    </div>
  )
}

export default Single