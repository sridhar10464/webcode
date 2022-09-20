

// The data is displayed in console pls kindly check the output


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

   

fetchData();