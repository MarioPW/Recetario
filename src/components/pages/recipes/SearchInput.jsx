import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const SearchInput = ({ items = [], url = null, action = null, setItemsList = null, withDropdown = true }) => {
  const [search, setSearch] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
  };

  const performLocalFilter = (query) => {
    if (!query.trim()) {
      setFilteredItems([]);
      setItemsList?.(items);
      return;
    }

    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(query)
    );

    setFilteredItems(filtered);
    setItemsList?.(filtered);
  };

  const performRemoteSearch = async (query) => {
    if (!query.trim() || !url || !action) return;

    try {
      const results = await action(`${url}?search=${encodeURIComponent(query)}`);
      setFilteredItems(results);
      setItemsList?.(results);
    } catch (error) {
      console.error('Error fetching remote search:', error);
    }
  };

  useEffect(() => {
    if (url && action) {
      performRemoteSearch(search);
    } else {
      performLocalFilter(search);
    }
  }, [search, items]);

  return (
    <div className="relative flex items-center p-2">
      <i className="bi bi-search absolute left-4 text-gray-400 pointer-events-none"></i>
      <input
        className="w-full pl-6 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type="search"
        placeholder="Buscar"
        aria-label="Search"
        value={search}
        onChange={handleSearch}
      />
      {filteredItems.length > 0 && withDropdown && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 top-full max-h-60 overflow-y-auto">
          {filteredItems.map((item) => (
            <li
              key={item.id || item.FSId}
              className="hover:bg-gray-50 transition-colors duration-150"
              onClick={() => setSearch('')}
            >
              {url && (
                <Link 
                  to='/Recetario/recipe'
                  state={{ recipe: item }}
                  className="block px-4 py-2 text-gray-800 no-underline hover:text-blue-600"
                >
                  {item.name}
                </Link>
              )}
              {action && (
                <button 
                  className="w-full text-left px-4 py-2 text-gray-800 hover:text-blue-600 focus:outline-none" 
                  onClick={() => action(item)}
                >
                  {item.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};