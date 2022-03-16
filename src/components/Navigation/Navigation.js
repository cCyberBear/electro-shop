import React from 'react'
import "./navigation.scss"
import {  DownOutlined} from '@ant-design/icons';

const Navigation = () => {
  return (
    <div className='Navigation'>
        <div className="container">
            <ul>
                <li><a>Home</a><DownOutlined /></li>
                <li><a>TV & Audio</a><DownOutlined /></li>
                <li><a>Smart Phones</a><DownOutlined /></li>
                <li><a>Laptops & Desktops</a><DownOutlined /></li>
                <li><a>Gadgets</a><DownOutlined /></li>
                <li><a>GPS & Car</a><DownOutlined /></li>
                <li><a>Cameras & Accessories</a><DownOutlined /></li>
                <li><a>Movies & Games</a><DownOutlined /></li>
            </ul>
        </div>
    </div>
  )
}

export default Navigation