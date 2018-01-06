/* https://developer.mozilla.org/en-US/docs/Web/JavaScript
highlight the word Tutorials then right click to inspect then console */

$0
<h2 id="Tutorials">Tutorials</h2>

var tutorialsElement = $0
tutorialsElement
<h2 id="Tutorials">Tutorials</h2>

tutorialsElement.addEventListener('click', function(){ // when function is run
    console.log('Element was clicked!'); 
});

// undefined

tutorialsElement.addEventListener('click', function(){ // when function is run
     console.log(event); // it passesthe event object into the function
    console.log('Element was clicked!'); 
});
// Element was clicked!

MouseEvent {isTrusted: true, screenX: 423, screenY: 192, clientX: 416, clientY: 72,…}
altKey:false
bubbles:true
button:0
buttons:0
cancelBubble:false
cancelable:true
clientX:416
clientY:72
composed:true
ctrlKey:false
currentTarget:null
defaultPrevented:false
detail:1
eventPhase:0
fromElement:null
isTrusted:true
layerX:84
layerY:685
metaKey:false
movementX:0
movementY:0
offsetX:85
offsetY:28
pageX:416
pageY:916
path:Array(15)
0:h2#Tutorials
1:div.column-half
2:div.column-container
3:article#wikiArticle
4:div#wiki-content.column-main.wiki-column.text-content
5:div.column-container.column-container-reverse
6:div#wiki-column-container.wiki-left-present
7:div.center
8:div#document-main.wiki-main-content
9:div.center.clear
10:main#content
11:body.document
12:html
13:document
14:Window {frames: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
length:15
__proto__:Array(0)
relatedTarget:null
returnValue:true
screenX:423
screenY:192
shiftKey:false
sourceCapabilities:InputDeviceCapabilities {firesTouchEvents: false}
srcElement:h2#Tutorials
target:h2#Tutorials
timeStamp:362829.54500000004
toElement:h2#Tutorials
type:"click"
view:Window {frames: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
which:1
x:416
y:72
__proto__:MouseEvent