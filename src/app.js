import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import MultiGroup from './components/multigroup';


jQuery(function() {
  ReactDOM.render(
	     <MultiGroup >

          <multiScroll >
            <leftSide>

              <div className="title">
                multiScro
              </div>
              <div className="content">
                Responsive divided
              </div>

            </leftSide>
            <rightSide>

              <div className="title">
                ll.ReactJs
              </div>
              <div className="content">
                &nbsp;multi-scroll pages!
              </div>

            </rightSide>
          </multiScroll>

          <multiScroll >
            <leftSide>
              <div className="title">
                div
              </div>
              <div className="content">
                backgroun
              </div>
            </leftSide>
            <rightSide>
              <div className="title">
                vide
              </div>
              <div className="content">
                d images
              </div>
            </rightSide>
          </multiScroll>

          <multiScroll >
            <leftSide>
               <div className="title">
                ...and create as many pages
              </div>
              <div className="content">
                as you want!
              </div>
            </leftSide>
            <rightSide>

            </rightSide>
          </multiScroll>
       </MultiGroup>

    ,
    document.getElementById('app')
  );
})
