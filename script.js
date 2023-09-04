setInterval(()=> {
      var t = new Date().toLocaleTimeString();
        document.getElementById("time").innerHTML = t;
      },1000)
