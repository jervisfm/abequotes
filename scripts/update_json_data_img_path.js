// JS to update JSON data image path.
// This can be run in chrome dev tools or any other JS environment like node
// JSON Data is presumed to be in global data variable
window.data.map(x => {  var pieces = x.img_url.split("/");
    var filenamedl = pieces[pieces.length-1];  
    var filename = filenamedl.trim().split("?dl=0")[0]; pieces = ["/abequotes/images", filename]; x.img_url = pieces.join("/"); return x;} )