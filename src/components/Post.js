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
                    <Grid item>
                        <h4>{postDetail.user.username}</h4>
                        <span className='post__locationName'>
                            <LocationOn className='post__location' />
                            {postDetail.user.location}
                        </span >
                    </Grid>
                </Grid>



                <img className="post__image" src={postDetail.urls.regular} alt="post" />
                <h5 className="post__text">
                    {postDetail.user.username} <span className="post__caption">{postDetail.user.bio}</span>
                </h5>

                <div className="post__comments">
                    {postDetail.user.total_likes > 0 ? <span>❤️{postDetail.user.total_likes}</span> : <span>🤍0</span>}
                </div>
            </Grid>
            <br />
        </React.Fragment>
    )
}