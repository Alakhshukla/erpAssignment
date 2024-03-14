import { useState } from 'react';
import Calendar from 'react-calendar';



// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calender = () => {

    const [value, onChange] = useState(new Date());

  return (
    <div className='Calender'>
      <Calendar onChange={onChange} value={value} />
      {value.toString()}
    </div>
  )
}

export default Calender