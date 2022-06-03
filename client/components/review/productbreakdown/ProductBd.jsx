import React from 'react';
import Bar from '../rating/Bar.jsx';

function ProducBd({ chars }) {

  const keys = Object.keys(chars);
  const values = Object.values(chars);

  return (
    <div>
      {
        values.map((value, i) => {
          const id = value['id'];
          const key = value['id'] + i;
          const barTobe = Math.floor(value['value'] * 10) / 10;

          return (
            <div key={i}>
              <label>{keys[i]}</label>
              <Bar handleFilter={() => null} total={5} bar={barTobe} index={i + 1} id={value['id']} key={`${key}`} label={barTobe} />
            </div>
          )

        })
      }
    </div>
  )
}
export default ProducBd;