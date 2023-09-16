import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronBarDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from './../hooks/useGames';

export const PlatformSelector = () => {

    const {data, error} = usePlatforms();

    if (error ) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map(Platform => <MenuItem key={Platform.id}>{Platform.name}</MenuItem>)}
      </MenuList>
     
      
    </Menu>
  );
}
