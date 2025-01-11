import React, { useState } from 'react';
import "./SearchBar.css"

type SearchBarProps = {
  onSearch: (query: string) => void; // Функция для передачи запроса в родительский компонент
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>(''); // Локальное состояние для строки поиска

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value); // Обновляем состояние
  };

  const handleSearch = () => {
    onSearch(query); // Передаем введенный запрос в родительский компонент
  };

  return (
    <div className='container'>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Поиск"
        className='input'
      />
      <button onClick={handleSearch} className='button'>
        Поиск
      </button>
    </div>
  );
};

export default SearchBar;
