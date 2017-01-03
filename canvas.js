$(document).ready(function() {

	 var theCanvasfm = $("#fm");
   var contextfm = theCanvasfm[0].getContext("2d");
   var theCanvasfm1 = $("#fm1");
   var contextfm1 = theCanvasfm1[0].getContext("2d");
   var theCanvas = $("#fmman");
   var context = theCanvas[0].getContext("2d");
   var theCanvascity = $("#fmcity");
   var contextcity = theCanvascity[0].getContext("2d");
   var theCanvaswomen = $("#fmwoman");
   var contextwoman = theCanvaswomen[0].getContext("2d");

	 var getPixelRatio = function(context) {
		var backingStore = context.backingStorePixelRatio ||
			context.webkitBackingStorePixelRatio ||
			context.mozBackingStorePixelRatio ||
			context.msBackingStorePixelRatio ||
			context.oBackingStorePixelRatio ||
			context.backingStorePixelRatio || 1;
		return (window.devicePixelRatio || 1) / backingStore;
	 };
	 var ratio = getPixelRatio(context);

	 var man1 = new Image();
	 var womanship = new Image();

   var windowW = $(window).width();
   var windowH = $(window).height();
   var xSize = [];
   var ySize = [];
   var xSizepush = [];
   var ySizepush = [];

   var Boxw = windowW/40;
   var Boxh = windowH/40;

   for (var i = 0; i < 40; i++) {
     xSize.push(parseInt(i*Boxw));
     ySize.push(parseInt(i*Boxh));
   }

   for (var i = 0; i < 40; i++) {
      var index = Math.floor((Math.random()*xSize.length));

      xSizepush.push(xSize[index])    
      ySizepush.push(ySize[index])     

   }
   //console.log("x:"+xSizepush+",y:"+ySizepush)


	 man1.addEventListener('load',eventSheetLoaded,false);

	 man1.src = 'images/man/1.png';
	 //console.log("宽度:"+man1.width+",高度:"+man1.height)

	 function eventSheetLoaded(){
	 	gameloop();
	 }
	 //男设置
     var mansize = {"list":[
         {
           x:"21",
           y:"31",
           w:"53",
           h:"106"
         },
         {
           x:"321",
           y:"109",
           w:"66",
           h:"127"
         },
         {
           x:"974",
           y:"118",
           w:"57",
           h:"105"
         },
         {
           x:"1233",
           y:"249",
           w:"81",
           h:"158"
         },
         {
           x:"1372",
           y:"35",
           w:"57",
           h:"105"
         },
         {
           x:"1519",
           y:"407",
           w:"57",
           h:"105"
         },
         {
           x:"215",
           y:"63",
           w:"57",
           h:"105"
         },
         {
           x:"1296",
           y:"324",
           w:"81",
           h:"157"
         },
         {
           x:"1040",
           y:"127",
           w:"94",
           h:"186"
         },
         {
           x:"637",
           y:"393",
           w:"94",
           h:"186"
         },
         {
           x:"1449",
           y:"630",
           w:"66",
           h:"130"
         },
         {
           x:"961",
           y:"459",
           w:"81",
           h:"157"
         },
         {
           x:"574",
           y:"600",
           w:"45",
           h:"89"
         },
         {
           x:"727",
           y:"400",
           w:"81",
           h:"157"
         },
         {
           x:"1217",
           y:"210",
           w:"66",
           h:"130"
         },
         {
           x:"300",
           y:"356",
           w:"66",
           h:"130"
         },
         {
           x:"811",
           y:"230",
           w:"66",
           h:"130"
         },
                  {
           x:"321",
           y:"31",
           w:"53",
           h:"106"
         },
         {
           x:"1301",
           y:"309",
           w:"66",
           h:"127"
         },
         {
           x:"164",
           y:"218",
           w:"57",
           h:"105"
         },
         {
           x:"233",
           y:"49",
           w:"81",
           h:"158"
         },
         {
           x:"1372",
           y:"305",
           w:"57",
           h:"105"
         },
         {
           x:"1219",
           y:"37",
           w:"57",
           h:"105"
         },
         {
           x:"1615",
           y:"363",
           w:"57",
           h:"105"
         },
         {
           x:"296",
           y:"124",
           w:"81",
           h:"157"
         },
         {
           x:"240",
           y:"327",
           w:"94",
           h:"186"
         },
         {
           x:"537",
           y:"593",
           w:"94",
           h:"186"
         },
         {
           x:"1449",
           y:"330",
           w:"66",
           h:"130"
         },
         {
           x:"561",
           y:"359",
           w:"81",
           h:"157"
         },
         {
           x:"574",
           y:"600",
           w:"45",
           h:"89"
         },
         {
           x:"527",
           y:"673",
           w:"81",
           h:"157"
         },
         {
           x:"617",
           y:"610",
           w:"105",
           h:"205"
         },
         {
           x:"200",
           y:"356",
           w:"81",
           h:"157"
         },
         {
           x:"611",
           y:"430",
           w:"105",
           h:"205"
         },
         {
           x:"100",
           y:"356",
           w:"81",
           h:"157"
         },
         {
           x:"111",
           y:"430",
           w:"178",
           h:"349"
         },
         {
           x:"400",
           y:"356",
           w:"81",
           h:"157"
         },
         {
           x:"1111",
           y:"230",
           w:"178",
           h:"349"
         },
         {
           x:"200",
           y:"156",
           w:"81",
           h:"157"
         },
         {
           x:"811",
           y:"230",
           w:"81",
           h:"157"
         }
     	]}
        //女设置
     	var womansize = {"list":[
         {
           x:"137",
           y:"51",
           w:"55",
           h:"89"
         },
         {
           x:"166",
           y:"126",
           w:"100",
           h:"163"
         },
         {
           x:"374",
           y:"118",
           w:"57",
           h:"105"
         },
         {
           x:"532",
           y:"819",
           w:"100",
           h:"163"
         },
         {
           x:"672",
           y:"75",
           w:"100",
           h:"163"
         },
         {
           x:"119",
           y:"157",
           w:"55",
           h:"89"
         },
         {
           x:"1015",
           y:"253",
           w:"55",
           h:"85"
         },
         {
           x:"296",
           y:"424",
           w:"100",
           h:"163"
         },
         {
           x:"140",
           y:"527",
           w:"100",
           h:"163"
         },
         {
           x:"403",
           y:"486",
           w:"100",
           h:"163"
         },
         {
           x:"0",
           y:"530",
           w:"200",
           h:"325"
         },
         {
           x:"361",
           y:"759",
           w:"100",
           h:"163"
         },
         {
           x:"574",
           y:"600",
           w:"45",
           h:"89"
         },
         {
           x:"1427",
           y:"773",
           w:"200",
           h:"325"
         },
         {
           x:"717",
           y:"210",
           w:"200",
           h:"325"
         },
         {
           x:"1500",
           y:"356",
           w:"100",
           h:"163"
         },
         {
           x:"211",
           y:"230",
           w:"45",
           h:"89"
         },
                  {
           x:"137",
           y:"51",
           w:"55",
           h:"89"
         },
         {
           x:"166",
           y:"126",
           w:"100",
           h:"163"
         },
         {
           x:"374",
           y:"118",
           w:"57",
           h:"105"
         },
         {
           x:"532",
           y:"819",
           w:"150",
           h:"244"
         },
         {
           x:"672",
           y:"75",
           w:"100",
           h:"163"
         },
         {
           x:"119",
           y:"157",
           w:"55",
           h:"89"
         },
         {
           x:"1015",
           y:"253",
           w:"55",
           h:"85"
         },
         {
           x:"296",
           y:"424",
           w:"100",
           h:"163"
         },
         {
           x:"1400",
           y:"527",
           w:"100",
           h:"163"
         },
         {
           x:"1603",
           y:"0",
           w:"100",
           h:"163"
         },
         {
           x:"1250",
           y:"330",
           w:"200",
           h:"325"
         },
         {
           x:"1661",
           y:"359",
           w:"100",
           h:"163"
         },
         {
           x:"674",
           y:"300",
           w:"45",
           h:"89"
         },
         {
           x:"1827",
           y:"373",
           w:"200",
           h:"325"
         },
         {
           x:"1617",
           y:"210",
           w:"200",
           h:"325"
         },
         {
           x:"1300",
           y:"556",
           w:"100",
           h:"163"
         },
         {
           x:"511",
           y:"330",
           w:"45",
           h:"89"
         },
         {
           x:"811",
           y:"130",
           w:"45",
           h:"89"
         },
         {
           x:"611",
           y:"130",
           w:"45",
           h:"89"
         },
         {
           x:"800",
           y:"330",
           w:"45",
           h:"89"
         },
         {
           x:"1511",
           y:"230",
           w:"45",
           h:"89"
         },
         {
           x:"311",
           y:"330",
           w:"45",
           h:"89"
         },
         {
           x:"111",
           y:"330",
           w:"45",
           h:"89"
         }
     	]}
       var citysize = {"list":[
         {
           x:windowW/2-150,
           y:"356"
         },
         {
           x:windowW/2-80,
           y:"456"
         },
         {
           x:windowW/2+100,
           y:"296"
         },
         {
           x:windowW/2-300,
           y:"456"
         },
         {
           x:windowW/2+140,
           y:"656"
         },
         {
           x:windowW/2+240,
           y:"356"
         }
      ]}

var fmlist = {"list":[
         {
           x:windowW/2-200,
           y:"356",
           w:"300",
           h:"485"
         },
         {
           x:windowW/2,
           y:"556",
           w:"300",
           h:"485"
         },
         {
           x:windowW/2-100,
           y:"156",
           w:"300",
           h:"485"
         },
         {
           x:windowW/2-400,
           y:"356",
           w:"200",
           h:"365"
         },
         {
           x:windowW/2,
           y:"156",
           w:"200",
           h:"365"
         },
         {
           x:windowW/2+200,
           y:"356",
           w:"200",
           h:"365"
         }
      ]}


    //console.log(mansize)
	 function drawScreen(){
	 	var man = new Image();
	 	var woman = new Image();
  	
	 	woman.onload = function(){
	 		contextwoman.clearRect(0,0,1920,1080);
      contextfm.clearRect(0,0,1920,1080);
		 	for (var i = 0; i < 40; i++) {
		 		contextwoman.drawImage(woman,womansize.list[i].x,womansize.list[i].y,womansize.list[i].w,womansize.list[i].h);
		 	}
      for (var i = 0; i < 2; i++) {
        contextfm.drawImage(woman,fmlist.list[i].x,fmlist.list[i].y,fmlist.list[i].w,fmlist.list[i].h);
      }
	 	}
	 	man.onload = function(){
      context.clearRect(0,0,1920,1080);
      contextfm1.clearRect(0,0,1920,1080);
      for (var i = 0; i < 40; i++) {
        context.drawImage(man,mansize.list[i].x,mansize.list[i].y,mansize.list[i].w,mansize.list[i].h);
      }
      for (var i = 3; i < 5; i++) {
        contextfm1.drawImage(man,fmlist.list[i].x,fmlist.list[i].y,fmlist.list[i].w,fmlist.list[i].h);
      }
    }

	 	man.src = 'images/man/'+counter+'.png';
	 	woman.src = 'images/woman/'+counter+'.png';
    

	 	counter ++;
	 	if (counter > 7) {
	 		counter = 0;
	 	}
	 }
	 function getRandom(min,max)
		{
		 return Math.floor(Math.random()*(max-min)+min);
		}

   function drawScreenCity(id){
       var city = new Image();
       city.onload = function(){    
        contextcity.drawImage(city,citysize.list[id].x,citysize.list[id].y,city.width,city.height);
       }
       //console.log("x:"+citysize.list[id].x+",y:"+citysize.list[id].y)
       // setTimeout(function(){
       //  context.clearRect(0,0,city.width*ratio,city.height*ratio);
       // },2000)
      city.src = 'images/c'+id+'.png';
   }
   var timeid = 0;
   var cityplay = self.setInterval(function(){
     // console.log(timeid);
      drawScreenCity(timeid);
      timeid = timeid + 1;
      if (timeid > 7) {
        clearInterval(cityplay);
      }
   },2000)

	 //创建动画
	 var counter = 0;
	 function drawAnimation(){
	 	setInterval(function(){
          
	 	},1000)
	 }
	 function gameloop(){
       window.setTimeout(gameloop,120);
       drawScreen();
	 }

	 
});
