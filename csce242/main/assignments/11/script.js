class Tree {
    constructor(title, imageFileName, type, growthRate, height, lifespan, habitat, description) {
      this.title = title;
      this.imageFileName = imageFileName;
      this.type = type;
      this.growthRate = growthRate;
      this.height = height;
      this.lifespan = lifespan;
      this.habitat = habitat;
      this.description = description;
    }
  
    getSection() {
      return `
        <div class="tree-item" onclick="displayModal('${this.title}')">
            <h3>${this.title}</h3>
          <img src="images/${this.imageFileName}" alt="${this.title}">
        
        </div>
      `;
    }
  
    getModalContent() {
      return `
        <div class="modal-body">
          <div class="modal-body-text">
            <h3>${this.title}</h3>
            <p><strong>Type:</strong> ${this.type}</p>
            <p><strong>Growth Rate:</strong> ${this.growthRate}</p>
            <p><strong>Height:</strong> ${this.height}</p>
            <p><strong>Lifespan:</strong> ${this.lifespan} years</p>
            <p><strong>Habitat:</strong> ${this.habitat}</p>
            <p>${this.description}</p>
          </div>
          <div class="modal-body-image">
            <img src="images/${this.imageFileName}" alt="${this.title}">
          </div>
        </div>
      `;
    }
  }
  
  
  const trees = [
    new Tree("Bald Cypress", "download.jpeg", "Deciduous", "Fast", "100-120ft", "600 years", "Wet, swampy areas", "Known for its distinct knee-like roots."),
    new Tree("Eastern Redbud", "images (1).jpeg", "Deciduous", "Fast", "100-120ft", "600 years", "Wet, swampy areas", "Known for its distinct knee-like roots."),
    new Tree("Loblolly Pine", "images (2).jpeg", "Deciduous", "Fast", "100-120ft", "600 years", "Wet, swampy areas", "Known for its distinct knee-like roots."),
    new Tree("Southern Magonila", "images.jpeg", "Deciduous", "Fast", "100-120ft", "600 years", "Wet, swampy areas", "Known for its distinct knee-like roots.")

  ];
  
  
  function displayModal(title) {
    const tree = trees.find(t => t.title === title);
    document.getElementById('treeModal').style.display = 'block';
    document.getElementById('modal-body').innerHTML = tree.getModalContent();
  }

  function closeModal() {
    document.getElementById('treeModal').style.display = 'none';
  }
  

  document.querySelector('.close').addEventListener('click', closeModal);
  
 
  window.onclick = function(event) {
    const modal = document.getElementById('treeModal');
    if (event.target === modal) {
      closeModal();
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('tree-gallery');
    trees.forEach(tree => {
      gallery.innerHTML += tree.getSection();
    });
  });
  

  