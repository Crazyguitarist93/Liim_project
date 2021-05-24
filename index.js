function checkMon(){
    if (Gino22.checked) {
    var change2 = document.getElementById("Gino22");
    var change = document.getElementById("g22");
        change.innerHTML = "Monopattino Gino22 - Ha le luci accese"
        change2.checked = false;
      }
        else if (Mike24.checked) {
          var change2 = document.getElementById("Mike24");
          var change = document.getElementById("m24");
              change.innerHTML = "Monopattino Mike24 - Ha le luci accese"
              change2.checked = false;
        }
        else if (Fede154.checked) {
          var change2 = document.getElementById("Fede154");
          var change = document.getElementById("f154");
              change.innerHTML = "Monopattino Fede154 - Ha le luci accese"
              change2.checked = false;
        }
        else
          alert("Seleziona prima un monopattino");
        }


        function Lightoff(){
            if (Gino22.checked) {
            var change2 = document.getElementById("Gino22");
            var change = document.getElementById("g22");
                change.innerHTML = "Monopattino Gino22"
                change2.checked = false;
              }
                else if (Mike24.checked) {
                  var change2 = document.getElementById("Mike24");
                  var change = document.getElementById("m24");
                      change.innerHTML = "Monopattino Mike24"
                      change2.checked = false;
                }
                else if (Fede154.checked) {
                  var change2 = document.getElementById("Fede154");
                  var change = document.getElementById("f154");
                      change.innerHTML = "Monopattino Fede154"
                      change2.checked = false;
                }
                else
                  alert("Seleziona prima un monopattino");
                }

                f


                function ChangeColo(){
                    if (Gino22.checked)
                        document.getElementById("g22").style.color = "#ff0000";
                        else if (Mike24.checked) {
                          document.getElementById("m24").style.color = "#ff0000";
                        }
                        else if (Fede154.checked) {
                          document.getElementById("f154").style.color = "#ff0000";
                        }
                        else
                          alert("Seleziona prima un monopattino");
                        }


                        function ConfPren(){
                            if (Gino22.checked){
                            var change2 = document.getElementById("Gino22");
                            var change = document.getElementById("g22");
                              change.style.color = "yellow";
                              change.innerHTML = "Monopattino Gino22 - è stato prenotato";
                              change2.style.display = "none"
                              change2.checked = false;
                            } else if (Mike24.checked) {
                              var change2 = document.getElementById("Mike24");
                              var change = document.getElementById("m24");
                                change.style.color = "yellow";
                                change.innerHTML = "Monopattino Mike24 - è stato prenotato";
                                change2.style.display = "none"
                                change2.checked = false;
                                }
                                else if (Fede154.checked) {
                                  var change2 = document.getElementById("Fede154");
                                  var change = document.getElementById("f154");
                                    change.style.color = "yellow";
                                    change.innerHTML = "Monopattino Fede154 - è stato prenotato";
                                    change2.style.display = "none"
                                    change2.checked = false;
                                }
                                else
                                  alert("Seleziona prima un monopattino");
                                }
