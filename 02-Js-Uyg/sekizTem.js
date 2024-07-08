const jsonURL = "https://jsonplaceholder.typicode.com/posts";
const jsonURL2 = "https://jsonplaceholder.typicode.com/posts/3";

// get request addEventListener

// const getRequest = (url) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url);
//   xhr.addEventListener("readystatechange", () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         const response = JSON.parse(xhr.responseText);
//         console.log(response);
//       } else {
//         console.log(`${xhr.status} - Couldn't fetch the data`);
//       }
//     }
//   });
//   xhr.send();
// };

// getRequest(jsonURL);


// get request onreadystatechange


////////// // GET - POST - PUT - PATCH - DELETE

//GET

// const getReq = (url) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open("GET", url)
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//               const response = JSON.parse(xhr.responseText);
//               console.log(response);
//             } else {
//               console.log(`${xhr.status} - Couldn't fetch the data`);
//             }
//           }
//     }
//     xhr.send()
// }

// getReq(jsonURL)


//POST



const postReq = (url, data) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 201) {
                const response = JSON.parse(xhr.responseText);
                console.log(response);
            } else {
                console.log(`${xhr.status} - Couldn't post the data`);
            }
        }
    };
    xhr.send(JSON.stringify(data));
};

const postData ={
    tittle: 'asd',
    body: 'qwe',
    userId:2
}
// const postData = { name: "Kerem", age: 25 };
postReq(jsonURL, postData);


//PUT

const putData ={
    tittle: 'tyu',
    body: 'hjk',
    userId:3
}

const putReq = (url, data) => {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                console.log(response);
            } else {
                console.log(`${xhr.status} - Couldn't put the data`);
            }
        }
    };
    xhr.send(JSON.stringify(data));
};


putReq(`${jsonURL}/7`, putData);


//PATCH

const patchData ={
    title: 'patch',
    body:'patchhh'
}

const patchReq = (url, data) => {
    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                console.log(response);
            } else {
                console.log(`${xhr.status} - Couldn't patch the data`);
            }
        }
    };
    xhr.send(JSON.stringify(data));
};


patchReq(`${jsonURL}/8`, patchData);


// DELETE

const deleteReq = (url) => {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", url);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log("Deleted successfully");
            } else {
                console.log(`${xhr.status} - Couldn't delete the data`);
            }
        }
    };
    xhr.send();
};

deleteReq(`${jsonURL}/2`);

