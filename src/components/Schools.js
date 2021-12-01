import React, { useState, useEffect } from 'react';
import SchoolItem from './SchoolItem';

const Schools = () => {
  const [school, setSchools] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    // hit TMDB Discover get movie endpoint to get the movies data
    fetch('https://datasekolahapi.herokuapp.com/api/data')
    .then(response => response.json())
    .then(data => setSchools(data.Jakarta));
    // eslint-disable-next-line
  }, []);

  const  handleSubmit = (e) => {
    e.preventDefault();

    // hit TMDB Rest API endpoint to search for a movie
    fetch('https://datasekolahapi.herokuapp.com/api/data/sd')
    .then(response => response.json())
    .then(data => setSchools(data.Jakarta));

    setText('');
  }

  const handleChange = (e) => {setText(e.target.value)};

  return(
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
          <h2>Search School</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" onChange={handleChange} value={text} />
          </form>

          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">

          { school.map(school => <SchoolItem key={school.id} school={school} />) }
              
          </div>
      </div>
  </section>
  );
}

export default Schools;
