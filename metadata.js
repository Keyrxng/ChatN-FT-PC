// TODO: Add more metadata
// TODO: Add JS to randomize Being creation incorporating metadata
// TODO: Add JS to ensure no duplicates exist between Being Creations
// TODO: Add a way to visualize and display the Being Creations






const Beings = [
    {
      name: "Human",
      description: "A terrestrial creature that is a member of the species Homo sapiens."
    },
    {
      name: "Elf",
      description: "A mythical, supernatural being often depicted as a small, delicate, and elegant humanoid with pointed ears."
    },
    {
      name: "Angel",
      description: "A celestial being believed to be a messenger of God in various religions and belief systems."
    },
    {
      name: "Cosmic",
      description: "A being or entity that exists on a cosmic scale, beyond the boundaries of the known universe."
    },
    {
      name: "Dwarf",
      description: "A being that is much shorter than the average human and is often depicted as having a strong and stocky build."
    },
    {
      name: "Giant",
      description: "A being that is much taller and larger than the average human and is often depicted as having great strength."
    },
    {
      name: "Demon",
      description: "A supernatural being, often depicted as an evil spirit or entity in various religions and belief systems."
    },
    {
      name: "Dragon",
      description: "A mythical, reptilian creature often depicted as having wings, sharp teeth and claws, and the ability to breathe fire."
    },
    {
      name: "Unicorn",
      description: "A mythical creature depicted as a horse with a single spiral horn on its forehead."
    },
    {
      name: "Phoenix",
      description: "A mythical bird that is said to be reborn from its own ashes after death."
    }
]
const Attitudes = [
    ["intelligent", "creative", "determined", "curious", "adaptable"],
  
      ["wise", "agile", "graceful", "mystical", "ethereal"],
  
      ["benevolent", "compassionate", "wise", "graceful", "divine"],
  
      ["omnipotent", "omniscient", "eternal", "mystical", "unfathomable"],
  
      ["sturdy", "resilient", "hardworking", "loyal", "tenacious"],
  
      ["powerful", "majestic", "imposing", "strong", "towering"],
  
      ["malevolent", "sinister", "corrupt", "devious", "destructive"],
  
      ["ferocious", "majestic", "powerful", "mystical", "revered"],
  
      ["graceful", "enchanting", "pure", "mystical", "healing"],
  
      ["regenerative", "eternal", "reborn", "mystical", "resilient"]
  ]

  const Attire = [

    ["jeans", "t-shirt", "shoes", "sneakers", "boots"],
   
       ["leggings", "tunic", "sandals", "boots", "dress"],
   
       ["robe", "sandals", "wings", "halo", "aurora"],
   
       ["uniform", "suit", "boots", "helmet", "cape"],
   
       ["pants", "shirt", "boots", "hat", "vest"],
   
       ["pants", "shirt", "boots", "hat", "vest"],
   
       ["pants", "shirt", "boots", "hat", "vest"],
   
       ["scales", "claws", "wings", "tail", "fire breath"],
   
       ["mane", "tail", "horn", "hooves", "wings"],
   
       ["wings", "tail feathers", "fire breath", "talons", "beak"]
   
   ]

   const SkillMoves = [
    ["boxing", "kickboxing", "jiu-jitsu", "taekwondo", "karate"],
    
        ["archery", "dodging", "swordsmanship", "agility", "stealth"],
    
        ["healing magic", "protection magic", "miracles", "divine intervention", "precognition"],
    
        ["telepathy", "telekinesis", "reality manipulation", "dimensional travel", "omnipotence"],
    
        ["engineering", "smithing", "mining", "craftsmanship", "strength"],
    
        ["strength", "size manipulation", "elemental control", "shape-shifting", "stamina"],
    
        ["dark magic", "shape-shifting", "possession", "telekinesis", "illusions"],
    
        ["fire breath", "flight", "telepathy", "elemental control", "shape-shifting"],
    
        ["healing magic", "light manipulation", "teleportation", "shape-shifting", "telepathy"],
    
        ["regeneration", "immortality", "fire manipulation", "flight", "telepathy"],
    
    
    ]

    const CraftingSkills = [
        ["woodworking", "sewing", "cooking", "blacksmithing", "pottery"],
       
           ["woodworking", "leatherworking", "jewelry-making", "weaving", "pottery"],
       
           ["singing", "healing magic", "protection magic", "miracles", "divine intervention"],
       
           ["dimensional travel", "reality manipulation", "telepathy", "telekinesis", "omnipotence"],
       
           ["engineering", "smithing", "mining", "craftsmanship", "strength"],
       
           ["strength", "size manipulation", "elemental control", "shape-shifting", "stamina"],
       
           ["dark magic", "shape-shifting", "possession", "telekinesis", "illusions"],
       
           ["fire breath", "flight", "telepathy", "elemental control", "shape-shifting"],
       
           ["healing magic", "light manipulation", "teleportation", "shape-shifting", "telepathy"],
       
           ["regeneration", "immortality", "fire manipulation", "flight", "telepathy"],
       
       
       
       ]

       const CraftingSkills = [
        [
              "golden plate armor",
              "ethereal chainmail",
              "unbreakable shield",
              "diamond gauntlets",
              "mythical helmet"
            ],
        [
              "enchanted leather armor",
              "invincible shield",
              "mystical bracers",
              "glorious helmet",
              "ethereal boots"
            ],
        [
              "divine aurora",
              "radiant halo",
              "heavenly wings",
              "sacred robe",
              "celestial sandals"
            ],
        [
              "omnipotent uniform",
              "cosmic suit",
              "ethereal boots",
              "mystical helmet",
              "unlimited cape"
            ],
        [
              "diamond plate armor",
              "invincible shield",
              "durable gauntlets",
              "heavy helmet",
              "protective boots"
            ],
        [
              "golden plate armor",
              "unbreakable shield",
              "diamond gauntlets",
              "mythical helmet",
              "ethereal boots"
            ],
        [
              "dark plate armor",
              "unbreakable shield",
              "demonic gauntlets",
              "evil helmet",
              "infernal boots"
            ],
        [
              "diamond scales",
              "unbreakable claws",
              "ethereal wings",
              "fire-breathing tail",
              "invincible fire breath"
            ],
        [
              "golden mane",
              "ethereal tail",
              "invincible horn",
              "healing hooves",
              "heavenly wings"
            ],
            [
              "ethereal wings",
              "regenerative tail feathers",
              "unlimited fire breath",
              "invincible talons",
              "celestial beak"
            ],
        ]
        const GodTierWeapons = [
            {
              [
                "golden sword",
                "ethereal bow",
                "unbreakable spear",
                "diamond mace",
                "mythical staff"
              ],
            },
            {
              [
                "enchanted bow",
                "invincible sword",
                "mystical spear",
                "glorious staff",
                "ethereal knife"
              ],
            },
            {
              [
                "divine scepter",
                "radiant sword",
                "heavenly bow",
                "sacred staff",
                "celestial shield"
              ],
            },
            {
              [
                "omnipotent scepter",
                "cosmic sword",
                "ethereal bow",
                "mystical staff",
                "unlimited shield
              ],
            },
            {
              [
                "diamond warhammer",
                "invincible sword",
                "durable crossbow",
                "heavy battleaxe",
                "protective shield"
              ],
            },
            {
              [
                "golden warhammer",
                "unbreakable sword",
                "diamond crossbow",
                "mythical battleaxe",
                "ethereal shield"
              ],
            },
            {
              [
                "dark sword",
                "unbreakable spear",
                "demonic mace",
                "evil staff",
                "infernal shield"
              ],
            },
            {
              [
                "diamond claws",
                "unbreakable teeth",
                "ethereal wings",
                "fire-breathing breath",
                "invincible fire breath"
              ],
            },
            {
              [
                "golden horn",
                "ethereal hooves",
                "invincible magic",
                "healing magic",
                "heavenly aura"
              ],
            },
            {
              [
                "ethereal wings",
                "regenerative flames",
                "unlimited fire breath",
                "invincible talons",
                "celestial aura"
              ],
            }
        ]