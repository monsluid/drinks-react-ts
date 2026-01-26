import { useMemo } from "react";
import DrinkCard from "../components/DrinkCard";
import { useMainStore } from "../stores/MainStore";

export const FavoritesPage = () => {
  const favorites = useMainStore((state) => state.favorites);
  const hasFavorites = useMemo(() => favorites.length > 0, [favorites]);

  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1>
      {hasFavorites ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {favorites.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <>
          <p className="my-10 text-center text-2xl">
              Aqui apareceran tus recetas favoritas
          </p>
        </>
      )}
    </>
  );
};
