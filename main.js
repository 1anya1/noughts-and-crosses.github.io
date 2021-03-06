
var won = false;
var tie = 0;

var player = {
    player1:{
        piece:'X',
        name: '',
        wins: 0
    },
    player2:{
        piece: 'O',
        name: '',
        wins:0
    }  
}
function my() {
    var name = document.getElementById('name').value;
    if(player.player1.name !== '' && player.player2.name!==''){
        return;
    } else{
        player.player1.name==='' ? player.player1.name=name : player.player2.name=name;
       
    }
    if(player.player2.name==='') {
        document.getElementById('player1').innerHTML = name.toUpperCase();
    } else{
        document.getElementById('player2').innerHTML = name.toUpperCase();
    }
  
}


document.getElementById('piece1').innerHTML = `Player 1 : '${player.player1.piece}'`;

document.getElementById('piece2').innerHTML = `Player 2 : '${player.player2.piece}'`;

document.getElementById('wins2').innerHTML = `WINS: ${player.player2.wins}`;
document.getElementById('wins1').innerHTML = `WINS: ${player.player1.wins}`;

var currentPlayer = player.player1.piece


function place(box_id) {
    let box = document.getElementById(box_id)
    console.log(box_id)
    if(box.innerText != '' || won) return;
    
    box.innerText = currentPlayer;
    if(currentPlayer === player.player2.piece){
    
      document.getElementById(box_id).style.color='#845ec2' 
      
        currentPlayer = player.player1.piece
        
    }
    else{
        currentPlayer = player.player2.piece
        document.getElementById(box_id).style.color='#ff8a7a' 
    }
 checkBoard();
}


function checkBoard(){
    for(var i=0; i<=2; i++){
        checkWinner(document.getElementById(i + '_0'),
            document.getElementById(i+'_1'),
            document.getElementById(i+'_2'));
        checkWinner(document.getElementById('0_'+i),
            document.getElementById('1_'+i),
            document.getElementById('2_'+i));
        
    }
    checkWinner(document.getElementById('0_0'),
        document.getElementById('1_1'),
        document.getElementById('2_2'));

    checkWinner(document.getElementById('0_2'),
        document.getElementById('1_1'),
        document.getElementById('2_0'));
}


function restartBoard(){  
     let square = document.querySelectorAll('div.square')
     let arr = [...square];

    for(let i=0; i<arr.length; i++){
         if(arr[i].innerText !== ''){
            arr[i].innerText = ''
            arr[i].style.backgroundColor='white';
        }
    }
        won= false;
        document.getElementById('winner').innerText=''
        currentPlayer = player.player1.piece
           
}


function checkWinner(first, second, third){
    if(first.innerText!='' && first.innerText == second.innerText && first.innerText == third.innerText){
       first.style.backgroundColor=' #905ec0'
       first.style.color ='white'
       second.style.backgroundColor=' #905ec0'
       second.style.color ='white'
       third.style.backgroundColor=' #905ec0'
       third.style.color ='white'

    const winner = first.innerText;
      Object.values(player).map(el=>{
            Object.values(el).map(i =>{
               if( i===winner) {
                document.getElementById('winner').innerHTML=`The winner is:  ${el.piece} ${el.name.toUpperCase()}`
                el.wins +=1
                console.log(el.wins)
                document.getElementById('wins2').innerHTML = `WINS: ${player.player2.wins}`;
                document.getElementById('wins1').innerHTML = `WINS: ${player.player1.wins}`;
                won = true;   
            
               } 
            })
        })  
        
    }  else {
        let squares = document.querySelectorAll('div.square');
        let arr = [...squares];

        if( ((arr.every(el => el.innerText !== '')) === true) && won!==true ){
         
            document.getElementById('winner').innerHTML=`It's a Tie`    

        }
      
    }
   
}
    