const allGames = [
    {
        id: 1, 
        title: "FIFA 23",
        link: "fifa23.html",
        img: "fifa23.jpg", 
        desc: "Digital Athletics Repository: Experience the World's Game with HyperMotion2 technology. Features men's and women's World Cup simulation data.",
        tags: "fifa 23, football, soccer, ea sports, sports, f23"
    },
    {
        id: 2, 
        title: "Marvel's Spider-Man 2",
        link: "spiderman2.html",
        img: "spiderman2.jpg", 
        desc: "Urban Heroic Archive: Nine months after Miles Morales, Peter and Miles must stop Kraven and the monstrous Venom simulation.",
        tags: "spider-man 2, marvel, peter parker, miles morales, insomniac games, venom"
    },
    {
        id: 3, 
        title: "GTA Vice City: Next Gen Edition",
        link: "gtavcng.html",
        img: "gtavcng.jpg", 
        desc: "Engine Overhaul Repository: Experience the 80s rebuilt on the RAGE engine. Features modern physics, lighting, and textures for Tommy Vercetti's empire.",
        tags: "gta vice city, next gen, vcnge, rockstar games, open world, mods"
    },
    {
        id: 4,
        title: "TEKKEN 7",
        link: "tekken7.html",
        img: "tekken7.jpg",
        desc: "Mishima Saga Repository: Competitive martial arts simulation. High-frame-rate technical archive for performance fighting mechanics.",
        tags: "tekken 7 pc download fighting game action martial arts tournament kazuya heihachi",
        titleColorClass: "text-red-400"
    },
    {
        id: 5, 
        title: "Tekken 8",
        link: "tekken8.html",
        img: "tekken8.jpg", 
        desc: "Next-Gen Combat Archive: Legendary fighting franchise entry. Experience aggressive combat systems and stunning visual fidelity with Jin and Kazuya.",
        tags: "tekken 8, t8, fighting game, bandai namco, jin kazama"
    },
    {
        id: 6, 
        title: "GTA San Andreas: Retextured",
        link: "gtasaretextured.html",
        img: "gtasaretextured.jpg", 
        desc: "Legacy Digital Enhancement: The definitive way to play a classic. Featuring 4K textures and enhanced draw distances for the San Andreas simulation.",
        tags: "gta sa, san andreas, retextured, rockstar games, open world"
    },
    {
        id: 7,
        title: "Cricket 24",
        link: "cricket24.html",
        img: "cricket2024.jpg", 
        desc: "Sports Simulation Archive: The most realistic cricket simulation ever. Featuring licensed global teams and advanced Pro-Team technical modes.",
        tags: "cricket 24, sports, big ant studios, cricket pc"
    },
    {
        id: 8,
        title: "GHOST OF TSUSHIMA",
        link: "ghostoftsushima.html",
        img: "ghostoftsushima.jpg",
        desc: "Definitive Digital Archive: Experience the journey of Jin Sakai. Master samurai discipline and stealth in this high-fidelity open-world repository.",
        tags: "ghost of tsushima pc download samurai open world action stealth jin sakai mongol invasion adventure",
        titleColorClass: "text-red-400"
    },
    {
        id: 9,
        title: "RED DEAD REDEMPTION 2",
        link: "rdr2.html",
        img: "rdr2.jpg",
        desc: "Digital Repository Entry: An epic tale of loyalty and the American frontier. Features advanced environmental physics and deep narrative simulation.",
        tags: "red dead redemption 2 western adventure arthur morgan",
        titleColorClass: "text-blue-400"
    },
    {
        id: 10,
        title: "GTA: VICE CITY",
        link: "gtavc.html",
        img: "gtavc.jpg",
        desc: "Legacy Repository: Relive the 80s criminal underworld. Digital archive featuring the complete Tommy Vercetti storyline and period-accurate soundtrack.",
        tags: "gta grand theft auto vice city 80s action",
        titleColorClass: "text-red-400"
    },
    {
        id: 11,
        title: "GTA: SAN ANDREAS",
        link: "gtasanandreas.html",
        img: "gtasa1.jpg",
        desc: "Digital Archive Entry: The definitive urban simulation of San Andreas. Explore vast territories with enhanced draw distances and complete mission data.",
        tags: "gta san andreas carl cj johnson open world action adventure los santos",
        titleColorClass: "text-blue-400"
    },
    {
        id: 12,
        title: "GTA IV",
        link: "gta4.html",
        img: "gta4.jpg",
        desc: "High-Fidelity Repository: Liberty City digital simulation. Experience the complete narrative of Niko Bellic with physics-based environmental interaction.",
        tags: "gta 4 gta iv rockstar open world liberty city action adventure",
        titleColorClass: "text-red-400"
    },
    {
        id: 13,
        title: "GRAND THEFT AUTO V",
        link: "gta5.html",
        img: "gta5.jpg",
        desc: "Premium Digital Archive: The Los Santos repository. Includes full story campaign and technical optimization for high-performance PC hardware.",
        tags: "gta grand theft auto 5 action adventure open world",
        titleColorClass: "text-blue-400"
    },
    {
        id: 14,
        title: "GTA V REDUX ENHANCED",
        link: "gta5redux.html",
        img: "gta5redux2.jpg",
        desc: "Visual Enhancement Project: Experience Los Santos with 4K textures, advanced shaders, and realistic weather simulation in this curated repository.",
        tags: "gta 5 redux enhanced edition pc download open world action adventure mod graphics realistic",
        titleColorClass: "text-red-400"
    },
    {
        id: 15,
        title: "THE LAST OF US PART II",
        link: "lastofuspart2.html",
        img: "lastofusp2.jpg",
        desc: "Cinematic Narrative Repository: A brutal quest for justice in a post-apocalyptic simulation. Features industry-leading animation and technical detail.",
        tags: "the last of us part 2 pc download survival horror action adventure drama tlou2",
        titleColorClass: "text-blue-400"
    },
    {
        id: 16,
        title: "THE LAST OF US PART I",
        link: "lastofuspart1.html",
        img: "lastofuspart1.jpg",
        desc: "Digital Survival Archive: The definitive journey of Joel and Ellie. Rebuilt for modern PC hardware with advanced AI and atmospheric rendering.",
        tags: "the last of us tlou joel ellie horror survival",
        titleColorClass: "text-red-400"
    },
    {
        id: 17,
        title: "ASSASSIN'S CREED 1",
        link: "assassinscreed1.html",
        img: "assassincreed1.jpg",
        desc: "Historical Simulation: The Third Crusade repository. Archive of the Brotherhood's origins featuring Altaïr Ibn-La'Ahad.",
        tags: "assassin's creed 1 ubisoft stealth parkour historical adventure",
        titleColorClass: "text-blue-400"
    },
    {
        id: 18,
        title: "ASSASSIN'S CREED 2",
        link: "assassinscreed2.html",
        img: "assassincreed22.jpg",
        desc: "Renaissance Digital Archive: The Ezio Auditore collection. Experience technical mastery of parkour and stealth in 15th-century Italy.",
        tags: "assassin's creed 2 ezio stealth parkour renaissance adventure",
        titleColorClass: "text-red-400"
    },
    {
        id: 19,
        title: "ASSASSIN'S CREED 3",
        link: "assassinscreed3.html",
        img: "assassinscreed3.jpg",
        desc: "Colonial Era Repository: Navigate the American Revolution. Features naval combat simulation and high-density forest parkour.",
        tags: "assassin's creed 3 connor kenway stealth action parkour pc game historical",
        titleColorClass: "text-blue-400"
    },
    {
        id: 20,
        title: "ASSASSIN'S CREED VALHALLA",
        link: "valhalla.html",
        img: "acvalhalla1.jpg",
        desc: "Viking Age Repository: Lead clans and forge alliances in Dark Age England. Complete digital edition with post-launch content integration.",
        tags: "assassins creed valhalla viking rpg open world",
        titleColorClass: "text-red-400"
    },
    {
        id: 21,
        title: "FAR CRY 1",
        link: "farcry1.html",
        img: "farcry1.jpg",
        desc: "Tactical FPS Archive: Tropical island survival simulation. Technical exploration of early open-world sandbox mechanics.",
        tags: "far cry 1 fps shooter tropical islands action pc game classic",
        titleColorClass: "text-blue-400"
    },
    {
        id: 22,
        title: "FAR CRY 2",
        link: "farcry2.html",
        img: "farcry2.jpg",
        desc: "Survival Conflict Repository: Advanced fire propagation and weapon degradation simulation set in a digital African conflict zone.",
        tags: "far cry 2 fps shooter open world africa mercenary survival pc game",
        titleColorClass: "text-red-400"
    },
    {
        id: 23,
        title: "FAR CRY 3",
        link: "farcry3.html",
        img: "farcry3.jpg",
        desc: "Open-World Action Archive: The Rook Islands digital repository. Features optimized combat mechanics and environmental AI.",
        tags: "far cry 3 fps shooter tropical islands open world action pc game",
        titleColorClass: "text-blue-400"
    },
    {
        id: 24,
        title: "FAR CRY 4 GOLD",
        link: "farcry4.html",
        img: "farcry4.jpg",
        desc: "Kyrat Digital Repository: Complete edition featuring Himalayan terrain simulation and advanced vertical exploration mechanics.",
        tags: "far cry 4 gold edition fps shooter open world action ubisoft kyrat pc game",
        titleColorClass: "text-red-400"
    },
    {
        id: 25,
        title: "FAR CRY 5",
        link: "farcry5.html",
        img: "farcry5.jpg",
        desc: "Hope County Digital Entry: Tactical liberation simulation. Includes complete mission data and environmental physics for PC hardware.",
        tags: "far cry 5 fps shooter open world action ubisoft hope county pc game",
        titleColorClass: "text-blue-400"
    },
    {
        id: 26,
        title: "FAR CRY 6",
        link: "farcry6.html",
        img: "farcry6-1.jpg",
        desc: "Revolutionary Narrative Archive: Explore the Yara archipelago. Digital repository for high-resolution tropical environmental testing.",
        tags: "far cry 6 ubisoft action shooter tropical open world",
        titleColorClass: "text-red-400"
    },
    {
        id: 27,
        title: "UNCHARTED 4",
        link: "uncharted.html",
        img: "uncharted.jpg",
        desc: "Cinematic Exploration Repository: Technical masterpiece featuring advanced global illumination and high-detail asset rendering.",
        tags: "uncharted 4 nathan drake action adventure sony",
        titleColorClass: "text-blue-400"
    },
    {
        id: 28,
        title: "CYBERPUNK 2077",
        link: "cyberpunk2077.html",
        img: "cyberpunk2077.jpg",
        desc: "Night City Digital Simulation: A sprawling sci-fi repository featuring ray-tracing technology and deep narrative branches.",
        tags: "cyberpunk 2077 cd projekt red sci-fi rpg open world",
        titleColorClass: "text-red-400"
    },
    {
        id: 29,
        title: "MAX PAYNE 3",
        link: "maxpayne3.html",
        img: "maxpayne3.jpg",
        desc: "Tactical Combat Archive: Cinematic São Paulo simulation. Features Euphoria physics engine and advanced bullet-time mechanics.",
        tags: "max payne 3 rockstar shooter action bullet time",
        titleColorClass: "text-blue-400"
    },
    {
        id: 30,
        title: "WATCH DOGS (2014)",
        link: "watchdogs1.html",
        img: "watchdogs1.jpg",
        desc: "Networked City Repository: Chicago digital simulation featuring advanced hacking mechanics and urban environmental interaction.",
        tags: "watch dogs 2014 aiden pearce hacking open world",
        titleColorClass: "text-red-400"
    },
    {
        id: 31,
        title: "IGI 2: COVERT STRIKE",
        link: "igi2.html",
        img: "igi2.jpg",
        desc: "Espionage Digital Entry: Global stealth simulation. Archive of David Jones' tactical operations with optimized AI patterns.",
        tags: "igi 2 covert strike david jones stealth action espionage",
        titleColorClass: "text-blue-400"
    },
    {
        id: 32,
        title: "PROJECT IGI 1",
        link: "igi1.html",
        img: "igi1.jpg",
        desc: "Legacy Stealth Repository: The original infiltration simulation. Complete digital entry for performance testing on modern systems.",
        tags: "igi 1 project igi i'm going in tactical fps stealth",
        titleColorClass: "text-red-400"
    },
    {
        id: 33,
        title: "HITMAN: BLOOD MONEY",
        link: "hitman1.html",
        img: "hitman1.jpg",
        desc: "Strategic Infiltration Archive: Professional Agent 47 simulation. Digital entry for high-stakes environmental puzzle-solving.",
        tags: "hitman blood money agent 47 stealth action assassination pc game",
        titleColorClass: "text-blue-400"
    },
    {
        id: 34,
        title: "DYING LIGHT",
        link: "dyinglight.html",
        img: "dyinglight.jpg",
        desc: "Harran Digital Simulation: Advanced parkour and day-night cycle repository. Features high-resolution asset testing for urban survival.",
        tags: "dying light zombie survival parkour crafting",
        titleColorClass: "text-red-400"
    },
    {
        id: 35,
        title: "HOGWARTS LEGACY",
        link: "hogwartslegacy.html",
        img: "hogwartslegacy1.jpg",
        desc: "Wizarding World Repository: Sprawling 1800s simulation. Digital archive of magical environmental effects and character progression.",
        tags: "hogwarts legacy harry potter wizard rpg magic",
        titleColorClass: "text-blue-400"
    },
    {
        id: 36,
        title: "MAX PAYNE 1",
        link: "maxpayne1.html",
        img: "maxpayne1.jpg",
        desc: "Noir Narrative Archive: The original New York City simulation. Legacy repository for Bullet Time performance metrics.",
        tags: "max payne 1 pc download bullet time noir action",
        titleColorClass: "text-red-400"
    },
    {
        id: 37,
        title: "MAX PAYNE 2",
        link: "maxpayne2.html",
        img: "maxpayne2.jpg",
        desc: "Cinematic Sequel Repository: Enhanced physics-based storytelling. A deep technical archive of the iconic Fall of Max Payne.",
        tags: "max payne 2 pc download bullet time noir action",
        titleColorClass: "text-blue-400"
    },
    {
        id: 38,
        title: "NFS II SPECIAL EDITION",
        link: "nfs2.html",
        img: "nfs.jpg",
        desc: "Retro Racing Archive: Legacy street racing simulation. Archive of exotic performance vehicles and high-speed track testing.",
        tags: "nfs 2 se download pc racing car street speed",
        titleColorClass: "text-red-400"
    },
    {
        id: 39,
        title: "NEED FOR SPEED SHIFT",
        link: "nfsshift.html",
        img: "nfsshift1.jpg",
        desc: "Simulation Racing Entry: Authentic track-based physics repository. Cockpit-view asset testing for professional racing hardware.",
        tags: "need for speed shift nfs shift racing pc download",
        titleColorClass: "text-blue-400"
    },
    {
        id: 40,
        title: "NFS MOST WANTED 2005",
        link: "nfsmw.html",
        img: "nfsmw.jpg",
        desc: "Rockport Digital Archive: The definitive pursuit simulation. Legacy repository for open-world street racing and AI evade testing.",
        tags: "nfs most wanted 2005 racing blacklist cars",
        titleColorClass: "text-red-400"
    },
    {
        id: 41,
        title: "NFS MOST WANTED 2012",
        link: "nfsmw2012.html",
        img: "nfsmw2012.jpg",
        desc: "Fairhaven Digital Repository: High-speed pursuit simulation with social integration and open-world vehicle exploration.",
        tags: "nfs most wanted 2012 racing cops cars street",
        titleColorClass: "text-blue-400"
    },
    {
        id: 42,
        title: "NEED FOR SPEED RIVALS",
        link: "nfsrivals.html",
        img: "nfsrivals.jpg",
        desc: "Redview County Digital Entry: Asymmetric pursuit simulation. High-fidelity repository for performance vehicle testing.",
        tags: "nfs rivals pc download street racing cops open world car customization",
        titleColorClass: "text-red-400"
    },
    {
        id: 43,
        title: "FORZA HORIZON 5",
        link: "forzahorizon5.html",
        img: "forzahorizon5.jpg",
        desc: "Mexico Digital Simulation: Photogrammetry-based environmental repository. Archive of premium performance vehicles and dynamic weather.",
        tags: "forza horizon 5 pc download racing open world cars multiplayer mexico",
        titleColorClass: "text-blue-400"
    },
    {
        id: 44,
        title: "FORZA HORIZON 4",
        link: "forzahorizon4.html",
        img: "forzahorizon4.jpg",
        desc: "UK Dynamic Season Repository: Seasonal environmental testing archive. Features complete vehicle catalog and landscape simulation.",
        tags: "forza horizon 4 pc download racing open world multiplayer car customization uk seasons",
        titleColorClass: "text-red-400"
    },
    {
        id: 45,
        title: "LARA CROFT: OSIRIS",
        link: "laracrofttos.html",
        img: "laracrofttos.jpg",
        desc: "Egyptian Archaeological Archive: Cooperative puzzle-solving simulation. Digital entry for ancient environmental asset testing.",
        tags: "lara croft temple of osiris pc download adventure puzzles egypt treasures action",
        titleColorClass: "text-blue-400"
    },
    {
        id: 46, 
        title: "Resident Evil 5",
        link: "re5.html",
        img: "re5.jpg", 
        desc: "Bio-Organic Thriller Archive: Experience the fear in full HD. Cooperation-based survival simulation set in a digital African environment.",
        tags: "resident evil 5, re5, horror, action, capcom"
    },
    {
        id: 47, 
        title: "Resident Evil 4 Remake",
        link: "re4remake.html",
        img: "re4.jpg", 
        desc: "Modernized Survival Repository: A reimagining of the classic 2005 simulation. Features terrifyingly detailed graphics and updated mission data.",
        tags: "resident evil 4 remake, re4, horror, capcom, leon kennedy"
    }
];
