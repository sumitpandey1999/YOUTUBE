// import React, { useState } from 'react';

// const Search = () => {
//     const [query, setQuery] = useState('');
//     const [videos, setVideos] = useState([]);

//     const handleChange = (e) => {
//         setQuery(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch(
//             `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=YOUR_YOUTUBE_API_KEY_HERE`
//         )
//             .then((response) => response.json())
//             .then((data) => {
//                 setVideos(data.items);
//             })
//             .catch((error) => {
//                 console.error('Error fetching videos:', error);
//             });
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" value={query} onChange={handleChange} />
//                 <button type="submit">Search</button>
//             </form>
//             <div>
//                 {videos.map((video) => (
//                     <div key={video.id.videoId}>
//                         <h2>{video.snippet.title}</h2>
//                         <img src={video.snippet.thumbnails.default.url} alt="thumbnail" />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Search;


import React, { createContext, useState } from 'react';
import MyComponent from './MyComponent';

// Step 1: Create context
const MyContext = createContext();

const App = () => {
  const [state, setState] = useState("Initial state");

  return (
    // Step 2: Provide context in the parent component
    <MyContext.Provider value={{ state, setState }}>
      <div>
        <h1>Parent Component</h1>
        <MyComponent />
      </div>
    </MyContext.Provider>
  );
};

export default App;
Then, in MyComponent, you can consume the context using useContext:

javascript
Copy code
// MyComponent.js

import React, { useContext } from 'react';

// Step 3: Consume context
const MyComponent = () => {
  const { state, setState } = useContext(MyContext);

  return (
    <div>
      <p>State: {state}</p>
      <button onClick={() => setState("New state")}>Change State</button>
    </div>
  );
};

export default MyComponent;