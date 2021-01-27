import React from 'react';
import './Post.css'
import Avatar from "@material-ui/core/Avatar";
import { Grid } from '@material-ui/core';
import { LocationOn } from '@material-ui/icons'

export default function Post({ postDetail }) {
    console.log(postDetail)
    return (
        <React.Fragment>
            <Grid item xs={12} sm={4} md={4} className="post" id={postDetail.key}>
                <Grid className="post__header">
                    <Avatar
                        className="post__avatar"

                        src={postDetail.user.profile_image.small}
                    />
                    <h3>{postDetail.user.instagram_username}</h3>
                    <br />
                    <LocationOn className='post__location'>{postDetail.user.location}</LocationOn>
                </Grid>


                <img className="post__image" src={postDetail.urls.regular} alt="post" />
                <h4 className="post__text">
                    {postDetail.user.instagram_username} <span className="post__caption">{postDetail.user.bio}</span>
                </h4>

                <div className="post__comments">
                    {postDetail.user.total_likes > 0 ? <span>❤️{postDetail.user.total_likes}</span> : <span>🤍0</span>}
                </div>
            </Grid>
            <br />
        </React.Fragment>
    )
}