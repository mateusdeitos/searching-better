import { Flex, Heading, IconButton, useBreakpointValue } from "@chakra-ui/react"
import { FaFilter, FaBars } from "react-icons/fa"
import React from "react"
import Link from 'next/link'

export const Header = () => {
	const isWideVersion = useBreakpointValue([false, true])
	return (
		<Flex bg="brand.500" minH={["4rem", "5rem"]} borderBottom="1px" borderColor="gray.100">
			<Flex maxW={1120} px={["1rem"]} m="0 auto" flex="1" alignItems="center" justifyContent={["space-between", "center"]} py="1rem">
				{!isWideVersion && <IconButton variant="ghost" colorScheme="blue" size="sm" icon={<FaBars size={10} />} />}
				<Link passHref href="/">
					<Heading cursor="pointer" as="a" fontSize={["0.75rem", "2.25rem"]}>Searching Better</Heading>
				</Link>
				{!isWideVersion && <IconButton variant="ghost" colorScheme="yellow" size="sm" icon={<FaFilter size={10} />} />}
			</Flex>
		</Flex>
	)
}
