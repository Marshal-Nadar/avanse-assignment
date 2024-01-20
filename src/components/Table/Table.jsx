import React, { useState } from 'react';
import userDataa from '../../constant/userData';
import './Table.css';

const Table = () => {
  console.log(userDataa);
  const [userData, setuserData] = useState(userDataa);
  const [search, setSearch] = useState('name');
  const [searchText, setSearchText] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [sortByName, setsortByName] = useState([]);
  const [sortByAge, setsortByAge] = useState([]);
  const [sortByCity, setsortByCity] = useState([]);
  console.log('search', search);
  console.log('searchText', searchText);
  console.log('userDatauserData', userData);

  const searchval = () => {
    console.log('searchval', search, searchText);

    if (search === 'name') {
      console.log(
        'hjhjhjh',
        userData.filter(item =>
          item.Name.toLowerCase().includes(searchText.toLowerCase())
        )
      );
      setuserData(
        userData.filter(item =>
          item.Name.toLowerCase().includes(searchText.toLowerCase())
        )
      );
      // setFiltered(
      //   userData.filter(item =>
      //     item.Name.toLowerCase().includes(searchText.toLowerCase())
      //   )
      // );
      // return userData.filter(
      //   item => item.Name.toLowerCase() === searchText.toLowerCase()
      // );
    } else if (search === 'city') {
      console.log(
        'hjhjhjh',
        userData.filter(item =>
          item.City.toLowerCase().includes(searchText.toLowerCase())
        )
      );
      // setFiltered(
      //   userData.filter(item =>
      //     item.City.toLowerCase().includes(searchText.toLowerCase())
      //   )
      // );

      setuserData(
        userData.filter(item =>
          item.City.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    } else {
      console.log(
        'hjhjhjh',
        userData.filter(item => {
          // console.log('check', item.Age, +searchText);
          return item.Age === +searchText;
        })
      );
      // setFiltered(userData.filter(item => item.Age === +searchText));

      setuserData(userData.filter(item => item.Age === +searchText));
    }
  };

  // function filterByName(name) {
  //   return dummyData.filter(
  //     item => item.Name.toLowerCase() === name.toLowerCase()
  //   );
  // }

  console.log('filtered', filtered);

  function sortByColumn(data, columnName) {
    return data.slice().sort((a, b) => {
      const valueA = a[columnName];
      const valueB = b[columnName];

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB);
      } else {
        return valueA - valueB;
      }
    });
  }
  const sortedByName = () => {
    console.log('Sorted by Name:', sortByColumn(userData, 'Name'));
    setFiltered([]);
    setuserData([]);
    setsortByName(sortByColumn(userData, 'Name'));
  };

  const sortedByAge = () => {
    console.log('Sorted by Age:', sortByColumn(userData, 'Age'));
    setFiltered([]);
    setuserData([]);
    setsortByAge(sortByColumn(userData, 'Age'));
  };
  const sortedByCity = () => {
    console.log('Sorted by City:', sortByColumn(userData, 'City'));
    setFiltered([]);
    setuserData([]);
    setsortByCity(sortByColumn(userData, 'City'));
  };

  // const sortedByCity = sortByColumn(userData, 'City');
  console.log('Sorted by DATAs:', sortByAge, sortByCity);

  return (
    <div>
      <section>
        <label for='search-select'>Select Search Filter:</label>

        <select
          name='search-select'
          id='search-select'
          onChange={e => {
            setSearch(e.target.value);
          }}
        >
          <option value='name'>Name</option>
          <option value='age'>Age</option>
          <option value='city'>City</option>
        </select>

        <label for='search-input'>Enter Value Filter:</label>
        <input
          id='search-input'
          type='text'
          name='search-text'
          onChange={e => {
            setSearchText(e.target.value.toLowerCase());
          }}
        />

        <button
          className='btn-common'
          onClick={() => {
            searchval();
          }}
        >
          Search
        </button>

        <button
          className='btn-common'
          onClick={() => {
            setFiltered([]);
          }}
        >
          Refresh
        </button>
      </section>
      <h1>Table</h1>
      {/* <table className='center'>
        <tr>
          <th
            onClick={() => {
              sortedByName();
            }}
          >
            Name
          </th>
          <th
            onClick={() => {
              sortedByAge();
            }}
          >
            Age
          </th>
          <th
            onClick={() => {
              sortedByCity();
            }}
          >
            City
          </th>
        </tr>
      </table>

      {filtered.length > 0
        ? filtered.map(item => {
            // console.log(item.Name);
            return (
              <tr>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.City}</td>
              </tr>
            );
          })
        : userData.map(item => {
            // console.log(item.Name);
            return (
              <tr>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.City}</td>
              </tr>
            );
          })}

      <hr />
      {sortByName.length > 0
        ? sortByName.map(item => {
            return (
              <tr>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.City}</td>
              </tr>
            );
          })
        : ''} */}
    </div>
  );
};

export default Table;
