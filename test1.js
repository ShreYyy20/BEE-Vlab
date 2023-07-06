function supplycheck(){
  
  if(document.getElementById('V').value==20)
    {
      simulate();
    }
    else{
      alert("PLEASE ADJUST SUPPLY VOLTAGE  TO 20'")
    }  
  }
  function updateTextInput(val) {
    document.getElementById('slideroutput').value=val; 
  }

  var loadres = [];
  let x=[];
  let y=[];
var power = [];
  function simulate()
  {
          loadres = document.getElementById("rl").value;
          var a=150+ parseFloat(loadres);
          document.getElementById("z").innerHTML = (10/parseFloat(a)).toFixed(4);
          document.getElementById("Vmeter").innerHTML = parseFloat((10/(a))*(loadres)).toFixed(5);
          document.getElementById("pr").innerHTML=(parseFloat(((10/(a))*(loadres))*(10/parseFloat(a))).toFixed(4));
        }
          function tableadd() {
           var volts = document.getElementById("Vmeter").innerHTML;
           var current = document.getElementById("z").innerHTML;
            var power=document.getElementById("pr").innerHTML;
           var loadres = document.getElementById("rl").value;
           tbody = document.querySelector('#dtable tbody');
          tbody.appendChild(createRow(volts, current, power,loadres));
          x.push(loadres);
        y.push(power); 
        }
        
        function createRow(volts, current, power, loadres) {
          const tr = document.createElement("tr");
          tr.appendChild(createTd(volts));
          tr.appendChild(createTd(current));
          tr.appendChild(createTd(power));
          tr.appendChild(createTd(loadres));
          return tr;
        }
        
        
        function createTd(value) {
          const td = document.createElement("td");
          td.innerText = value;
          return td;
        }

function display(){
  document.getElementById('myGraph').style.visibility = 'visible';
       
    var ctx = document.getElementById("myGraph");
       var myChart = new Chart(ctx,{
      type: "line",
        data: {
          labels:x,
          datasets: [
          {
             data:y,
             label: "Load resistance vs power",
              borderColor: "red",
              fill: false
           },
            ]
           }
          });
        }
        