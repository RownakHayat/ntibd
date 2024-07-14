import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
import SearchDropMenu from './SearchDropMenu';

type SearchComponentProps = {
  onSearch: (searchTerm: string) => void;
};



const SearchComponents = ({ onSearch }: SearchComponentProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
    if (event.target.value === '') {
      onSearch('');
    }
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="relative rounded-3xl border border-gray-600 dark:border-gray-500 mt-2">
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <SearchDropMenu 
          />
        </div>
        <div className="col-span-6">
          <Input
            type="text"
            value={searchTerm}
            placeholder=""
            className="w-[250px] border-none bg-white focus:outline-none pl-[4px]"
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="col-span-2">
          <Button
            className="p-2 w-full h-full rounded-r-3xl capitalize flex justify-center items-center float-right bg-[#7b7b7b] hover:bg-gray-800"
            type="button"
            size={"sm"}
            onClick={handleSearchClick}
          >
            <Search />
          </Button>
        </div>
      </div>

    </div>
  )
}

export default SearchComponents