// /assets/js/index.js

// --- LÓGICA DE AUTENTICAÇÃO ---
const loggedInUser = localStorage.getItem('loggedInUser');
const userDisplay = document.getElementById('user-display');
const logoutButton = document.getElementById('logout-btn');

// Verifica se existe um usuário logado
if (loggedInUser) {
    // Se existir, mostra o nome dele na tela
    userDisplay.textContent = `Olá, ${loggedInUser}`;
} else {
    // Se não existir, impede o acesso e redireciona para a página de login
    alert("Você precisa fazer login para acessar a loja.");
    window.location.href = 'login.html';
}

// Adiciona a funcionalidade de logout ao botão "Sair"
logoutButton.addEventListener('click', () => {
    // Remove o usuário do localStorage
    localStorage.removeItem('loggedInUser');
    // Redireciona para a página de login
    window.location.href = 'login.html';
});
// --- FIM DA LÓGICA DE AUTENTICAÇÃO ---


// --- LÓGICA DA LOJA ---
const products = [
    { id: 1, name: "Camiseta", price: 45.00, description: "Camiseta oficial do CEC, 100% algodão.", image: "assets/imgs/camiseta.jpg" },
    { id: 2, name: "Jaqueta", price: 80.00, description: "Jaqueta estilosa para representar o CEC.", image: "assets/imgs/jaqueta.jpg" },
    { id: 3, name: "Caneca", price: 25.00, description: "Caneca personalizada para roles da USP.", image: "assets/imgs/caneca.jpg" },
    { id: 4, name: "Bucket", price: 45.00, description: "Bucket para os rolezinhos do CEC.", image: "assets/imgs/bucket.jpg" },
    { id: 5, name: "Bag", price: 15.00, description: "Bag para guardar seus itens pessoais.", image: "assets/imgs/bag.jpg" },
    { id: 6, name: "Boné", price: 20.00, description: "Bonézinho para representar o CEC no dia a dia.", image: "assets/imgs/boné.jpg" },
    { id: 7, name: "Chinelo de dedo", price: 15.00, description: "Chinelo confortável, perfeito para dias de praia.", image: "assets/imgs/chinelo de dedo.jpg" },
    { id: 8, name: "Chinelo Slider", price: 25.00, description: "Chinelo slider, estiloso e prático para ir para a faculdade.", image: "assets/imgs/chinelo slider.jpg" }
];

let cartCount = 0;
const productsContainer = document.getElementById("products");

// Renderiza os produtos dinamicamente
products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>R$ ${product.price.toFixed(2)}</strong></p>
        <button class="add-btn">Adicionar</button>
        <button class="remove-btn">Remover</button>
    `;

    card.querySelector(".add-btn").addEventListener("click", () => {
        cartCount++;
        updateCart();
    });

    card.querySelector(".remove-btn").addEventListener("click", () => {
        if (cartCount > 0) {
            cartCount--;
            updateCart();
        }
    });

    productsContainer.appendChild(card);
});

// Atualiza o contador do carrinho
function updateCart() {
    document.getElementById("cart-count").textContent = cartCount;
}