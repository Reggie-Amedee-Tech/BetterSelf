import CreatePostPage from './views/CreatePostPage';
import AllPostPage from './views/AllPostPage';
import GetDetailedPostPage from './views/GetDetailedPostPage';
import UpdatedPostPage from './views/UpdatedPostPage';
import Homepage from './views/Homepage';
import Header from './views/Header';
import {Routes, Route} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/create" element={<CreatePostPage/>}/>
      <Route path="/allPosts" element={<AllPostPage />}/>
      <Route path="/post/:id" element={<GetDetailedPostPage />}/>
      <Route path="/allPosts/:id/edit" element={<UpdatedPostPage />}/>
      </Routes>
    </div>
  );
}

export default App;
