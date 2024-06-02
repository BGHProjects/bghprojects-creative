import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
  chakra,
} from "@chakra-ui/react";

const AppText = chakra(Text, {
  baseStyle: {
    color: "white",
    fontFamily: "Electrolize",
    w: "100%",
  },
});

const historyContent = [
  {
    title: "Creation of the Heart Stone",
    content:
      "In the midst of the Suumvanir's fourth planet-wide civil war across Suumvanor, known as the Fourth Suumvaen War, the Suumvanir Republic Alliance contracted a civil research and development agency, known as GhaenCorp, to develop solution to the Alliance war effort's resource depletion problem. A division to develop an energy-producing solution was lead by GhaenCorp scientist Astron Monren. Monren had previously been exploring the energy creation of a synthesised crystalline material based on the remnants of an ancient meteor, which had been previously decommissioned by GhaenCorp. Now flush with a military budget, he decided to continue research into this avenue, against the wishes of GhaenCorp. Monren was eventually able to synthesise an ingot based on this work, that was able to produce energy at a seemingly perpetual rate. Monren called this ingot the Heart Stone. Monren was able to procure pieces from the Hearth Stone, which he called 'shards', which could produce energy independently from the Heart Stone. The Heart Stone was able to effectively 'regrow' these shards shortly after they were removed, enabling Monren to power devices independent of the Heart Stone.Monren presented his results to GhaenCorp and the Alliance to great appraisal. Shortly after these shards of the Heart Stone were used to power machinery and weapons to be used in the war effort. The introduction of this power source caused a great stir amongst the enemies of the alliance, and a plot was hatched by those enemies to find the source of the power and destory it. These enemies managed to track down the Heart Stone and Monren, and Monren defended the Stone with his life before Alliance forces could intervene. Monron's laboratory was destroyed in the attack, along with his research on how he was able to synthesise the Heart Stone, but the Heart Stone remained intact.",
  },
  {
    title: "The Crystal Revolution",
    content:
      "The Suumvanir Republic Alliance soon emerged victorious from the Fourth Suumvaen War following their usage of the Heart Stone and its shards, and a peacetime ensured. GhaenCorp, now released from their miltary contract, patented the application of the Heart Stone and its shards, and shortly after revolutionised the energy industry. Energy from the Heart Stone was magnitudes more cost-effective and efficient than any other energy means on Sumumvanir, and soon dominated the market. During what was known as the Crystal Revolution, life on Suumvanir without the use of Heart Stone shards became obsolete. The city where GhaenCorp headquarters was based, Renglesh, soon became the capital of the entire civilisation, and GhaenCorp became the most powerful privatised force on the planet, rivalling several nations and governments.",
  },
  {
    title: "Discovery that Heart Stone shard's are Sentient",
    content:
      "Several Suumvanir Republic Alliance government initiatives were launched to re-synthesise the Heart Stone, to wrestle the energy market's capitalisation away from the ever-growing GhaenCorp. In the midst of one of these initiatives, a young scientist called Nella Dygon made a groundbreaking discovery. She discovered that several energy signatures that were emitted from the shards of the Heart Stone followed a pattern, but not one that was mathematical. She found a parallel between the signatures and a pattern of conjugation that was common among several languages on Suumvanir. From this, she was able to transcribe the signatures as strings of messages. She then transcribed the messages, breaking them down into possible combinations of words, until she constructed what could be a language of its own. After several tests of directing energy back towards the shard, in wavelengths that would correspond to sentences in the language she discovered, she found that the shard was responding in kind. Dygon had found conclusive evidence that the shard was an intelligent and sentient being. Dygon brought her findings to the Alliance, but they were rejected and squandered by the Alliance, as her primary objective had been reproducing the Stone, and her discovery had been deemed an illegal and negligent usage of government resources. Dygon was shortly fired from the program and released from her research position at the Alliance.",
  },
  {
    title: "The Symbiont Genesis",
    content:
      "Dygon was not disheartened by the dismissal of her discovery, and continued to communicate with shards of the Heart Stones. From her communications, she found out that the shards wished to form a symbiotic relationship with the Suumvaen, promising a greater life experience if they were allowed. After Dygon questioned further, the shard said this required a permanent physical connection with the Suumvaen host. Whether out of curiosity or pity it was not known, but eventually Dygon stabbed herself with the shard and allowed herself to become one with the shard. She began to mutate and transform, with the shard crystallising a large portion of her physical body. After the metamorphosis, she become taller, stronger, with heightened senses and clarity. She shared her consciousness with the shard, and could feel and sense its emotions and communications telepathically. Dygon soon found she had lost her autonomy however, as now she was unable to perform any physical action without the consent and approval of both herself and the shard's consciousness. She found that this worked both ways, as the shard could suggest actions for her, but ultimately she would have to consent to perform the action.",
  },
  {
    title: "The Symbiont Revolution",
    content:
      "Dygon soon re-entered society as the first Symbiont, to the complete awe of the Suumvanir. They marvelled in her abilities and appearance. She was soon featured publicly across the planet through interviews and social media, through which she described her discovery, and what resulted from it. It was soon revealed that she could quickly heal from grevious injuries, after several assassination attempts were made on her life, including resistance to illness and disease. Following this, several other Suumvaen accepted the symbiosis of the shards of the Heart Stone, including those who were terminally ill or paralysed, who soon reached a full recovery and even achieved youth-like physical capabilties. This lead to a surge in symbiosis amongst the Suumvaen, which almost half the population embracing the crystals and becoming Symbionts. Symbionts soon found they could communicate with each other telepathically, and even shared knowledge and feelings at a telepathic level.",
  },
  {
    title: "The Symbiont War and Destruction of the Heart Stone",
    content:
      "The Suumvaen who did not become Symbionts soon saw the Symbionts as a threat to their civilisation. These non-converted included several figures in the Suumvanir Republic Alliance government, and soon converting into a Symbiont became outlawed. This sparked outrage amonst the Symbionts, and non-Symbionts who were sick and wanted to be cured. Civil strife continued to grow between Suumvaen and Symbionts, as it was discovered taht Symbionts had been kidnapped and experimented on by government and private organisations, including GhaenCorp. Soon after, another planet-wide war arose between Suumvaen and the Symbionts, in what was known as the Symbiont War. The war crippled the once Golden Age of the Suumvaen civilisation, and several billion were lost to the conflict. Even though the Symbionts were the physically superior beings, a large portion were unable to wage way against family and friends who had not performed symbiosis with the shards. In a last ditch attempt to weaken the Symbionts, a strike mission was launched against the GhaenCorp facility that housed the Heart Stone, in order to destroy the Stone. Despite Symbiont and GhaenCorp resistance, Suumvaen forces were able to destroy the Heart Stone in a cataclysmic event that rocked Suumvanir, and ended the war on bitter terms for both sides.",
  },
  {
    title: "The Crystal Schism",
    content:
      "Previously the shards of the Heart Stone had been benevolent to their hosts, and had submitted to symbiosis with their Suumvaen hosts willingly to form a mutually beneficial existence between the two organisms. Following the destruction of the Heart Stone, a sect of the Heart Stone shard's intelligence questioned this benevolence, and proposed a more malevolent response. Instead of a symbiosis, they proposed a hostile complete takeover of the faculties of the host, in order to prevent any discord between the two as to the preservation of the shards. This collection of dissenting consciounesses were known as the Dissenters. Several Dissenters turned on their hosts, effectively killing the host's consciousness and completely taking over all of their faculties. Some shards who had not found a host accelerated their own evolution to the point where they could occupy and operate electro-mechanical systems, rather than biological hosts. This lead to a rift between the shard consciouness community in what was known as the Crystal Schism. Several Suumvaen hosts were also contributing to the Schism, as several hosts lost trust in their shards, even if they were benevolent, and tried to remove the shards from their own bodies.",
  },
  {
    title: "Second Symbiont War and creation of Red Moon",
    content:
      "Soon the Crystal Schism outgrew the Symbiont community, and the Dissenters, who had now grown in considerable power by taking over biological and robotic hosts, declared war on the native Suumvaen. This resulted in a Second Symbiont War, with the Suumvaen thrown into their third planet-wide conflict in recent memory. The Dissenters soon proved too powerful for the Suumvaen, and soon overpowered their civilisation. Symbionts were forced to take sides, with the majority choosing to side with their former Suumvaen enemies, in order to preserve the planet and their native species. The Symbiont / Suumvaen alliance was able to drive back the Dissenter insurrection, and in a last ditch attempt to preserve themselves, the Dissenters sent several vessels to occupy and colonise the uncolonised moon of Suumvanir; Iologa. The red crystalliane structure of the Dissenters soon took over the landscape of the moon which could be seen from the surface of Suumvanir, and Iologa became known as the Red Moon.",
  },
  {
    title: "Dissenter Probe Reaches Earth",
    content:
      "In order to attempt to continue the fight against the Suumvaen, the Dissenters create several probes containing Heart Stone shards and send them into deep space, in the hopes that the shards can be used to take over alien civilisations of gather resources to used for the war efforts. However, almost all of shard consciousnesses died in their probes before their could reach any meaningful destinations, despite their renowned self-sustainability, due to the immensely large distances between star systems. One of these Dissenter probes managed to reach Earth. Although the shard itself had 'died' long before it reached the planet, humanity was able to determine that the shard was an alien life form with tremendous energy potential, and was able to trace its trajectory back to where it came from. Soon after a human and robot expedition was sent to find the origin of the shard, and discover the secret of its energy potential.",
  },
];

const factionsContent = [
  {
    title: "Suumvaen",
    content:
      "The Suumvaen are the native, intelligent, and dominant species on Suumvanor. They possess human-analgous physical and mental traits, with a few slight deviances, as they evolved under similar circumstances. The Suumvaen have a cherry-red skin complexion, and have eyes and iries similar to those of octopuses on Earth. The Suumvaen have countless cultures and languages, but the civilisation itself has become singularly unified under the Suumvanir Republic Alliance following the end of the Fourth Suumvaen War and the Crystal Revolution.",
  },
  {
    title: "GhaenCorp",
    content:
      "GhaenCorp is a private research and development agency, specialising in experimental technology. Before the end of the Forth Suumvaen War they were known for the their niche and outlandish research projects, as this was their primary method of separating themselves in the market. Following the Crystal Revolution and several patented usages of the Heart Stone, GhaenCorp production skyrocketed, and their energy solution revolutionised the planet and caused the company to dominate the energy production market. They were personally responsible for putting Renglesh on the map, and forcing it become the capital of the Suumvaen civilisation. GhaenCorp shortly moved into the weapons manufacturing market, and from their became a global superpower, rivalling the influence of several nations, and even the Suumvanir Republic Alliance itself.",
  },
  {
    title: "Symbionts",
    content:
      "Symbionts are Suumvaen who have accepted symbiosis with the shards of the Heart Stone. This symbiosis is achieved by physically penetrating the skin of the host with the shard, usually by stabbing or injection. Symbionts received physical and mental augmentations over their former Suumvaens, including strength, power, dexterity, and usage of their senses. The crystalline texture of the Heart Stone shard begins to cover their body in random ways, sometimes uniform and smooth, sometimes rigid and chaotic. There currently has not been found any link between the type of crystalline coverage the host receives and the attributes of the host and shard. The Symbionts also lose aspects of their autonomy, as neither the host or shard can independently move their physical body, including speaking and the words that are spoken. Both parties must form a mental agreement on what is performed by the physical body, in order for it to occur. This agreement is usually instantaneous, but if both parties don't agree, the body will remain still and not perform the action. It has also been discovered that Symbionts can communicate with each other telepathically, and share knowledge and emotions through purely their own minds. ",
  },
  {
    title: "Dissenters",
    content:
      "Dissenters are the shard malicious consciousness that schismed from the original collective. Unlike the purple / turquoise crystalline formation of the original shards, the Dissenter's crystalline form takes on a red / black colour. Dissenters have the same abilties and features are the original shards, however these shards have the ability to completely takeover their hosts, and do not suffer the limitations of the loss of autonomy regarding have the host and shard to agree. The Dissenters have also evolved to commandeer not only biological hosts but electro-mechanical systems, allowing them to 'occupy' and operate machinery, robots, and vehicles.",
  },
];

const individualContent = [
  {
    title: "Astron Monren",
    content:
      "Astron Monren was a former GhaenCorp scientist who synthesised the Heart Stone for the Suumvanir Republic Alliance during the Fourth Suumvaen War. Astron had experimented with crystal synthesisation from an ancient meteorite during some research and development work for GhaenCorp before GhaenCorp was contracted by the Alliance. Typically described as stoic and quiet, Astron rarely interacted with co-workers and frequently worked alone. He was not survived by any family members when he died defending the Heart Stone in his laboratory during the end the Fourth Suumvaen War.",
  },
  {
    title: "Heart Stone",
    content:
      "The Heart Stone was a crystalline structure synthesised by Astron Monren during the Fourth Suumvaen War. The Stone was able to produce incredible amounts of energy by first absorbing a range of different particles and elements within the atmosphere of Suumvanir. Astron was not able to produce a finite list of resources that the Heart Stone could use to produce energy, and it seemed to be able to output energy regardless of what Astron tested with the Stone with. The exact process through which it procures energy was nebulous, even to Astron, who only detemine that its energy production was near-perpetual. The Heart Stone was also able to 're-grow' any chips or shards that were procured from its base state in a matter of minutes, without any impact on its energy production. The Heart Stone was destoyed during the First Symbiont War.",
  },
  {
    title: "Fulgrim Ghaen",
    content:
      "Fulgrim Ghaen is the current CEO of GhaenCorp. He inheritted the position following the death of his father, ten years prior to the Fourth Suumvaen War. Always financially ambitious, he did not hesitate to sign the largest contract in the companies history to produce an energy solution for the Suumvanir Repulic Alliance. Following the Crystal Revolution, Fulgrim became the richest Suumvaen in the history of its civilisation. He personally advocated for the capital of the civilisation to be renamed to Renglesh, which fuelled his ego immensely. He was said to have been obsessed with the Heart Stone, have been reported to talk to the Stone itself, without having knowledge it was intelligent or could communicate. Following GhaenCorp's passage into the weapons manufacturing market, he became remarkably more ruthless and incorporating military lingo into his everyday venacular.",
  },
  {
    title: "Nella Dygon",
    content:
      "Nella Dygon is a former scientist of the Suumvanir Republic Alliance, and was the first Symbiont on Suumvaen. Described as bubbly and extroverted, Nella took up linguistics and language learning as a hobby in order to communicate and learn from more people. Following the Crystal Revolution, she capitalised on the market oppotunities and immediately specialised in Heart Stone shard research. It was her pursuit of shard research and linguistic knowledge that lead to her discovery of the shard's energy signatures being a language itself, which meant that the shard's were sentient. Following her dismissal from the Suumvanir Republic Alliance's research department for wasting monetary resources on investigating the the energy signature's language instead of synthesising the shards, she continued to communicate with the shard and learned about its proposal for symbiosis. After completing the symbiosis by stabbing herself with the shard, she underwent an incredible physical and mental transformation, and become the first Symbiont. When she first communicated with the Symbiont, she found that the shards had a very limited concept of individualism, and the shard said it did not have a name for itself. Nella named the shard's intelligence Rose, to the Rose's approval. Their relationship aptly bloomed following this, and their symbiosis only grew stronger with time. After revealling her Symbiont nature, she also became one of the most famous individual on the planet. She was a key figure during the Symbiont Revolution, urging others to embrace the symbiosis of the shards. She also fought during the first Symbiont War, and was one of the first to oppose the Dissenters when they formed. She continued to fight for the Symbionts as well as the Suumvaen during the second Symbiont War, although she spent less time in the field and more time in the war room. ",
  },
  {
    title: "The Dissenter Intelligence",
    content:
      "The Dissenter Intelligence is a group of shard consciousnesses who agreed to no longer participate in a symbiotic relationship with their hosts, in favour of a hostile complete takeover. This group formed following the destruction of the Heart Stone and agreement that the current symbiotic relationship between shard and host would not longer preserve the existence of the shards. Like the shards of the Symbionts, the shards in the Dissenter Intelligence share thoughts, experiences, and emotions across shards. The Dissenters also evolved to occupy not only biological but electro-mechanical systems, extending their powers beyond the original shards. Following the Dissenter's routing during the Second Symbiont War, the Dissenter Intelligence primarily resides in their crystal fortress on Suumvanir's moon of Iologa, also known as the Red Moon.",
  },
];

const locationsContent = [
  {
    title: "Renglesh",
    content:
      "Renglesh is the newly annointed capital of the Suumvaen civilisation. The city used to be a technology hub in a relatively small nation as part of the civilisation. One of the companies as part of that hub was GhaenCorp, which before its annointment to capital, was a longstanding but commercially midling technology innovation company. Following the Crystal Revolution, GhaenCorp rapidly adopted the technological possiblities of the Heart Stone and its shards, and soon became far more advanced than any entity on the planet. This advancement spread to the infrastructure of Renglesh, as GhaenCorp used the city as a testing ground for many of its experiemental advances in shard technology, many of which paid off. After Suumvaen unanimously proclaimed Renglesh as the capital of the civilisation, Fulgrim accelerated the advancement of the city even further, including several fortifications of the city, making it one of the most militarily powerful locations on the entire planet.",
  },
  {
    title: "Arglova",
    content:
      "Arglova was the first city established by Nella Dygon as an independent haven for Symbionts. The Arglova rejected Suumvaen authority and claimed to be self governing city, governed exclusively by Symbionts. Arglova soon grew from a city to a country, with the original Arglova becoming Arglova City. The city itself features the crystalline architecture unique to the shards, with several buildings and skyscrapers being made out of the same substance as the shards themselves. Arglova city became a prominent battleground during several major conflicts, including both Symbiont Wars.",
  },
  {
    title: "Red Moon",
    content:
      "Formally known as Iologa, the Red Moon is the current base of operations for the Dissenter Intelligence. The moon possesses no capabilities to sustain biological life, and as such is only occupied by shards of the Dissenter Intelligence and their electromechanical hosts. Very few have reached, let alone visited the Red Moon, so very little is known about it to this day. What is known, is that the Red Moon is where the first Dissenter probes were launched into deep space.",
  },
];

const allContent = [
  { title: "Recent History", content: historyContent },
  { title: "Factions", content: factionsContent },
  { title: "Notable Individuals", content: individualContent },
  { title: "Notable Locations", content: locationsContent },
];

const CrystalWorldContent = () => {
  return (
    <>
      <AppText textAlign="left" fontSize="30px" marginTop="40px">
        Overview
      </AppText>
      <AppText fontSize="20px" mt="40px">
        The following is a worldbuilding project for a planet called Suumnavor
        (Soom-nah-vohr), also known as the Crystal World, which could be used as
        the setting for a science-fiction project.
      </AppText>
      <Accordion w="100%" allowToggle>
        {allContent.map((item) => (
          <AccordionItem mt="40px" border="0px solid transparent">
            <AccordionButton cursor="none">
              <AppText fontSize="30px" textAlign="left">
                {item.title}
              </AppText>
              <AccordionIcon color="white" boxSize="30px" />
            </AccordionButton>
            <AccordionPanel>
              <Accordion w="100%" allowToggle>
                {item.content.map((entry) => (
                  <AccordionItem border="0px solid transparent">
                    <AccordionButton cursor="none">
                      <AppText fontSize="26px" textAlign="left">
                        {entry.title}
                      </AppText>
                      <AccordionIcon color="white" boxSize="30px" />
                    </AccordionButton>
                    <AccordionPanel>
                      <AppText fontSize="20px" mt="20px">
                        {entry.content}
                      </AppText>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default CrystalWorldContent;
