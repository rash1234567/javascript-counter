const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

 
  function doAnimation1(init, callback) {
    alice1.animate(aliceTumbling, aliceTiming);
    const result = init + 1000
    callback(result);
  };
  
  
  function doAnimation2(init, callback) {
    alice2.animate(aliceTumbling, aliceTiming);
    const result = init + 2 
    callback(result);
  };

  
  function doAnimation3(init, callback) {
    alice3.animate(aliceTumbling, aliceTiming);
    const result = init + 3
    callback(result);
  };

  
  
  
function animateAll () {
    doAnimation1(0, (result1) =>{
       doAnimation2(result1, (result2)=>{
        doAnimation3(result2, (result3)=>{
        })
       })
    })
}


animateAll();
