// let box = document.getElementById('gol')

// let btn = document.getElementById('b1');
// function rgb(){
//     return Math.floor(Math.random()*256);
// }

// btn.addEventListener('mousemove',function(){
//     box.style.backgroundColor = `rgb(${rgb()},${rgb()},${rgb()})`
//     box.style.border = `1px solid rgb(${rgb()},${rgb()},${rgb()})`
// })



let arr = [{
    team :'Sanjay',
    p:'#ff0101ff',
    s:'#ff010119'
},{
    team :'Rinki',
    p:'#00ff6aff',
    s:'#00ff6a2a'
},{
    team :'Ramji',
    p:'#5100ffff',
    s:'#5100ff1b'
},{
    team :'Krishna',
    p:'#0088ffff',
    s:'#0088ff1e'
},{
    team :'Mohan',
    p:'#ff00b7ff',
    s:'#ff00b71f'
}]

let h1 = document.querySelectorAll('h1')


// h1[1].style.fontSize = '60px'
// h1[1].style.color = '#19e56eff'
// h1[1].style.backgroundColor = '#35d2a334'
// h1[1].style.borderRadius = '10px'
// h1[1].style.padding = '15px'


Object.assign(h1[1].style, {
  fontSize: "60px",
  color: "#19e56eff",
  backgroundColor: "#35d2a334",
  borderRadius: "10px",
  padding: "15px"
});


h1[0].style.color = '#ffdd00ff'
h1[0].style.fontSize = '50px'



let btn = document.querySelector('button');


// btn.style.fontSize = '25px'
// btn.style.borderRadius = '60px'
// btn.style.color = '#f56308ff'
// btn.style.backgroundColor = '#ffffffff'
// btn.style.borderColor = '#f56308ff'
// btn.style.padding = '15px'
// btn.style.fontWeight = '700';


Object.assign(btn.style, {
  fontSize: "25px",
  borderRadius: "60px",
  color: "#f56308ff",
  backgroundColor: "#ffffffff",
  borderColor: "#f56308ff",
  padding: "15px",
  fontWeight: "700"
});


btn.addEventListener('click',function(){
    let num = Math.floor(Math.random()*arr.length)
    let monitor = arr[num]
    
    h1[1].innerHTML = monitor.team
    h1[1].style.color = monitor.p
    h1[1].style.backgroundColor = monitor.s
})

btn.addEventListener('mousedown',function(){
    btn.style.backgroundColor = '#eb5002ff'
    btn.style.color = '#f7f7f7ff'

})

btn.addEventListener('mouseup',function(){
   btn.style.color = '#f56308ff'
   btn.style.backgroundColor = '#f563083f'
   btn.style.borderColor = '#f56308ff'
})

