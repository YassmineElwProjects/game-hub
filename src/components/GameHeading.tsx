import { Heading } from '@chakra-ui/react'
import { GameQuery } from './../App';

interface Props{
    gameQuery: GameQuery
}



export const GameHeading = ({gameQuery}: Props) => {

const heading = `${gameQuery?.platform?.name || ''} ${gameQuery?.genre?.name || ''} Games`;

  return (
    <Heading fontSize='4xl' as={'h1'} marginBottom={5} marginLeft={2}>{heading}</Heading>
  )
}
