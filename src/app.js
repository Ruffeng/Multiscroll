import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import MultiGroup from './components/multigroup';
import Pages from './components/pagesexample';


jQuery(function() {
  ReactDOM.render(
	     <MultiGroup >

          <multiScroll >
            <leftSide>
              <Pages pg="1" side="left" />
            </leftSide>
            <rightSide>
              <Pages pg="1" side="right" />
            </rightSide>
          </multiScroll>

          <multiScroll >
            <leftSide>
              <Pages pg="2" side="left" />

            </leftSide>
            <rightSide>
              <Pages pg="2" side="right" />
            </rightSide>
          </multiScroll>

          <multiScroll >
            <leftSide>
               <Pages pg="3" side="left" />
            </leftSide>
            <rightSide>

            </rightSide>
          </multiScroll>
       </MultiGroup>

    ,
    document.getElementById('app')
  );
})
