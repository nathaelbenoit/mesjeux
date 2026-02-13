// Variables globales
let currentConsole = 'all';
let currentGenre = 'all';
let currentView = 'grid';
let currentSort = 'default';
let displayedGames = [];

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    displayGames(gamesDatabase);
    updateStats();
});

// Initialisation de l'application
function initializeApp() {
    displayedGames = gamesDatabase;
}

// Configuration des événements
function setupEventListeners() {
    // Navigation par console
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
            currentConsole = e.target.dataset.console;
            filterGames();
        });
    });

    // Filtres par genre
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentGenre = e.target.dataset.genre;
            filterGames();
        });
    });

    // Barre de recherche
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        filterGames(e.target.value);
    });

    // Vue grille/liste
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            e.target.closest('.view-btn').classList.add('active');
            currentView = e.target.closest('.view-btn').dataset.view;
            toggleView();
        });
    });

    // Boutons de tri
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentSort = e.target.dataset.sort;
            filterGames();
        });
    });

    // Fermeture modal
    const modal = document.getElementById('gameModal');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    const modalClose = document.querySelector('.modal-close');

    modalClose.addEventListener('click', () => closeModal());
    modalBackdrop.addEventListener('click', () => closeModal());

    // ESC pour fermer le modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Filtrer les jeux
function filterGames(searchQuery = '') {
    let filtered = gamesDatabase;

    // Filtrer par console
    if (currentConsole !== 'all') {
        filtered = filtered.filter(game => game.console === currentConsole);
    }

    // Filtrer par genre
    if (currentGenre !== 'all') {
        filtered = filtered.filter(game => game.genre === currentGenre);
    }

    // Filtrer par recherche
    if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(game =>
            game.title.toLowerCase().includes(query) ||
            game.description.toLowerCase().includes(query)
        );
    }

    // Appliquer le tri
    filtered = sortGames(filtered);

    displayedGames = filtered;
    displayGames(filtered);
}

// Trier les jeux
function sortGames(games) {
    const gamesCopy = [...games];
    
    switch(currentSort) {
        case 'title-asc':
            return gamesCopy.sort((a, b) => a.title.localeCompare(b.title, 'fr'));
        case 'title-desc':
            return gamesCopy.sort((a, b) => b.title.localeCompare(a.title, 'fr'));
        case 'year-asc':
            return gamesCopy.sort((a, b) => a.year - b.year);
        case 'year-desc':
            return gamesCopy.sort((a, b) => b.year - a.year);
        case 'default':
        default:
            return gamesCopy;
    }
}

// Afficher les jeux
function displayGames(games) {
    const gamesGrid = document.getElementById('gamesGrid');
    const noResults = document.getElementById('noResults');

    if (games.length === 0) {
        gamesGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    gamesGrid.style.display = 'grid';
    noResults.style.display = 'none';

    gamesGrid.innerHTML = games.map(game => createGameCard(game)).join('');

    // Ajouter les événements de clic
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', () => {
            const gameId = parseInt(card.dataset.id);
            const game = gamesDatabase.find(g => g.id === gameId);
            if (game) openModal(game);
        });
    });

    // Observer les cartes pour les animations
    observeCards();
}

// Créer une carte de jeu
function createGameCard(game) {
    const consoleName = getConsoleName(game.console);
    const genreName = getGenreName(game.genre);

    return `
        <div class="game-card" data-id="${game.id}">
            <div class="game-card-image">
                <img src="${game.image}" alt="${game.title}">
                <div class="game-badge">${consoleName}</div>
            </div>
            <div class="game-card-info">
                <h3 class="game-title">${game.title}</h3>
                <div class="game-meta">
                    <span class="game-genre">${genreName}</span>
                    <span class="game-year">${game.year}</span>
                </div>
            </div>
        </div>
    `;
}

// Ouvrir le modal avec les détails
function openModal(game) {
    const modal = document.getElementById('gameModal');
    const modalBody = document.getElementById('modalBody');
    const consoleName = getConsoleName(game.console);
    const genreName = getGenreName(game.genre);

    modalBody.innerHTML = `
        <div class="modal-hero">
            <img src="${game.image}" alt="${game.title}">
            <div class="modal-hero-overlay">
                <h2 class="modal-title">${game.title}</h2>
                <p class="modal-subtitle">${consoleName} • ${game.year}</p>
            </div>
        </div>
        <div class="modal-body">
            <div class="modal-info-grid">
                <div class="modal-info-item">
                    <div class="modal-info-label">Console</div>
                    <div class="modal-info-value">${consoleName}</div>
                </div>
                <div class="modal-info-item">
                    <div class="modal-info-label">Année</div>
                    <div class="modal-info-value">${game.year}</div>
                </div>
                <div class="modal-info-item">
                    <div class="modal-info-label">Genre</div>
                    <div class="modal-info-value">${genreName}</div>
                </div>
            </div>
            <h3 style="margin-bottom: 15px; font-size: 20px;">À propos</h3>
            <p class="modal-description">${game.description}</p>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Fermer le modal
function closeModal() {
    const modal = document.getElementById('gameModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Changer la vue grille/liste
function toggleView() {
    const gamesGrid = document.getElementById('gamesGrid');
    if (currentView === 'list') {
        gamesGrid.classList.add('list-view');
    } else {
        gamesGrid.classList.remove('list-view');
    }
}

// Mettre à jour les statistiques
function updateStats() {
    const stats = getStats();
    const seriesCount = getSeriesCount();

    document.getElementById('totalGames').textContent = stats.total;
    document.getElementById('gameCount').textContent = `${stats.total} jeux au total`;
    document.getElementById('switchGames').textContent = stats.switch;
    document.getElementById('series').textContent = seriesCount;
    document.getElementById('footerTotal').textContent = stats.total;
}

// Obtenir le nom de la console
function getConsoleName(console) {
    const names = {
        'switch': 'Nintendo Switch',
        '3ds': 'Nintendo 3DS',
        'ds': 'Nintendo DS',
        'wiiu': 'Wii U',
        'wii': 'Wii'
    };
    return names[console] || console;
}

// Obtenir le nom du genre
function getGenreName(genre) {
    const names = {
        'action': 'Action',
        'adventure': 'Aventure',
        'rpg': 'RPG',
        'sport': 'Sport',
        'platform': 'Plateforme',
        'fighting': 'Combat',
        'party': 'Party Game'
    };
    return names[genre] || genre;
}

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les cartes de jeux pour les animations
function observeCards() {
    document.querySelectorAll('.game-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}
