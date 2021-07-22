import React from 'react'
import Hero from '../component/Hero'
import banner from '../image/banner.jpeg'
import {Link} from 'react-router-dom'
import Featured from '../component/HomeComponent/Featured'


export default function HomePage() {
    return (
        <div>
            <Hero img={banner} title="products store" max="true">
                <Link to="/store" className="btn btn-danger text-uppercase"> Go to store </Link>
            </Hero>
            <Featured />
        </div>
    )
}
