import React, { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [font, setFont] = useState('fredoka');
  const [align, setAlign] = useState('center');
  const [text, setText] = useState('');

  return (
    <main className="main">
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} font={font} align={align} text={text} />
      <Editor
        setText={setText}
        setTitle={setTitle}
        setSubTitle={setSubTitle}
        setFont={setFont}
        setAlign={setAlign}
        title={title}
        subtitle={subtitle}
        font={font}
        align={align}
        text={text}
      />
    </main>
  );
}
