const books = [
{title:"Atomic Habits",author:"James Clear",genre:"Self-help",year:2018,price:399,isbn:"9780735211292",desc:"Teaches how small daily habits create big life changes."},
{title:"The Alchemist",author:"Paulo Coelho",genre:"Fiction",year:1988,price:299,isbn:"9780061122415",desc:"A story about following your dreams and listening to your heart."},
{title:"Rich Dad Poor Dad",author:"Robert Kiyosaki",genre:"Finance",year:1997,price:399,isbn:"9781612680194",desc:"Changes how you think about money and investing."},
{title:"Think and Grow Rich",author:"Napoleon Hill",genre:"Self-help",year:1937,price:299,isbn:"9781585424337",desc:"Mindset-based guide to success and wealth."},
{title:"Ikigai",author:"Hector Garcia",genre:"Lifestyle",year:2016,price:299,isbn:"9780143130727",desc:"Explains the Japanese secret to a long and happy life."},

{title:"The Power of Now",author:"Eckhart Tolle",genre:"Spirituality",year:1997,price:399,isbn:"9781577314806",desc:"Focuses on living in the present moment."},
{title:"The 7 Habits of Highly Effective People",author:"Stephen Covey",genre:"Self-help",year:1989,price:399,isbn:"9780743269513",desc:"Principles for personal and professional effectiveness."},
{title:"Sapiens",author:"Yuval Noah Harari",genre:"History",year:2011,price:499,isbn:"9780062316097",desc:"Explains human evolution in a simple and engaging way."},
{title:"Can't Hurt Me",author:"David Goggins",genre:"Motivation",year:2018,price:499,isbn:"9781544512280",desc:"Story of extreme mental toughness and discipline."},
{title:"Deep Work",author:"Cal Newport",genre:"Productivity",year:2016,price:399,isbn:"9781455586691",desc:"How to focus deeply in a distracted world."},

{title:"The Psychology of Money",author:"Morgan Housel",genre:"Finance",year:2020,price:399,isbn:"9780857197689",desc:"Explains money behavior through simple stories."},
{title:"The Subtle Art of Not Giving a F*ck",author:"Mark Manson",genre:"Self-help",year:2016,price:399,isbn:"9780062457714",desc:"A counterintuitive approach to living a good life."},
{title:"1984",author:"George Orwell",genre:"Dystopian",year:1949,price:299,isbn:"9780451524935",desc:"A powerful warning about authoritarian control."},
{title:"Animal Farm",author:"George Orwell",genre:"Political Satire",year:1945,price:299,isbn:"9780451526342",desc:"Simple story with deep political meaning."},
{title:"The Hobbit",author:"J.R.R. Tolkien",genre:"Fantasy",year:1937,price:399,isbn:"9780547928227",desc:"A magical adventure in Middle-earth."},

{title:"Harry Potter and the Sorcerer's Stone",author:"J.K. Rowling",genre:"Fantasy",year:1997,price:499,isbn:"9780590353427",desc:"The beginning of the magical Harry Potter series."},
{title:"The Theory of Everything",author:"Stephen Hawking",genre:"Science",year:2002,price:499,isbn:"9788179925911",desc:"Explains complex universe theories in simple words."},
{title:"The Fault in Our Stars",author:"John Green",genre:"Romance",year:2012,price:399,isbn:"9780142424179",desc:"An emotional love story of two teenagers."},
{title:"The Kite Runner",author:"Khaled Hosseini",genre:"Fiction",year:2003,price:399,isbn:"9781594631931",desc:"A touching story of friendship and redemption."},
{title:"To Kill a Mockingbird",author:"Harper Lee",genre:"Classic",year:1960,price:299,isbn:"9780061120084",desc:"A story about justice and morality."},

{title:"The Midnight Library",author:"Matt Haig",genre:"Fiction",year:2020,price:399,isbn:"9780525559474",desc:"A beautiful story about life choices and second chances."},
{title:"Man's Search for Meaning",author:"Viktor E. Frankl",genre:"Philosophy",year:1946,price:299,isbn:"9780807014271",desc:"Shows how finding meaning helps us survive the hardest times."},
{title:"Start With Why",author:"Simon Sinek",genre:"Business",year:2009,price:399,isbn:"9781591846444",desc:"Explains how great leaders inspire action."},
{title:"The Courage to Be Disliked",author:"Ichiro Kishimi",genre:"Psychology",year:2013,price:399,isbn:"9781501197277",desc:"Teaches how to live freely without worrying about others."}
];

// Render books
const grid = document.querySelector(".book-grid");
grid.innerHTML = "";
books.forEach((b,i)=>{
  grid.innerHTML += `
  <div class="book">
    <img src="https://covers.openlibrary.org/b/isbn/${b.isbn}-M.jpg" onclick="showBook(${i})">
    <h4>${b.title}</h4>
    <p>₹${b.price}</p>
    <button onclick="addToCart(${i})">Add to Cart</button>
  </div>`;
});

// Modal
const modal = document.getElementById("bookModal");
const closeBtn = document.querySelector(".close");

function showBook(i){
  const b = books[i];
  modal.style.display = "block";
  modalImg.src = `https://covers.openlibrary.org/b/isbn/${b.isbn}-M.jpg`;
  modalTitle.innerText = b.title;
  modalAuthor.innerText = "Author: " + b.author;
  modalGenre.innerText = "Genre: " + b.genre;
  modalYear.innerText = "Published: " + b.year;
  modalDesc.innerText = b.desc;
  modalPrice.innerText = "Price: ₹" + b.price;
  modalAddCart.onclick = () => addToCart(i);
}

// Close modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
document.addEventListener("keydown", e => { if (e.key === "Escape") modal.style.display = "none"; });

// Cart
let cart = [];
function addToCart(i){
  cart.push(books[i]);
  cartCount.innerText = cart.length;
  renderCart();
}
function renderCart(){
  let total = 0;
  cartItems.innerHTML = "";
  cart.forEach(b=>{
    total += b.price;
    cartItems.innerHTML += `<p>${b.title} - ₹${b.price}</p>`;
  });
  cartTotal.innerText = total;
}
cartBtn.onclick = () => cartPanel.style.display = "block";




