// Sweet Love: catálogo internacional, filtros, carrito y resumen de pedido.
const products = [
  {
    "id": 1,
    "name": "Bandeja paisa",
    "country": "Colombia",
    "category": "Platos típicos",
    "description": "Fríjoles, arroz, carne molida, chicharrón, huevo, chorizo, arepa y aguacate.",
    "side": "Acompañada de arepa, aguacate y tajadas de maduro.",
    "price": 28900,
    "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/c8/d9/b7/nuestra-bandeja-paisa.jpg?h=500&s=1&w=900",
    "tag": "Tradicional"
  },
  {
    "id": 2,
    "name": "Arepa con queso",
    "country": "Colombia",
    "category": "Platos típicos",
    "description": "Arepa de maíz dorada a la plancha, rellena con queso fundido.",
    "side": "Ideal con hogao casero y limonada natural.",
    "price": 9900,
    "image": "https://paisausa.com/cdn/shop/products/ArepaColombianaAmarillaconQuesoPaisa_1800x1800.jpg?v=1693594740",
    "tag": "Favorito"
  },
  {
    "id": 3,
    "name": "Empanadas colombianas",
    "country": "Colombia",
    "category": "Entradas",
    "description": "Tres empanadas de maíz doradas, rellenas de carne y papa.",
    "side": "Incluye ají de la casa y limón.",
    "price": 11900,
    "image": "https://cdn2.cocinadelirante.com/sites/default/files/images/2023/01/receta-de-empanadas-colombianas-fritas.jpg",
    "tag": "Para compartir"
  },
  {
    "id": 4,
    "name": "Tacos al pastor",
    "country": "México",
    "category": "Platos típicos",
    "description": "Tres tortillas de maíz con cerdo adobado, piña, cebolla y cilantro.",
    "side": "Acompañados de salsa verde, limón y guacamole.",
    "price": 22900,
    "image": "https://images.unsplash.com/photo-1551501193-7d2a7a5a1c9e?auto=format&fit=crop&w=900&q=85",
    "tag": "Picantico"
  },
  {
    "id": 5,
    "name": "Nachos Sweet Love",
    "country": "México",
    "category": "Entradas",
    "description": "Totopos crujientes con queso, fríjoles, pico de gallo y jalapeños.",
    "side": "Incluye guacamole y crema agria.",
    "price": 18900,
    "image": "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=900&q=85",
    "tag": "Para compartir"
  },
  {
    "id": 6,
    "name": "Burrito de pollo",
    "country": "México",
    "category": "Platos típicos",
    "description": "Tortilla de trigo rellena de pollo, arroz, fríjoles, queso y vegetales.",
    "side": "Acompañado de pico de gallo y salsa de la casa.",
    "price": 21900,
    "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
    "tag": "Completo"
  },
  {
    "id": 7,
    "name": "Classic cheeseburger",
    "country": "Estados Unidos",
    "category": "Hamburguesas",
    "description": "Pan brioche, carne de res, cheddar, lechuga, tomate y salsa especial.",
    "side": "Incluye papas a la francesa.",
    "price": 23900,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    "tag": "Más pedido"
  },
  {
    "id": 8,
    "name": "BBQ ribs",
    "country": "Estados Unidos",
    "category": "Carnes",
    "description": "Costillas de cerdo bañadas en salsa BBQ, cocción lenta y sabor ahumado.",
    "side": "Acompañadas de papas rústicas y ensalada coleslaw.",
    "price": 34900,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    "tag": "Especial"
  },
  {
    "id": 9,
    "name": "Hot dog americano",
    "country": "Estados Unidos",
    "category": "Hamburguesas",
    "description": "Salchicha a la parrilla en pan suave con mostaza, kétchup y relish.",
    "side": "Acompañado de papas chips.",
    "price": 15900,
    "image": "https://images.unsplash.com/photo-1612392062798-2dbaa8f8f2c7?auto=format&fit=crop&w=900&q=85",
    "tag": "Clásico"
  },
  {
    "id": 10,
    "name": "Pancakes con frutos rojos",
    "country": "Estados Unidos",
    "category": "Postres",
    "description": "Torre de pancakes esponjosos con fresas, arándanos y miel.",
    "side": "Incluye mantequilla y sirope.",
    "price": 16900,
    "image": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85",
    "tag": "Dulce"
  },
  {
    "id": 11,
    "name": "Ensalada griega",
    "country": "Grecia · Santorini",
    "category": "Saludables",
    "description": "Pepino, tomate, aceitunas, cebolla morada, queso feta y orégano.",
    "side": "Acompañada de pan pita y vinagreta de limón.",
    "price": 21900,
    "image": "https://www.kamis.pl/-/media/project/oneweb/kampl22/recipe-images/2023-05/greek_salad_garlic_vinegar_cashews_800x800.jpg?extension=webp&hash=45C5FCCD2A315CFFEC50F03085DEC015&rev=04276d6de9614b8186524dcceeb4996f&vd=20260528T233847Z",
    "tag": "Fresca"
  },
  {
    "id": 12,
    "name": "Gyros de pollo",
    "country": "Grecia · Santorini",
    "category": "Platos típicos",
    "description": "Pan pita con pollo especiado, tomate, cebolla y salsa tzatziki.",
    "side": "Acompañado de papas al horno.",
    "price": 24900,
    "image": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85",
    "tag": "Mediterráneo"
  },
  {
    "id": 13,
    "name": "Souvlaki",
    "country": "Grecia · Santorini",
    "category": "Carnes",
    "description": "Brochetas de pollo a la parrilla con hierbas mediterráneas.",
    "side": "Incluye arroz con limón, ensalada y pan pita.",
    "price": 26900,
    "image": "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=85",
    "tag": "A la parrilla"
  },
  {
    "id": 14,
    "name": "Pierogi de papa y queso",
    "country": "Polonia",
    "category": "Platos típicos",
    "description": "Pasta rellena de papa y queso, dorada en mantequilla con cebolla.",
    "side": "Acompañada de crema agria y cebollín.",
    "price": 22900,
    "image": "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?auto=format&fit=crop&w=900&q=85",
    "tag": "Tradicional"
  },
  {
    "id": 15,
    "name": "Bigos polaco",
    "country": "Polonia",
    "category": "Carnes",
    "description": "Guiso casero de repollo, chucrut y carnes con especias suaves.",
    "side": "Acompañado de pan artesanal.",
    "price": 27900,
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    "tag": "Casero"
  },
  {
    "id": 16,
    "name": "Sernik de frutos rojos",
    "country": "Polonia",
    "category": "Postres",
    "description": "Tarta cremosa de queso al estilo polaco con salsa de frutos rojos.",
    "side": "Se sirve con frutos frescos.",
    "price": 12900,
    "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85",
    "tag": "Postre"
  },
  {
    "id": 17,
    "name": "Ensalada Olivier",
    "country": "Rusia",
    "category": "Saludables",
    "description": "Ensalada rusa tradicional con papa, zanahoria, arvejas, pepinillos, huevo y mayonesa.",
    "side": "Acompañada de tostadas de pan.",
    "price": 17900,
    "image": "https://avatars.mds.yandex.net/get-vertis-journal/3934100/1a292c83-e9a7-493f-a25e-6c869d8f0962.jpg/1600x1600",
    "tag": "Clásica"
  },
  {
    "id": 18,
    "name": "Stroganoff de res",
    "country": "Rusia",
    "category": "Carnes",
    "description": "Tiras de res en salsa cremosa de champiñones y mostaza suave.",
    "side": "Acompañado de arroz blanco.",
    "price": 29900,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
    "tag": "Especial"
  },
  {
    "id": 19,
    "name": "Bowl de pollo y quinoa",
    "country": "Internacional",
    "category": "Saludables",
    "description": "Quinoa, pollo a la plancha, aguacate, tomate cherry y hojas verdes.",
    "side": "Con vinagreta cítrica aparte.",
    "price": 22900,
    "image": "https://treinoemcasa.com/cdn/shop/articles/receita-quinoa.jpg?v=1717928377&width=1100",
    "tag": "Balanceado"
  },
  {
    "id": 20,
    "name": "Salmón con vegetales",
    "country": "Internacional",
    "category": "Saludables",
    "description": "Filete de salmón a la plancha con vegetales salteados y limón.",
    "side": "Acompañado de puré de papa o arroz integral.",
    "price": 36900,
    "image": "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/grilled_salmon_with_veggies.jpg",
    "tag": "Ligero"
  },
  {
    "id": 21,
    "name": "Ensalada César con pollo",
    "country": "Internacional",
    "category": "Saludables",
    "description": "Lechuga romana, pollo a la plancha, parmesano y crotones.",
    "side": "Aderezo César servido aparte.",
    "price": 21900,
    "image": "https://antifategypt.com/cdn/shop/files/BCO.e50fee30-ca03-4865-bcd4-e6a8b2f94564.png?v=1779366216",
    "tag": "Fresca"
  },
  {
    "id": 22,
    "name": "Limonada natural",
    "country": "Colombia",
    "category": "Bebidas",
    "description": "Limón recién exprimido, agua fría y el punto justo de dulzor.",
    "side": "Se sirve con hielo y rodaja de limón.",
    "price": 6500,
    "image": "https://images.getrecipekit.com/20220623174417-citronnade.png?aspect_ratio=4%3A3&quality=90",
    "tag": "Natural"
  },
  {
    "id": 23,
    "name": "Limonada de coco",
    "country": "Colombia",
    "category": "Bebidas",
    "description": "Mezcla cremosa y refrescante de limón y leche de coco.",
    "side": "Decorada con coco y limón.",
    "price": 8900,
    "image": "https://colombia.travel/sites/default/files/limonada-cremosa-coco.jpg",
    "tag": "Tropical"
  },
  {
    "id": 24,
    "name": "Jugo de maracuyá",
    "country": "Colombia",
    "category": "Bebidas",
    "description": "Pulpa de maracuyá natural, agua y hielo.",
    "side": "Disponible en agua o leche.",
    "price": 6900,
    "image": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=85",
    "tag": "Frutal"
  },
  {
    "id": 25,
    "name": "Malteada de fresa",
    "country": "Estados Unidos",
    "category": "Bebidas",
    "description": "Malteada cremosa de fresa con leche fría y crema batida.",
    "side": "Decorada con fresa fresca.",
    "price": 10900,
    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85",
    "tag": "Dulce"
  },
  {
    "id": 26,
    "name": "Brownie con helado",
    "country": "Estados Unidos",
    "category": "Postres",
    "description": "Brownie tibio de chocolate con una bola de helado de vainilla.",
    "side": "Incluye salsa de chocolate.",
    "price": 13900,
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
    "tag": "Favorito"
  },
  {
    "id": 27,
    "name": "Donas glaseadas",
    "country": "Estados Unidos",
    "category": "Postres",
    "description": "Dos donas suaves con glaseado rosa y lluvia de colores.",
    "side": "Acompañadas de salsa de chocolate.",
    "price": 9900,
    "image": "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
    "tag": "Para compartir"
  },
  {
    "id": 28,
    "name": "Tres leches",
    "country": "Colombia",
    "category": "Postres",
    "description": "Bizcocho esponjoso bañado en tres leches y cubierto de crema.",
    "side": "Decorado con canela y fruta.",
    "price": 11900,
    "image": "https://static.bainet.es/clip/52a1fcd4-c15f-418c-a1f2-f543e678912b_source-aspect-ratio_1600w_0.jpg",
    "tag": "Tradicional"
  },
  {
    "id": 29,
    "name": "Patacones con hogao",
    "country": "Colombia",
    "category": "Entradas",
    "description": "Patacones de plátano verde crocantes con hogao casero.",
    "side": "Incluye guacamole de la casa.",
    "price": 12900,
    "image": "https://www.elespectador.com/resizer/v2/IUSC7GZ6MFD6LPT4GTMBNZI3X4.jpg?auth=25846173c3513a92e7df72085b4f98414383bba032a23aa133ffdcbc4bbd6fa0&height=675&quality=80&smart=true&width=1200",
    "tag": "Crujiente"
  },
  {
    "id": 30,
    "name": "Pollo a la plancha",
    "country": "Internacional",
    "category": "Carnes",
    "description": "Pechuga marinada con hierbas y cocinada a la plancha.",
    "side": "Acompañada de ensalada fresca y arroz integral.",
    "price": 24900,
    "image": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
    "tag": "Saludable"
  }
];
const state = { category: "Todos", country: "", search: "", cart: [] };
const $ = selector => document.querySelector(selector);
const money = value => new Intl.NumberFormat("es-CO", {style:"currency",currency:"COP",maximumFractionDigits:0}).format(value);
let toastTimer;

function renderProducts() {
  const query = state.search.trim().toLocaleLowerCase("es");
  const shown = products.filter(p => {
    const categoryOK = state.category === "Todos" || p.category === state.category;
    const countryOK = !state.country || p.country.includes(state.country);
    const text = [p.name,p.country,p.category,p.description,p.side].join(" ").toLocaleLowerCase("es");
    return categoryOK && countryOK && text.includes(query);
  });
  $("#productGrid").innerHTML = shown.map(p => `
    <article class="product-card">
      <div class="product-image-wrap"><img class="product-image" src="${p.image}" alt="${p.name}: ${p.description}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80'"><span class="product-tag">${p.tag}</span></div>
      <div class="product-info"><div class="product-meta"><span class="product-category">${p.category}</span><span class="product-country">${p.country}</span></div>
       <h3>${p.name}</h3><p class="product-description">${p.description}</p>
       <div class="side-note"><b>Incluye / sugerido:</b> ${p.side}</div>
       <div class="product-bottom"><span class="product-price">${money(p.price)}</span><button class="add-button" data-add="${p.id}" aria-label="Agregar ${p.name} al carrito">+</button></div>
      </div>
    </article>`).join("");
  $("#emptyState").classList.toggle("hidden", shown.length > 0);
  $("#activeFilter").textContent = state.country ? `Destino seleccionado: ${state.country}` : "";
}
function selectCategory(category) {
  state.category = category;
  document.querySelectorAll("[data-category],[data-filter]").forEach(b => b.classList.toggle("active",(b.dataset.category||b.dataset.filter)===category));
  renderProducts();
}
function addToCart(id) {
  const p = products.find(item=>item.id===id); if(!p) return;
  const existing = state.cart.find(item=>item.id===id);
  if(existing) existing.quantity++; else state.cart.push({...p,quantity:1});
  renderCart(); showToast(`${p.name} se agregó a tu carrito 💗`);
}
function changeQty(id,delta) {
  const item=state.cart.find(p=>p.id===id); if(!item)return;
  item.quantity+=delta; if(item.quantity<=0) state.cart=state.cart.filter(p=>p.id!==id);
  renderCart();
}
function renderCart() {
  const count=state.cart.reduce((s,p)=>s+p.quantity,0);
  const total=state.cart.reduce((s,p)=>s+p.price*p.quantity,0);
  $("#cartCount").textContent=count; $("#cartSubtotal").textContent=money(total); $("#cartTotal").textContent=money(total);
  $("#checkoutButton").disabled=count===0;
  $("#cartItems").innerHTML=state.cart.length?state.cart.map(p=>`
   <article class="cart-item"><img src="${p.image}" alt=""><div><h3>${p.name}</h3><span class="cart-item-price">${money(p.price*p.quantity)}</span><small>${p.country}</small><div class="quantity-control"><button data-qty="${p.id}" data-delta="-1" aria-label="Disminuir">−</button><b>${p.quantity}</b><button data-qty="${p.id}" data-delta="1" aria-label="Aumentar">+</button></div></div><button class="remove-item" data-remove="${p.id}">Quitar</button></article>`).join(""):`<div class="cart-empty"><span>🛍️</span><h3>Tu carrito está esperando</h3><p>Agrega algo rico para empezar.</p></div>`;
}
function toast(message) { $("#toast").textContent=message; $("#toast").classList.add("show"); clearTimeout(toastTimer); toastTimer=setTimeout(()=>$("#toast").classList.remove("show"),2500); }
function openCart() { $("#cartDrawer").classList.add("open"); $("#cartDrawer").setAttribute("aria-hidden","false"); $("#overlay").hidden=false; document.body.classList.add("no-scroll"); $("#closeCart").focus(); }
function closeCart() { $("#cartDrawer").classList.remove("open"); $("#cartDrawer").setAttribute("aria-hidden","true"); $("#overlay").hidden=true; document.body.classList.remove("no-scroll"); $("#openCart").focus(); }
function openModal(el) { el.classList.add("open"); el.setAttribute("aria-hidden","false"); document.body.classList.add("no-scroll"); }
function closeModal(el) { el.classList.remove("open"); el.setAttribute("aria-hidden","true"); if(!$("#cartDrawer").classList.contains("open"))document.body.classList.remove("no-scroll"); }

$("#productGrid").addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(b)addToCart(Number(b.dataset.add));});
$("#cartItems").addEventListener("click",e=>{const q=e.target.closest("[data-qty]"),r=e.target.closest("[data-remove]");if(q)changeQty(Number(q.dataset.qty),Number(q.dataset.delta));if(r){state.cart=state.cart.filter(p=>p.id!==Number(r.dataset.remove));renderCart();toast("Producto eliminado.");}});
document.querySelectorAll("[data-category],[data-filter]").forEach(b=>b.addEventListener("click",()=>{state.country="";document.querySelectorAll("[data-country]").forEach(x=>x.classList.remove("active"));selectCategory(b.dataset.category||b.dataset.filter);}));
document.querySelectorAll("[data-country]").forEach(b=>b.addEventListener("click",()=>{state.country=b.dataset.country;state.category="Todos";document.querySelectorAll("[data-category],[data-filter]").forEach(x=>x.classList.toggle("active",(x.dataset.category||x.dataset.filter)==="Todos"));document.querySelectorAll("[data-country]").forEach(x=>x.classList.toggle("active",x===b));renderProducts();$("#menu").scrollIntoView({behavior:"smooth"});}));
$("#searchInput").addEventListener("input",e=>{state.search=e.target.value;renderProducts();});
$("#openCart").addEventListener("click",openCart);$("#closeCart").addEventListener("click",closeCart);$("#overlay").addEventListener("click",closeCart);
$("#checkoutButton").addEventListener("click",()=>{closeCart();openModal($("#checkoutModal"));$("#customerName").focus();});
$("#closeCheckout").addEventListener("click",()=>closeModal($("#checkoutModal")));$("#closeSuccess").addEventListener("click",()=>closeModal($("#successModal")));
$("#checkoutForm").addEventListener("submit",e=>{
 e.preventDefault();
 const name=$("#customerName").value.trim();
 const phone=$("#customerPhone").value.trim();
 const address=$("#customerAddress").value.trim();
 $("#nameError").textContent="";$("#phoneError").textContent="";$("#addressError").textContent="";
 let ok=true;
 if(name.length<3){$("#nameError").textContent="Escribe tu nombre completo.";ok=false;}
 if(phone && !/^\d{10}$/.test(phone)){$("#phoneError").textContent="Si lo escribes, debe tener 10 dígitos.";ok=false;}
 if(address.length<5){$("#addressError").textContent="Escribe una dirección más completa.";ok=false;}
 if(!state.cart.length){toast("Tu carrito está vacío.");ok=false;}
 if(!ok)return;
 const total=state.cart.reduce((s,p)=>s+p.price*p.quantity,0);
 const lines=state.cart.map(p=>`• ${p.quantity} x ${p.name} — ${money(p.price*p.quantity)}`);
 const message=[
   "¡Hola Sweet Love! 💗 Quiero realizar este pedido:",
   "",
   ...lines,
   "",
   `TOTAL: ${money(total)}`,
   "",
   `Nombre: ${name}`,
   phone ? `Celular: ${phone}` : "",
   `Dirección de entrega: ${address}`,
   "",
   "¡Gracias!"
 ].filter(Boolean).join("\n");
 const whatsappUrl="https://wa.me/573052883408?text="+encodeURIComponent(message);
 window.location.href=whatsappUrl;
});
$("#finishOrder").addEventListener("click",()=>{closeModal($("#successModal"));state.cart=[];state.search="";state.country="";state.category="Todos";$("#searchInput").value="";$("#checkoutForm").reset();document.querySelectorAll("[data-country]").forEach(x=>x.classList.remove("active"));selectCategory("Todos");renderCart();});
$("#menuToggle").addEventListener("click",e=>{const nav=$("#mainNav"),open=nav.classList.toggle("open");e.currentTarget.setAttribute("aria-expanded",String(open));e.currentTarget.setAttribute("aria-label",open?"Cerrar menú":"Abrir menú");});
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>{$("#mainNav").classList.remove("open");$("#menuToggle").setAttribute("aria-expanded","false");}));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){if($("#successModal").classList.contains("open"))closeModal($("#successModal"));else if($("#checkoutModal").classList.contains("open"))closeModal($("#checkoutModal"));else if($("#cartDrawer").classList.contains("open"))closeCart();}});
$("#currentYear").textContent=new Date().getFullYear();renderProducts();renderCart();
