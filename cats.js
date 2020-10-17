function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log('responseText:' + xmlhttp.responseText);
        try {
          var data = JSON.parse(xmlhttp.responseText);
        } catch (err) {
          console.log(err.message + " in " + xmlhttp.responseText);
          return;
        }
        callback(data);
      }
    };
  
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
  
  ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
    document.getElementById("id").innerHTML = data[0]["id"];

    var html = '<img src="' + data[0]["url"] + '">';
    document.getElementById("image").innerHTML = html;
  });
  ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
    document.getElementById("id1").innerHTML = data[0]["id"];

    var html = '<img src="' + data[0]["url"] + '">';
    document.getElementById("image1").innerHTML = html;
  });
    ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
        document.getElementById("id2").innerHTML = data[0]["id"];

    var html = '<img src="' + data[0]["url"] + '">';
    document.getElementById("image2").innerHTML = html;
  });
    ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
        document.getElementById("id3").innerHTML = data[0]["id"];

    var html = '<img src="' + data[0]["url"] + '">';
    document.getElementById("image3").innerHTML = html;
  });
    ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
        document.getElementById("id4").innerHTML = data[0]["id"];

    var html = '<img src="' + data[0]["url"] + '">';
    document.getElementById("image4").innerHTML = html;
  });
    ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
        document.getElementById("id5").innerHTML = data[0]["id"];

    var html = '<img src="' + data[0]["url"] + '">';
    document.getElementById("image5").innerHTML = html;
  });
    ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
        document.getElementById("id6").innerHTML = data[0]["id"];

    var html = '<img src="' + data[0]["url"] + '">';
    document.getElementById("image6").innerHTML = html;
  });
    ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
        document.getElementById("id7").innerHTML = data[0]["id"];

    var html = '<img src="' + data[0]["url"] + '">';
    document.getElementById("image7").innerHTML = html;
  });
  