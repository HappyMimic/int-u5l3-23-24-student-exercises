let body = document.querySelector("body");

// Array of image links
let photos = ["https://preview.redd.it/if-the-show-is-successful-what-would-be-good-seasonal-pacing-v0-pwepl905kdlb1.jpg?width=640&crop=smart&auto=webp&s=1ccf2f03a4a9cee216bfdf27fdfac95d28392fd9",
    "https://i1.wp.com/www.oxfordstudent.com/wp-content/uploads/2016/11/black-mirror-season-3-poster.png?fit=1080%2C1080&ssl=1",
    "https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png",
    "https://assets.fxnetworks.com/cms-next/production/67a0aace-e484-4032-885b-c6f6a405c7eb.jpg"
];


// 1. Push an image link of one of your favorite shows to the photos array.
photos.push("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.colliderimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2025%2F09%2Febt_s3_pr_vertical_090525_f2.jpg%3Fq%3D49%26fit%3Dcrop%26w%3D750%26dpr%3D2&f=1&nofb=1&ipt=24faa20302002c26de61e2a84e985c8c886a41ec5b66df0fdfb8f33477c0070c","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BYmExMDQzODgtNTA4OC00NTE1LWI2MTktNTM1MzA5NWY0YzQ4XkEyXkFqcGc%40._V1_.jpg&f=1&nofb=1&ipt=5dcb9db86110fa024c5c7c4de5452418765342a03c84b3ccec7c93b827484682");
//  - To find the link, right-click an image and choose 'Copy Image Address'



// HTML selectors
let show1 = document.querySelector(".show-1");
let show2 = document.querySelector(".show-2");
let show3 = document.querySelector(".show-3");
let show4 = document.querySelector(".show-4");
let show5 = document.querySelector(".show-5");
let show6 = document.querySelector(".show-6");


show1.src = photos[0];
show2.src = photos[1];
show3.src = photos[2];
show4.src = photos[3];
show5.src = photos[4];
show6.src = photos[5];
// 2. Update the src for each show# variable - use the line above as a reference.
