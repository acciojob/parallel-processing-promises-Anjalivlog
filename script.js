//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener('click', function() {
  const promises = images.map(image => {
    return new Promise((resolve, reject) => {
      fetch(image.url)
        .then(response => {
          if (response.ok) {
            resolve(image.url);
          } else {
            reject(`Failed to load image's URL: ${image.url}`);
          }
        })
        .catch(() => {
          reject(`Failed to load image's URL: ${image.url}`);
        });
    });
  });


 Promise.all(promises)
    .then(urls => {
      urls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        output.appendChild(img);
      });
    })
    .catch(error => {
      console.error(error);
    });
});	