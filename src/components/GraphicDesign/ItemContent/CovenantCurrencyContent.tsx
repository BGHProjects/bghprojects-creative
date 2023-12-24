import { chakra, Text, Image, Spinner } from "@chakra-ui/react";

/**
 * Content that is displayed in the Graphic Design page
 * when Covenant Currency is selected
 */
const CovenantCurrencyContent = () => {
  const imagePath = "/assets/images/graphic-design/designs/covenant-currency/";

  const bankNotes = [
    ["Grunt", "Unggoy"],
    ["Jackal", "Kig-Yar"],
    ["Brute", "Jiralhanae"],
    ["Elite", "Sangheili"],
    ["Prophet", "San'Shyuum"],
  ];

  const BankNoteItem = ({ name1, name2 }: { name1: string; name2: string }) => {
    return (
      <>
        <AppText textAlign="left" fontSize="30px">
          {name1} / {name2}
        </AppText>
        <Image
          mt="40px"
          src={imagePath + `${name1} Note Side 1.svg`}
          fallback={<Spinner size="xl" color="white" />}
        />
        <Image
          mt="40px"
          mb="40px"
          src={imagePath + `${name1} Note Side 2.svg`}
          fallback={<Spinner size="xl" color="white" />}
        />
      </>
    );
  };

  return (
    <>
      <AppText textAlign="left" fontSize="30px">
        Overview
      </AppText>
      <AppText fontSize="20px">
        The following is a project where I designed banknotes for the fictional
        'Covenant Credits' currency to be used by the Covenant alien alliance
        from the Halo franchise.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Problem Brief
      </AppText>
      <AppText fontSize="20px">
        The Hierarchs have decided that it is in the best interests of the
        Covenant to establish a singular economy across the different species
        that are part of the alliance. This economy will be standardised with a
        new form of currency; the Covenant Credit. As part of the introduction
        of the Covenant Credit, banknotes must be designed to facilitate
        physical transactions for the Credits. Five denominations must be
        included; 5, 10, 20, 50, and 100.
      </AppText>
      <AppText textAlign="left" fontSize="30px">
        Design Overview
      </AppText>
      <AppText fontSize="20px">
        Ultimately ten different designs were produced; two sides for each of
        the denominations. It was decided that the five denominations should
        represent the five founding alien species of the Covenant; being the
        Prophets, the Elites, the Brutes, the Jackals, and the Grunts. The
        designs were primarily inspited by the Euro and Australian Dollar
        banknotes, specifically their colourful design for each of the
        denominations and abstract layout. I attempted to incorporate a
        significant amount of subtle complexity into the contents of the
        banknotes, as is usually required for banknote design in order to
        increase the difficulty of counterfeit production. Each side contains
        two representations of the species, two background images of something
        related to either the Covenant themselves of the Forerunners, their
        religious leaders, the Covenant insignia, the denomiation, both the
        informal and formal species name, and a identification number. On the
        higher denominations (20 and above), notable figures of the species were
        used, as opposed to generic images, and the name of the figure is also
        included on the banknote.
      </AppText>
      {bankNotes.map((item: string[]) => {
        return <BankNoteItem name1={item[0]} name2={item[1]} />;
      })}
    </>
  );
};

const AppText = chakra(Text, {
  baseStyle: {
    color: "white",
    fontFamily: "Electrolize",
    marginTop: "40px",
    w: "100%",
  },
});

export default CovenantCurrencyContent;
