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

function createUsers(users) {
    users.forEach ((users) => {
        const apiUrl = "https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane"
async function fetchData() {
    try {
    const response = await fetch (apiUrl);
    if (response.status === 200) {
        const data = await response.json();
        console.log(data);
    } else {
        console.log("something error occured");
    }
} catch (err) {
    console.log("something error ocured");
}
}
    })
}

fetchData();










    // function createUsers(users) {
    //     users.forEach ((users) =>{
   
    //     document.body.innerHTML += `<div class="user-container">
    //     <img class="user-pic" src="https://www.michelleandanthony.net/wp-content/uploads/2021/06/pexels-photo-4652004.jpeg"/>
    //     <div>
    //         <h2> ${users.name} </h2>
    //         <p> ${users.country_id} </p>
    //         <p> ${users.probability} </p>
    //     </div>
    // </div>`
    //     });
    // }


    // fetch("https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane")
    //     .then((data) => data.json())
    //     .then((users) => createUsers(users));

    

