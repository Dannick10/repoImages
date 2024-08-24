import React from 'react'

type Props = {
    text: string
}

const Title = (props: Props) => {
  return (
    <div>
        <h1>{props.text}</h1>
    </div>
  )
}

export default Title