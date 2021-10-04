import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Post.styles.scss';

const Post = () => {
    const [post, setPost] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(response => setPost(response.data))
    }, []);


    return (
        <div className='post-detail'>
            {post && <> <span><b>ID:</b> {post.id}</span>
                <span><b>Title:</b> {post.title}</span>
                <span><b>Body:</b> {post.body}</span>
            </>
            }
        </div>
    );

};

export default Post;