const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      description: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "black-tea",
      category: "beverages",
      price: 8.99,
      img: "./images/black-tea.jpg",
      description: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 3,
      title: "multi-strawberry cake",
      category: "dessert",
      price: 15.45,
      img: "./images/item-11.jfif",
      description: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 4,
      title: "diner double",
      category: "dinner",
      price: 13.99,
      img: "./images/item-2.jpeg",
      description: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 5,
      title: "black coffee",
      category: "beverages",
      price: 5.99,
      img: "./images/black-coffee.jpg",
      description: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
     {
        id: 6,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        description: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      {
        id: 7,
        title: "vanilla slice",
        category: "breakfast",
        price: 7.99,
        img: "./images/vanilla-slice.jpg",
        description: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
     
    {
      id: 8,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      description: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 9,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      description: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 10,
      title: "fruit icecream",
      category: "dessert",
      price: 8.49,
      img: "./images/fruit-icecream.jpg",
      description: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 11,
      title: "cupcake",
      category: "dessert",
      price: 5.99,
      img: "./images/cupcake.jpg",
      description: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 12,
      title: "assorted to-go",
      category: "dessert",
      price: 10.49,
      img: "./images/item-14.jfif",
      description: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 13,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      description: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 14,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      description: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 15,
      title: "choco-berry cake",
      category: "dessert",
      price: 13.49,
      img: "./images/item-12.jfif",
      description: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 16,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      description: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 17,
      title: "Saucy steak",
      category: "dinner",
      price: 16.99,
      img: "./images/item-10.jpeg",
      description: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 18,
      title: "tasty croissants",
      category: "breakfast",
      price: 14.99,
      img: "./images/item-13.jfif",
      description: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 19,
      title: "food chocolate",
      category: "dessert",
      price: 9.49,
      img: "./images/food-chocolate.jpg",
      description: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 20,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      description: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
   
  ];


  const menuWrapper = document.querySelector(".menu-wrapper");
//   console.log(menuWrapper);
const wrapper = document.querySelector(".btn-wrapper");

// load initial page content be like
  window.addEventListener('DOMContentLoaded', ()=>{
          displayMenuItems(menu);
          displayMenuButtons();
  });

//   write all page content into a function for easier reference and access
function displayMenuItems(menuContent){
    let displayContent = menuContent.map((item)=>{
        //  console.log(item);
        return ` <article class="menu-item">
        <img src=${item.img} alt="${item.title}" class="photo">
        <div class="menu-info">
            <header>
               <h4 class="heading">${item.title}</h4>
               <h3 class="price">$${item.price}</h3>
            </header>
          <p class="menu-text">
             ${item.description}
          </p>
        </div>
    </article>
    `;
  });
 displayContent = displayContent.join(" ");
 menuWrapper.innerHTML = displayContent;
}

// write the dynamic filter of buttons into a function for easy display and debugging
 function displayMenuButtons(){
      // dynamically adding the filter buttons for different categories

      // const categoryBtn = menu.map((categry)=>{
      //              console.log(categry.category); //-->gives the category available

      //1. Get the unique categories
      const categories = menu.reduce(
        (values, items)=>{
          if (!values.includes(items.category)){
            values.push(items.category);
          }
          return values;
      },
      ["all"]
      );
      // console.log(categories);

      //2.Iterate over the categories . Return the buttons
     const categoryBtns = categories.map((eachCategory)=>{
                return `<button class="filter-btn" type="button"
                 data-name=${eachCategory}>
                 ${eachCategory} </button>`
     }).join("");
         wrapper.innerHTML = categoryBtns;

      //3.Make sure to select the buttons when they are available
  // const filterBtns = document.querySelectorAll(".filter-btn"); 

      // can also use selector method inside the element 
  const filterBtns = wrapper.querySelectorAll(".filter-btn"); 
    // console.log(filterBtns);

    // enable the filter-btns
  filterBtns.forEach((btn)=>{
        
    btn.addEventListener('click', (e)=>{
    
      // console.log(e.currentTarget.dataset.name);
      const category = e.currentTarget.dataset.name;  //--> gives access to the btn with the specific data-name
        
      // filtering through the menu array for the given dataset
      const menuCategory = menu.filter((menuItem)=>{
              //  console.log(menuItem.category);   // access all the categories
  
              //first filter out all items that have the same matching category
              if (menuItem.category === category){
              btn.classList.add("active");
                return  menuItem;
              }
              document.querySelector(".active").classList.remove("active");
             e.target.classList.add("active");
      })
      // console.log(menuCategory);

      // access only the categories in the menu array in order to display all / the specifics
      //filter out according to the categories and display on page
      if (category === 'all'){
          displayMenuItems(menu);
      }
      else{
        displayMenuItems(menuCategory);
      }
     
    });
    });
 }

 