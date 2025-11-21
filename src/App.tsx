import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import PlanetDisplay from "./components/PlanetDisplay"
import { fetchMoon } from "./api/fake_moon_fetch"
import { useQuery } from "@tanstack/react-query"


function App() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['moon'],
    queryFn: fetchMoon
  })
  return (
    <>
      <NavBar />
      <Hero />
      <PlanetDisplay body={data} isLoading={isLoading} isError={isError} />
    </>
  )
}

export default App
