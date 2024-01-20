import React, { useState, useEffect } from 'react';
import initialData from '../../constant/userData';
import Modal from '../Modal';
import '../../App.css';
import './Table.css';

const SortableSearchableTable = () => {
  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchText, setSearchText] = useState('');
  const [selectedColumn, setSelectedColumn] = useState('Name');
  const [filteredData, setFilteredData] = useState(initialData);
  const [message, setMessage] = useState('');

  const sortByColumn = key => {
    let direction = 'asc';
    console.log(
      'sortConfig.key === key',
      sortConfig.key === key,
      sortConfig.direction === 'asc'
    );
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    console.log('direction', direction);

    const sortedData = filteredData.slice().sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];

      console.log('valuesss', valueA, valueB);
      console.log('typeof valueA', typeof valueA);

      if (typeof valueA === 'string') {
        return direction === 'asc'
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else {
        return direction === 'asc' ? valueA - valueB : valueB - valueA;
      }
    });

    setFilteredData(sortedData);
    setSortConfig({ key, direction });
  };

  const handleSearch = () => {
    // console.log(selectedColumn);
    if (!selectedColumn) {
      setMessage('*Please select a column for searching.');
      return;
    }

    const columnValues = data.map(item => {
      const columnValue = item[selectedColumn];
      console.log(columnValue);

      return typeof columnValue === 'string'
        ? columnValue.toLowerCase()
        : columnValue.toString().toLowerCase();
    });

    const filteredData = data.filter((item, index) => {
      // alert(item, index);
      const searchableValue = columnValues[index];
      return searchableValue.includes(searchText.toLowerCase());
    });

    setFilteredData(filteredData);
    setMessage(
      filteredData.length === 0
        ? '*No data found or you are searching on wrong column'
        : ''
    );
  };

  const resetData = () => {
    setSearchText('');
    setSelectedColumn('Name');
    setFilteredData(data);
    setMessage('');
  };

  const Overlay = () => {
    return (
      <div className='cover'>
        <div className='StyledModal'>
          No data found or you are searching on wrong column
          <span className='close'>X</span>
        </div>
      </div>
    );
  };

  return (
    <div className='sort-container'>
      <div>
        <section className='sort-main'>
          <div className='sort-sub'>
            <label htmlFor='columns'>Select Search Filter By:</label>
            <select
              id='columns'
              onChange={e => setSelectedColumn(e.target.value)}
            >
              <option value='Name'>Name</option>
              <option value='Age'>Age</option>
              <option value='City'>City</option>
            </select>
          </div>

          <div className='sort-sub'>
            <label htmlFor='searchText'>Enter Value to Filter:</label>
            <input
              className='search-box'
              type='text'
              id='searchText'
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
          </div>
        </section>
        {message && <p className='err-msg'>{message}</p>}
        <div className='sortsearch-operation'>
          <button className='btn-common' onClick={handleSearch}>
            Search
          </button>
          <button className='btn-common' onClick={resetData}>
            Reset
          </button>
        </div>
      </div>

      {filteredData.length > 0 && (
        <table className='table-main'>
          <thead>
            <tr>
              <th onClick={() => sortByColumn('Name')}>
                Name{' '}
                {sortConfig.key === 'Name' && (
                  <span>{sortConfig.direction === 'asc' ? '▲' : '▼'}</span>
                )}
              </th>
              <th onClick={() => sortByColumn('Age')}>
                Age{' '}
                {sortConfig.key === 'Age' && (
                  <span>{sortConfig.direction === 'asc' ? '▲' : '▼'}</span>
                )}
              </th>
              <th onClick={() => sortByColumn('City')}>
                City{' '}
                {sortConfig.key === 'City' && (
                  <span>{sortConfig.direction === 'asc' ? '▲' : '▼'}</span>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.City}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SortableSearchableTable;
