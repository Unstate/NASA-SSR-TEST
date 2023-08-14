import Content from "./components/Content";
import Header from "./components/Header";

const App = () => {
  return (
    <div className=" bg-black w-full min-h-screen flex flex-col text-white gap-y-2">
      <Header />
      <Content />
    </div>
  );
};

export default App;
