import React from 'react';
function Resume() {
  return (
    <section className="my-1">
      <div className="d-flex justify-content-center">
        <div className="card text-center w-75">
          <div className="card-header m-1 textFontColor font-weight-bold">My Resume:</div>
          <div className="card-body justify-content-left">
            <a
              className="list-group-item list-group-item-action active text-white "
              href="https://drive.google.com/file/d/1tXWG6heLGfynYjTAaVqNnBYuwwtRsZWZ/view?usp=sharing"
              target="blank">
              Download my Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;