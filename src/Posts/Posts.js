//import { response } from 'express';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './posts.styles.scss';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setPosts(response.data))
    }, []);

    const handleOnClick = (id) => {
        console.log('param id : ', id)
        history.push({ pathname: 'post/' + id });
    };

    return (
        <div className='posts'>
            {posts && posts.map(post => <div className='post' onClick={() => handleOnClick(post.id)}> {post.title} </div>)}
        </div>
    )
}


export default Posts;