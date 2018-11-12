import React from 'react'
import Link from 'next/link'

const formatName = user => user.firstName + ' ' + user.lastName

const Welcome = ({ user }) => (
  <p>
    Welcome, {formatName(user)}!
  </p>
)

export default () => (
  <div>
    <h1>Hello!</h1>
    <p>This is my React site.</p>
    <Link href="/shopping"><a>Let’s go shopping!</a></Link>
    <img src="https://cdn.glitch.com/07c030d0-d34c-4801-8693-1aeb85439881%2Fimage.jpg?1541992386787" />
    <Welcome user={{ firstName: 'Zach', lastName: 'Latta' }} />
  	<Welcome user={{ firstName: 'Max', lastName: 'Wofford' }} />
    <Welcome user={{ firstName: 'Lachlan', lastName: 'Campbell' }} />
    <style jsx>{`
      h1 { color: magenta; }
      img {
        margin-top: 2rem;
        max-width: 48rem;
        display: block;
      }
    `}</style>
  </div>
)
