import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import MultiGroup from './components/multigroup';


jQuery(function() {
  ReactDOM.render(
	     <MultiGroup >
          <multiScroll >
            <leftSide>

              <div>
                multiScro
              </div>
              <div>
                Responsive divided
              </div>

            </leftSide>
            <rightSide>

              <div>
                ll.ReactJs
              </div>
              <div>
                multi-scroll pages!
              </div>

            </rightSide>
          </multiScroll>
          <multiScroll >
            <leftSide>
              DIV3
            </leftSide>
            <rightSide>
              DIV4
            </rightSide>
          </multiScroll>
          <multiScroll >
            <leftSide>
              DIV5
            </leftSide>
            <rightSide>
              DIV6
            </rightSide>
          </multiScroll>
       </MultiGroup>

    ,
    document.getElementById('app')
  );
})
