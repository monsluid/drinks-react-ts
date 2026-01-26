import type { JSX } from 'react';
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react';
import { useMainStore } from '../stores/MainStore';
import type { Recipe } from '../types';



export default function Modal() {
  const modal = useMainStore((state) => state.modal);
  const closeModal = useMainStore((state) => state.closeModal);
  const recipe = useMainStore((state) => state.recipe);
  const handleFavorite = useMainStore((state) => state.handleFavorite);
  const favoriteExist = useMainStore((state) => state.favoritesExist);

  const renderIngredients = () => {

    const ingredients: JSX.Element[] = [];
    for (let i = 1; i <= 6; i++) {
      const ingredient = recipe[`strIngredient${i}` as keyof Recipe];
      const measure = recipe[`strMeasure${i}` as keyof Recipe];

      if (ingredient && measure) {
        ingredients.push(
          <li key={i} className="text-lg font-normal">
            {measure} - {ingredient}
          </li>
        )
      }

    }

    return ingredients
  }

  return (
    <>
      <Dialog 
        open={modal} 
        onClose={() => closeModal()} 
        className="relative z-50"
      >
        {/* Fondo con transición integrada */}
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/70 transition-opacity duration-300 ease-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            
            <DialogPanel
              transition
              className="relative w-full max-w-2xl transform overflow-hidden rounded-lg bg-white p-6 text-left shadow-xl transition-all duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
            >
              <DialogTitle as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                {recipe.strDrink}
              </DialogTitle>

              <img
                src={recipe.strDrinkThumb}
                alt={recipe.strDrink}
                className="w-full h-auto rounded-md"
              />
              
              <div className="mt-2">
                <p className="text-gray-900 text-2xl font-extrabold my-5">
                  Ingredientes y Cantidades
                  {renderIngredients()}
                </p>
                <p className="text-gray-900 text-2xl font-extrabold my-5">
                  Instrucciones
                </p>
                <p className='text-lg'>
                  {recipe.strInstructions}
                </p>
              </div>

              <div className="mt-5 flex justify-between gap-2">
                <button
                  type="button"
                  className='w-full p-3 bg-gray-600 hover:bg-gray-500 text-white font-bold rounded-md shadow uppercase'
                  onClick={() => closeModal()}
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  className='w-full p-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-md shadow uppercase'
                  onClick={() => {
                    handleFavorite(recipe)
                    closeModal()
                    }  
                  }
                >
                  {favoriteExist(recipe.idDrink) ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
                </button>
              </div>
            </DialogPanel>

          </div>
        </div>
      </Dialog>
    </>
  );
}

