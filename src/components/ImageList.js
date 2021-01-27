import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from './Post';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../App.css'

export class ImageList extends Component {
    state = {
        images: [],
        count: 10,
        start: 1
    };


    getData = (pageNum) => {
        axios
            .get(`photos?client_id=${process.env.REACT_APP_ACCESS_KEY}&&page=${pageNum}`)
            .then(res => this.setState({ images: this.state.images.concat(res.data) }))
            .catch(err => console.log(err))

    }
    componentDidMount() {
        const { count, start } = this.state;
        this.getData(start)
    }

    fetchImages = () => {
        const { count, start } = this.state;
        this.setState({ start: this.state.start + count });
        this.getData(start)
    };

    render() {
        return (
            <Grid className='images' container direction='row'>
                <InfiniteScroll
                    dataLength={this.state.images.length}
                    next={this.fetchImages}
                    hasMore={true}
                    loader={<CircularProgress />}
                    style={{ overflow: 'hidden' }}
                    className="infinite__scroller"
                >
                    {this.state.images.map(image => (
                        <Post key={image.id} postDetail={image} />
                    ))}

                </InfiniteScroll>
            </Grid>
        );
    }
}

export default ImageList;