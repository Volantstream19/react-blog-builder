import React, { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');

  return (
    <main className="main">
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} />
      <Editor setTitle={setTitle} setSubTitle={setSubTitle} title={title} subtitle={subtitle} />
    </main>
  );
}
