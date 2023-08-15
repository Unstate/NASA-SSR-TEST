import MyButton from "./UI/MyButton";

const Garbage = () => {
  return (
    <div className="w-[150px] h-[160px] p-4 bg-[#232526] rounded-3xl flex flex-col justify-between items-center">
      <div>
        <p>Коризна</p>
        <p>2 астероида</p>
      </div>
      <MyButton />
    </div>
  );
};

export default Garbage;
