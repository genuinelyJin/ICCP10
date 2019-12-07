var population = null;

function setup() {
  createCanvas(windowWidth, windowHeight);
  var url = 'http://openapi.seoul.go.kr:8088/78445843597970643530546e485870/xml/octastatapi10043/1/5/';
  
  loadJSON(url, seoulcity);   
}

function draw() {
  background(0);
  if (population==null) {return;}
  
  
  translate(width/2, height/2);
  var nDist = population.list_total_count;
  //var people = new HashMap<String,String,int>();
  var people = [];
  for(var x=0; x<nDist; x++) {
    people[x] = new person(population.row[i].jachigu, population.row[i].dong, population.row[i].gye_1);
    //fill(people[x][2]);
    //ellipse(x*10,x*10,10,10);
  }
  
function seoulcity( data ) {
  population = data.octastatapi10043;
}

function person(gyu,dong,number){
  this.gyu = gyu;
  this.dong = dong;
  this.number = number;
}
