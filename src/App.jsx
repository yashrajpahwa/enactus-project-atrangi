import Content from "./components/content";
import Nav from "./components/nav";
import TopNote from "./components/topNote";

const App = () => {
  return (
    <>
      <TopNote />
      <Nav />
      <div className="my-10"></div>
      <div className="mx-[80px]">
        <Content/>
      </div>
    </>
  );
}

export default App