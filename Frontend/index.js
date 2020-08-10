// Code your solution here

fetch('http://localhost:3000/shoes')
 .then(data => data.json())
 .then(shoeArray => {

    //  console.log(shoeArray)

     renderShoes(shoeArray)

 })


let renderShoes = (shoeArray) => {

       shoeArray.forEach(shoe => {

         let shoeList = document.querySelector(".list-group")
          let h4  = document.createElement("h4")
          
              h4.innerHTML=h4.classList.add('list-group-item');
               h4.innerText = `${shoe.name} ${shoe.image} `

                  shoeList.appendChild(h4)
             debugger;

           shoe.addEventListener('click', (event)=> {

                 let shoeButton = document.querySelector("#shoe-name")
                     const updatedData = shoeArray
                   fetch(`http://localhost:3000/shoes/${shoes.id}`, {
                     method: "post",
                     headers: {
                      'Accept' : 'application/json',
                      'Content-Type': 'application/json' },

                      body: JSON.stringify(updatedData){
                         
                        name: `${shoe.name}`,
                        price: `${shoe.price}`,

                        company: `${shoe.company}`,
                        description: `${shoe.description}`

                      })


                     })

                     .then(function(updatedData) {

                        console.log('request succe')
                     })
 
                        





                   })



           };
           








       })
      

}