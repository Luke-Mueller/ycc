import React from 'react';

import './JoinUs.css';

const JoinUs = () => {
  return (
    <section className="JoinUs" id="join">
      <h1 className="JoinUs__h1"> Join Us </h1>
      <p className="JoinUs__p">This is the page where we give information to charities interested in signing up to use the app.  It will contain a few brief paragraphs describing the steps they will go through to join.  This will be amended as the app develops. </p>
      <p className="JoinUs__p">This is the page where we give information to charities interested in signing up to use the app.  It will contain a few brief paragraphs describing the steps they will go through to join.  This will be amended as the app develops. </p>
      <p className="JoinUs__p">This is the page where we give information to charities interested in signing up to use the app.  It will contain a few brief paragraphs describing the steps they will go through to join.  This will be amended as the app develops. </p>
      <a className="JoinUs__a" onClick={() => alert('Loads an info page where they can follow instructions to sign up')}>Click here to get started</a>
    </section>
  )
};

export default JoinUs;