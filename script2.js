const users = [
    {
      "country": [
        {
          "country_id": "AT",
          "probability": 0.064
        },
        {
          "country_id": "DE",
          "probability": 0.059
        },
        {
          "country_id": "DK",
          "probability": 0.058
        },
        {
          "country_id": "IE",
          "probability": 0.051
        },
        {
          "country_id": "AU",
          "probability": 0.047
        }
      ],
      "name": "michael"
    },
    {
      "country": [
        {
          "country_id": "HM",
          "probability": 0.066
        },
        {
          "country_id": "BQ",
          "probability": 0.057
        },
        {
          "country_id": "MT",
          "probability": 0.045
        }
      ],
      "name": "matthew"
    },
    {
      "country": [
        {
          "country_id": "GG",
          "probability": 0.036
        },
        {
          "country_id": "JE",
          "probability": 0.035
        },
        {
          "country_id": "KE",
          "probability": 0.032
        }
      ],
      "name": "jane"
    }
  ]

  const user = [
    {
      "country": [
        {
          "country_id": "AT",
          "probability": 0.064
        },
        {
          "country_id": "DE",
          "probability": 0.059
        },
        {
          "country_id": "DK",
          "probability": 0.058
        },
        {
          "country_id": "IE",
          "probability": 0.051
        },
        {
          "country_id": "AU",
          "probability": 0.047
        }
      ],
      "name": "michael"
    },
  ]
//   function createUser (user) {
//     country.forEach((country) => {    
        document.body.innerHTML += `<div class="user-container">
        <img class="user-pic" src="https://www.michelleandanthony.net/wp-content/uploads/2021/06/pexels-photo-4652004.jpeg"/>
        <div>
            <h2> ${user.name} </h2>
            <p> ${user.country_id} </p>
            <p> ${user.probability} </p>
        </div>
    </div>`
//     })
//   }

  

//   function createUser (user) {
//     country.forEach((country) => {



// const country ={
//     flag: "https:flagcdn.com/in.svg",
//     name: "india",
//     country_ID: "In",
//     propability: 0.068
// };

// document.body.innerHTML = `<div class="Nationality">
// <img src ="${country.flag}" alt="India">
// <div class="content-Nationality">
// <h2>${country.name}</h2>
// <p><span> Name </span> michael </p>
// <p><span> country-id </span>${country.id} </p>
// <p><span> Propability </span>${country.propability} </p>
// </div>`;


// Trial-5
// const country =[
// {    
//     flag: "https:flagcdn.com/in.svg",
//     name: "Michael",
//     country_ID: "In",
//     propability: 0.068,
// },
// {
//     flag: "https:flagcdn.com/in.svg",
//     name: "",
//     country_ID: "mathew",
//     propability: 0.068,
// },
// {
//     flag: "https:flagcdn.com/in.svg",
//     name: "jane",
//     country_ID: "In",
//     propability: 0.068,
// }
// ];

// function creatCountries(country_id){
// country.forEach(country => {
//     document.body.innerHTML += `<div class="Nationality">
//     <img src ="${country.flag}" alt="Indian flag" />
//     <div class="content-Nationality">
//     <h2>${country.name.id}</h2>
//     <p><span> Name </span> ${country.name} </p>
//     <p><span> country-id </span>${country.id} </p>
//     <p><span> Propability </span>${country.propability} </p>
//     </div>
//     </div>`
// })
// }

// creatCountries(country)

// fetch("https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane")
//     .then((data) => data.json())
//     .then((country_id) => creatCountries(country_id))
//     .catch((errMsg) => console.log("An error occured: ", errMsg))



/* <div class="Nationality">
        <img src ="https://flagcdn.com/in.svg" alt="India">
        <div class="content-Nationality">
        <h2> Name </h2>
        <p><span> Name </span> sridhar </p>
        <p><span> country-id </span> IN </p>
        <p><span> Propability </span> 0.068 </p>
    </div> */


// Trial-4
// const apiUrl = "https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane"
// async function fetchData() {
//     try {
//     const response = await fetch (apiUrl);
//     if (response.status === 200) {
//         const data = await response.json();
//         console.log(data);
//     } else {
//         console.log("something error occured");
//     }
// } catch (err) {
//     console.log("something error ocured");

// }

// }
   

// fetchData();






// Trial-3
// const promise = fetch(apiUrl, {
//     method: "GET",
// });

// promise
// .then(function(response){
//     if (response.status === 200)
//     return response.json();
//     else throw new Error("something failed...");
//     })
//     .then(function (data){
//         console.log(data);
//         console.log(data[0]);

//     })

    // .catch(fuction (err) {
    //     console.log(err.message);
    // });








// Trial-2
// async function getUserNationality() {
//     const username = document.getElementById("usernameGet"). Value;

//     if ("username") {
//         alert("Please enter a username.");
//         return;
//     }

//     const endpoint = await fetch(`https://api.nationalize.io?name=michael`);
//     endpoint. searchName.set("YOUR-NAME-HERE");
//     const response = await fetch(endpoint, {
//         headers: {
//             "Authorization": "YOUR-NAME-HERE"
//         }
//     });

//     if (response.status === 404) {
//         alert ("Entered name is not found");
//         return;

//         const data = await response.json();


//     }


    // console.log(response);



//  try{
//         let response = await fetch(`https://api.nationalize.io?name=${username}`);
//         return await response.json();
//         }catch(err){
//          console.error(err);

// }

// Trial-1
// async function loadUsers() {
//     const response = await fetch("users.json");
//     const users = await response.json();

//     return users;

//     // console.log(response);
// }

// document.addEventListener("DOMContentLoaded", async () => {
//     let users = [];
    
//     try{
//         users = await loadUsers();
//     } catch (err) {
//         console.log("Error");
//         console.log(err);
//     }

//     console.log(users);

// }) ;



