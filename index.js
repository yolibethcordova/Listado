 // Lista de publicaciones
 let posts = [];

 // Función para agregar una publicación
 function addPost(name, link) {
     posts.push({ name, link });
     displayPosts();
 }

 // Función para modificar una publicación
 function modifyPost(index, newName, newLink) {
     if (index >= 0 && index < posts.length) {
         posts[index] = { name: newName, link: newLink };
         displayPosts();
     }
 }

 // Función para borrar una publicación
 function deletePost(index) {
     if (index >= 0 && index < posts.length) {
         posts.splice(index, 1);
         displayPosts();
     }
 }

 // Función para borrar todas las publicaciones
 function deleteAllPosts() {
     posts = [];
     displayPosts();
 }

 // Función para mostrar las publicaciones en formato JSON
 function displayPosts() {
     const sharedPost = document.getElementById('sharedPost');
     sharedPost.innerHTML = '';
     posts.forEach(post => {
         const postDiv = document.createElement('div');
         postDiv.className = 'post';
         postDiv.innerHTML = `<pre>${JSON.stringify(post, null, 2)}</pre>`;
         sharedPost.appendChild(postDiv);
     });
 }

 // Agregar 10 canciones de muestra
 const sampleSongs = [
     { name: 'Song 1', link: 'http://www.youtube.com/@YoAnnetteMoreno/1' },
     { name: 'Song 2', link: 'http://www.youtube.com/@YoAnnetteMoreno/2' },
     { name: 'Song 3', link: 'http://www.youtube.com/@YoAnnetteMoreno/3' },
     { name: 'Song 4', link: 'http://www.youtube.com/@YoAnnetteMoreno/4' },
     { name: 'Song 5', link: 'http://www.youtube.com/@YoAnnetteMoreno/5' },
     { name: 'Song 6', link: 'http://www.youtube.com/@YoAnnetteMoreno/6' },
     { name: 'Song 7', link: 'http://www.youtube.com/@YoAnnetteMoreno/7' },
     { name: 'Song 8', link: 'http://www.youtube.com/@YoAnnetteMoreno/8' },
     { name: 'Song 9', link: 'http://www.youtube.com/@YoAnnetteMoreno/9' },
     { name: 'Song 10', link: 'http://www.youtube.com/@YoAnnetteMoreno/10' },
 ];

 sampleSongs.forEach(song => addPost(song.name, song.link));

 // Manejador de eventos para agregar una nueva publicación desde el formulario
 document.getElementById('postingform').addEventListener('submit', function (e) {
     e.preventDefault();
     const name = document.getElementById('name').value;
     const message = document.getElementById('message').value;
     if (name && message) {
         addPost(name, message);
         document.getElementById('success-message').innerText = 'Post added successfully!';
         setTimeout(() => {
             document.getElementById('success-message').innerText = '';
         }, 2000);
     }
 });