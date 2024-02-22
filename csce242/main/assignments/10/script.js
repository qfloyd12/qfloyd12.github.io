const advertisements = [
    "The variety of these images is outstanding",
    "Each image has been editted by our superior Staff",
    "Our image collection showcases unparalleled diversity",
    "Meticulous attention to detail is evident in every edit",
    "Our curated selection guarantees visual excellence"
];

let currentAdIndex = 0;
const banner = document.getElementById('banner');


function changeAdvertisement() {
    banner.textContent = advertisements[currentAdIndex];
    currentAdIndex = (currentAdIndex + 1) % advertisements.length;
}


changeAdvertisement();


setInterval(changeAdvertisement, 2000);

const imagesAndAttributions = [
    {
        src: "images/snow.jpg",
        attribution: "<a href='https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'>Image by wirestock</a> on Freepik"
    },
    {
        src: "images/small-house.jpg",
        attribution: "<a href='https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'>Image by wirestock</a> on Freepik"
    },
    {
        src: "images/mountain-lake.jpg",
        attribution: "<a href='https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7'>Image by vecstock</a> on Freepik"
    },
    {
        src: "images/golden.jpg",
        attribution: "<a href='https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'>Image by wirestock</a> on Freepik"
    },
    {
        src: "images/garden.jpg",
        attribution: "<a href='https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'>Image by wirestock</a> on Freepik"
    }
];

const slideshow = document.getElementById('slideshow');

imagesAndAttributions.forEach(imageAndAttribution => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = imageAndAttribution.src;
    const p = document.createElement('p');
    p.innerHTML = imageAndAttribution.attribution;
    div.appendChild(img);
    div.appendChild(p);
    slideshow.appendChild(div);
});


