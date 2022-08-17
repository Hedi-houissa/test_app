import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { Character, GetCharacterResults } from "../../types/typeCharacter";

const characterPage: NextPage<{ character: Character }> = ({ character }) => {
  return (
    <div key={character.id}>
      {character.name}{" "}
      <Image
        src={character.image}
        alt={character.name}
        width={200}
        height={200}
      />
    </div>
  );
};

export default characterPage;


export const getServerSideProps:GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${context.query.id}`
  );
  return {
    props: {
      character: await res.json(),
    },
  };
};
