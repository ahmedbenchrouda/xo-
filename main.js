let turn ='x';
let title=document.querySelector('.title')
let array =[]
function end(num1,num2,num3){
    title.innerHTML=`${array[num1]} winner`
        document.getElementById('item' + num1).style.background='#b8b8ff';
        document.getElementById('item' + num2).style.background='#b8b8ff';
        document.getElementById('item' + num3).style.background='#b8b8ff';
        setInterval(function(){
title.innerHTML+='.'
        }, 1000)
        setTimeout(function(){
            location.reload()
        },4000)
}

function winner(){
    for(let i=1;i<10;i++ ){
      array[i] = document.getElementById('item' + i).innerHTML
    } 
    if(array[1]==array[2]&&array[2]==array[3]&&array[1]!=''){
        end(1,2,3)  
    }else if(array[4]==array[5]&&array[5]==array[6]&&array[5]!=''){
        end(4,5,6 )
    }else if(array[7]==array[8]&&array[8]==array[9]&&array[8]!=''){
        end( 7,8,9)
    }else if(array[1]==array[4]&&array[4]==array[7]&&array[4]!=''){
        end( 1,4,7)  
    }else if(array[2]==array[5]&&array[5]==array[8]&&array[5]!=''){

        end( 2,5,8)
    }else if(array[3]==array[6]&&array[6]==array[9]&&array[6]!=''){
        end(3,6,9 )
    }else if(array[1]==array[5]&&array[5]==array[9]&&array[5]!=''){
        end( 1,5,9)
    }else if(array[3]==array[5]&&array[5]==array[7]&&array[5]!=''){
        end( 3,5,7)
    }else if(array[1]!=''&&array[2]!=''&&array[3]!=''&&array[4]!=''&&array[5]!=''&&array[6]!=''&&array[7]!=''&&array[8]!=''&&array[9]!=''){
        title.innerHTML='drow'
        setInterval(function(){
            title.innerHTML+='.'
                    }, 1000)
                    setTimeout(function(){
                        location.reload()
                    },4000)
    }
}




function game(id){
    let element=document.getElementById(id)
if(turn ==='x'&&element.innerHTML==''){
    element.innerHTML='X'
    turn='o'
    title.innerHTML='O'
}else if(turn ==='o'&&element.innerHTML==''){
    element.innerHTML='O'
    turn='x'
    title.innerHTML='X'
   
}
winner()
}


