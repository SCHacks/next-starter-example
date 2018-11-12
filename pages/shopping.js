import React, { Component } from 'react'

class List extends Component {
  state = {
    items: ['Apples', 'Oranges', 'Pears', 'Strawberries'],
    newItem: ''
  }

  onEdit = (e) => {
    this.setState({ newItem: e.target.value })
  }

  onAdd = (e) => {
    this.setState(state => ({
      newItem: '',
      items: [...state.items, state.newItem]
    }))
  }

  render() {
    const { items, newItem } = this.state
    return (
      <>
        <div>
          <input type="text" value={newItem} onChange={this.onEdit} placeholder="New item" />
          <button onClick={this.onAdd}>Add item</button>
        </div>
        <ul>
          {items.map(item => <li key={item}>{item}</li>)}
        </ul>
        <style jsx>{`
          input, button {
            line-height: 1.5;
            padding-top: 0.25em;
            padding-bottom: 0.25em;
            border: 1px solid #eee;
            box-sizing: border-box;
            margin: 1em 1em 1em 0;
            vertical-align: baseline;
            font-size: inherit;
            font-family: inherit;
            display: inline-block;
            border-radius: .25em;
            appearance: none;
            -webkit-appearance: none;
          }
          button { cursor: pointer; }
          ul { list-style: none; padding: 0; }
          li { padding: 1em 0; border-top: 1px solid #eee; }
        `}</style>
      </>
    )
  }
}

export default () => (
  <div>
    <h1>Shopping List</h1>
    <List />
    <style jsx>{`
      h1 {
        color: redorange;
      }
    `}</style>
  </div>
)
