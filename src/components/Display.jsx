import React, { useEffect, useRef } from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import Displayhome from './Displayhome';
import Displayalbum from './Displayalbum';

function Display(){
  const displayRef =useRef();
  const location = useLocation();
  const isAlbum=location.pathname.includes("album");
  const albumId= isAlbum ? location.pathname.slice(-1): "";
 
  
    return(
        <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-{#121212} text-white overflow-auto lg:w-[75%] lg:ml-0'>
           <Routes>
             <Route path='/' element={<Displayhome/>}/>
             <Route path='/album/:id' element={<Displayalbum/>}/>
           </Routes>
        </div>

    );
}
export default Display;