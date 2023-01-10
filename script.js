
    var timeDisplayEl = $("#date");

    function displayTime() {
      var rightNow = dayjs().format("MMM DD, YYYY hh:mm:ss a  [it's] dddd");
      timeDisplayEl.text(rightNow);
    }

    var currentHour = dayjs().hour()
    $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id"))
        if(currentHour < blockHour){
          $(this).addClass("past")
        } else if (currentHour === blockHour){
          $(this).addClass("present")
        } else { 
          $(this).addClass("future")
        }
        })

        var input = document.getElementById("saveIn");

        localStorage.setItem("input", JSON.stringify(input));
  	    localStorage.setItem("input", input);

        var btnSavet = document.querySelector("btnSave")
        
        function save() {
          window.print()
        }
        
        
  displayTime();
  setInterval(displayTime, 1000);
  btnSave.addEventListener("click", save)


