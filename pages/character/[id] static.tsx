import { NextPage } from "next";
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

export const getStaticPaths = async (context: any) => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResults = await res.json();

  return {
    paths: results.map((char) => {
      return { params: { id: String(char.id) } };
    }),
    fallback:false
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: String };
}) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  return {
    props: {
      character: await res.json(),
    },
  };
};
