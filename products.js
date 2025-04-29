// Product database
const products = [
    {
        id: 1,
        name: "CERA RAPIDA ALTO BRILLO 400ml",
        brand: "arexons",
        category: "cuidado_exterior",
        price: 0,
        description: "Brillo instantáneo para tu auto, fácil de aplicar.",
        image: "assets/img/1.png"
    },
    {
        id: 2,
        name: "RENOVADOR NEUMATICOS 400ml",
        brand: "arexons",
        category: "cuidado_exterior",
        price: 0,
        description: "Devuelve el color y protege tus neumáticos del desgaste.",
        image: "assets/img/2.png"
    },
    {
        id: 3,
        name: "DETERGENTE PARA MOTORES 400ml",
        brand: "arexons",
        category: "limpieza_de_motor",
        price: 0,
        description: "Elimina grasa, aceite y suciedad de tu motor fácilmente.",
        image: "assets/img/3.png"
    },
    {
        id: 4,
        name: "ACQUAZERO LAVADO EN SECO 400 ml",
        brand: "arexons",
        category: "cuidado_exterior",
        price: 7.50,
        description: "Limpia y encera sin necesidad de agua.",
        image: "assets/img/4.png"
    },
    {
        id: 5,
        name: "REMOVEDOR DE INSECTOS Y RESINA",
        brand: "arexons",
        category: "cuidado_exterior",
        price: 0,
        description: "Elimina insectos, resina y suciedad adherida sin esfuerzo.",
        image: "assets/img/5.png"
    },
    {
        id: 6,
        name: "RENOVADOR Y LIMPIADOR TAPICES DE TELA",
        brand: "arexons",
        category: "limpieza_interior",
        price: 0,
        description: "Revive y limpia telas y tapices de tu vehículo.",
        image: "assets/img/6.png"
    },
    {
        id: 7,
        name: "SUPER LIMPIADOR LLANTAS 500ml",
        brand: "arexons",
        category: "cuidado_exterior",
        price: 0,
        description: "Remueve suciedad pesada dejando las llantas impecables.",
        image: "assets/img/7.png"
    },
    {
        id: 8,
        name: "PURICLIMA LIMPIADOR SISTEMA DE A/C 350ml",
        brand: "arexons",
        category: "limpieza_interior",
        price: 0,
        description: "Limpia el aire acondicionado y elimina malos olores.",
        image: "assets/img/8.png"
    },
    {
        id: 9,
        name: "ADITIVO GASOLINA LIMPIA INYECTORES 325ml",
        brand: "arexons",
        category: "aditivos",
        price: 0,
        description: "Limpia inyectores y optimiza el rendimiento de la gasolina.",
        image: "assets/img/9.png"
    },
    {
        id: 10,
        name: "CERA RENOVADO Y PULIDO 500ml",
        brand: "arexons",
        category: "cuidado_exterior",
        price: 0,
        description: "Pulido rápido para restaurar y proteger la pintura.",
        image: "assets/img/10.png"
    },
    {
        id: 11,
        name: "RENOVADOR POLICARBONATOS 150gr",
        brand: "arexons",
        category: "cuidado_exterior",
        price: 0,
        description: "Recupera la transparencia de faros y plásticos exteriores.",
        image: "assets/img/11.png"
    },
    {
        id: 12,
        name: "LUBRICANTE MP SINTETICO SVITOL 75 ml",
        brand: "svitol",
        category: "lubricantes",
        price: 0,
        description: "Lubricación avanzada para piezas móviles y mecanismos.",
        image: "assets/img/12.png"
    },
    {
        id: 13,
        name: "PROTECTOR TABLEROS EFECTO BRILLO 400 ml",
        brand: "arexons",
        category: "limpieza_interior",
        price: 0,
        description: "Protege y da brillo a plásticos y tableros.",
        image: "assets/img/13.png"
    },
    {
        id: 14,
        name: "PROTECTOR TABLEROS EFECTO MATE 400 ml",
        brand: "arexons",
        category: "limpieza_interior",
        price: 0,
        description: "Protege y renueva superficies internas sin brillo.",
        image: "assets/img/14.png"
    },
    {
        id: 15,
        name: "PULIDOR UNIVERSAL 500 ml",
        brand: "arexons",
        category: "cuidado_exterior",
        price: 0,
        description: "Pulido multiusos para acabados brillantes y restauración.",
        image: "assets/img/15.png"
    },
    {
        id: 16,
        name: "ADITIVO ACEITE LIMPIA MOTORES 300 ML",
        brand: "arexons",
        category: "aditivos",
        price: 0,
        description: "Limpia el motor desde el interior antes de un cambio de aceite.",
        image: "assets/img/16.png"
    },
    {
        id: 17,
        name: "ADITIVO DIESEL TRATAMIENTO DPF 325 ML",
        brand: "arexons",
        category: "aditivos",
        price: 0,
        description: "ptimiza el sistema de filtro de partículas diésel (DPF).",
        image: "assets/img/17.png"
    },
    {
        id: 18,
        name: "ADITIVO DIESEL DISPERSANTE DE AGUA 325 ML",
        brand: "arexons",
        category: "aditivos",
        price: 0,
        description: "Elimina el agua del combustible diésel y protege el motor.",
        image: "assets/img/18.png"
    },
    {
        id: 19,
        name: "SVITOL PROFESIONAL CONTACTO ELECTRICO 200ml",
        brand: "svitol",
        category: "lubricantes",
        price: 0,
        description: "Protege y mejora el contacto en sistemas eléctricos.",
        image: "assets/img/19.png"
    },
    {
        id: 20,
        name: "SVITOL GRASA DE LITIO PROFESIONAL 200ml",
        brand: "svitol",
        category: "lubricantes",
        price: 0,
        description: "Lubricación de alta resistencia para componentes mecánicos.",
        image: "assets/img/20.png"
    },
    {
        id: 21,
        name: "PAÑO RESTAURADOR DE GOMA Y PLASTICOS",
        brand: "wizzy",
        category: "accesorios_de_limpieza",
        price: 0,
        description: "Devuelve el color y vitalidad a gomas y plásticos.",
        image: "assets/img/21.png"
    },
    {
        id: 22,
        name: "PAÑO EFECTO ANTI-EMPANANTE 15u",
        brand: "wizzy",
        category: "accesorios_de_limpieza",
        price: 0,
        description: "Evita que se empañen cristales y espejos.",
        image: "assets/img/22.png"
    },
    {
        id: 23,
        name: "CELULOSA JEANS PINO",
        brand: "ricci",
        category: "aromatizantes",
        price: 0,
        description: "Aroma clásico a pino que refresca tu auto.",
        image: "assets/img/23.png"
    },
    {
        id: 24,
        name: "CELULOSA JEANS OCEANO",
        brand: "ricci",
        category: "aromatizantes",
        price: 0,
        description: "Fragancia fresca marina para tu vehículo.",
        image: "assets/img/24.png"
    },
    {
        id: 25,
        name: "CELULOSA JEANS TROPICAL",
        brand: "ricci",
        category: "aromatizantes",
        price: 0,
        description: "Aroma tropical vibrante para ambientar tu auto.",
        image: "assets/img/25.png"
    },
    {
        id: 26,
        name: "CELULOSA JEANS LAVANDA",
        brand: "ricci",
        category: "aromatizantes",
        price: 0,
        description: "Agradable aroma a lavanda que brinda frescura.",
        image: "assets/img/26.png"
    },{
        id: 27,
        name: "PERFUME CAR ZERO VAINILLA 4,5ML",
        brand: "ricci",
        category: "aromatizantes",
        price: 0,
        description: "Fragancia dulce de vainilla para el interior del auto.",
        image: "assets/img/27.png"
    },
    {
        id: 28,
        name: "PERFUME CAR ZERO PINO 4,5ML",
        brand: "ricci",
        category: "aromatizantes",
        price: 0,
        description: "Aroma clásico a pino para ambientes frescos.",
        image: "assets/img/28.png"
    },
    {
        id: 29,
        name: "PERFUME CAR ZERO COCO 4,5ML",
        brand: "ricci",
        category: "aromatizantes",
        price: 0,
        description: "Aroma tropical a coco que refresca tu vehículo.",
        image: "assets/img/29.png"
    },
    {
        id: 30,
        name: "PERFUME CAR ZERO FRESA 4,5ML",
        brand: "ricci",
        category: "aromatizantes",
        price: 0,
        description: "Dulce y vibrante fragancia de fresa para tu auto.",
        image: "assets/img/30.png"
    },
    {
        id: 31,
        name: "PAÑO LIMPIA CRISTALES Y ESPEJOS 15u",
        brand: "wizzy",
        category: "accesorios_de_limpieza",
        price: 0,
        description: "Limpieza efectiva de vidrios y espejos sin rayar",
        image: "assets/img/31.png"
    },
    {
        id: 32,
        name: "PAÑO ATRAPA-POLVO 10u",
        brand: "wizzy",
        category: "accesorios_de_limpieza",
        price: 0,
        description: "Atrapa polvo sin dejar residuos, ideal para interiores.",
        image: "assets/img/32.png"
    },
    {
        id: 33,
        name: "SVITOL EASY SPORT 50 ml",
        brand: "svitol",
        category: "lubricantes",
        price: 0,
        description: "Lubricante portátil para usos deportivos y mecánicos ligeros.",
        image: "assets/img/33.png"
    },
];



// Function to display products
function displayProducts(productsToDisplay) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';
    
    if (productsToDisplay.length === 0) {
        productsContainer.innerHTML = '<p class="no-products">No se encontraron productos que coincidan con los filtros seleccionados.</p>';
        return;
    }
    
    // Poner abajo de descripcion si se usaran precios
     // <div class="product-price">$${product.price.toFixed(2)}</div> 
    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <div class="product-brand">${product.brand.toUpperCase()}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-category">${getCategoryName(product.category)}</div>
                <p class="product-description">${product.description}</p>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
}

// Function to get category name in Spanish
function getCategoryName(categorySlug) {
    const categories = {
        'aditivos': 'Aditivos',
        'lubricantes': 'Lubricantes',
        'limpieza_de_motor': 'Limpieza de Motor',
        'cuidado_exterior': 'Cuidado Exterior',
        'limpieza_interior': 'Limpieza Interior',
        'aromatizantes': 'Aromatizantes',
        'accesorios_de_limpieza': 'Accesorios de Limpieza',
    };
    
    return categories[categorySlug] || categorySlug;
}

// Filter products based on selected filters
function filterProducts() {
    const brandFilter = document.getElementById('brand-filter').value;
    const categoryFilter = document.getElementById('category-filter').value;
    const searchTerm = document.getElementById('search').value.toLowerCase();
    
    let filteredProducts = products;
    
    // Filter by brand
    if (brandFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.brand === brandFilter);
    }
    
    // Filter by category
    if (categoryFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
    }
    
    // Filter by search term
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    displayProducts(filteredProducts);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Display all products initially
    displayProducts(products);
    
    // Add event listeners to filters
    document.getElementById('brand-filter').addEventListener('change', filterProducts);
    document.getElementById('category-filter').addEventListener('change', filterProducts);
    document.getElementById('search').addEventListener('input', filterProducts);
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            contactForm.reset();
        });
    }
    
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    
    if (mobileMenuButton && nav) {
        mobileMenuButton.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        });
    }
});
