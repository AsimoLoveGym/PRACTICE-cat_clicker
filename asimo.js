// Friends Clicker
// ************Model*************
var model = {
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
    catListView.init();
  },
  getCats: function(){
    return model.cats;
  }
};

// ************View*************

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
      this.catListElem.appendChild(elem);
    }
  }
};

octopus.init();
