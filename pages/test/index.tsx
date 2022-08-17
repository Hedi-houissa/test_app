import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Character, GetCharacterResults } from "../../types/typeCharacter";

const header: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <Link href={`/character/${character.id}`}>
            {character.name}
            </Link>
            <Image
              src={character.image}
              alt={character.name}
              width={200}
              height={200}
            />
          </div>
        );
      })}
    </div>
  );
};

export default header;

export const getStaticProps = async (context: any) => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResults = await res.json();

  return {
    props: {
      characters: results,
    },
  };
};
