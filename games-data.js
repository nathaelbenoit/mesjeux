// Base de données des jeux
const gamesDatabase = [
    // Nintendo Switch
    { id: 1, title: "1-2-Switch", console: "switch", year: 2017, genre: "party", description: "Un jeu de lancement festif pour la Switch avec 28 mini-jeux utilisant les Joy-Con de manière innovante. Parfait pour les soirées entre amis.", image: "images/placeholder-switch.svg" },
    { id: 2, title: "Animal Crossing New Horizons", console: "switch", year: 2020, genre: "adventure", description: "Créez votre paradis sur une île déserte ! Collectez des ressources, décorez votre maison et vivez au rythme des saisons.", image: "images/placeholder-switch.svg" },
    { id: 3, title: "ARMS", console: "switch", year: 2017, genre: "fighting", description: "Un jeu de combat unique où les personnages ont des bras extensibles. Combat en ligne et local avec des stratégies variées.", image: "images/placeholder-switch.svg" },
    { id: 4, title: "Clubhouse Games 51 Worldwide Classics", console: "switch", year: 2020, genre: "party", description: "Une collection de 51 jeux de société classiques du monde entier, des échecs au baseball en passant par les dominos.", image: "images/placeholder-switch.svg" },
    { id: 5, title: "Degrees of Separation", console: "switch", year: 2019, genre: "platform", description: "Un jeu de plateforme coopératif romantique où deux personnages doivent travailler ensemble malgré leurs différences.", image: "images/placeholder-switch.svg" },
    { id: 6, title: "Demon Slayer: Sweep the Board!", console: "switch", year: 2023, genre: "party", description: "Un jeu de plateau numérique basé sur l'anime Demon Slayer. Affrontez vos amis dans des mini-jeux palpitants.", image: "images/placeholder-switch.svg" },
    { id: 7, title: "Demon Slayer: The Hinokami Chronicles", console: "switch", year: 2021, genre: "fighting", description: "Revivez l'histoire de Tanjiro dans ce jeu de combat basé sur l'anime à succès Demon Slayer.", image: "images/placeholder-switch.svg" },
    { id: 8, title: "Demon Slayer: The Hinokami Chronicles 2", console: "switch", year: 2024, genre: "fighting", description: "La suite du jeu de combat Demon Slayer avec de nouveaux personnages et modes de jeu.", image: "images/placeholder-switch.svg" },
    { id: 9, title: "Dragon Ball Xenoverse 2", console: "switch", year: 2017, genre: "fighting", description: "Créez votre propre guerrier et modifiez l'histoire de Dragon Ball Z ! Des combats explosifs et un mode en ligne dynamique.", image: "images/placeholder-switch.svg" },
    { id: 10, title: "Everybody 1-2-Switch", console: "switch", year: 2023, genre: "party", description: "La suite du jeu de lancement, avec encore plus de mini-jeux utilisant les smartphones et les Joy-Con.", image: "images/placeholder-switch.svg" },
    { id: 11, title: "Fire Emblem Warriors", console: "switch", year: 2017, genre: "action", description: "Un jeu de type musou dans l'univers de Fire Emblem. Commandez une armée et affrontez des milliers d'ennemis.", image: "images/placeholder-switch.svg" },
    { id: 12, title: "Jujutsu Kaisen Cursed Clash", console: "switch", year: 2024, genre: "fighting", description: "Un jeu de combat 2v2 basé sur le manga et anime Jujutsu Kaisen. Utilisez les techniques maudites pour vaincre vos adversaires.", image: "images/placeholder-switch.svg" },
    { id: 13, title: "Just Dance", console: "switch", year: 2021, genre: "sport", description: "La série de jeux de danse iconique ! Dansez sur les plus grands hits du moment et des classiques.", image: "images/placeholder-switch.svg" },
    { id: 14, title: "KeyWe", console: "switch", year: 2021, genre: "platform", description: "Un jeu coopératif mignon où vous incarnez des kiwis travaillant dans un bureau de poste. Coordination requise !", image: "images/placeholder-switch.svg" },
    { id: 15, title: "LEGO Jurassic World", console: "switch", year: 2019, genre: "adventure", description: "Revivez les quatre films Jurassic Park dans ce jeu d'action-aventure LEGO plein d'humour.", image: "images/placeholder-switch.svg" },
    { id: 16, title: "MotoGP 24", console: "switch", year: 2024, genre: "sport", description: "La simulation officielle de MotoGP avec tous les circuits et pilotes de la saison 2024.", image: "images/placeholder-switch.svg" },
    { id: 17, title: "My Hero One's Justice 2", console: "switch", year: 2020, genre: "fighting", description: "Un jeu de combat basé sur My Hero Academia. Utilisez les Quirks de vos héros préférés pour dominer l'arène.", image: "images/placeholder-switch.svg" },
    { id: 18, title: "NBA 2K23", console: "switch", year: 2022, genre: "sport", description: "La simulation de basketball de référence avec tous les joueurs et équipes NBA.", image: "images/placeholder-switch.svg" },
    { id: 19, title: "Nintendo Switch Sports", console: "switch", year: 2022, genre: "sport", description: "Le retour de Wii Sports sur Switch ! Tennis, bowling, football et plus encore avec les Joy-Con.", image: "images/placeholder-switch.svg" },
    { id: 20, title: "Nintendo World Championships: NES Edition", console: "switch", year: 2024, genre: "party", description: "Participez aux championnats du monde Nintendo avec des défis sur les jeux NES classiques.", image: "images/placeholder-switch.svg" },
    { id: 21, title: "Overcooked 2", console: "switch", year: 2018, genre: "party", description: "Le jeu de cuisine coopératif chaotique ! Travaillez en équipe pour préparer des plats dans des cuisines de plus en plus folles.", image: "images/placeholder-switch.svg" },
    { id: 22, title: "Prince of Persia: The Lost Crown", console: "switch", year: 2024, genre: "adventure", description: "Un metroidvania spectaculaire dans l'univers de Prince of Persia avec des combats intenses et des plateformes acrobatiques.", image: "images/placeholder-switch.svg" },
    { id: 23, title: "Retro Game Pack", console: "switch", year: 2023, genre: "party", description: "Une collection de mini-jeux rétro inspirés des classiques des années 80 et 90.", image: "images/placeholder-switch.svg" },
    { id: 24, title: "Snipperclips Plus", console: "switch", year: 2017, genre: "platform", description: "Un puzzle coopératif unique où vous devez découper vos personnages pour résoudre des énigmes.", image: "images/placeholder-switch.svg" },
    { id: 25, title: "Streets of Rage 4", console: "switch", year: 2020, genre: "action", description: "Le retour légendaire de la série beat'em up culte avec des graphismes dessinés à la main magnifiques.", image: "images/placeholder-switch.svg" },
    { id: 26, title: "Sword Art Online: Fatal Bullet", console: "switch", year: 2020, genre: "rpg", description: "Un RPG shooter dans l'univers de Sword Art Online. Créez votre avatar et explorez Gun Gale Online.", image: "images/placeholder-switch.svg" },
    { id: 27, title: "Tetris 99", console: "switch", year: 2019, genre: "party", description: "Un battle royale Tetris ! Affrontez 98 joueurs en ligne dans ce classique revisité.", image: "images/placeholder-switch.svg" },
    { id: 28, title: "Truck and Logistics Simulator", console: "switch", year: 2023, genre: "sport", description: "Gérez votre entreprise de logistique et conduisez des camions à travers l'Europe.", image: "images/placeholder-switch.svg" },
    { id: 29, title: "Ultra Street Fighter II: The Final Challengers", console: "switch", year: 2017, genre: "fighting", description: "Le jeu de combat légendaire revient sur Switch avec des graphismes remasterisés et de nouveaux modes.", image: "images/placeholder-switch.svg" },
    { id: 30, title: "Captain Toad: Treasure Tracker", console: "switch", year: 2018, genre: "platform", description: "Aidez Captain Toad dans ses aventures à travers des niveaux-dioramas pleins de secrets et de trésors.", image: "images/placeholder-switch.svg" },
    { id: 31, title: "Donkey Kong Country: Tropical Freeze", console: "switch", year: 2018, genre: "platform", description: "Un jeu de plateforme exigeant et magnifique avec DK et ses amis contre les Vikings Tiki.", image: "images/placeholder-switch.svg" },
    { id: 32, title: "Kirby and the Forgotten Land", console: "switch", year: 2022, genre: "platform", description: "La première aventure 3D de Kirby ! Explorez un monde post-apocalyptique mystérieux avec de nouvelles capacités.", image: "images/placeholder-switch.svg" },
    { id: 33, title: "Kirby Fighters 2", console: "switch", year: 2020, genre: "fighting", description: "Un jeu de combat festif avec Kirby et ses multiples pouvoirs. Parfait pour jouer entre amis.", image: "images/placeholder-switch.svg" },
    { id: 34, title: "Kirby Star Allies", console: "switch", year: 2018, genre: "platform", description: "Kirby peut transformer ses ennemis en alliés ! Un jeu de plateforme coloré jouable jusqu'à 4 joueurs.", image: "images/placeholder-switch.svg" },
    { id: 35, title: "Kirby's Dream Buffet", console: "switch", year: 2022, genre: "party", description: "Une course multijoueur frénétique où Kirby doit manger un maximum de gâteaux !", image: "images/placeholder-switch.svg" },
    { id: 36, title: "Luigi's Mansion 3", console: "switch", year: 2019, genre: "adventure", description: "Luigi explore un hôtel hanté pour sauver ses amis. Utilisez l'Ectoblast 5000 pour capturer des fantômes.", image: "images/placeholder-switch.svg" },
    { id: 37, title: "Mario & Sonic at the Olympic Games Tokyo 2020", console: "switch", year: 2019, genre: "sport", description: "Mario et Sonic s'affrontent aux Jeux Olympiques de Tokyo avec des épreuves modernes et rétro.", image: "images/placeholder-switch.svg" },
    { id: 38, title: "Mario Golf: Super Rush", console: "switch", year: 2021, genre: "sport", description: "Le golf arcade de Mario revient avec un mode aventure et le Speed Golf frénétique.", image: "images/placeholder-switch.svg" },
    { id: 39, title: "Mario Kart 8 Deluxe", console: "switch", year: 2017, genre: "sport", description: "Le meilleur Mario Kart de tous les temps ! Courses folles sur terre, mer et dans les airs.", image: "images/placeholder-switch.svg" },
    { id: 40, title: "Mario Party Superstars", console: "switch", year: 2021, genre: "party", description: "Les meilleurs plateaux et mini-jeux des Mario Party classiques réunis dans une édition ultime.", image: "images/placeholder-switch.svg" },
    { id: 41, title: "Mario Strikers: Battle League", console: "switch", year: 2022, genre: "sport", description: "Le football arcade sans règles de Mario ! Des matchs intenses et stratégiques en ligne.", image: "images/placeholder-switch.svg" },
    { id: 42, title: "Mario Tennis Aces", console: "switch", year: 2018, genre: "sport", description: "Le tennis arcade de Mario avec des coups spéciaux spectaculaires et un mode aventure captivant.", image: "images/placeholder-switch.svg" },
    { id: 43, title: "Mario vs. Donkey Kong", console: "switch", year: 2024, genre: "platform", description: "Le remake du jeu GBA culte ! Résolvez des puzzles pour récupérer les Mini-Mario volés par DK.", image: "images/placeholder-switch.svg" },
    { id: 44, title: "Mario + Rabbids Kingdom Battle", console: "switch", year: 2017, genre: "rpg", description: "Un RPG tactique inattendu et excellent fusionnant Mario et les Lapins Crétins.", image: "images/placeholder-switch.svg" },
    { id: 45, title: "New Super Mario Bros. U Deluxe", console: "switch", year: 2019, genre: "platform", description: "Le Mario 2D de Wii U revient sur Switch avec de nouveaux personnages jouables.", image: "images/placeholder-switch.svg" },
    { id: 46, title: "Paper Mario: The Thousand-Year Door", console: "switch", year: 2024, genre: "rpg", description: "Le remake du RPG Paper Mario culte de GameCube avec des graphismes modernisés.", image: "images/placeholder-switch.svg" },
    { id: 47, title: "Sonic Superstars", console: "switch", year: 2023, genre: "platform", description: "Un nouveau Sonic 2D classique avec des graphismes 3D modernes et du multijoueur local.", image: "images/placeholder-switch.svg" },
    { id: 48, title: "Sonic Mania Plus", console: "switch", year: 2018, genre: "platform", description: "Le meilleur Sonic moderne ! Un hommage pixel-perfect aux jeux Mega Drive originaux.", image: "images/placeholder-switch.svg" },
    { id: 49, title: "Splatoon 2", console: "switch", year: 2017, genre: "action", description: "Le shooter multijoueur coloré de Nintendo ! Peignez le terrain et éliminez vos adversaires.", image: "images/placeholder-switch.svg" },
    { id: 50, title: "Splatoon 3", console: "switch", year: 2022, genre: "action", description: "La suite tant attendue avec de nouvelles armes, modes et une campagne solo épique.", image: "images/placeholder-switch.svg" },
    { id: 51, title: "Super Mario 3D World + Bowser's Fury", console: "switch", year: 2021, genre: "platform", description: "Le portage du jeu Wii U avec une nouvelle aventure 3D en monde ouvert : Bowser's Fury.", image: "images/placeholder-switch.svg" },
    { id: 52, title: "Super Mario Bros. Wonder", console: "switch", year: 2023, genre: "platform", description: "Le premier nouveau Mario 2D depuis 11 ans ! Des transformations folles et des niveaux créatifs.", image: "images/placeholder-switch.svg" },
    { id: 53, title: "Super Mario Maker 2", console: "switch", year: 2019, genre: "platform", description: "Créez et partagez vos propres niveaux Mario ! Des millions de créations de la communauté.", image: "images/placeholder-switch.svg" },
    { id: 54, title: "Super Mario Party Jamboree", console: "switch", year: 2024, genre: "party", description: "Le plus grand Mario Party avec 7 plateaux et plus de 110 mini-jeux !", image: "images/placeholder-switch.svg" },
    { id: 55, title: "Super Mario RPG", console: "switch", year: 2023, genre: "rpg", description: "Le remake du RPG Super Nintendo culte avec des graphismes modernisés et du contenu bonus.", image: "images/placeholder-switch.svg" },
    { id: 56, title: "Super Smash Bros. Ultimate", console: "switch", year: 2018, genre: "fighting", description: "Le plus grand jeu de combat de tous les temps avec plus de 80 personnages !", image: "images/placeholder-switch.svg" },
    { id: 57, title: "Super Mario 3D All-Stars", console: "switch", year: 2020, genre: "platform", description: "Une collection contenant Super Mario 64, Sunshine et Galaxy remasterisés.", image: "images/placeholder-switch.svg" },
    { id: 58, title: "Super Mario Odyssey", console: "switch", year: 2017, genre: "platform", description: "L'aventure 3D sandbox ultime de Mario à travers le monde avec Cappy !", image: "images/placeholder-switch.svg" },
    { id: 59, title: "Super Mario Party", console: "switch", year: 2018, genre: "party", description: "Le retour de Mario Party sur Switch avec de nouveaux modes utilisant les Joy-Con.", image: "images/placeholder-switch.svg" },
    { id: 60, title: "Paper Mario", console: "switch", year: 2020, genre: "rpg", description: "Paper Mario: The Origami King - Une aventure unique avec un système de combat basé sur des puzzles circulaires.", image: "images/placeholder-switch.svg" },
    { id: 61, title: "Yoshi's Crafted World", console: "switch", year: 2019, genre: "platform", description: "Une aventure adorable de Yoshi dans un monde fait de carton et d'objets du quotidien.", image: "images/placeholder-switch.svg" },
    { id: 62, title: "L'Attaque des Titans 2", console: "switch", year: 2018, genre: "action", description: "Vivez l'histoire d'Attack on Titan et combattez les titans avec l'équipement tridimensionnel.", image: "images/placeholder-switch.svg" },
    { id: 63, title: "New Pokémon Snap", console: "switch", year: 2021, genre: "adventure", description: "Partez en safari photo pour capturer des clichés des Pokémon dans leur habitat naturel.", image: "images/placeholder-switch.svg" },
    { id: 64, title: "Pokémon Brilliant Diamond", console: "switch", year: 2021, genre: "rpg", description: "Le remake fidèle de Pokémon Diamant avec des graphismes chibi adorables.", image: "images/placeholder-switch.svg" },
    { id: 65, title: "Pokémon Legends: Arceus", console: "switch", year: 2022, genre: "rpg", description: "Une révolution Pokémon ! Explorez le Sinnoh féodal dans un RPG action en monde ouvert.", image: "images/placeholder-switch.svg" },
    { id: 66, title: "Pokémon Legends Z-A", console: "switch", year: 2025, genre: "rpg", description: "La suite de Legends Arceus se déroulant à Illumis (Kalos). Annoncé pour 2025.", image: "images/placeholder-switch.svg" },
    { id: 67, title: "Pokémon Let's Go, Eevee!", console: "switch", year: 2018, genre: "rpg", description: "Un remake de Pokémon Jaune avec des mécaniques inspirées de Pokémon GO.", image: "images/placeholder-switch.svg" },
    { id: 68, title: "Pokémon Scarlet", console: "switch", year: 2022, genre: "rpg", description: "La 9e génération Pokémon en monde ouvert ! Explorez Paldea librement.", image: "images/placeholder-switch.svg" },
    { id: 69, title: "Pokémon Sword", console: "switch", year: 2019, genre: "rpg", description: "La 8e génération Pokémon dans la région de Galar avec le Dynamax.", image: "images/placeholder-switch.svg" },
    { id: 70, title: "Pokémon Mystery Dungeon: Rescue Team DX", console: "switch", year: 2020, genre: "rpg", description: "Le remake du donjon mystère Pokémon avec des graphismes aquarelle magnifiques.", image: "images/placeholder-switch.svg" },
    { id: 71, title: "Pokkén Tournament DX", console: "switch", year: 2017, genre: "fighting", description: "Un jeu de combat Pokémon en 3D développé par Bandai Namco, créateurs de Tekken.", image: "images/placeholder-switch.svg" },
    { id: 72, title: "Cadence of Hyrule", console: "switch", year: 2019, genre: "rpg", description: "Un crossover unique fusionnant The Legend of Zelda et Crypt of the NecroDancer.", image: "images/placeholder-switch.svg" },
    { id: 73, title: "Hyrule Warriors: Age of Calamity", console: "switch", year: 2020, genre: "action", description: "Le préquel de Breath of the Wild en musou ! Découvrez la Grande Calamité.", image: "images/placeholder-switch.svg" },
    { id: 74, title: "Hyrule Warriors", console: "switch", year: 2018, genre: "action", description: "La version définitive du musou Zelda avec tout le contenu des versions précédentes.", image: "images/placeholder-switch.svg" },
    { id: 75, title: "The Legend of Zelda: Echoes of Wisdom", console: "switch", year: 2024, genre: "adventure", description: "Pour la première fois, incarnez Zelda dans une aventure 2D inédite ! Utilisez des échos pour résoudre des puzzles.", image: "images/placeholder-switch.svg" },
    { id: 76, title: "The Legend of Zelda: Link's Awakening", console: "switch", year: 2019, genre: "adventure", description: "Le remake du classique Game Boy avec des graphismes de jouets magnifiques.", image: "images/placeholder-switch.svg" },
    { id: 77, title: "The Legend of Zelda: Skyward Sword HD", console: "switch", year: 2021, genre: "adventure", description: "Le remaster du jeu Wii racontant l'origine de la Master Sword.", image: "images/placeholder-switch.svg" },
    { id: 78, title: "The Legend of Zelda: Tears of the Kingdom", console: "switch", year: 2023, genre: "adventure", description: "La suite de Breath of the Wild ! Explorez Hyrule et le ciel avec de nouvelles capacités.", image: "images/placeholder-switch.svg" },
    { id: 79, title: "The Legend of Zelda: Breath of the Wild", console: "switch", year: 2017, genre: "adventure", description: "Le chef-d'œuvre qui a révolutionné les jeux en monde ouvert. L'aventure Zelda ultime.", image: "images/placeholder-switch.svg" },

    // Nintendo 3DS
    { id: 100, title: "Xenoblade Chronicles 3D", console: "3ds", year: 2015, genre: "rpg", description: "Le portage du RPG épique de la Wii exclusif à la New 3DS avec des graphismes améliorés.", image: "images/placeholder-3ds.svg" },
    { id: 101, title: "Professeur Layton et le masque des miracles", console: "3ds", year: 2012, genre: "adventure", description: "Résolvez des énigmes avec le Professeur Layton dans cette aventure pleine de mystères.", image: "images/placeholder-3ds.svg" },
    { id: 102, title: "Professeur Layton et l'Héritage des Aslantes", console: "3ds", year: 2013, genre: "adventure", description: "La dernière aventure du Professeur Layton avec plus de 150 énigmes à résoudre.", image: "images/placeholder-3ds.svg" },
    { id: 103, title: "Super Mario Maker for Nintendo 3DS", console: "3ds", year: 2016, genre: "platform", description: "Créez et jouez à des niveaux Mario sur 3DS avec le mode 100 Mario Challenge.", image: "images/placeholder-3ds.svg" },
    { id: 104, title: "Yo-kai Watch 3", console: "3ds", year: 2018, genre: "rpg", description: "La troisième aventure Yo-kai Watch qui se déroule au Japon et aux États-Unis.", image: "images/placeholder-3ds.svg" },
    { id: 105, title: "New Super Mario Bros. 2", console: "3ds", year: 2012, genre: "platform", description: "Le Mario 2D de la 3DS axé sur la collecte de pièces avec le mode Coin Rush.", image: "images/placeholder-3ds.svg" },
    { id: 106, title: "Mario Tennis Open", console: "3ds", year: 2012, genre: "sport", description: "Le tennis arcade de Mario sur 3DS avec des mini-jeux et un mode carrière.", image: "images/placeholder-3ds.svg" },
    { id: 107, title: "Fire Emblem Awakening", console: "3ds", year: 2013, genre: "rpg", description: "Le RPG tactique qui a sauvé la série Fire Emblem avec son système de mariages.", image: "images/placeholder-3ds.svg" },
    { id: 108, title: "Kirby Triple Deluxe", console: "3ds", year: 2014, genre: "platform", description: "Kirby utilise la 3D relief dans des niveaux créatifs et colorés.", image: "images/placeholder-3ds.svg" },
    { id: 109, title: "Rhythm Paradise Megamix", console: "3ds", year: 2016, genre: "party", description: "Plus de 100 mini-jeux rythmiques fous et addictifs ! La compilation ultime de la série.", image: "images/placeholder-3ds.svg" },
    { id: 110, title: "Yo-Kai Watch 2: Fleshy Souls", console: "3ds", year: 2016, genre: "rpg", description: "La version chair de Yo-kai Watch 2 avec de nouvelles zones et Yo-kai à collectionner.", image: "images/placeholder-3ds.svg" },
    { id: 111, title: "Super Mario 3D Land", console: "3ds", year: 2011, genre: "platform", description: "Le premier Mario 3D de la 3DS fusionnant gameplay 2D et 3D avec brio.", image: "images/placeholder-3ds.svg" },
    { id: 112, title: "Pokémon Moon", console: "3ds", year: 2016, genre: "rpg", description: "La 7e génération Pokémon dans la région tropicale d'Alola sans arènes.", image: "images/placeholder-3ds.svg" },
    { id: 113, title: "Mario Kart 7", console: "3ds", year: 2011, genre: "sport", description: "Mario Kart en 3D avec des courses sous-marines et dans les airs !", image: "images/placeholder-3ds.svg" },
    { id: 114, title: "The Legend of Zelda: Ocarina of Time 3D", console: "3ds", year: 2011, genre: "adventure", description: "Le remake du chef-d'œuvre N64 avec des graphismes modernisés et la 3D relief.", image: "images/placeholder-3ds.svg" },
    { id: 115, title: "Animal Crossing: New Leaf", console: "3ds", year: 2013, genre: "adventure", description: "Devenez maire de votre village ! Le meilleur Animal Crossing avant New Horizons.", image: "images/placeholder-3ds.svg" },
    { id: 116, title: "The Legend of Zelda: Majora's Mask 3D", console: "3ds", year: 2015, genre: "adventure", description: "Le remake du Zelda le plus sombre de N64 avec un cycle de 3 jours à sauver.", image: "images/placeholder-3ds.svg" },
    { id: 117, title: "Yo-Kai Watch", console: "3ds", year: 2015, genre: "rpg", description: "Le phénomène japonais arrive en Occident ! Collectionnez des Yo-kai et résolvez des mystères.", image: "images/placeholder-3ds.svg" },
    { id: 118, title: "Kirby: Planet Robobot", console: "3ds", year: 2016, genre: "platform", description: "Kirby pilote un robot géant pour sauver Pop Star d'une invasion mécanique.", image: "images/placeholder-3ds.svg" },
    { id: 119, title: "Inazuma Eleven 3: Team Ogre Attacks!", console: "3ds", year: 2014, genre: "rpg", description: "Le RPG de football japonais avec des supertechniques spectaculaires.", image: "images/placeholder-3ds.svg" },
    { id: 120, title: "Inazuma Eleven GO: Chrono Stones - Thunderflash", console: "3ds", year: 2015, genre: "rpg", description: "Voyagez dans le temps pour sauver le football dans cet épisode GO.", image: "images/placeholder-3ds.svg" },
    { id: 121, title: "Inazuma Eleven Go - Light", console: "3ds", year: 2013, genre: "rpg", description: "La première version d'Inazuma Eleven GO sur 3DS avec de nouveaux personnages.", image: "images/placeholder-3ds.svg" },
    { id: 122, title: "The Legend of Zelda: Tri Force Heroes", console: "3ds", year: 2015, genre: "adventure", description: "Un Zelda coopératif à 3 joueurs avec des puzzles nécessitant de la coordination.", image: "images/placeholder-3ds.svg" },
    { id: 123, title: "Pokemon Alpha Sapphire", console: "3ds", year: 2014, genre: "rpg", description: "Le remake de Pokémon Saphir avec la méga-évolution et le Delta Episode.", image: "images/placeholder-3ds.svg" },
    { id: 124, title: "Pokemon Omega Ruby", console: "3ds", year: 2014, genre: "rpg", description: "Le remake de Pokémon Rubis ramenant Hoenn en 3D avec de nouveaux contenus.", image: "images/placeholder-3ds.svg" },
    { id: 125, title: "Pokemon Ultra Sun", console: "3ds", year: 2017, genre: "rpg", description: "La version améliorée de Pokémon Soleil avec l'Ultra-Dimension et plus de contenu.", image: "images/placeholder-3ds.svg" },
    { id: 126, title: "Pokemon Y", console: "3ds", year: 2013, genre: "rpg", description: "La 6e génération introduisant la 3D, la méga-évolution et la région de Kalos.", image: "images/placeholder-3ds.svg" },

    // Nintendo DS
    { id: 200, title: "Inazuma Eleven", console: "ds", year: 2011, genre: "rpg", description: "Le premier opus du RPG de football culte avec des supertechniques incroyables.", image: "images/placeholder-ds.svg" },
    { id: 201, title: "Inazuma Eleven 2: Blizzard", console: "ds", year: 2012, genre: "rpg", description: "La suite avec une nouvelle menace mondiale et plus d'équipes à affronter.", image: "images/placeholder-ds.svg" },
    { id: 202, title: "The Legend of Zelda: Phantom Hourglass", console: "ds", year: 2007, genre: "adventure", description: "La suite directe de Wind Waker avec des contrôles tactiles innovants.", image: "images/placeholder-ds.svg" },
    { id: 203, title: "The Legend of Zelda: Spirit Tracks", console: "ds", year: 2009, genre: "adventure", description: "Link conduit un train à vapeur dans cette aventure Zelda unique.", image: "images/placeholder-ds.svg" },
    { id: 204, title: "Mario Kart DS", console: "ds", year: 2005, genre: "sport", description: "Le premier Mario Kart portable avec du multijoueur en ligne et sans fil.", image: "images/placeholder-ds.svg" },
    { id: 205, title: "Pokemon SoulSilver", console: "ds", year: 2010, genre: "rpg", description: "Le remake de Pokémon Argent avec le Pokéwalker et les Pokémon qui vous suivent.", image: "images/placeholder-ds.svg" },
    { id: 206, title: "Pokemon White 2", console: "ds", year: 2012, genre: "rpg", description: "La suite directe de Pokémon Blanc se déroulant 2 ans après, une première pour la série.", image: "images/placeholder-ds.svg" },
    { id: 207, title: "Pokemon Diamond", console: "ds", year: 2007, genre: "rpg", description: "La 4e génération dans la région de Sinnoh introduisant le monde souterrain.", image: "images/placeholder-ds.svg" },
    { id: 208, title: "Pokemon Black", console: "ds", year: 2011, genre: "rpg", description: "La 5e génération avec une histoire plus mature et 156 nouveaux Pokémon.", image: "images/placeholder-ds.svg" },
    { id: 209, title: "Pokemon Platinum", console: "ds", year: 2009, genre: "rpg", description: "La version améliorée de Diamant/Perle avec le Monde Distorsion de Giratina.", image: "images/placeholder-ds.svg" },
    { id: 210, title: "Pokemon HeartGold", console: "ds", year: 2010, genre: "rpg", description: "Le remake de Pokémon Or considéré comme l'un des meilleurs jeux Pokémon.", image: "images/placeholder-ds.svg" },

    // Wii U
    { id: 300, title: "Wii Party U", console: "wiiu", year: 2013, genre: "party", description: "Le party game Wii Party revient sur Wii U avec de nouveaux mini-jeux et le GamePad.", image: "images/placeholder-wiiu.svg" },
    { id: 301, title: "Bayonetta 2", console: "wiiu", year: 2014, genre: "action", description: "Le hack'n'slash spectaculaire exclusif Wii U considéré comme l'un des meilleurs jeux d'action.", image: "images/placeholder-wiiu.svg" },
    { id: 302, title: "Captain Toad: Treasure Tracker", console: "wiiu", year: 2014, genre: "platform", description: "Des puzzles-dioramas adorables avec Captain Toad cherchant des trésors.", image: "images/placeholder-wiiu.svg" },
    { id: 303, title: "Donkey Kong Country: Tropical Freeze", console: "wiiu", year: 2014, genre: "platform", description: "Le difficile mais magnifique jeu de plateforme avec DK et ses amis.", image: "images/placeholder-wiiu.svg" },
    { id: 304, title: "Hyrule Warriors", console: "wiiu", year: 2014, genre: "action", description: "Le musou Zelda original fusionnant Dynasty Warriors et The Legend of Zelda.", image: "images/placeholder-wiiu.svg" },
    { id: 305, title: "Kirby and the Rainbow Paintbrush", console: "wiiu", year: 2015, genre: "platform", description: "Kirby devient une boule d'argile dans ce jeu au style visuel unique utilisant le tactile.", image: "images/placeholder-wiiu.svg" },
    { id: 306, title: "The Legend of Zelda: The Wind Waker HD", console: "wiiu", year: 2013, genre: "adventure", description: "Le remaster HD du Zelda cel-shading de GameCube avec des améliorations.", image: "images/placeholder-wiiu.svg" },
    { id: 307, title: "The Legend of Zelda: Twilight Princess HD", console: "wiiu", year: 2016, genre: "adventure", description: "Le remaster HD du Zelda sombre de la Wii avec le mode héros et amiibo.", image: "images/placeholder-wiiu.svg" },
    { id: 308, title: "Mario Kart 8", console: "wiiu", year: 2014, genre: "sport", description: "Le Mario Kart HD magnifique avec l'anti-gravité et 48 circuits.", image: "images/placeholder-wiiu.svg" },
    { id: 309, title: "Mario Party 10", console: "wiiu", year: 2015, genre: "party", description: "Mario Party sur Wii U avec le mode Bowser Party utilisant le GamePad.", image: "images/placeholder-wiiu.svg" },
    { id: 310, title: "Mario Tennis: Ultra Smash", console: "wiiu", year: 2015, genre: "sport", description: "Le tennis de Mario sur Wii U avec le mode Mega Battle.", image: "images/placeholder-wiiu.svg" },
    { id: 311, title: "New Super Luigi U", console: "wiiu", year: 2013, genre: "platform", description: "L'extension New Super Mario Bros. U entièrement rejouable avec Luigi.", image: "images/placeholder-wiiu.svg" },
    { id: 312, title: "Paper Mario: Color Splash", console: "wiiu", year: 2016, genre: "rpg", description: "Paper Mario revient avec des mécaniques de peinture et des combats au tour par tour.", image: "images/placeholder-wiiu.svg" },
    { id: 313, title: "Pikmin 3", console: "wiiu", year: 2013, genre: "rpg", description: "La stratégie temps réel de Miyamoto avec 3 capitaines et des Pikmin adorables.", image: "images/placeholder-wiiu.svg" },
    { id: 314, title: "Splatoon", console: "wiiu", year: 2015, genre: "action", description: "Le shooter coloré révolutionnaire de Nintendo qui a créé une nouvelle franchise.", image: "images/placeholder-wiiu.svg" },
    { id: 315, title: "Super Mario 3D World", console: "wiiu", year: 2013, genre: "platform", description: "Le Mario 3D multijoueur jusqu'à 4 joueurs avec des niveaux créatifs.", image: "images/placeholder-wiiu.svg" },
    { id: 316, title: "Super Mario Maker", console: "wiiu", year: 2015, genre: "platform", description: "Créez vos propres niveaux Mario avec le GamePad ! Le jeu qui a lancé le phénomène.", image: "images/placeholder-wiiu.svg" },
    { id: 317, title: "Super Smash Bros. for Wii U", console: "wiiu", year: 2014, genre: "fighting", description: "Le Smash Bros HD avec 58 personnages et des stages magnifiques.", image: "images/placeholder-wiiu.svg" },
    { id: 318, title: "Yoshi's Woolly World", console: "wiiu", year: 2015, genre: "platform", description: "Yoshi dans un monde de laine avec un style visuel adorable et créatif.", image: "images/placeholder-wiiu.svg" },

    // Wii
    { id: 400, title: "Animal Crossing: City Folk", console: "wii", year: 2008, genre: "adventure", description: "Animal Crossing sur Wii avec une ville à visiter et le WiiSpeak.", image: "images/placeholder-wii.svg" },
    { id: 401, title: "Kirby's Return to Dream Land", console: "wii", year: 2011, genre: "platform", description: "Le Kirby multijoueur classique sur Wii avec 4 joueurs simultanés.", image: "images/placeholder-wii.svg" },
    { id: 402, title: "Mario Sports Mix", console: "wii", year: 2011, genre: "sport", description: "Une compilation de sports avec Mario : volley, hockey, basket et dodge-ball.", image: "images/placeholder-wii.svg" },
    { id: 403, title: "Super Smash Bros. Brawl", console: "wii", year: 2008, genre: "fighting", description: "Le Smash Bros de la Wii avec le mode histoire L'Émissaire Subspacial.", image: "images/placeholder-wii.svg" },
    { id: 404, title: "Donkey Kong Country Returns", console: "wii", year: 2010, genre: "platform", description: "Le retour de DKC après 14 ans avec un gameplay exigeant et moderne.", image: "images/placeholder-wii.svg" },
    { id: 405, title: "Link's Crossbow Training", console: "wii", year: 2007, genre: "action", description: "Un jeu de tir sur rail Zelda utilisant le Wii Zapper, inclus avec l'accessoire.", image: "images/placeholder-wii.svg" },
    { id: 406, title: "Mario Super Sluggers", console: "wii", year: 2008, genre: "sport", description: "Le baseball arcade de Mario avec un mode aventure et des mini-jeux.", image: "images/placeholder-wii.svg" },
    { id: 407, title: "Pokemon Battle Revolution", console: "wii", year: 2007, genre: "rpg", description: "Combattez en 3D avec vos Pokémon DS importés dans des batailles spectaculaires.", image: "images/placeholder-wii.svg" },
    { id: 408, title: "The Legend of Zelda: Skyward Sword", console: "wii", year: 2011, genre: "adventure", description: "Le dernier Zelda Wii avec Motion Plus racontant l'origine de la série.", image: "images/placeholder-wii.svg" },
    { id: 409, title: "FIFA 13", console: "wii", year: 2012, genre: "sport", description: "Le jeu de football EA Sports sur Wii avec les équipes de la saison 2012-2013.", image: "images/placeholder-wii.svg" },
    { id: 410, title: "Mario & Sonic at the Olympic Winter Games", console: "wii", year: 2009, genre: "sport", description: "Mario et Sonic s'affrontent aux Jeux Olympiques d'hiver avec des épreuves variées.", image: "images/placeholder-wii.svg" },
    { id: 411, title: "Mario Kart Wii", console: "wii", year: 2008, genre: "sport", description: "Le Mario Kart avec le volant Wii ! Un des jeux les plus vendus de la console.", image: "images/placeholder-wii.svg" },
    { id: 412, title: "Poképark Wii: Pikachu's Adventure", console: "wii", year: 2010, genre: "adventure", description: "Incarnez Pikachu dans un parc d'attractions Pokémon rempli de mini-jeux.", image: "images/placeholder-wii.svg" },
    { id: 413, title: "FIFA 15", console: "wii", year: 2014, genre: "sport", description: "Une des dernières versions FIFA sur Wii avec les équipes actualisées.", image: "images/placeholder-wii.svg" },
    { id: 414, title: "The Legend of Zelda: Twilight Princess", console: "wii", year: 2006, genre: "adventure", description: "Le Zelda de lancement Wii sombre et épique avec Link qui se transforme en loup.", image: "images/placeholder-wii.svg" },
    { id: 415, title: "Mario & Sonic at the Olympic Games", console: "wii", year: 2007, genre: "sport", description: "Le premier crossover Mario et Sonic aux Jeux Olympiques de Beijing 2008.", image: "images/placeholder-wii.svg" },
    { id: 416, title: "Poképark 2: Wonders Beyond", console: "wii", year: 2012, genre: "adventure", description: "La suite avec Pikachu, Snivy, Tepig et Oshawott explorant de nouveaux mondes.", image: "images/placeholder-wii.svg" },
    { id: 417, title: "Super Mario Galaxy", console: "wii", year: 2007, genre: "platform", description: "Le chef-d'œuvre révolutionnaire de Mario dans l'espace avec la gravité.", image: "images/placeholder-wii.svg" },
    { id: 418, title: "Wii Party", console: "wii", year: 2010, genre: "party", description: "Le party game de Nintendo avec 13 modes et 80 mini-jeux pour s'amuser en famille.", image: "images/placeholder-wii.svg" },
    { id: 419, title: "Just Dance 2018", console: "wii", year: 2017, genre: "sport", description: "Une des dernières sorties sur Wii ! Dansez sur les hits de 2018.", image: "images/placeholder-wii.svg" },
    { id: 420, title: "Mario Party 8", console: "wii", year: 2007, genre: "party", description: "Mario Party sur Wii avec des mini-jeux utilisant la Wiimote.", image: "images/placeholder-wii.svg" },
    { id: 421, title: "Rabbids Go Home", console: "wii", year: 2009, genre: "platform", description: "Les Lapins Crétins veulent aller sur la Lune en collectant des objets humains.", image: "images/placeholder-wii.svg" },
    { id: 422, title: "Super Mario Galaxy 2", console: "wii", year: 2010, genre: "platform", description: "La suite encore meilleure avec Yoshi et des galaxies encore plus créatives.", image: "images/placeholder-wii.svg" },
    { id: 423, title: "Wii Play", console: "wii", year: 2007, genre: "party", description: "Une collection de 9 mini-jeux simples pour découvrir la Wiimote.", image: "images/placeholder-wii.svg" },
    { id: 424, title: "Kirby's Epic Yarn", console: "wii", year: 2010, genre: "platform", description: "Kirby dans un monde de tissu avec un style artistique unique et apaisant.", image: "images/placeholder-wii.svg" },
    { id: 425, title: "Mario Party 9", console: "wii", year: 2012, genre: "party", description: "Mario Party avec un nouveau système : tous les joueurs dans le même véhicule.", image: "images/placeholder-wii.svg" },
    { id: 426, title: "New Super Mario Bros. Wii", console: "wii", year: 2009, genre: "platform", description: "Le retour du Mario 2D avec 4 joueurs simultanés ! Un immense succès.", image: "images/placeholder-wii.svg" },
    { id: 427, title: "Wii Fit", console: "wii", year: 2008, genre: "sport", description: "Le phénomène fitness avec la Wii Balance Board pour faire du sport à la maison.", image: "images/placeholder-wii.svg" },
    { id: 428, title: "Super Paper Mario", console: "wii", year: 2007, genre: "rpg", description: "Paper Mario en plateforme 2D/3D avec une histoire épique et de l'humour.", image: "images/placeholder-wii.svg" }
];

// Fonctions utilitaires
function getGamesByConsole(console) {
    if (console === 'all') return gamesDatabase;
    return gamesDatabase.filter(game => game.console === console);
}

function getGamesByGenre(genre) {
    if (genre === 'all') return gamesDatabase;
    return gamesDatabase.filter(game => game.genre === genre);
}

function searchGames(query) {
    const lowerQuery = query.toLowerCase();
    return gamesDatabase.filter(game => 
        game.title.toLowerCase().includes(lowerQuery) ||
        game.description.toLowerCase().includes(lowerQuery)
    );
}

function getStats() {
    return {
        total: gamesDatabase.length,
        switch: gamesDatabase.filter(g => g.console === 'switch').length,
        '3ds': gamesDatabase.filter(g => g.console === '3ds').length,
        ds: gamesDatabase.filter(g => g.console === 'ds').length,
        wiiu: gamesDatabase.filter(g => g.console === 'wiiu').length,
        wii: gamesDatabase.filter(g => g.console === 'wii').length
    };
}

function getSeriesCount() {
    const series = new Set();
    gamesDatabase.forEach(game => {
        const title = game.title.toLowerCase();
        if (title.includes('mario')) series.add('mario');
        if (title.includes('zelda')) series.add('zelda');
        if (title.includes('pokemon')) series.add('pokemon');
        if (title.includes('kirby')) series.add('kirby');
        if (title.includes('fire emblem')) series.add('fire emblem');
        if (title.includes('splatoon')) series.add('splatoon');
        if (title.includes('animal crossing')) series.add('animal crossing');
        if (title.includes('layton')) series.add('layton');
        if (title.includes('yo-kai') || title.includes('yokai')) series.add('yokai');
        if (title.includes('inazuma')) series.add('inazuma');
        if (title.includes('demon slayer')) series.add('demon slayer');
    });
    return series.size;
}
