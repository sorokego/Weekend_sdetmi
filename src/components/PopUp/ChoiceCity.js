const ChoiceCity = ({ setActive, setCity }) => {
  return (
    <div>
      <input
        className="p-2 mb-1 w-56 border border-Sea rounded-lg focus:outline-none"
        type="text"
        placeholder="Введите город"
      />
      <ul className="">
        <li
          className="mt-4 block list-none cursor-pointer hover:text-Sea"
          onClick={() => {
            setCity("Тюмень");
            setActive(false);
          }}
        >
            Тюмень
        </li>
        <li
          className="mt-4 block list-none cursor-pointer hover:text-Sea"
          onClick={() => {
            setCity("Новосибирск");
            setActive(false);
          }}
        >
            Новосибирск
        </li>
      </ul>
    </div>
  );
};

export default ChoiceCity;
