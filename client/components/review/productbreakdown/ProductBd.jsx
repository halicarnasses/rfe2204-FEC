import React from 'react';
import Bar from '../rating/Bar.jsx';

function ProducBd({ chars }) {

  const keys = Object.keys(chars);
  const values = Object.values(chars);
  // <Bar handleFilter={handleFilter} total={total} bar={bar} index={index + 1} id={id} key={index + id} />
  return (
    <div>
      {
        values.map((value, i) => {
          const id = value['id'];
          const key = value['id'] + i;
          const barTobe = Math.floor(value['value'] * 10) / 10;
          return (
            <div>
              <label>{keys[i]}</label>
              <label></label>
              <Bar handleFilter={() => null} total={5} bar={barTobe} index={i + 1} id={value['id']} key={`${key}`} label={barTobe} />
            </div>
          )

        })
      }
    </div>
  )
}
export default ProducBd;