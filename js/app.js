x = document.getElementById('type1')
y = document.getElementById('type2')
z = document.getElementById('type3')

function addclass (){
  if(document.documentElement.scrollTop > 370){
    x.classList.remove('title-p')
    x.classList.add('typed-out')
  }else{
    x.classList.add('title-p')
  }
  if(document.documentElement.scrollTop > 1219){
    y.classList.remove('title-p')
    y.classList.add('typed-out')
  }else{
    y.classList.add('title-p')
  }
  if(document.documentElement.scrollTop > 2067){
    z.classList.remove('title-p')
    z.classList.add('typed-out')
  }else{
    z.classList.add('title-p')
  }

  
}

window.onscroll = function(){addclass()}
