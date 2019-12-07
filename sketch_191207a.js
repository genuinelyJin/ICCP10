var population = null;

function setup() {
  createCanvas(windowWidth, windowHeight);
  var url = 'http://openapi.seoul.go.kr:8088/78445843597970643530546e485870/xml/octastatapi10043/1/5/';
  
  loadJSON(url, seoulcity);
  /*textSize(18);
  textAlign(LEFT, TOP);
  noStroke();*/    
}

function draw() {
  background(0);
  if (population==null) {return;}
  //console.log(population);
  
  translate(width/2, height/2);
  var nDist = population.list_total_count;
  //var people = new HashMap<String,String,int>();
  var people = [];
  for(var x=0; x<nDist; x++) {
    people[x] = new person(population.row[i].jachigu, population.row[i].dong, population.row[i].gye_1);
    fill(people[x][2]);
    ellipse(x*10,x*10,10,10);
  }
  
 /* 
  var angStep = TWO_PI/ nDist
    var maxPM10 = 0, minPM10 = 200;
  for (var i=0; i< nDist; i++) {
    if (isNaN(population.row[i].PM10)) continue;
    maxPM10 = max(airQdata.row[i].PM10, maxPM10);
    minPM10 = min(airQdata.row[i].PM10, minPM10);
  }
  var angOffset = map(mouseX, 0, width, 0, TWO_PI);
  var scaleSz = map(mouseY, 0, height, 1, 2);
  for (var i=0; i< nDist; i++) {
    push();
    rotate( angStep*i + angOffset);
    scale(scaleSz);
    if (isNaN(airQdata.row[i].PM10)) {
      fill(127);
      text("No Data", 80, 0);
      text(airQdata.row[i].MSRSTENAME, 200, 0);
    } else {
      var red = map(airQdata.row[i].PM10, minPM10, maxPM10, 0, 255);
      red = constrain(red, 0, 255);
      fill(red, 255, 255);
      rect(50, 0, airQdata.row[i].PM10 * 3, 15);
      text(airQdata.row[i].MSRSTENAME, airQdata.row[i].PM10 *3 +80, 0);
    }
    pop();
  }*/
}
function seoulcity( data ) {
  population = data.octastatapi10043;
}

function person(gyu,dong,number){
  this.gyu = gyu;
  this.dong = dong;
  this.number = number;
}
