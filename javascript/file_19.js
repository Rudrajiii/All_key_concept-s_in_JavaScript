const FETCH_URL = 'https://jsonplaceholder.typicode.com/posts';
const xhr = new XMLHttpRequest();
// console.log(xhr);
xhr.open('GET', FETCH_URL , true);

// xhr.onreadystatechange = () => {
//     if(xhr.readyState === 4){
//         let response = xhr.response;
//         let data = JSON.parse(response);
//         console.log(data);
//     }
// }
xhr.onload = () => {
    if(xhr.status >= 200 && xhr.status < 300){
        let response = xhr.response;
        let data = JSON.parse(response);
        console.log(data);
        const xhr2 = new XMLHttpRequest();
        const id = data[3].id; 
        const FETCH_URL2 = `${FETCH_URL}/${id}`;
        console.log(FETCH_URL2);
        xhr2.open('GET', FETCH_URL2 , true);
        xhr2.onload = () =>{
            if(xhr2.status >= 200 && xhr2.status < 300){
                let response = xhr2.response; 
                let data = JSON.parse(response);
                console.log(data);
            }else{
                console.log("Error:404");
            }
        }
        xhr2.send(); 
    }else{
        console.log("Something went wrong");
    }            
}
xhr.send();
