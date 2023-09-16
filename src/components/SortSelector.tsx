import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronBarDown } from 'react-icons/bs';



export const SortSelector = () => {
    return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
            order by : relevace
          </MenuButton>
          <MenuList>
             <MenuItem> Relevance </MenuItem>
             <MenuItem>Date Added </MenuItem>
             <MenuItem>Name</MenuItem>
             <MenuItem>Release date </MenuItem>
             <MenuItem>Popularity </MenuItem>
             <MenuItem>Average ratting</MenuItem>
          </MenuList>
         
          
        </Menu>
      );
}
