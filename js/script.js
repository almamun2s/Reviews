// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'img/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'img/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'img/person-3.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'img/person-4.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];






//  Selecting all items
const img       = document.getElementById('rv-person-img');
const author    = document.getElementById('rv-author');
const job       = document.getElementById('rv-job');
const info      = document.getElementById('rv-info');

const prevBtn   = document.querySelector('.rv-prev');
const nextBtn   = document.querySelector('.rv-next');
const randomBtn = document.querySelector('.rv-random-btn');

// setting the starting item
let currentItem = 0;

// loading initial item
window.addEventListener('DOMContentLoaded', function(){
    // console.log('Hello');
    showPerson(currentItem);
});



function showPerson(person) {
    const item = reviews[person];

    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


// Showing next item 
nextBtn.addEventListener('click', function(){
    // alert('Hello');
    currentItem++;
    if( currentItem == reviews.length){
        currentItem = 0;
    }
    // console.log(currentItem);
    showPerson(currentItem);
});
// Showing next item 
prevBtn.addEventListener('click', function(){
    // alert('Hello');
    currentItem--;
    if( currentItem < 0 ){
        currentItem = reviews.length -1;
    }
    // console.log(currentItem);
    showPerson(currentItem);
});

// Show random item
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor( Math.random() * reviews.length );
    // console.log(currentItem);
    showPerson(currentItem);
})