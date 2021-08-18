const get_residents = document.querySelector('button')

console.log(get_residents)
function clickButton() {
//    console.log('click')
    axios
        .get('https://swapi.dev/api/planets/2/')
        .then((res) =>{
            let Residents = res.data.residents
            console.log(Residents)
            for(let i = 0; i< Residents.length; i++)
                axios.get(Residents[i]).then((res)=>{
                    console.log(res.data)
                  let h2 = document.createElement("h2")  
                  h2.textContent = res.data.name
                  document.body.appendChild(h2)
                })    
        })
}

get_residents.addEventListener('click', clickButton)
