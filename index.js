
var randomNumber1=Math.floor((Math.random() * 6) + 1);
var string1="Images/"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",string1);

var randomNumber2=Math.floor((Math.random() * 6) + 1);
var string2="Images/"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",string2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent="Player 1 Wins!";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").textContent="Player 2 Wins!";
}
else
{
  document.querySelector("h1").textContent="It's a Draw!";
}
