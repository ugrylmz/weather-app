interface SearchInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }


const SearchInput = ({
    value,
    onChange,
}: SearchInputProps) => {
    
    return (
        <input type="text" value={value} onChange={onChange} placeholder="Search city..." />
    )
}

export default SearchInput;