/*
        Document:      kwf.js
        Date started:  06Oct2014
        By:            Roland Whitehead
        Purpose:       Provide basic js functionality to kwf.biz
        Requires:      Nothing just yet
        Copyright:     Katie Walker
        
        Last Changed:  $Date$ $Rev$ by $Author$
        
        Notable modifications:
        Date       By    Details
        =========  ====  ============================================================
        06Oct2014  RW    New
*/

/**** Private interface ****/


function addEventListener(el, eventName, handler) {
/* Function to add events post DOM load */
  if (el.addEventListener) {
    el.addEventListener(eventName, handler);
  } else {
    el.attachEvent('on' + eventName, function(){
      handler.call(el);
    });
  }
}

function selectMenus(theMenus) {
/* Function to add class 'selected' to current menu items */
    var noOfMenus = theMenus.length;
    for (var i = 0; i < noOfMenus; i++) {
        var el=document.getElementById(theMenus[i]);
        if (el.classList)
            el.classList.add('selected');
        else
            el.className += ' ' + 'selected';
    }
}


