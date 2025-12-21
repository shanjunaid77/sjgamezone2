const allGames = [
    {
        id: 1,
        title: "GHOST OF TSUSHIMA",
        link: "https://sjgamezone.vercel.app/ghostoftsushima",
        img: "ghostoftsushima.jpg",
        desc: "Become the Ghost as you fight to reclaim your homeland from the Mongol invasion. Master samurai combat, stealth, exploration, and breathtaking open-world adventures.",
        tags: "ghost of tsushima pc download samurai open world action stealth jin sakai mongol invasion adventure",
        titleColorClass: "text-red-400"
    },
    {
        id: 2,
        title: "RED DEAD REDEMPTION 2",
        link: "https://sjgamezone.vercel.app/rdr2",
        img: "rdr2.jpg",
        desc: "Epic tale of loyalty & the wild west. Full PC download. Experience the compelling story of Arthur Morgan and the Van der Linde gang.",
        tags: "red dead redemption 2 western adventure arthur morgan",
        titleColorClass: "text-blue-400"
    },

    // --- GTA Series ---
    {
        id: 3,
        title: "GTA: VICE CITY",
        link: "https://sjgamezone.vercel.app/gtavc",
        img: "gtavc.jpg",
        desc: "Relive the 80s action, fast cars & neon lights. Free full PC download. Step into the vibrant and criminal underworld of Vice City as Tommy Vercetti.",
        tags: "gta grand theft auto vice city 80s action",
        titleColorClass: "text-red-400"
    },
    {
        id: 4,
        title: "GTA: SAN ANDREAS",
        link: "https://sjgamezone.vercel.app/gtasanandreas",
        img: "gtasa1.jpg",
        desc: "Explore Los Santos, San Fierro & Las Venturas. Full open-world gameplay. Follow the story of CJ Johnson as he returns home to the chaos of the streets.",
        tags: "gta san andreas carl cj johnson open world action adventure los santos",
        titleColorClass: "text-blue-400"
    },
    {
        id: 5,
        title: "GTA IV",
        link: "https://sjgamezone.vercel.app/gta4",
        img: "gta4.jpg",
        desc: "Explore Liberty City as Niko Bellic. Realistic open-world action. Experience a darker, more realistic take on the criminal world in the iconic Liberty City.",
        tags: "gta 4 gta iv rockstar open world liberty city action adventure",
        titleColorClass: "text-red-400"
    },
    {
        id: 6,
        title: "GRAND THEFT AUTO V",
        link: "https://sjgamezone.vercel.app/gta5",
        img: "gta5.jpg",
        desc: "Explore Los Santos — story & online mode. Free full PC download. Follow the interconnected stories of Franklin, Michael, and Trevor in a massive world.",
        tags: "gta grand theft auto 5 action adventure open world",
        titleColorClass: "text-blue-400"
    },
    {
        id: 7,
        title: "GTA V REDUX ENHANCED EDITION",
        link: "https://sjgamezone.vercel.app/gta5redux",
        img: "gta5redux.jpg",
        desc: "Experience Los Santos like never before with enhanced 4K visuals, advanced physics, dynamic weather, and refined gameplay in this massive open-world masterpiece.",
        tags: "gta 5 redux enhanced edition pc download open world action adventure mod graphics realistic",
        titleColorClass: "text-red-400"
    },

    {
        id: 8,
        title: "THE LAST OF US PART II",
        link: "https://sjgamezone.vercel.app/lastofuspart2.html",
        img: "lastofusp2.jpg",
        desc: "Five years after their perilous journey, Ellie and Joel settle down in Wyoming. A violent event shatters their peace, driving Ellie on a brutal quest for justice in a post-apocalyptic world.",
        tags: "the last of us part 2 pc download survival horror action adventure drama tlou2",
        titleColorClass: "text-blue-400"
    },
    {
        id: 9,
        title: "THE LAST OF US PART I",
        link: "https://sjgamezone.vercel.app/lastofuspart1",
        img: "lastofuspart1.jpg",
        desc: "Joel & Ellie's emotional survival adventure. Full PC download. Navigate a post-apocalyptic world ravaged by a deadly fungus outbreak and hostile survivors.",
        tags: "the last of us tlou joel ellie horror survival",
        titleColorClass: "text-red-400"
    },

    // --- Assassin's Creed Series ---
    {
        id: 10,
        title: "ASSASSIN'S CREED 1",
        link: "https://sjgamezone.vercel.app/assassinscreed1",
        img: "assassincreed1.jpg",
        desc: "Origins of the Assassin Brotherhood. Parkour, stealth missions, and historical adventure. Take on the role of Altaïr during the Third Crusade in the Holy Land.",
        tags: "assassin's creed 1 ubisoft stealth parkour historical adventure",
        titleColorClass: "text-blue-400"
    },
    {
        id: 11,
        title: "ASSASSIN'S CREED 2",
        link: "https://sjgamezone.vercel.app/assassinscreed2",
        img: "assassincreed22.jpg",
        desc: "Step into Renaissance Italy as Ezio Auditore. Full PC download. Experience Ezio's journey of revenge and discovery in the beautifully rendered Italian cities.",
        tags: "assassin's creed 2 ezio stealth parkour renaissance adventure",
        titleColorClass: "text-red-400"
    },
    {
        id: 12,
        title: "ASSASSIN'S CREED 3",
        link: "https://sjgamezone.vercel.app/assassinscreed3",
        img: "assassinscreed3.jpg",
        desc: "Join Connor Kenway. Stealth, combat, parkour, and historic battles. Fight for independence during the American Revolution as the half-Mohawk Assassin.",
        tags: "assassin's creed 3 connor kenway stealth action parkour pc game historical",
        titleColorClass: "text-blue-400"
    },
    {
        id: 13,
        title: "ASSASSIN'S CREED VALHALLA",
        link: "https://sjgamezone.vercel.app/assassincreedvalhalla",
        img: "acvalhalla1.jpg",
        desc: "Lead Vikings to glory, raid, and explore England. Full PC download. Embark on Eivor's epic saga and forge your legend in a Viking-era world.",
        tags: "assassins creed valhalla viking rpg open world",
        titleColorClass: "text-red-400"
    },

    // --- Far Cry Series ---
    {
        id: 14,
        title: "FAR CRY 1",
        link: "https://sjgamezone.vercel.app/farcry1",
        img: "farcry1.jpg",
        desc: "Classic FPS set on tropical islands. Stealth, weapons, and tactics. Survive against mercenaries and genetically modified creatures in a thrilling tropical environment.",
        tags: "far cry 1 fps shooter tropical islands action pc game classic",
        titleColorClass: "text-blue-400"
    },
    {
        id: 15,
        title: "FAR CRY 2",
        link: "https://sjgamezone.vercel.app/farcry2",
        img: "farcry2.jpg",
        desc: "Open-world African conflict zone with dynamic fire, realistic weapon physics. Play as a mercenary tasked with hunting down 'The Jackal' amidst warring factions.",
        tags: "far cry 2 fps shooter open world africa mercenary survival pc game",
        titleColorClass: "text-red-400"
    },
    {
        id: 16,
        title: "FAR CRY 3",
        link: "https://sjgamezone.vercel.app/farcry3",
        img: "farcry3.jpg",
        desc: "Open-world FPS set on tropical islands. Fight mercenaries and survive in the wild. Rescue your friends from the menacing pirate Vaas Montenegro on Rook Island.",
        tags: "far cry 3 fps shooter tropical islands open world action pc game",
        titleColorClass: "text-blue-400"
    },
    {
        id: 17,
        title: "FAR CRY 4 GOLD EDITION",
        link: "https://sjgamezone.vercel.app/farcry4",
        img: "farcry4.jpg",
        desc: "Plunge into the epic world of Kyrat. Open-world missions and intense combat. Join the civil war against the tyrannical Pagan Min in the Himalayan region.",
        tags: "far cry 4 gold edition fps shooter open world action ubisoft kyrat pc game",
        titleColorClass: "text-red-400"
    },
    {
        id: 18,
        title: "FAR CRY 5",
        link: "https://sjgamezone.vercel.app/farcry5",
        img: "farcry5.jpg",
        desc: "Explore Hope County, Montana. Fight cults, complete missions, and survive. Liberate the region from the fanatical Eden's Gate cult led by the Father, Joseph Seed.",
        tags: "far cry 5 fps shooter open world action ubisoft hope county pc game",
        titleColorClass: "text-blue-400"
    },
    {
        id: 19,
        title: "FAR CRY 6",
        link: "https://sjgamezone.vercel.app/farcry6",
        img: "farcry6-1.jpg",
        desc: "Fight a dictator in a tropical paradise. Open-world action. Join the revolution as Dani Rojas to free the island nation of Yara from the ruthless Anton Castillo.",
        tags: "far cry 6 ubisoft action shooter tropical open world",
        titleColorClass: "text-red-400"
    },

    // --- Other Standalone Popular Hits ---
    {
        id: 20,
        title: "UNCHARTED 4",
        link: "https://sjgamezone.vercel.app/uncharted",
        img: "uncharted.jpg",
        desc: "Nathan Drake's final cinematic treasure hunt. Full PC download. Join the adventure across exotic locales to find Captain Henry Avery's long-lost treasure.",
        tags: "uncharted 4 nathan drake action adventure sony",
        titleColorClass: "text-blue-400"
    },
    {
        id: 21,
        title: "CYBERPUNK 2077",
        link: "https://sjgamezone.vercel.app/cyberpunk2077",
        img: "Cyberpunk2077.jpg",
        desc: "Night City open-world RPG adventure. Full PC download. Become V, a mercenary outlaw, in the dangerous, technology-obsessed metropolis of Night City.",
        tags: "cyberpunk 2077 cd projekt red sci-fi rpg open world",
        titleColorClass: "text-red-400"
    },
    {
        id: 22,
        title: "MAX PAYNE 3",
        link: "https://sjgamezone.vercel.app/maxpayne3",
        img: "maxpayne3.jpg",
        desc: "Bullet-time combat, cinematic action, and a deep story of revenge. Follow Max, a former detective, working security in São Paulo, Brazil, as chaos ensues.",
        tags: "max payne 3 rockstar shooter action bullet time",
        titleColorClass: "text-blue-400"
    },
    {
        id: 23,
        title: "WATCH DOGS (2014)",
        link: "https://sjgamezone.vercel.app/watchdogs1",
        img: "watchdogs1.jpg",
        desc: "Hack the city as Aiden Pearce. Open-world action thriller. Use your phone to manipulate the city's central operating system (ctOS) to seek justice.",
        tags: "watch dogs 2014 aiden pearce hacking open world",
        titleColorClass: "text-red-400"
    },
    {
        id: 24,
        title: "IGI 2: COVERT STRIKE",
        link: "https://sjgamezone.vercel.app/igi2",
        img: "igi2.jpg",
        desc: "Go deep undercover as David Jones. Stealth action, explosives, and espionage. Complete complex missions across the globe to prevent world-threatening conflict.",
        tags: "igi 2 covert strike david jones stealth action espionage",
        titleColorClass: "text-blue-400"
    },
    {
        id: 25,
        title: "PROJECT IGI 1",
        link: "https://sjgamezone.vercel.app/igi1",
        img: "igi1.jpg",
        desc: "Original tactical FPS classic. Stealth missions, military bases, and strategic infiltration. Take on the role of David Jones to recover a stolen nuclear warhead.",
        tags: "igi 1 project igi i'm going in tactical fps stealth",
        titleColorClass: "text-red-400"
    },
    {
        id: 26,
        title: "HITMAN: BLOOD MONEY",
        link: "https://sjgamezone.vercel.app/hitman1",
        img: "hitman1.jpg",
        desc: "Play as Agent 47. Complete stealth assassination missions. Eliminate high-profile targets across a variety of unique and detailed international locations.",
        tags: "hitman blood money agent 47 stealth action assassination pc game",
        titleColorClass: "text-blue-400"
    },
    {
        id: 27,
        title: "DYING LIGHT: THE BEAST",
        link: "https://sjgamezone.vercel.app/dyinglightthebeast",
        img: "dyinglight.jpg",
        desc: "Parkour, crafting & zombie survival. Full PC download. Experience intense, open-world zombie action with a dynamic day-night cycle in the quarantined city of Harran and survive the night.",
        tags: "dying light zombie survival parkour crafting",
        titleColorClass: "text-red-400"
    },
    {
        id: 28,
        title: "HOGWARTS LEGACY",
        link: "https://sjgamezone.vercel.app/hogwartslegacy",
        img: "hogwartslegacy1.jpg",
        desc: "Attend Hogwarts, cast spells, and explore. Full PC download. Dive into the world of witches and wizards and shape the fate of the wizarding world in the 1800s.",
        tags: "hogwarts legacy harry potter wizard rpg magic",
        titleColorClass: "text-blue-400"
    },
    {
        id: 29,
        title: "MAX PAYNE 1",
        link: "https://sjgamezone.vercel.app/maxpayne1",
        img: "maxpayne1.jpg",
        desc: "Experience the gritty noir story of Max Payne, using Bullet Time to fight your way through New York City. A classic action title with a gripping plot.",
        tags: "max payne 1 pc download bullet time noir action",
        titleColorClass: "text-red-400"
    },
    {
        id: 30,
        title: "MAX PAYNE 2",
        link: "https://sjgamezone.vercel.app/maxpayne2",
        img: "maxpayne2.jpg",
        desc: "Continue Max Payne’s story in New York City, with enhanced Bullet Time action, gripping story, and intense gunfights. He seeks redemption after tragedy.",
        tags: "max payne 2 pc download bullet time noir action",
        titleColorClass: "text-blue-400"
    },
    {
        id: 31,
        title: "NFS II SPECIAL EDITION",
        link: "https://sjgamezone.vercel.app/nfs2.html",
        img: "nfs.jpg",
        desc: "Classic Need for Speed II Special Edition: street racing, exotic cars, and high-speed thrills. Enjoy open-world racing and extreme challenges on diverse tracks.",
        tags: "nfs 2 se download pc racing car street speed",
        titleColorClass: "text-red-400"
    },
    {
        id: 32,
        title: "NEED FOR SPEED SHIFT",
        link: "https://sjgamezone.vercel.app/nfsshift",
        img: "nfsshift1.jpg",
        desc: "A realistic racing experience with cockpit view, precise car handling, drifting, and intense high-speed track competition across world-famous circuits.",
        tags: "need for speed shift nfs shift racing pc download",
        titleColorClass: "text-blue-400"
    },
    {
        id: 33,
        title: "NEED FOR SPEED MOST WANTED 2005",
        link: "https://sjgamezone.vercel.app/nfsmw",
        img: "nfsmw.jpg",
        desc: "Race through Rockport City, outrun cops, defeat Blacklist rivals, and become the Most Wanted street racer in this classic open-world pursuit game.",
        tags: "nfs most wanted 2005 racing blacklist cars",
        titleColorClass: "text-red-400"
    },
    {
        id: 34,
        title: "NEED FOR SPEED MOST WANTED 2012",
        link: "https://sjgamezone.vercel.app/nfsmw2012",
        img: "nfsmw2012.jpg",
        desc: "Experience high-speed racing through Fairhaven City with cops chasing you and intense street racing action. Complete the Blacklist to become the ultimate Most Wanted racer.",
        tags: "nfs most wanted 2012 racing cops cars street",
        titleColorClass: "text-blue-400"
    },
    {
        id: 35,
        title: "NEED FOR SPEED RIVALS",
        link: "https://sjgamezone.vercel.app/nfsrivals",
        img: "nfsrivals.jpg",
        desc: "Speed through Redview County with high-speed street races, evade cops, and challenge rivals. Play as racer or cop in intense pursuits to dominate the open world.",
        tags: "nfs rivals pc download street racing cops open world car customization",
        titleColorClass: "text-red-400"
    },
    {
        id: 36,
        title: "FORZA HORIZON 5",
        link: "https://sjgamezone.vercel.app/forzahorizon5",
        img: "forzahorizon5.jpg",
        desc: "Race across Mexico's vibrant landscapes with dynamic seasons, unlock extreme cars, and compete online in epic open-world racing adventures. Full PC download is available now.",
        tags: "forza horizon 5 pc download racing open world cars multiplayer mexico",
        titleColorClass: "text-blue-400"
    },
    {
        id: 37,
        title: "FORZA HORIZON 4",
        link: "https://sjgamezone.vercel.app/forzahorizon4",
        img: "forzahorizon4.jpg",
        desc: "Race across the UK in an open-world adventure, experience dynamic seasons, and compete in thrilling events in Forza Horizon 4. Ultimate Edition with all DLCs included.",
        tags: "forza horizon 4 pc download racing open world multiplayer car customization uk seasons",
        titleColorClass: "text-red-400"
    },
    {
        id: 38,
        title: "LARA CROFT THE TEMPLE OF OSIRIS",
        link: "https://sjgamezone.vercel.app/laracrofttos.html",
        img: "laracrofttos.jpg",
        desc: "Join Lara Croft in 'Temple of Osiris' for a cooperative adventure. Solve ancient puzzles, battle enemies, and uncover hidden treasures in a mystical Egyptian world with friends.",
        tags: "lara croft temple of osiris pc download adventure puzzles egypt treasures action",
        titleColorClass: "text-blue-400"
    },
    {
        id: 39,
        title: "TEKKEN 7",
        link: "https://sjgamezone.vercel.app/tekken7.html",
        img: "tekken7.jpg",
        desc: "Experience the epic conclusion of the Mishima clan saga. Unravel the story, master stunning new moves, and crush your rivals in this ultimate fighting game experience.",
        tags: "tekken 7 pc download fighting game action martial arts tournament kazuya heihachi",
        titleColorClass: "text-red-400"
    },
];


