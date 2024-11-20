import React, { useState } from 'react';

const OptionsTable = () => {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [travellType, setTravellType] = useState('');
  const [travellers, setTravellers] = useState('');

  const handleDestinationChange = e => setDestination(e.target.value);
  const handleDurationChange = e => setDuration(e.target.value);
  const handleTravellTypeChange = e => setTravellType(e.target.value);
  const handleTravellersChange = e => setTravellers(e.target.value);

  return (
    <div className='hero-table-container'>
      <table className='hero-table'>
        <tbody className='hero-table__body'>
          <tr>
            <td className='hero-table__title'>Destination</td>
            <td>
              <select
                className='hero-table__select'
                value={destination}
                onChange={handleDestinationChange}
              >
                <option value='barbados'>Barbados</option>
                <option value='eritrea'>Eritrea</option>
                <option value='gambia'>Gambia</option>
                <option value='lebanon'>Lebanon</option>
                <option value='hungary'>Hungary</option>
                <option value='netherlands'>Netherlands</option>
                <option value='qatar'>Qatar</option>
                <option value='uganda'>Uganda</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className='hero-table__title'>Duration</td>
            <td>
              <select
                className='hero-table__select'
                value={duration}
                onChange={handleDurationChange}
              >
                <option value='3'>3 Days</option>
                <option value='4'>4 Days</option>
                <option value='5'>5 Days</option>
                <option value='6'>6 Days</option>
                <option value='7'>7 Days</option>
                <option value='8'>8 Days</option>
                <option value='9'>9 Days</option>
                <option value='10'>10 Days</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className='hero-table__title'>Travel Type</td>
            <td>
              <select
                className='hero-table__select'
                value={travellType}
                onChange={handleTravellTypeChange}
              >
                <option value='adventure'>Adventure Trip</option>
                <option value='longDay'>Day Long Tour</option>
                <option value='group'>Group Tour</option>
                <option value='solo'>Solo Tour</option>
                <option value='luxury'>Luxury Trip</option>
              </select>
            </td>
          </tr>
          <tr className='hero-section__option'>
            <td className='hero-table__title'>Travellers</td>
            <td>
              <select
                className='hero-table__select'
                value={travellers}
                onChange={handleTravellersChange}
              >
                <option value='1'>01</option>
                <option value='2'>02</option>
                <option value='3'>03</option>
                <option value='4'>04</option>
                <option value='5'>05</option>
                <option value='6'>06</option>
                <option value='7'>07</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <button className='orange-button-hero'>Find Availability</button>
    </div>
  );
};

export default OptionsTable;
