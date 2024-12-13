import { Calendar } from 'antd';
import React from 'react'

const Holiday = () => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };
  return (
    <div>
      <Calendar style={{height:'445px',overflow:'hidden',padding:'10px'}} onPanelChange={onPanelChange} />
    </div>
  )
}

export default Holiday;
