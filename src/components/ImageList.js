import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from './Image';

export class ImageList extends Component {
    state = {
        images: [],
        count: 10,
        start: 1
    };


    getData = (pageNum) => {
        axios
            .get(`https://api.unsplash.com/photos?client_id=6c446b49b72a4c559d9b9d67183d5c1de1981d16f309063c3b994086e6ce1a26&&page=${pageNum}`)
            .then(res => this.setState({ images: res.data }))
            .catch(err => console.log(err))

    }
    componentDidMount() {
        const { count, start } = this.state;
        this.getData(start)
        console.log(this.state)
    }

    fetchImages = () => {
        const { count, start } = this.state;
        this.setState({ start: this.state.start + count });
        axios
            .get(`https://api.unsplash.com/photos?client_id=6c446b49b72a4c559d9b9d67183d5c1de1981d16f309063c3b994086e6ce1a26&&page=${start}`)
            .then(res =>
                this.setState({ images: this.state.images.concat(res.data) })
            );
    };

    render() {
        return (
            <div className='images'>
                <InfiniteScroll
                    dataLength={this.state.images.length}
                    next={this.fetchImages}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}

                >
                    {this.state.images.map(image => (
                        <Image key={image.id} image={image} />
                    ))}
                    hiiii
                </InfiniteScroll>
            </div>
        );
    }
}

export default ImageList;