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
        01Dec2014  RW    Added in hideById and showById
*/

/**** Private interface ****/


function kwfAddEventListener(el, eventName, handler) {
/* Function to add events post DOM load */
    if (el != null) {
        if (el.addEventListener) {
            el.addEventListener(eventName, handler);
        } else {
            el.attachEvent('on' + eventName, function(){
                handler.call(el);
            });
        }
    }
    return false;
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
    return false;
}

function showById(el_id){
    var el = document.getElementById(el_id);
    if (el != null) {
        if (el.classList)
            el.classList.add('show');
        else
            el.className += ' ' + 'show';
    }
    else {
        alert(el_id + 'was not found');
    }
    return false;
}

function hideById(el_id){
    var el = document.getElementById(el_id);
    if (el != null ) {
        if (el.classList)
            el.classList.remove('show');
        else
            el.show = el.show.replace(new RegExp('(^|\\b)' + show.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
    else {
        alert(el_id + ' was not found');
    }
    return false;
}

function toggleById(el_id){
    var el = document.getElementById(el_id);
    if (el != null ) {
        el.classList.toggle('show');
    }
    else {
        alert(el_id + ' was not found');
    }
    return false;
}



function flipCell(el){
    var el_list = el.getElementsByClassName('cell_back');
    if (el_list.length > 0 ) {
        if (el_list[0].classList)
            el_list[0].classList.add('show');
        else
            el_list[0].className += ' ' + 'show';
    }
    return false;
}

function unflipCell(el){
    var el_list = el.getElementsByClassName('cell_back');
    if (el_list.length > 0 ) {
        if (el_list[0].classList)
            el_list[0].classList.remove('show');
        else
            el_list[0].show = el_list[0].show.replace(new RegExp('(^|\\b)' + show.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
    return false;
}
