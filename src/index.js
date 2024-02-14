document.addEventListener("DOMContentLoaded", () => {
    // Challenge 1: Fetch dog images and add them to the DOM
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImagesContainer = document.getElementById("dog-images");
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const img = document.createElement("img");
          img.src = imageUrl;
          dogImagesContainer.appendChild(img);
        });
      });
  
    // Challenge 2: Fetch dog breeds and add them to the DOM
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedListContainer = document.getElementById("breed-list");
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const li = document.createElement("li");
          li.textContent = breed;
          breedListContainer.appendChild(li);
        });
      });
  
    // Challenge 3: Change font color of <li> on click
    breedListContainer.addEventListener("click", event => {
      if (event.target.tagName === "LI") {
        event.target.style.color = "blue"; // Change color to blue
      }
    });
  
    // Challenge 4: Filter breeds based on dropdown selection
    const filterDropdown = document.getElementById("filter-dropdown");
    filterDropdown.addEventListener("change", event => {
      const selectedLetter = event.target.value.toLowerCase();
      const breedItems = breedListContainer.querySelectorAll("li");
      breedItems.forEach(item => {
        if (item.textContent.toLowerCase().startsWith(selectedLetter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
  
