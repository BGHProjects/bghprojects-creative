import { VStack, Image, Text } from "@chakra-ui/react";

const MetaRangersDesignContent = () => {
  const images = [
    "Main Menu Redesign",
    "Loadout Redesign 3",
    "Hell Station Gameplay 1",
    "PlasmaRefineryGameplay1",
    "Sunset Outpost 1st Level Gameplay",
  ];

  return (
    <VStack spacing={10}>
      {images.map((image) => (
        <Image
          key={image}
          src={`/assets/images/game-design/metarangers/${image}.PNG`}
        />
      ))}
    </VStack>
  );
};

const MetaRangersTextContent = () => {
  return (
    <Text color="white" fontFamily="Electrolize" fontSize="20px" mt="40px">
      MetaRangers is a blockchain survival first-person shooter. The target
      audience is both fans of first-person shooters who are interested in
      exploring web3 gaming and web3 users looking for a test-network-based game
      to play. The main gameplay objective is to survive as long as you can
      against AI enemies to accrue the in-game currency, called METR, to spend
      on unlockable items that can be used to augment the gameplay experience
      and survive longer.
      <br /> <br />
      The game was conceived as a proof-of-concept to see how the use of
      decentralised tokens could be integrated into a video game. The shooter
      gameplay aspect of the game was built on top of the Unity FPS Microgame in
      order to bootstrap the game’s development, as the primary focus was the
      integration of the web3 elements. The tokens used in the game take the
      form of weapons, weapon upgrades, powerups, and METR.
    </Text>
  );
};

export { MetaRangersDesignContent, MetaRangersTextContent };
