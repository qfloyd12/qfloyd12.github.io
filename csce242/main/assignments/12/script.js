const getHousePlans = async () => {
    try {
      const response = await fetch("https://portiaportia.github.io/json/house-plans.json");
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };
  
  const showHousePlans = async () => {
    const housePlansData = await getHousePlans();
  
    if (housePlansData) {
      const allHousesSection = document.getElementById("houses-section");
  
      const farmhouse = housePlansData.find(house => house.name === 'Farmhouse');
  
      if (farmhouse) {
        const houseSection = document.createElement("div");
        houseSection.classList.add("house");
        allHousesSection.appendChild(houseSection);
  
        const h1 = document.createElement("h1");
        h1.textContent = farmhouse.name;
        houseSection.appendChild(h1);
  
        const infoContainer = document.createElement("div");
        infoContainer.classList.add("info-container");
  
        const mainImg = document.createElement("img");
        mainImg.src = `https://portiaportia.github.io/json/images/house-plans/${farmhouse.main_image}`;
        mainImg.alt = farmhouse.name;
        mainImg.classList.add("main-image");
        infoContainer.appendChild(mainImg);
  
        const houseDetails = document.createElement("div");
        houseDetails.classList.add("house-details");
  
        const sizeP = document.createElement("p");
        sizeP.textContent = `Size: ${farmhouse.size} square feet`;
        houseDetails.appendChild(sizeP);
  
        const bedroomsP = document.createElement("p");
        bedroomsP.textContent = `Bedrooms: ${farmhouse.bedrooms}`;
        houseDetails.appendChild(bedroomsP);
  
        const bathroomsP = document.createElement("p");
        bathroomsP.textContent = `Bathrooms: ${farmhouse.bathrooms}`;
        houseDetails.appendChild(bathroomsP);
  
        const featuresP = document.createElement("p");
        featuresP.textContent = `* ${farmhouse.features.join(' * ')}`;
        houseDetails.appendChild(featuresP);
  
        infoContainer.appendChild(houseDetails);
        houseSection.appendChild(infoContainer);
  
        const floorPlansSection = document.createElement("div");
        floorPlansSection.classList.add("floor-plans");
  
        farmhouse.floor_plans.forEach(plan => {
          const planContainer = document.createElement("div");
          planContainer.classList.add("plan-container");
  
          const floorPlanTitle = document.createElement("h2");
          floorPlanTitle.textContent = plan.name;
          planContainer.appendChild(floorPlanTitle);
  
          const floorPlanImg = document.createElement("img");
          floorPlanImg.src = `https://portiaportia.github.io/json/images/house-plans/${plan.image}`;
          floorPlanImg.alt = plan.name;
          planContainer.appendChild(floorPlanImg);
  
          floorPlansSection.appendChild(planContainer);
        });
  
        houseSection.appendChild(floorPlansSection);
      }
    }
  };
  
  showHousePlans();
