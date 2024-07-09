// Aşağıda tarifinden anlayacağınız istekleri https://jsonplaceholder.typicode.com/ URL'ine atın. her bir isteği 1 kere then, 1 kere de async/await yöntemi ile atın. isteklerinizi fonksiyon içerisinde tanımlayın.

//then ileeeeeeeeeeee

function fetchDataWithThen() {
    // G
    fetch('https://jsonplaceholder.typicode.com/posts/1') //url ye get isteğini yapıyo
      .then(response => response.json()) //jsona dondurdu
      .then(data => console.log('GETTTTT:', data)) //veriyi consola yazdırdı
      .catch(error => console.error('Error with GET:', error)); // hatayı yakalayı yazdırmak ıcın
    
    // P
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8', // İstekler (baslıklar,json)
      },
      body: JSON.stringify({ //stringdy metodu ile diziye cevirdikten sonra jsona dönüştürüyo
        title: 'kerem',
        body: 'asd.kerem.asd',
        userId: 7,
      }),
    })
    .then(response => response.json()) //cevapı jsona a donsutuuryor
    .then(data => console.log('POSTTTT:', data))
    .catch(error => console.error('Error with POST:', error));
  }

  fetchDataWithThen();

  //async ileeeeeeeeeeeeeeeeeeeeeeeeeeee

  async function fetchDataWithAsyncAwait() {
    try {
      // G
      let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      let data = await response.json();
      console.log('GET async/await:', data);
    } catch (error) {
      console.error('Error with GET:', error);
    }
  
    try {
      // P
      let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          title: 'erdem',
          body: 'asd.erdem.asd',
          userId: 2,
        }),
      });
      let data = await response.json();
      console.log('POST async/await:', data);
    } catch (error) {
      console.error('Error with POST:', error);
    }
  }

  fetchDataWithAsyncAwait();
  
  
//getCommentById, getAllComments, postComment, deleteComment, updateCommentPatch, updateCommentPut


//then ileeeeeeeeeeeeeee

// function getCommentByIdWithThen(id) {
//     fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
//       .then(response => response.json())
//       .then(data => console.log('GET Comment by ID with then:', data))
//       .catch(error => console.error('Error with GET Comment by ID:', error));
//   }

//   getCommentByIdWithThen(1);
  
//   function getAllCommentsWithThen() {
//     fetch('https://jsonplaceholder.typicode.com/comments')
//       .then(response => response.json())
//       .then(data => console.log('GET All Comments with then:', data))
//       .catch(error => console.error('Error with GET All Comments:', error));
//   }

//   getAllCommentsWithThen();
  
//   function postCommentWithThen(comment) {
//     fetch('https://jsonplaceholder.typicode.com/comments', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//       body: JSON.stringify(comment),
//     })
//       .then(response => response.json())
//       .then(data => console.log('POST Comment with then:', data))
//       .catch(error => console.error('Error with POST Comment:', error));
//   }

//   postCommentWithThen({ postId: 1, name: 'foo', email: 'bar@example.com', body: 'baz' });
  
//   function deleteCommentWithThen(id) {
//     fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
//       method: 'DELETE',
//     })
//       .then(response => {
//         if (response.ok) {
//           console.log('DELETE Comment with then: Success');
//         } else {
//           console.error('Error with DELETE Comment:', response.statusText);
//         }
//       })
//       .catch(error => console.error('Error with DELETE Comment:', error));
//   }

//   deleteCommentWithThen(1);
  
//   function updateCommentPatchWithThen(id, partialComment) {
//     fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//       body: JSON.stringify(partialComment),
//     })
//       .then(response => response.json())
//       .then(data => console.log('PATCH Comment with then:', data))
//       .catch(error => console.error('Error with PATCH Comment:', error));
//   }

//   updateCommentPatchWithThen(1, { body: 'updated body' });
  
//   function updateCommentPutWithThen(id, updatedComment) {
//     fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//       body: JSON.stringify(updatedComment),
//     })
//       .then(response => response.json())
//       .then(data => console.log('PUT Comment with then:', data))
//       .catch(error => console.error('Error with PUT Comment:', error));
//   }

//   updateCommentPutWithThen(1, { postId: 1, name: 'foo', email: 'bar@example.com', body: 'updated body' });

  //async ileeeeeeeeeeeeeeeeeeeeeeeeee

//   async function getCommentByIdWithAsyncAwait(id) {
//     try {
//       let response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
//       let data = await response.json();
//       console.log('GET Comment by ID with async/await:', data);
//     } catch (error) {
//       console.error('Error with GET Comment by ID:', error);
//     }
//   }

//   getCommentByIdWithAsyncAwait(1);

  
//   async function getAllCommentsWithAsyncAwait() {
//     try {
//       let response = await fetch('https://jsonplaceholder.typicode.com/comments');
//       let data = await response.json();
//       console.log('GET All Comments with async/await:', data);
//     } catch (error) {
//       console.error('Error with GET All Comments:', error);
//     }
//   }

//   getAllCommentsWithAsyncAwait();
  
//   async function postCommentWithAsyncAwait(comment) {
//     try {
//       let response = await fetch('https://jsonplaceholder.typicode.com/comments', {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//         body: JSON.stringify(comment),
//       });
//       let data = await response.json();
//       console.log('POST Comment with async/await:', data);
//     } catch (error) {
//       console.error('Error with POST Comment:', error);
//     }
//   }

//   postCommentWithAsyncAwait({ postId: 1, name: 'foo', email: 'bar@example.com', body: 'baz' });
  
//   async function deleteCommentWithAsyncAwait(id) {
//     try {
//       let response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         console.log('DELETE Comment with async/await: Success');
//       } else {
//         console.error('Error with DELETE Comment:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error with DELETE Comment:', error);
//     }
//   }

//   deleteCommentWithAsyncAwait(1);
  
//   async function updateCommentPatchWithAsyncAwait(id, partialComment) {
//     try {
//       let response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//         body: JSON.stringify(partialComment),
//       });
//       let data = await response.json();
//       console.log('PATCH Comment with async/await:', data);
//     } catch (error) {
//       console.error('Error with PATCH Comment:', error);
//     }
//   }

//   updateCommentPatchWithAsyncAwait(1, { body: 'updated body' });
  
//   async function updateCommentPutWithAsyncAwait(id, updatedComment) {
//     try {
//       let response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//         body: JSON.stringify(updatedComment),
//       });
//       let data = await response.json();
//       console.log('PUT Comment with async/await:', data);
//     } catch (error) {
//       console.error('Error with PUT Comment:', error);
//     }
//   }

//   updateCommentPutWithAsyncAwait(1, { postId: 1, name: 'foo', email: 'bar@example.com', body: 'updated body' });
  

  