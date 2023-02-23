var btt = document.getElementById("back-to-top"),
body = document.body,
docElem = document.documentElement,
offset = 100,
scrollPos, docHeight;
isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

//Calculate the document height
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != 'underfined'){
offset = docHeight / 4;
}    

//Add scroll event listener
window.addEventListener("scroll", function(event){
scrollPos = body.scrollTop || docElem.scrollTop;

btt.className =(scrollPos > offset) ? "visible" : "";
});

//Add click event listeners
btt.addEventListener("click", function(event){
event.preventDefault();

if (isFirefox){
    docElem.scrollTop = 0;
} else{
  docElem.scrollTop = 0;  
}

});

function clicked (){
  swal({
    text: "Submitted Succesfully",
    icon: "success",
    button: "Ok"
});
}
