import './App.css'
import React from 'react'
import{TwiterFollowCard} from './TwiterFollowCard'
export function App() {
  return (
    <section className='tw-followCard-container'>       
    <React.Fragment>
        <TwiterFollowCard userName='jose' name='Jose Melano' isFollowed={true}/>
        <TwiterFollowCard userName='David' name='David Cabrera' isFollowed={false}/>
        <TwiterFollowCard userName='dani' name='Daniel  López' isFollowed={true}/>
    </React.Fragment>
    </section>
  )
  }


