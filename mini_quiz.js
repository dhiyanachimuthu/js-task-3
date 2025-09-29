let a=prompt("1.What is the unit of Force?\nA.Joule\nB.Newton\nC.Coloumb\nD.Watts");
let score=0;
switch (a){
    case "A":
        alert("Incorrect");
        break;
    case "B":
        alert("Correct");
        score+=1;
        break;
    case "C":
        alert("Incorrect");
        break;
    case "D":
        alert("Incorrect");
        break;
}
let b=prompt("2.Which planet has the most moons?\nA.Venus\nB.Mars\nC.Jupiter\nD.Saturn");
switch(b){
    case "A":
        alert("Incorrect");
        break;
    case "B":
        alert("Incorrect");
        break;
    case "C":
        alert("Incorrect");
        break;
    case "D":
        alert("Correct");
        score+=1;
        break;
}
let c=prompt("3.Which era witnessed the extinction of dinosaurs?\nA.Cretaceous Period\nB.cenozoic Era\nC.Paleozoic Era\nD.Jurassic period.");
switch(c){
    case "A":
        alert("Correct");
        score+=1;
        break;
    case "B":
        alert("Incorrect");
        break;
    case "C":
        alert("Inorrect");
        break;
    case "D":
        alert("Incorrect");
        break;
}
alert("Your Final Score:"+score+"/3");