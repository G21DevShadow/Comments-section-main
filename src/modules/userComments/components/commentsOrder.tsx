interface Option {
  name: string;
  value: string;
}

interface OrderCommentsProps {
  options: Option[];
  onChange: (order: string) => void;
}

export function CommentsOrder({ options, onChange }: OrderCommentsProps) {
  const handleOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    onChange(event.target.value);
  };
  return (
    <form action="">
      <label htmlFor="select" className="text-Dark-blue pr-3">
        Sort By:
      </label>
      <select
        name="order"
        id="select"
        onChange={handleOption}
        className="text-Dark-blue p-2 px-3 rounded-3xl outline-0 cursor-pointer hover:bg-Light-grayish-blue duration-200"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </form>
  );
}
