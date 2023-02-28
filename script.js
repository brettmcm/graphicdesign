// const assets = [
//   'commander.jpg',
//   'projects-gantt.png',
//   'new-timer.gif',
//   'projects-gantt2.jpg',
//   'target-album.png',
//   'watch-cal.png',
//   'meeting-request.png',
//   'mac-settings.png'
// ];
// const div = document.getElementById('bits');

// assets.forEach(function(asset) {

//   const fileExtension = asset.split(".").pop();
//   const imageExtensions = ["jpeg", "jpg", "png", "gif"];
//   const movieExtensions = ["mp4", "mov", "flv", "avi"];

//   if (imageExtensions.includes(fileExtension)) {

//     const img = document.createElement('img');
//     img.src = `assets/${asset}`;
//     img.classList.add("bit");
//     div.appendChild(img);

//   } else if (movieExtensions.includes(fileExtension)) {

//     const vid = document.createElement('video');
//     vid.classList.add("bit");
//     vid.autoplay = "autoplay";
//     vid.muted = "muted";
//     vid.loop = "true";
//     const vidsrc = document.createElement('source');
//     vidsrc.src = `assets/${asset}`;
//     vidsrc.type = `video/mp4`;
//     div.appendChild(vid);
//     vid.appendChild(vidsrc);

//   } else {

//     const img = document.createElement('img');
//     img.src = `assets/${asset}`;
//     img.classList.add("bit");
//     div.appendChild(img);

//   }

// });

// var children = div.children;
// for(var i=0; i<children.length; i++){
//   (function () {
//     var child = children[i];
//     child.addEventListener('click', function() {
//       child.classList.toggle("preview");
//       // console.log('clicked');
//     });
//   }());
// }




window.addEventListener('scroll', function() {
  var sPos = window.scrollY;
  const header = document.getElementById('header');
  const icon = document.getElementById('heroicon');

  if (sPos > 50) {
    header.classList.add("hide");
    icon.classList.add("hide");
  } else {
    header.classList.remove("hide");
    icon.classList.remove("hide");
  }
});


const tabN = document.getElementById('ds-tab-native');
const tabW = document.getElementById('ds-tab-web');
const comp = document.getElementById('ds-comp');
const detach = document.getElementById('ds-detach');
const inserts = document.getElementById('ds-inserts');
const chartL = document.getElementById('ds-chart').children[1];
const chartD = document.getElementById('ds-chart').children[0];

tabN.addEventListener('click', function(e) {
  e.preventDefault();
  this.classList.add('active');
  tabW.classList.remove('active');
  comp.innerHTML = "100";
  detach.innerHTML = "8";
  inserts.innerHTML = "5,000";
  chartD.srcset = "assets/ds-inserts/dark/native.png";
  chartL.src = "assets/ds-inserts/light/native.png";
});

tabW.addEventListener('click', function(e) {
  e.preventDefault();
  this.classList.add('active');
  tabN.classList.remove('active');
  comp.innerHTML = "394";
  detach.innerHTML = "11";
  inserts.innerHTML = "8,302";
  chartD.srcset = "assets/ds-inserts/dark/web.png";
  chartL.src = "assets/ds-inserts/light/web.png";
});