import Nav from "./components/nav";
import TopNote from "./components/topNote";

const App = () => {
  return (
    <>
      <TopNote />
      <Nav/>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App