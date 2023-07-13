var turn=1;
var box=document.querySelectorAll('.box');
const header=document.querySelector('.player').children[0];
const winer=document.querySelector('.winer').children[0];
const ary=[
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
            // console.log(ary[row][col]);
            if(turn==1)
            {
                e.children[0].setAttribute('src','images/x.png');
                ary[row][col]=1;
                turn=2;
                header.textContent="player 2";
            }
            else if(turn==2)
            {
                e.children[0].setAttribute('src','images/o.png');
                ary[row][col]=2;
                turn=1;
                header.textContent="player 1";
            }
            
            // check who won
            test=true;
            testxr=true;
            testxre=false;
            testore=false;
            testor=true;
            ary.forEach(a=>{
                outerLoop :
                testor=true;
                testxr=true;
                a.forEach(b=>{
                    if(b==0)
                        test=false;
                    if(b!=1)
                        testxr=false;
                    else
                        console.log(b);
                    if(b!=2)
                        testor=false;
                })
                console.log('\n')
                if(testxr)
                    testxre=true;
                if(testor)
                    testore=true;
                //   console.log("working")
            });

            if(test)
            {
                winer.textContent="tie";
                clear();
            }
            if(testxre)
            {
                winer.textContent="plaer 1 won";
                clear();
            }   
            if(testore) 
            {
                winer.textContent="plaer 2 won";
                clear();
            }      
        }
    })
})
function clear() {
    box.forEach(e=>{
        e.addEventListener('click',()=>{
            e.children[0].style.display='none';
            e.children[0].setAttribute('src',' ');
        });
    });
}

function rowCheck(){
    testor=true;
    testxr=true;
    a.forEach(b=>{
        if(b==0)
            test=false;
        if(b!=1)
            testxr=false;
        else
            console.log(b);
        if(b!=2)
            testor=false;
    })
}
function columnCheck(){

}