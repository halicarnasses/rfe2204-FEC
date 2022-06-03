import React, {useState} from 'react';

function Characterstics({ value, handleCharChoice }) {
  const [meaningOfChoice, setMeaningOfCoice] = useState('none selcted');
  function handleClick(e) {
    setMeaningOfCoice(charValues[value][e.target.value]);
    handleCharChoice(value, e.target.value);
  }

  return (
    <div>
      <form id={value}>
        <h3>{value}</h3>
          <input required name="ratingchoice" type="radio" value="1" onClick={handleClick} className="option" id="1" />
          <label htmlFor="1">1</label>
          <input required name="ratingchoice" type="radio" value="2" onClick={handleClick} className="option" id="2" />
          <label htmlFor="2">2</label>
          <input required name="ratingchoice" type="radio" value="3" onClick={handleClick} className="option" id="3" />
          <label htmlFor="3">3</label>
          <input required name="ratingchoice" type="radio" value="4" onClick={handleClick} className="option" id="4" />
          <label htmlFor="4">4</label>
          <input required name="ratingchoice" type="radio" value="5" onClick={handleClick} className="option" id="5" />
        <label htmlFor="5">5</label>
        <p>{charValues[value]['1']}</p>
        <p>{charValues[value]['5']}</p>
        <p>Your choice {meaningOfChoice}</p>
      </form>
    </div>
  );
}
export default Characterstics;
const charValues = {
  Size: {
    1: 'A size too small',
    2: '1/2 a size too small',
    3: 'Perfect',
    4: '1/2 a size too big',
    5: 'A size too wide',
  },
  Width: {
    1: 'Too narrow',
    2: 'Slightly narrow',
    3: 'Perfect',
    4: 'Slightly wide',
    5: 'Too wide',
  },
  Comfort: {
    1: 'Uncomfortable',
    2: 'Slightly Comfortable',
    3: 'Ok',
    4: 'Comfortable',
    5: 'Perfect',
  },
  Quality: {
    1: 'Poor',
    2: 'Below average',
    3: 'What I expected',
    4: 'Pretty great',
    5: 'Perfect',
  },
  Length: {
    1: 'Runs Short',
    2: 'Runs slightly short',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs long',
  },
  Fit: {
    1: 'Runs tight',
    2: 'Runs slightly tight',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs long',
  }
}