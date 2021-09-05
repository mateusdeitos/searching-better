import { HStack, Text, VStack } from "@chakra-ui/layout";
import { PageWrapper } from "../components/PageWrapper";
import { InputSearch } from '../components/InputSearch';
import { Filters } from '../components/Filters';
import { SearchStringProvider, useSearchString } from "../hooks/useSearchString";
import { useBreakpointValue } from "@chakra-ui/media-query";

const Home = () => {
	return (
		<SearchStringProvider>
			<Content />
		</SearchStringProvider>
	);
}

const Content = () => {
	const { searchString } = useSearchString();
	const isWideVersion = useBreakpointValue([false, true])

	return <PageWrapper>
		<HStack alignItems="center" justifyContent="space-between" w="100%">
			{isWideVersion && <Filters />}
			<VStack flex="1" px="5rem">
				<InputSearch />
				<Text size="md" >
					Search string: {!!searchString ? searchString : "type something..."}
				</Text>
			</VStack>
			{isWideVersion && <Filters />}
		</HStack>
	</PageWrapper>
}


export default Home;
