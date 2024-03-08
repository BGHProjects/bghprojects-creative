import { GenAIArtViewed } from "../../contexts/GenAIArtContext";

export const content: Record<string, any> = {
  [GenAIArtViewed.HyperSpaceFlux1]: {
    artOption: GenAIArtViewed.HyperSpaceFlux1,
    filePath: "hyperspace-flux-1",
    ext: ".jpeg",
    prompt: "hyperspace flux colourful vibrant neon abstract background ",
    ai: "Meta AI Imagine",
    link: "https://imagine.meta.com/",
    len: 4,
  },
  [GenAIArtViewed.AnimeSuperTeam2]: {
    artOption: GenAIArtViewed.AnimeSuperTeam2,
    filePath: "anime-super-team-2",
    ext: ".jpg",
    prompt:
      "Incredibly detailed and vibrantly coloured movie poster of an original science fiction based anime superhero team up movie",
    ai: "Image Creator from Microsoft Designer - Bing",
    link: "https://www.bing.com/images/create",
    len: 4,
  },
  [GenAIArtViewed.VolcanoCity1]: {
    artOption: GenAIArtViewed.VolcanoCity1,
    filePath: "volcano-city-1",
    ext: ".jpeg",
    prompt:
      "A city reborn from the ashes of a volcanic eruption, with glowing lava veins running through obsidian architecture, neon lights reflecting off obsidian skyscrapers, and phoenixes soaring above, symbolizing hope and resilience. (Think a cyberpunk landscape infused with mythological grandeur.)",
    ai: "Meta AI Imagine",
    link: "https://imagine.meta.com/",
    len: 8,
  },
  [GenAIArtViewed.SpaceStorm1]: {
    artOption: GenAIArtViewed.SpaceStorm1,
    filePath: "space-storm-1",
    ext: ".jpeg",
    prompt:
      "Incredibly detailed and vibrant cosmic storm, filled with clouds and lightning bolts",
    ai: "Meta AI Imagine",
    link: "https://imagine.meta.com/",
    len: 12,
  },
  [GenAIArtViewed.BioCity1]: {
    artOption: GenAIArtViewed.BioCity1,
    filePath: "bio-city-1",
    ext: ".png",
    prompt:
      "Illustrate a bustling metropolis at dusk, where advanced futuristic skyscrapers seamlessly blend with organic, bioluminescent structures, creating a harmonious cityscape that reflects the perfect integration of nature and technology",
    negativePrompt: "Blurs, low quality elements, pixelation",
    styles: "'Fooocus Masterpiece', 'Fooocus Sharp', 'MRE Anime', 'SAI Anime'",
    baseModel: "juggernautXL_version6Rundiffusion.safetensors",
    sampler: "dpmpp_2m_sde_gpu",
    lora1: "sd_xl_offset_example-lora_1.0.safetensors : 0.1",
    ai: "Fooocus",
    link: "https://github.com/lllyasviel/Fooocus",
    len: 4,
  },
  [GenAIArtViewed.CrystalCity1]: {
    artOption: GenAIArtViewed.CrystalCity1,
    filePath: "crystal-city-1",
    ext: ".jpg",
    prompt:
      "A rogue planet, adrift in the endless void, is home to a crystalline city bathed in the light of a double sun. Towers carved from amethyst and citrine pierce the sky, their facets reflecting the suns in a kaleidoscope of shimmering colors. Bridges of spun quartz connect the towers, forming an intricate web of gleaming lines against the inky blackness of space.",
    ai: "Image Creator from Microsoft Designer - Bing",
    link: "https://www.bing.com/images/create",
    len: 4,
  },
  [GenAIArtViewed.AnimePowerarmourGuy1]: {
    artOption: GenAIArtViewed.AnimePowerarmourGuy1,
    filePath: "anime-powerarmour-guy-1",
    ext: ".png",
    prompt:
      "handsome man with short black hair and light blue eyes wearing navy blue and gold power armour, detailed, cinematic, complex, highly coherent, elegant, intricate, sharp focus, dramatic, dynamic, illuminated background, professional, artistic, new, inspiring, attractive, creative, adventurous, inspired, beautiful, confident, pretty, lucky, passionate, unique, cool, awesome, amazing",
    styles: "'Fooocus V2', 'MRE Anime', 'SAI Anime', 'MRE Manga', 'Misc Manga'",
    baseModel: "juggernautXL_version6Rundiffusion.safetensors",
    sampler: "dpmpp_2m_sde_gpu",
    lora1: "sd_xl_offset_example-lora_1.0.safetensors : 0.1",
    ai: "Fooocus",
    link: "https://github.com/lllyasviel/Fooocus",
    len: 6,
  },
  [GenAIArtViewed.SauronShoes1]: {
    artOption: GenAIArtViewed.SauronShoes1,
    filePath: "sauron-shoes-1",
    ext: ".jpeg",
    prompt: "basketball shoes in the style of Sauron from Lord of the Rings",
    ai: "Meta AI Imagine",
    link: "https://imagine.meta.com/",
    len: 4,
  },
  [GenAIArtViewed.AnimePowerarmourGuy2]: {
    artOption: GenAIArtViewed.AnimePowerarmourGuy2,
    filePath: "anime-powerarmour-guy-2",
    ext: ".png",
    prompt:
      "Handsome young man with orange eyes and black hair with no helmet wearing cybertronic Sauron-inspired power armour, detailed, intricate, elegant, highly extended, extremely stylish, holy light, glowing atmosphere, sharp focus, perfect composition, dramatic, dynamic background, fine detail, full color, inspired, marvelous, amazing, creative, calm, cute, vibrant, illuminated",
    styles:
      "'Fooocus V2', 'Fooocus Enhance', 'Fooocus Sharp', 'MRE Manga', 'MRE Anime', 'Futuristic Cybernetic', 'Futuristic Futuristic', 'Futuristic Cybernetic Robot'",
    baseModel: "juggernautXL_version6Rundiffusion.safetensors",
    sampler: "dpmpp_2m_sde_gpu",
    lora1: "sd_xl_offset_example-lora_1.0.safetensors : 0.1",
    ai: "Fooocus",
    link: "https://github.com/lllyasviel/Fooocus",
    len: 4,
  },
  [GenAIArtViewed.GlassBlackHole]: {
    artOption: GenAIArtViewed.GlassBlackHole,
    filePath: "glass-black-hole-1",
    ext: ".jpeg",
    prompt:
      "A polished sphere, perfectly reflecting its surroundings, floats within a black hole. Within the sphere, endless reflections of alien galaxies and distorted starscapes create a mesmerizing universe of non-Euclidean geometry. Render in a surreal style with a hypnotic blend of reflections, cosmic imagery, and distorted perspectives.",
    ai: "Meta AI Imagine",
    link: "https://imagine.meta.com/",
    len: 4,
  },
  [GenAIArtViewed.DemonSamurai1]: {
    artOption: GenAIArtViewed.DemonSamurai1,
    filePath: "demon-samurai-1",
    ext: ".png",
    prompt:
      "Full body image of a demon samurai with metallic black and purple armour, covered in flags and spikes, cinematic, dynamic light, detailed, sharp focus, winning, grand, open, transparent, highly intricate, artistic, innocent, still, pretty, symmetry, great composition, perfect, aesthetic, very inspirational, real, fine detail, clear, crisp, original, creative, novel",
    styles: "'Fooocus V2', 'MRE Anime', 'SAI Anime', 'MRE Manga', 'Misc Manga'",
    baseModel: "juggernautXL_version6Rundiffusion.safetensors",
    sampler: "dpmpp_2m_sde_gpu",
    lora1: "sd_xl_offset_example-lora_1.0.safetensors : 0.1",
    ai: "Fooocus",
    link: "https://github.com/lllyasviel/Fooocus",
    len: 6,
  },
  [GenAIArtViewed.AnimePowerarmourGuy3]: {
    artOption: GenAIArtViewed.AnimePowerarmourGuy3,
    filePath: "anime-powerarmour-guy-3",
    ext: ".png",
    prompt:
      "Full body image of a handsome man with maroon hair and demonic orange eyes without a helmet wearing power armour in the style of Sauron from Lord of the Rings and generic Cyberpunk, dramatic cinematic light, detailed, relaxed, full, sharp focus, extremely fine detail, intricate, elegant, rich deep colors, perfect, symmetry, highly saturated, innocent, scientific, color",
    styles: "'Fooocus V2', 'MRE Anime', 'MRE Manga', 'SAI Anime'",
    baseModel: "juggernautXL_version6Rundiffusion.safetensors",
    sampler: "dpmpp_2m_sde_gpu",
    lora1: "sd_xl_offset_example-lora_1.0.safetensors : 0.1",
    ai: "Fooocus",
    link: "https://github.com/lllyasviel/Fooocus",
    len: 4,
  },
  [GenAIArtViewed.SpaceCathedral1]: {
    artOption: GenAIArtViewed.SpaceCathedral1,
    filePath: "space-cathedral-1",
    ext: ".jpeg",
    prompt:
      "The inside of a photorealistic alien space cathedral, full of colour and immense detail",
    ai: "Meta AI Imagine",
    link: "https://imagine.meta.com/",
    len: 4,
  },
  [GenAIArtViewed.AnimePrincessSamuraiGirl1]: {
    artOption: GenAIArtViewed.AnimePrincessSamuraiGirl1,
    filePath: "anime-princess-samurai-girl-1",
    ext: ".png",
    prompt:
      "stoic beautiful woman with long brunette hair and light hazel eyes wearing samurai armour made out of ruby gemstones, cinematic, stunning, highly detailed, formal, serious, determined, elegant, color, real, sharp focus, very coherent, perfect, full colorful, amazing, attractive, pretty, cute, enhanced, symmetry, intricate, elite, cool, nice",
    styles: "'Fooocus V2', 'MRE Anime', 'SAI Anime', 'MRE Manga', 'Misc Manga'",
    baseModel: "juggernautXL_version6Rundiffusion.safetensors",
    sampler: "dpmpp_2m_sde_gpu",
    lora1: "sd_xl_offset_example-lora_1.0.safetensors : 0.1",
    ai: "Fooocus",
    link: "https://github.com/lllyasviel/Fooocus",
    len: 6,
  },
  [GenAIArtViewed.CelestialDreamWeave]: {
    artOption: GenAIArtViewed.CelestialDreamWeave,
    filePath: "celestial-dream-weave-1",
    ext: ".jpeg",
    prompt:
      "Full scale view of a workshop of a celestial dream weaver. Threads of spun moonlight and stardust shimmer on a loom built from petrified clouds. Intricate knots and weaves form fantastical creatures and landscapes, pulsating with vibrant bioluminescent hues.",
    ai: "Meta AI Imagine",
    link: "https://imagine.meta.com/",
    len: 4,
  },
  [GenAIArtViewed.AnimeSuperTeam1]: {
    artOption: GenAIArtViewed.AnimeSuperTeam1,
    filePath: "anime-super-team-1",
    ext: ".png",
    prompt:
      "Movie poster of a team of 5 unique anime protagonists, 2 female 3 male, all with different colours and costumes, with a background of a space storm",
    styles:
      "'Fooocus Sharp', 'MRE Anime', 'SAI Anime', 'Misc Manga', 'MRE Manga'",
    baseModel: "juggernautXL_version6Rundiffusion.safetensors",
    sampler: "dpmpp_2m_sde_gpu",
    lora1: "sd_xl_offset_example-lora_1.0.safetensors : 0.1",
    ai: "Fooocus",
    link: "https://github.com/lllyasviel/Fooocus",
    len: 4,
  },
  [GenAIArtViewed.CloudColossus1]: {
    artOption: GenAIArtViewed.CloudColossus1,
    filePath: "cloud-colossus-1",
    ext: ".jpeg",
    prompt:
      "Witness a towering figure of pure energy and elemental chaos, formed from the swirling clouds of a raging storm. Lightning bolts arc across its limbs, thunder rumbles in its voice, and torrential rains cascade from its outstretched hands. Render in a dramatic, painterly style that captures the power and fury of the storm, with bold contrasts of light and shadow, and swirling brushstrokes that evoke a sense of awe and wonder.",
    ai: "Meta AI Imagine",
    link: "https://imagine.meta.com/",
    len: 4,
  },
  [GenAIArtViewed.CloudColossus2]: {
    artOption: GenAIArtViewed.CloudColossus2,
    filePath: "cloud-colossus-2",
    ext: ".jpeg",
    prompt:
      "Gaze upon a colossal figure sculpted from clouds, towering over a vast landscape. Its features shift and change with the wind, its expression a canvas for the emotions of the sky. Render in a painterly style, capturing the softness and fluidity of clouds, the play of light and shadow, and the fleeting beauty of a moment in time",
    ai: "Meta AI Imagine",
    link: "https://imagine.meta.com/",
    len: 4,
  },
  [GenAIArtViewed.ColourCloudDragons1]: {
    artOption: GenAIArtViewed.ColourCloudDragons1,
    filePath: "colour-cloud-dragons-1",
    ext: ".jpeg",
    prompt:
      "Oil painting of several intricately detailed crystal dragons flying through a sky of multicoloured clouds amidst a lightning storm",
    ai: "Meta AI Imagine",
    link: "https://imagine.meta.com/",
    len: 6,
  },
  [GenAIArtViewed.PaintedSpaceDemon1]: {
    artOption: GenAIArtViewed.PaintedSpaceDemon1,
    filePath: "painted-space-demon-1",
    ext: ".jpeg",
    prompt:
      "An armoured nebula demon amidst celestial bodies, their flowing form composed of stardust and swirling galaxies, painted in a blend of Van Gogh's starry night and Art Deco futurism.",
    ai: "Meta AI Imagine",
    link: "https://imagine.meta.com/",
    len: 4,
  },
  [GenAIArtViewed.ColourfulPaint1]: {
    artOption: GenAIArtViewed.ColourfulPaint1,
    filePath: "colourful-paint-1",
    ext: ".jpeg",
    prompt:
      "A kaleidoscope of abstract shapes and vibrant glowing hues dances across the canvas, each swirl and splatter echoing a musical note, creating a harmonious composition that synesthesia can almost translate. (Think Kandinsky meets a musical score.)",
    ai: "Meta AI Imagine",
    link: "https://imagine.meta.com/",
    len: 4,
  },

  [GenAIArtViewed.CrazyPalance1]: {
    artOption: GenAIArtViewed.CrazyPalance1,
    filePath: "crazy-palace-1",
    ext: ".jpeg",
    prompt:
      "A shimmering palace where holographic projections create an ever-changing illusion of architecture, walls morphing into mythical creatures, floors transforming into swirling constellations",
    ai: "Meta AI Imagine",
    link: "https://imagine.meta.com/",
    len: 8,
  },
  [GenAIArtViewed.PaintedPhoenix1]: {
    artOption: GenAIArtViewed.PaintedPhoenix1,
    filePath: "painted-phoenix-1",
    ext: ".jpeg",
    prompt: "Oil painting of a bright phoenix",
    ai: "Meta AI Imagine",
    link: "https://imagine.meta.com/",
    len: 4,
  },

  [GenAIArtViewed.RomanShoes1]: {
    artOption: GenAIArtViewed.RomanShoes1,
    filePath: "roman-empire-shoes-1",
    ext: ".jpeg",
    prompt: "Basketball shoes designed as if they were from the Roman empire",
    ai: "Meta AI Imagine",
    link: "https://imagine.meta.com/",
    len: 4,
  },
  [GenAIArtViewed.CyberpunkFashionShow1]: {
    artOption: GenAIArtViewed.CyberpunkFashionShow1,
    filePath: "cyberpunk-fashion-show-1",
    ext: ".jpeg",
    prompt:
      "An android modelling a cyberpunk style jacket suit at a fashion show",
    ai: "Meta AI Imagine",
    link: "https://imagine.meta.com/",
    len: 6,
  },
  [GenAIArtViewed.OrnateJapaneseSupercar1]: {
    artOption: GenAIArtViewed.OrnateJapaneseSupercar1,
    filePath: "ornate-japanese-supercar-1",
    ext: ".jpeg",
    prompt: "Supercar design with an ornate japanese style",
    ai: "Meta AI Imagine",
    link: "https://imagine.meta.com/",
    len: 4,
  },
  [GenAIArtViewed.PlanetSurfaceExplosion1]: {
    artOption: GenAIArtViewed.PlanetSurfaceExplosion1,
    filePath: "planet-surface-explosion-1",
    ext: ".jpeg",
    prompt:
      "A massive explosion on the surface of a vibrant and colourful exoplanet",
    ai: "Meta AI Imagine",
    link: "https://imagine.meta.com/",
    len: 4,
  },
  [GenAIArtViewed.BionicleMoviePoster1]: {
    artOption: GenAIArtViewed.BionicleMoviePoster1,
    filePath: "bionicle-movie-poster-1",
    ext: ".jpg",
    prompt: "Bionicle movie poster",
    ai: "Image Creator from Microsoft Designer - Bing",
    link: "https://www.bing.com/images/create",
    len: 4,
  },

  [GenAIArtViewed.AugmentedRealityCity1]: {
    artOption: GenAIArtViewed.AugmentedRealityCity1,
    filePath: "augmented-reality-city-1",
    ext: ".jpg",
    prompt:
      "A city street transformed by an augmented reality art exhibition, where virtual sculptures and paintings appear to interact seamlessly with the physical environment, blurring the line between the digital and real worlds.",
    ai: "Image Creator from Microsoft Designer - Bing",
    link: "https://www.bing.com/images/create",
    len: 4,
  },

  [GenAIArtViewed.GeometricDreamscape1]: {
    artOption: GenAIArtViewed.GeometricDreamscape1,
    filePath: "geometric-dreamscape-1",
    ext: ".jpg",
    prompt:
      "A surreal dreamscape where geometric shapes float in a cosmic void, intertwined with strands of liquid light, creating an otherworldly and hypnotic visual experience, oil painting",
    ai: "Image Creator from Microsoft Designer - Bing",
    link: "https://www.bing.com/images/create",
    len: 4,
  },
  [GenAIArtViewed.CosmicBrainMapVanGogh1]: {
    artOption: GenAIArtViewed.CosmicBrainMapVanGogh1,
    filePath: "cosmic-brain-map-van-gogh-1",
    ext: ".jpg",
    prompt:
      "A cosmic map of the human mind. Constellations of swirling colors represent emotions, their brightness fluctuating with intensity. Joy bursts into supernovae, fear shimmers like nebulae, and love twinkles like distant stars. This celestial chart guides us through the inner universe, where every thought paints a star on the canvas of our being, Van Gogh painting",
    ai: "Image Creator from Microsoft Designer - Bing",
    link: "https://www.bing.com/images/create",
    len: 4,
  },
  [GenAIArtViewed.ArmouredVampireDragon1]: {
    artOption: GenAIArtViewed.ArmouredVampireDragon1,
    filePath: "armoured-vampire-dragon-1",
    ext: ".jpg",
    prompt: "Armoured vampire dragon in the style of YuGiOh",
    ai: "Image Creator from Microsoft Designer - Bing",
    link: "https://www.bing.com/images/create",
    len: 4,
  },
  [GenAIArtViewed.DetailedCyberneticWarrior1]: {
    artOption: GenAIArtViewed.DetailedCyberneticWarrior1,
    filePath: "detailed-cybernetic-warrior-1",
    ext: ".jpg",
    prompt:
      "Intricately detailed cybernetic warrior, with a colossal sword, complicated shield design, and rippled, shining, spiky armour in the style of YuGiOh",
    ai: "Image Creator from Microsoft Designer - Bing",
    link: "https://www.bing.com/images/create",
    len: 4,
  },
  [GenAIArtViewed.ArmouredVampireDragon2]: {
    artOption: GenAIArtViewed.ArmouredVampireDragon2,
    filePath: "armoured-vampire-dragon-2",
    ext: ".jpg",
    prompt:
      "Intricately detailed nightmarish black, purple, and silver zombie dragon, with rippled flesh, and vicious fangs and claws and spiked wings, with a red raging thunderstorm, in the style of YuGiOh",
    ai: "Image Creator from Microsoft Designer - Bing",
    link: "https://www.bing.com/images/create",
    len: 4,
  },
  [GenAIArtViewed.CyberpunkWarriorGirl1]: {
    artOption: GenAIArtViewed.CyberpunkWarriorGirl1,
    filePath: "cyberpunk-warrior-girl-1",
    ext: ".jpg",
    prompt:
      "Gorgeous female as a cyberpunk mecha warrior pilot, eva, sci-fi, dystopian future, cinematic, neon lights, war machine, highly detailed, lowkey",
    ai: "Image Creator from Microsoft Designer - Bing",
    link: "https://www.bing.com/images/create",
    len: 3,
  },
  [GenAIArtViewed.CyborgMetalDemon1]: {
    artOption: GenAIArtViewed.CyborgMetalDemon1,
    filePath: "cyborg-metal-demon-1",
    ext: ".jpg",
    prompt: "cyborg demon, hyperrealistic detailed image, red neon colouring",
    ai: "Image Creator from Microsoft Designer - Bing",
    link: "https://www.bing.com/images/create",
    len: 4,
  },
  [GenAIArtViewed.PorcelainCyberpunkModel1]: {
    artOption: GenAIArtViewed.PorcelainCyberpunkModel1,
    filePath: "porcelain-cyberpunk-model-1",
    ext: ".jpg",
    prompt:
      "porcelain statue of a handsome cyberpunk model, with one half of his face burning with purple flames, realistic, detailed, smooth, sharp",
    ai: "Image Creator from Microsoft Designer - Bing",
    link: "https://www.bing.com/images/create",
    len: 4,
  },
};
