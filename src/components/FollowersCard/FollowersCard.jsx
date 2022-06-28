import React from 'react'
import './FollowersCard.css'

import { Followers } from '../../Data/FollowersData'

const FollowersCard = () => {
    return (
        <div className="div FollowersCard">
            <h3>Suggestion for you</h3>

            {Followers.map((follower, id) => {
                return (
                    <div className="follower">
                        <div>
                            <img src={follower.img} alt=""
                                className='followerImg' />
                            <div className="name">
                                <span>{follower.name}</span>
                                <span>{follower.username}</span>
                            </div>
                        </div>
                        <button className='button fc-button'>
                            Follow
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersCard