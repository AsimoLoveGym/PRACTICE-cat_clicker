// Friends Clicker
// 这个project不简单的，涉及到使用闭包来实现不同作用域下面的数据传递
// ************Model*************
var model = {
  // currentCat是作为一种buffer一样，或者intermediate一样的存在，传递转用物质。
  currentCat: null,
  cats: [{
    clickCount: 0,
    name: "Ross",
    imgSrc: "img/Ross.jpg"
  },
  {
    clickCount: 0,
    name: "Chandler",
    imgSrc: "img/Chandler.jpg"
  },
  {
    clickCount: 0,
    name: "Joey",
    imgSrc: "img/Joey.jpg"
  },
  {
    clickCount: 0,
    name: "Phoebe",
    imgSrc: "img/Phoebe.jpg"
  },
  {
    clickCount: 0,
    name: "Monica",
    imgSrc: "img/Monica.jpg"
  },
  {
    clickCount: 0,
    name: "Rachel",
    imgSrc: "img/Rachel.jpg"
  }
  ]
};

// ************Octopus*************

var octopus ={
  init: function(){
    // need to init the value for currentCat, unlease cant set name, clickcout, and imgSrc
    model.currentCat = model.cats[0];

    catListView.init();
    catView.init();
  },
  getCats: function(){
    return model.cats;
  },
  setCurrentCat: function(cat){
    model.currentCat = cat;
  },
  incrementCounter: function(){
    // console.log("increment works");
    model.currentCat.clickCount++;
    catView.render();
  },
  getCurrentCat: function(){
    return model.currentCat;
  }
};

// ************View*************
var catView = {
  init: function(){
    this.catElem = document.getElementById("cat");
    this.catNameElem = document.getElementById("cat-name");
    this.countElem = document.getElementById("cat-count");
    this.catImageElem = document.getElementById("cat-img");

    this.catImageElem.addEventListener("click",function(){
      octopus.incrementCounter();
    });

    this.render();
  },
  render: function(){
    var currentCat = octopus.getCurrentCat();
    // console.log(currentCat);
    // console.log(currentCat.name);
    this.catNameElem.textContent = currentCat.name;
    this.countElem.textContent = currentCat.clickCount;
    this.catImageElem.src = currentCat.imgSrc;
  }
};


var catListView = {
  init: function(){
    this.catListElem = document.getElementById("cat-list");
    this.render();
  },
  render: function(){
    var cat, elem, i;
    var cats = octopus.getCats();
    for(i = 0; i < cats.length; i++){
      // document.getElementById("cat-name").textContent = cats[i].name;
      // document.getElementById("cat-count").textContent = cats[i].clickCount;
      // document.getElementById("cat-img").src = cats[i].imgSrc;
      // var catName = cats[i].name;

      // 这一步对于闭包很关键，自己还是没有太想明白
      cat = cats[i];
      elem = document.createElement('li');
      // var catNameList = document.createElement('li');
      elem.textContent = cat.name;

      // 闭包的关键出现在了这里！！
      elem.addEventListener("click",(function(catCopy) {
        return function(){
          octopus.setCurrentCat(catCopy);
          catView.render();
        };
      })(cat));

      this.catListElem.appendChild(elem);
    }
  }
};

octopus.init();
