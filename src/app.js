import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import MultiGroup from './components/multigroup';


jQuery(function() {
  ReactDOM.render(
	     <MultiGroup >
          <multiScroll >
            <leftSide>
              DIV1
            </leftSide>
            <rightSide>
              DIV2
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
