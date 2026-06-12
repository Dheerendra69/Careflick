interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({
  value,
  onChange,
}: SearchBarProps) => {
  return (
    <input
      type="text"
      placeholder="Search by name or email..."
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="w-full border rounded-lg px-4 py-2 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchBar;