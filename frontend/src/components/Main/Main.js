import React from 'react';
import './main.scss';

import AllPosts from '../Articles/All-post';

const Main = () => {
  return(
    <main className="container">
      <div className="row">
        <div className="col-12 col-md-8">
          <AllPosts />
        </div>
      </div>
    </main>
  )
}

export default Main;