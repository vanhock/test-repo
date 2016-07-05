import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

$(document).ready(function(){
  var item = $('.cats-feed__item');
  $(item).click(function(){
    if(!$(this).hasClass('disabled'))
    {
      if(!$(this).hasClass('selected'))
      {
        $(this).addClass('selected');
      }
      else
      {
        $(this).off('mouseenter');
        $(this).removeClass('selected');
        $(this).removeClass('selected-hover');
      }
    }

  });

  $(item).mouseout(function(){
    if(!$(this).hasClass('disabled'))
    {
      if($(this).hasClass('selected'))
      {
        $(this).addClass('selected-hover');
      }
      else
      {
        $(this).removeClass('selected-hover');
      }
    }

  });
});
