import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
//import Multiscroll from './components/multiscroll';
import MultiGroup from './components/multigroup';


/*let data=[
  {img:"http://www.planwallpaper.com/static/images/4-Nature-Wallpapers-2014-1_ukaavUI.jpg"},
  {img:"http://www.wallpapereast.com/static/images/spring-in-nature-wide-wallpaper-603794.jpg"},
  {img:"http://www.hdwallpapers.in/download/fresh_nature-1280x720.jpg"}
]
*/

jQuery(function() {
  ReactDOM.render(
	     <MultiGroup >
          <multiScroll>
            <leftSide>
              DIV1
            </leftSide>
            <rightSide>
              DIV2
            </rightSide>
          </multiScroll>
          <multiScroll>
            <leftSide>
              DIV3
            </leftSide>
            <rightSide>
              DIV4
            </rightSide>
          </multiScroll>
       </MultiGroup>
      
    ,
    document.getElementById('app')   
  );
})
