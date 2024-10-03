
 const apiUrl = "https://api.nekosia.cat/api/v1/images/catgirl";
 const button = document.getElementById('button')
 const image = document.getElementById('image')

 function fetchImages() {
     fetch(apiUrl)
         .then(response => {
             if (!response.ok) {
                 throw new Error('response was not ok');
             }
             return response.json();
         })
         .then(data => {

             displayImages(data);
         })
         .catch(error => {
             console.error('Error fetching images:', error);
         });
 }

 function displayImages(data) {
     const gallery = document.createElement('div');
     gallery.id = 'image';
     document.body.appendChild(gallery);
     image.src =  data.image.original.url; 
     gallery.appendChild(image);
     image.style.display = 'block'
 }
 
button.addEventListener('click', () => {
    image.src = '';
    fetchImages();
})
