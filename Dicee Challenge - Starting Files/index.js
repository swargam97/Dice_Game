var n=Math.random();
n=Math.floor(n*6)+1;
var image="images/dice"+n+".png";
var m=Math.random();
m=Math.floor(m*6)+1;
var image2="images/dice"+m+".png";


document.querySelector(".img1").setAttribute("src",image);
document.querySelector(".img2").setAttribute("src",image2);
if(n>m){
  document.querySelector("h1").innerHTML="Player 1 wins";

}
else if(m>n){
  document.querySelector("h1").innerHTML="Player 2 wins";

}
else if(n==m){
    document.querySelector("h1").innerHTML="Draw";
}
else{
  document.querySelector("h1").innerHTML="Refresh Me";
}
