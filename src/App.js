import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Message from './Message';
import Form from './Form';
import Header from './components/Header';

// straight from axios docs
const fetchHippyData = () => {
  return axios.get('https://random-data-api.com/api/hipster/random_hipster_stuff')
    .then(({data}) => {
      // handle success
      console.log(data);
      return document.getElementById('more__text').innerHTML += data.paragraphs;
    })
    .catch(err => {
      // handle error
      console.error(err);
    })
}

function App() {
  const [hippyData, setHippyData] = useState('');

  useEffect(() => {
    fetchHippyData().then((getHippyWordOfDay) => {
      setHippyData(document.getElementById('more__text').innerHTML += getHippyWordOfDay.paragraphs || ' Get off my lawn. ');
    });
  }, [])

  return (
    <div className="App h-screen w-full justify-left items-center bg-gradient-to-r from-green-500 via-yellow-500 to-pink-500">
      <Header />
      <div className="w-800 p-10">
      <form action="" className=" bg-white shadow-md rounded px-8 py-8 pt-8">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => {fetchHippyData()}}>
        Generate More Ipsum
      </button>
      <div className='lorem__text' id='more__text'>
        <p>
          
        </p>
      </div>
      </form>
      </div>
    </div>
  );
}

export default App;
