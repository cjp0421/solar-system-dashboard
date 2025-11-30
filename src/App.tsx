import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import PlanetDisplay from "./components/PlanetDisplay"
import { useBody } from "./queries/useBody";

function App() {
  const planetID = 'moon';
  const { data, isLoading, isError, refetch } = useBody(planetID);
  return (
    <>
      <NavBar />
      <main>
        <Hero refetch={refetch} />
        <PlanetDisplay body={data} isLoading={isLoading} isError={isError} />
      </main>
    </>
  )
}

export default App;
