
let reels = [
  {
    "videoUrl": "1.mp4",
    "dp": "image/1.jpg",
    "name": "Shuvodip Datta",
    "caption": "Enjoying the beautiful sunset at the beach 🌅",
    "likeCount": 1240,
    "commentCount": 85,
    "shareCount": 32,
    "isLiked": false,
    "isFollowed": false
  },
  {
    "videoUrl": "2.mp4",
    "dp": "image/2.jpg",
    "name": "Arnob Kundu",
    "caption": "Trying the best street food in the city 🍜",
    "likeCount": 980,
    "commentCount": 64,
    "shareCount": 21,
    "isLiked": false,
    "isFollowed": false
  },
  {
    "videoUrl": "3.mp4",
    "dp": "image/3.jpg",
    "name": "Nafisa Islam Hride",
    "caption": "No excuses. Just results 💪",
    "likeCount": 2100,
    "commentCount": 140,
    "shareCount": 75,
    "isLiked": false,
    "isFollowed": false
  },
  {
    "videoUrl": "4.mp4",
    "dp": "image/4.jpg",
    "name": "Pronab Raju",
    "caption": "Exploring the mountains and fresh air 🏔️",
    "likeCount": 1675,
    "commentCount": 92,
    "shareCount": 44,
    "isLiked": false,
    "isFollowed": false
  },
  {
    "videoUrl": "5.mp4",
    "dp": "image/5.jpg",
    "name": "Rafiul Islam Nayan",
    "caption": "My cat doing the funniest thing ever 🐱",
    "likeCount": 3050,
    "commentCount": 210,
    "shareCount": 120,
    "isLiked": false,
    "isFollowed": false
  }]
let allreel = document.querySelector('#all-reel');
function reelp(){
    let sum = '';
    reels.forEach(function(val,idx){
        sum = sum + `<div class="reel">
                <video autoplay loop muted src="./videos/${val.videoUrl}"></video>
                <div class="user-sec">
                    <div class="user-id">
                        <img src="${val.dp}" alt="">
                        <h4>${val.name}</h4>
                        <button class='follow-btn' id = '${idx}'>${val.isFollowed ?'Following':"Follow"}</button>
                    </div>
                    <div class="user-cap">
                        <p>${val.caption}</p>
                    </div>
                </div>
                <div class="react-sec">
                    <div class="love react">
                        <div id= '${idx}' class="love">${val.isLiked ?'<i class="ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</div>
                        <h5 class="loveNo">${val.likeCount}</h5>
                    </div>
                    <div class="comment react">
                        <div id= '${idx}' class="comment"><i class="ri-chat-3-line"></i></div>
                        <h5 class="commentNo">${val.commentCount}</h5>
                    </div>
                    <div class="share react">
                        <div id= '${idx}' class="share"><i class="ri-send-ins-line"></i></div>
                        <h5 class="shareNo">${val.shareCount}</h5>
                    </div>
                </div>
            </div>`
    })
    allreel.innerHTML = sum;
}

reelp();

allreel.addEventListener('click', function(e){

    let loveBtn = e.target.closest(".love");
    let followBtn = e.target.closest(".follow-btn");

    if(loveBtn){
        let idx = loveBtn.id;

        reels[idx].isLiked = !reels[idx].isLiked;

        if(reels[idx].isLiked){
            reels[idx].likeCount++;
            loveBtn.innerHTML = '<i class="ri-heart-3-fill"></i>';
        }else{
            reels[idx].likeCount--;
            loveBtn.innerHTML = '<i class="ri-heart-3-line"></i>';
        }

        loveBtn.parentElement.querySelector(".loveNo").innerText = reels[idx].likeCount;
    }
    if(followBtn.innerHTML === 'Follow'){
        followBtn.innerHTML = "Following"
        reels[followBtn.id].isFollowed = true;
    }
    else{
        followBtn.innerHTML = "Follow"
        reels[followBtn.id].isFollowed = false;
    }

})
