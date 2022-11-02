import React from 'react'
import DropArea from '../../components/form/DropArea'

const RightPanel = () => {
  return (
    <>
      <DropArea accept="box" onDrop={()=>{
        alert('drop')
      }}></DropArea>
    </>
  );
}

export default RightPanel