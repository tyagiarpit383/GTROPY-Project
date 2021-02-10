var state;
const tableBody= document.getElementById("tableid");
const mapBody = document.getElementById('MapOData');
let dataHtml = '';
let tableHtml = '';
//FETCHING DATA FOR COVID
fetch("https://api.covid19india.org/data.json")
  .then(function (response) {
    return response.json()
  })
  .then(function (json) {
    state=json;
    console.log(json);
    var active = json.statewise[0].active;
    var deceased = json.statewise[0].deaths;
    var recovered = json.statewise[0].recovered;
    var count =  json.statewise.length;
    for (var i = 1; i <  count ; i++){
    dataHtml +=`<tr><td>${json.statewise[i].state}</td><td>${json.statewise[i].confirmed}</td><td>${json.statewise[i].active}</td><td>${json.statewise[i].recovered}</td><td>${json.statewise[i].deaths}</td></tr>`;
    }
    tableBody.innerHTML = dataHtml;
    //document.getElementById('id2').innerHTML=state.statewise[1].state;

    var chart = new CanvasJS.Chart("chartd", {
      animationEnabled: true,
      title:{
        text: "INDIAN COVID 19 TRACKER",
        horizontalAlign: "left"
      },
      data: [{
        type: "doughnut",
        startAngle: 60,
        innerRadius: 70,
        label: "Total",
        indexLabelFontSize: 17,
      //  indexLabel: "{label} - #percent%",
        //toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
          { y: active, label: "Active" },
          { y: deceased, label: "Deceased" },
          { y: recovered, label: "Recovered" },
        ]

      }]
    });
    chart.render();
//Map Part
    let chartConfig = {
  shapes: [
    {
      type: 'zingchart.maps',
      options: {
        bbox: [67.177, 36.494, 98.403, 6.965], // get bbox from zingchart.maps.getItemInfo('world-countries','ind');
        ignore: ['IND'], // ignore India because we are rendering a more specific India map below
        name: 'world.countries',
        panning: false, // turn of zooming. Doesn't work with bounding box
        style: {
          tooltip: {
            borderColor: '#000',
            borderWidth: '2px',
            fontSize: '18px'
          },
          controls: {
            visible: false // turn of zooming. Doesn't work with bounding box
          },
          hoverState: {
            alpha: .28
          }
        },
        zooming: false // turn of zooming. Doesn't work with bounding box
      }
    },
    {
      type: 'zingchart.maps',
      options: {
        name: 'ind',
        panning: false, // turn of zooming. Doesn't work with bounding box
        zooming: false,
        scrolling: false,
        style: {
          tooltip: {
            borderColor: '#000',
            borderWidth: '2px',
            fontSize: '18px'
          },
          borderColor: '#000',
          borderWidth: '2px',
          controls:{
          visible: false, // turn of zooming. Doesn't work with bounding box

          },
          hoverState: {
            alpha: .28
          },
          items: {
            LD: {
              tooltip: {
                text: `Lakshadweep ${json.statewise[37].confirmed}`,
                //mapHtml += `<tr><td>${json.statewise[37].confirmed}</td><td>${json.statewise[37].active}</td><td>${json.statewise[37].recovered}</td><td>${json.statewise[37].deaths}</td></tr>`;
                //dummyMapHtml = mapHtml;
                backgroundColor: '#ff5722'
              }

            },
            UN: {
              tooltip: {
                text: `State Unassigned ${json.statewise[36].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            DN: {
              tooltip: {
                text: `Dadra and Nagar Haveli and Daman and Diu ${json.statewise[35].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },

            MZ: {
              tooltip: {
                text: `Mizoram ${json.statewise[34].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            AN: {
              tooltip: {
                text: `Andaman and Nicobar Islands ${json.statewise[33].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            SK: {
              tooltip: {
                text: `Sikkim ${json.statewise[32].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            LA: {
              tooltip: {
                text: `Ladakh ${json.statewise[31].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            NL: {
              tooltip: {
                text: `Nagaland ${json.statewise[30].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            AR: {
              tooltip: {
                text: `Arunachal Pradesh ${json.statewise[28].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            ML: {
              tooltip: {
                text: `Meghalaya ${json.statewise[29].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            CH: {
              tooltip: {
                text: `Chandigarh ${json.statewise[27].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            MN: {
              tooltip: {
                text: `Manipur ${json.statewise[26].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            TR: {
              tooltip: {
                text: `Tripura ${json.statewise[25].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            PY: {
              tooltip: {
                text: `Puducherry ${json.statewise[24].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            GA: {
              tooltip: {
                text: `Goa + ${json.statewise[23].confirmed}`,
                // mapHtml: `<tr><td>${json.statewise[23].confirmed}</td><td>${json.statewise[23].active}</td><td>${json.statewise[23].recovered}</td><td>${json.statewise[23].deaths}</td></tr>`,
                //dummyMapHtml: mapHtml,
                backgroundColor: '#ff5722'
              }
            },
            UT: {
              tooltip: {
                text: `UttaraKhand ${json.statewise[21].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            HP: {
              tooltip: {
                text: `Himachal Pradesh ${json.statewise[22].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            JH: {
              tooltip: {
                text: `Jharkhand ${json.statewise[20].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            JK: {
              tooltip: {
                text: `Jammu and Kashmir ${json.statewise[19].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            PB: {
              tooltip: {
                text: `Punjab ${json.statewise[18].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            AS: {
              tooltip: {
                text: `Assam ${json.statewise[17].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            MP: {
              tooltip: {
                text: `Madhya Pradesh ${json.statewise[16].confirmed}`,
                backgroundColor: '#ff5722'
                }
              },
            GJ: {
              tooltip: {
                text: `Gujarat ${json.statewise[15].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            BR: {
              tooltip: {
                text: `Bihar ${json.statewise[14].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            HR: {
              tooltip: {
                text: `Harayana ${json.statewise[13].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            //TO BE CHECKED FROM BELOW
            CT: {
              tooltip: {
                text: `Chhasttisgarh ${json.statewise[12].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            TJ: {
              tooltip: {
                text: `Telangana ${json.statewise[11].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            RJ: {
              tooltip: {
                text: `Rajasthan ${json.statewise[10].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            OR: {
              tooltip: {
                text: `Odisha ${json.statewise[9].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            WB: {
              tooltip: {
                text: `West Bengal ${json.statewise[8].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            UP: {
              tooltip: {
                text: `Uttar Pradesh ${json.statewise[7].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            DL: {
              tooltip: {
                text: `Delhi ${json.statewise[6].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            KL: {
              tooltip: {
                text: `Kerela ${json.statewise[5].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            TN: {
              tooltip: {
                text: `Tamil Nadu ${json.statewise[4].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            AP: {
              tooltip: {
                text: `Andhra Pradesh ${json.statewise[3].confirmed}`,
                backgroundColor: '#ff5722'
              }
            },
            KA: {
              tooltip: {
                text: `Karnataka ${json.statewise[2].confirmed}`,
                backgroundColor: '#ff5722'
              },
            },
            MH: {
              tooltip: {
                text: `Maharashtra ${json.statewise[1].confirmed}`,
                backgroundColor: '#ff9800'
              },

            },
            TL: {
              tooltip: {
                text: `Telangana ${json.statewise[1].confirmed}`,
                backgroundColor: '#00AE4D'
              },


            },
            TN: {
              tooltip: {
                text: 'Tamil Nadu has 1,968 monthly users total',
                backgroundColor: '#00bcd4'
              },
            }

          },

          label: { // text displaying. Like valueBox
            fontSize: '15px',
            visible: false
          }
        },
        zooming: false // turn of zooming. Doesn't work with bounding box
      }
    }
  ]
}

zingchart.loadModules('maps,maps-ind,maps-world-countries');
zingchart.render({
  id: 'myChart',
  data: chartConfig,
  height: '100%',
  width: '50%',
});
});

function myFunction() {
  var data = document.getElementById('searchId').value;
  var lowerData =  data.toLowerCase();
  fetch("https://api.covid19india.org/data.json")
    .then(function (response) {
      return response.json()
    })
    .then(function(json){
      state=json;
      console.log(state.statewise.length);
      for (var i = 1; i <= state.statewise.length; i++) {
        var fetchData = json.statewise[i].state.toLowerCase();
        console.log('Actual Data' + lowerData);
        console.log('Fetching Data' + fetchData);
        if(lowerData === fetchData)
        {
          var data = document.getElementById('MapOData');
          var confirmed =  json.statewise[i].confirmed;
          var active = json.statewise[i].active;
          var recovered = json.statewise[i].recovered;
          var deaths = json.statewise[i].deaths;
          tableHtml = `<tr><td>${confirmed}</td><td>${active}</td><td>${recovered}</td><td>${deaths}</td></tr>`;
          data.innerHTML += tableHtml;
       }

      }
    })

}
window.onload = function () {
   var chart = new CanvasJS.Chart("chartContainer",
   {

     title:{
     text: "Covid Cases"
     },
      data: [
     {
       type: "line",

       dataPoints: [
       { x: new Date(2012, 00, 1), y: 450 },
       { x: new Date(2012, 01, 1), y: 414 },
       { x: new Date(2012, 02, 1), y: 520 },
       { x: new Date(2012, 03, 1), y: 460 },
       { x: new Date(2012, 04, 1), y: 450 },
       { x: new Date(2012, 05, 1), y: 500 },
       { x: new Date(2012, 06, 1), y: 480 },
       { x: new Date(2012, 07, 1), y: 480 },
       { x: new Date(2012, 08, 1), y: 410 },
       { x: new Date(2012, 09, 1), y: 500 },
       { x: new Date(2012, 10, 1), y: 480 },
       { x: new Date(2012, 11, 1), y: 510 }
       ]
     }
     ]
   });

   chart.render();
 }
