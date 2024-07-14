import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
import Dropdown from '../DropdownMenu/DropdownMenu';

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
            <div className="relative flex items-center rounded-3xl border border-gray-600 dark:border-gray-500">
                <Dropdown
                // className="w-[250px] border-none bg-gray-500 pl-[40px]"
                />
                <Input
                    type="text"
                    value={searchTerm}
                    placeholder=""
                    className="w-[250px] border-none bg-white pl-[40px]"
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <Button
                    className="p-2 ml-2 capitalize flex justify-end float-right bg-gray-800"
                    type="button"
                    size={"sm"}
                    onClick={handleSearchClick}
                >
                    <Search />
                </Button>

            </div>
    )
}

export default SearchComponents