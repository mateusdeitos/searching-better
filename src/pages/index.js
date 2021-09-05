import { HStack, Text, VStack } from "@chakra-ui/layout";
import { PageWrapper } from "../components/PageWrapper";
import { InputSearch } from '../components/InputSearch';
import { Filters } from '../components/Filters';
import { SearchStringProvider, useSearchString } from "../hooks/useSearchString";

const Home = () => {
	return (
		<SearchStringProvider>
			<Content />
		</SearchStringProvider>
	);
}

const Content = () => {
	const { searchString } = useSearchString();

	return <PageWrapper>
		<HStack alignItems="center" justifyContent="space-between" w="100%">
			<VStack flex="1" px="10rem">
				<InputSearch  />
				<Text size="md" >
					Search string: {!!searchString ? searchString : "type something..."}
				</Text>
			</VStack>
			<Filters />
		</HStack>
	</PageWrapper>
}


export default Home;
