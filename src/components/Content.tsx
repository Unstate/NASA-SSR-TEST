import Asteroids from "./Asteroids";
import Earth from "./Earth";
import Garbage from "./Garbage";

const Content = () => {
  return (
    <div className="flex justify-center">
      <Earth />
      <Asteroids />
      <Garbage />
    </div>
  );
};

export default Content;
