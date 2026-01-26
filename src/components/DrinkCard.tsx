import { useMainStore } from "../stores/MainStore"
import type { Drink } from "../types"

type DrinkCardProps = {
  drink: Drink
}

export default function DrinkCard({ drink }: DrinkCardProps) {
  
  const viewRecipe = useMainStore((state) => state.viewRecipe)

  return (
    <div className="shadow-lg">
      <div className="overflow-hidden">
        <img 
          src={ drink.strDrinkThumb } 
          alt={ drink.strDrink } 
          className="hover:scale-125 hover:rotate-2 transition-transform"
        />
      </div>
      <div className="p-5">
        <h2 className="text-2xl truncate font-black">{ drink.strDrink }</h2>
      </div>
      <button
        className="bg-orange-400 hover:bg-orange-500 text-white font-bold text-lg w-full p-3 mt-5"
        onClick={ () => viewRecipe(drink.idDrink) }
      >
        Ver Receta
      </button>
    </div>
  )
}

