import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Typewriter from './components/Typewriter.js';
import Tile from './components/Tile.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Typewriter heading={['Windows >> Apple','Linux >> Windows','Apple >> Linux',]} /> 
      <div className='tiles'>
        <Tile heading='Windows' subheading='The most popular OS' img='https://th.bing.com/th/id/R.64390e1fe7e93048172e7445974a00ec?rik=Hv5FOztOYcxYBA&pid=ImgRaw&r=0' text='Windows is a series of operating systems developed by Microsoft. Each version of Windows includes a graphical user interface, with a desktop that allows users to view files and folders in windows.' link='https://en.wikipedia.org/wiki/Microsoft_Windows' />  
        <Tile heading='Apple' subheading='The most expensive OS' img='https://th.bing.com/th/id/OIP.0sbYZf6ijX-0jfgb9dWCmwHaEx?rs=1&pid=ImgDetMain' text='macOS is a series of proprietary graphical operating systems developed and marketed by Apple Inc. since 2001. It is the primary operating system for Apples Mac computers.' link='https://en.wikipedia.org/wiki/MacOS' />
        <Tile heading='Linux' subheading='The most customizable OS' img='https://th.bing.com/th/id/R.942b6eab7957fe31c2414cf43211b955?rik=Cr75aLQx%2b0NODA&pid=ImgRaw&r=0' text='Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds.' link='https://en.wikipedia.org/wiki/Linux' />
      </div> 
      </div>  
  );
}

export default App;
