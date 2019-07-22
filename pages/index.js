import React, { Component } from 'react'

export default () => (
  <div>
    <h1>Hello!</h1>
    <p>This is my React site.</p>
    <img src="https://cdn.glitch.com/07c030d0-d34c-4801-8693-1aeb85439881%2Fimage.jpg?1541992386787" />
    <List />
    <style jsx>{`
      h1 {
        color: blue;
      }
      img { max-width: 100%; }
    `}</style>
  </div>
)
