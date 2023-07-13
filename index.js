var turn=1;
var playerOneScore=0;
var playerTwoScore=0;

var box=document.querySelectorAll('.box');
const header=document.querySelector('.player').children[0];
const winer=document.querySelector('.winer').children[0];
const replay=document.querySelector('.replay');
const score=document.querySelector('.score');
const footer=document.querySelector('.footer');

var ary=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

box.forEach(e=>{
    e.addEventListener('click',()=>{
        e.children[0].style.display='block';
        const row=e.getAttribute('data-row');
        const col=e.getAttribute('data-col');
        
        if(ary[row][col]===0)
        {
            if(turn==1)
            {
                e.children[0].setAttribute('src','images/x.png');
                ary[row][col]='x';
                turn=2;
                header.textContent="player 2";
            }
            else if(turn==2)
            {
                e.children[0].setAttribute('src','images/o.png');
                ary[row][col]='o';
                turn=1;
                header.textContent="player 1";
            }
            
            // check who won
            test=true;
            
            // check if one of the first, second or third rows of the array are equal to x or o
            firstrowx=ary[0][0]=='x' && ary[0][1]=='x' && ary[0][2]=='x';
            secondrowx=ary[1][0]=='x' && ary[1][1]=='x' && ary[1][2]=='x';
            thiredrowx=ary[2][0]=='x' && ary[2][1]=='x' && ary[2][2]=='x';
            
            firstcolumnx=ary[0][0]=='x' && ary[1][0]=='x' && ary[2][0]=='x';
            secondcolumnx=ary[0][1]=='x' && ary[1][1]=='x' && ary[2][1]=='x';
            thiredcolumnx=ary[0][2]=='x' && ary[1][2]=='x' && ary[2][2]=='x';
            
            firstcolumno=ary[0][0]=='o' && ary[1][0]=='o' && ary[2][0]=='o';
            secondcolumno=ary[0][1]=='o' && ary[1][1]=='o' && ary[2][1]=='o';
            thiredcolumno=ary[0][2]=='o' && ary[1][2]=='o' && ary[2][2]=='o';
            
            firstrowo=ary[0][0]=='o'&& ary[0][1]=='o' && ary[0][2]=='o';
            secondrowo=ary[1][0]=='o'&& ary[1][1]=='o' && ary[1][2]=='o';
            thiredrowo=ary[2][0]=='o'&& ary[2][1]=='o' && ary[2][2]=='o';

            // check if the diadonals of the array are equal to x or o
            leftToRightDiagonalx=ary[0][0]=='x'&& ary[1][1]=='x' && ary[2][2]=='x';
            leftToRightDiagonalo=ary[0][0]=='o'&& ary[1][1]=='o' && ary[2][2]=='o';

            rightToLeftDiagonalx=ary[2][0]=='x'&& ary[1][1]=='x' && ary[0][2]=='x';
            rightToLeftDiagonalo=ary[2][0]=='o'&& ary[1][1]=='o' && ary[0][2]=='o';

            if(firstrowx || secondrowx || thiredrowx || firstcolumnx || secondcolumnx || thiredcolumnx || leftToRightDiagonalx || rightToLeftDiagonalx)
            {
                winer.textContent="plaer 1 won";
                playerOneScore+=3;
                score.children[0].textContent="player 1: "+playerOneScore;
                clear();
            }   
            if(firstrowo || secondrowo || thiredrowo || firstcolumno || secondcolumno || thiredcolumno || leftToRightDiagonalo || rightToLeftDiagonalo) 
            {
                winer.textContent="plaer 2 won";
                playerTwoScore+=3;
                score.children[1].textContent="player 2: "+ playerTwoScore;
                clear();
            }    
            if(istie())
            {
                winer.textContent="Tie";
                playerOneScore++;
                playerTwoScore++;
                score.children[0].textContent="player 1: "+ playerOneScore;
                score.children[1].textContent="player 2: "+ playerTwoScore;
                clear();

            }
        }
    })
})
function clear() {
    box.forEach(e=>{
        e.children[0].style.display='none';
        e.children[0].setAttribute('src',' ');
    });

    header.style.display="none";
    replay.style.display="block";
    winer.style.display="block";
}
replay.addEventListener('click',()=>{
    ary = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    replay.style.display="none";
    winer.style.display="none";

    header.style.display="block";

    if(turn == 1)
        header.textContent="player 1";
    else
        header.textContent="player 2";

});
function istie(){

    for (let i = 0; i < ary.length; i++)
      for (let j = 0; j < ary[i].length; j++) 
        if (ary[i][j] == 0)
            return false;

    return true;
}
const now = new Date();
footer.innerHTML="&copy 2023 - "+ now.getFullYear() +" Daniel Asfaw";