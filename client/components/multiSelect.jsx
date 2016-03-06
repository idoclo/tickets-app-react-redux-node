import React from 'react'

const MultiSelect = ({title, options}) => (
  <div>
    <h1>{title}</h1>
    {options.map(option => <p key={option}>{option}</p>)}
  </div>
)

export default MultiSelect