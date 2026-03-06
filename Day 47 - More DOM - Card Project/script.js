const people = [
  {
    name: "Alexa Raine",
    role: "Creative Director",
    tag: "Sketch",
    cover: "https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg",
    profile: "https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg",
    rating: 5.0,
    salary: 150,
    time: 24
  },
  {
    name: "Daniel Carter",
    role: "UI/UX Designer",
    tag: "Figma",
    cover: "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg",
    profile: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 4.8,
    salary: 120,
    time: 18
  },
  {
    name: "Emma Collins",
    role: "Graphic Designer",
    tag: "Photoshop",
    cover: "https://images.pexels.com/photos/1799901/pexels-photo-1799901.jpeg",
    profile: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    rating: 4.6,
    salary: 95,
    time: 12
  },
  {
    name: "Noah Bennett",
    role: "Backend Developer",
    tag: "Node",
    cover: "https://images.pexels.com/photos/3045828/pexels-photo-3045828.jpeg",
    profile: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    rating: 4.9,
    salary: 160,
    time: 26
  },
  {
    name: "Olivia Hart",
    role: "Marketing Strategist",
    tag: "SEO",
    cover: "https://images.pexels.com/photos/3527778/pexels-photo-3527778.jpeg",
    profile: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    rating: 4.5,
    salary: 105,
    time: 14
  },
  {
    name: "Ava Mitchell",
    role: "Brand Designer",
    tag: "Brand",
    cover: "https://images.pexels.com/photos/2887710/pexels-photo-2887710.jpeg",
    profile: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    rating: 4.7,
    salary: 115,
    time: 17
  },
  {
    name: "Ethan Walker",
    role: "Full Stack Developer",
    tag: "React",
    cover: "https://images.pexels.com/photos/2911519/pexels-photo-2911519.jpeg",
    profile: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    rating: 5.0,
    salary: 170,
    time: 28
  }
];

let sum = '';
people.forEach(function(value){
    sum = sum + `<div id="card">
            <div id="cover">
                <img class="cover" src="${value.cover}" alt="" srcset="">
                <img class='id same' src="${value.profile}" alt="">
                <button class="same" >${value.tag}</button>          
            </div>   
          
            <div id="identity-sec">
                <div id="name">
                    <h2>${value.name}</h2>
                    <h3>${value.role}</h3>
                </div>
                <div id="save-ico">
                    <i class="ri-bookmark-2-fill save-ico"></i>
                </div>

            </div>
            <div id="metrics">
                <div id = "rating" class="rating">
                    <i class="ri-star-fill"></i>
                    <div id="text">
                        <h4>${value.rating}</h4>
                        <p>Rating</p>
                    </div>
                </div>
                <div id = "salary"  class="rating">
                    <i class="ri-flag-fill"></i>
                    <div id="text">
                        <h4>${value.salary}</h4>
                        <p>Hours</p>
                    </div>
                </div>
                <div id = "time"  class="rating">
                    <i class="ri-time-fill"></i>
                    <div id="text">
                        <h4>${value.time}</h4>
                        <p>Month</p>
                    </div>
                </div>
            </div>
            <div id="getintouch">
                <button>Get In Touch</button>
            </div>
        </div>`;
;});

let main = document.querySelector('main');
main.innerHTML = sum;
