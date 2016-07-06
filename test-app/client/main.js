import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

$(document).ready(function(){
  var item = $('.cats-feed__item');
  $(item).click(function(){
    if(!$(this).hasClass('disabled'))
    {
      if($(this).hasClass('selected-hover'))
      {
        $(this).off('mouseenter');
        $(this).removeClass('selected-hover');
      }

      else if($(this).hasClass('selected'))
      {
        $(this).off('mouseenter');
        $(this).removeClass('selected');
      }
      else
      {
        $(this).addClass('selected');
      }
    }

  });

  $(item).mouseout(function(){
    if(!$(this).hasClass('disabled'))
    {
      if($(this).hasClass('selected') || $(this).hasClass('selected-hover') )
      {
        $(this).addClass('selected-hover');
        $(this).removeClass('selected');

      }
      else
      {
        $(this).removeClass('selected-hover');
      }
    }

  });
});
