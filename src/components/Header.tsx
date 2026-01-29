import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useMainStore } from "../stores/MainStore"

export const Header = () => {

  const { pathname } = useLocation()
  const isHome = pathname === "/"

  const [searchFilter, setSearchFilter] = useState({
    ingredient: "",
    category: ""
  })
  const fetchCategories = useMainStore(state => state.fetchCategories)
  const categories = useMainStore(state => state.categories)
  const searchRecipes = useMainStore(state => state.searchRecipes)
  const showNotification = useMainStore(state => state.showNotification)
   

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setSearchFilter({
      ...searchFilter,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault()

    if(Object.values(searchFilter).includes("")) {
      showNotification({
        text: "Por favor complete todos los campos",
        error: true
      })
      return
    }

    searchRecipes(searchFilter)
    
  }

  return ( 
    <header className={isHome ? "bg-header" : "bg-slate-800"}>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img src="/logo.svg" alt="logo" className="w-32"/> 
          </div>
          <nav className="flex gap-5">
            <NavLink 
              to="/"
              className={({ isActive}) => isActive ?
                "font-bold text-orange-500 uppercase" :
                "font-bold text-white uppercase"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/favoritos"
              className={({ isActive}) => isActive ?
                "font-bold text-orange-500 uppercase" :
                "font-bold text-white uppercase"
              }
            >
              Favoritos
            </NavLink>
            <NavLink
              to="/generateai"
              className={({ isActive}) => isActive ?
                "font-bold text-orange-500 uppercase" :
                "font-bold text-white uppercase"
              }
            >
              Generar con IA
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form 
            className="md:w-1/2 lg:w-1/3 bg-orange-400 my-32 p-10 space-y-6 rounded-lg shadow-lg" 
            onSubmit={handleSubmit}>

            <div className="space-y-4">
              <label 
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Nombre o ingredientes
              </label>

              <input 
                type="text"
                id="ingredient"
                name="ingredient"
                className="bg-white p-3 w-full rounded-lg focus:outline-none"
                placeholder="Nombre o Ingredientes de la receta"
                value={searchFilter.ingredient}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-4">
              <label 
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Categoría
              </label>

              <select
                id="category"
                name="category"
                className="bg-white p-3 w-full rounded-lg focus:outline-none"
                onChange={handleChange}
              >
                <option value="">-- Seleccione --</option>
                {categories.drinks.map(category => (
                  <option 
                    key={category.strCategory} 
                    value={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              value="Buscar Receta"
              className="bg-orange-800 hover:bg-orange-900 text-white font-extrabold uppercase p-2 w-full rounded-lg cursor-pointer transition-colors"
            />
          </form>
        )}
      </div>
    </header>
  )
}
