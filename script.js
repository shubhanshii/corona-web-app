window.onload=function(){
    const state= document.querySelector('#state')
    const activeANI=document.querySelector('#activeANI')
    const deathANI=document.querySelector('#deathANI')
    const recoveredANI=document.querySelector('#recoveredANI')

const btn1= document.getElementById('btn1')

const fetchApi = async()=>{
   
    const response = await fetch("https://data.covid19india.org/data.json");
    
    try {
        
        const data = await response.json()
        
        console.log(data.statewise[1])
       
        
        let dataOutput = [];
    dataOutput += `<tr>${data.statewise[1].state} </tr>`;
    state.innerHTML = dataOutput;

let activeAn =[];
    activeAn += `<tr>${data.statewise[1].active} </tr>`;
    activeANI.innerHTML = activeAn;

    let deathAn =[];
    deathAn += `<tr>${data.statewise[1].deaths} </tr>`;
    deathANI.innerHTML = deathAn;

    let recoverAn =[];
    recoverAn += `<tr>${data.statewise[1].recovered} </tr>`;
    recoveredANI.innerHTML = recoverAn;



    } catch (error) {
        console.log(error,'something went wrong')
    }
    //  btn1.addEventListener("click",(e)=>{
    // e.preventDefault()
    //      fetchApi()
    //  })
}

fetchApi()
}