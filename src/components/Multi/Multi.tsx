import React from 'react'
import {MultiItemProps} from './MuliItem'
import MultiItem from './MuliItem'
import './Mutli.css'

interface MultiProps {
    items: MultiItemProps[]; // Array of MultiItemProps
  }
  
  const Multi = (props: MultiProps) => {
    return (
      <div className='Multi'>
        {props.items.map((item, index) => (
          <MultiItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    );
  };

export default Multi
