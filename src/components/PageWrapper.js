import { PopoverBody, PopoverContent, PopoverHeader, Flex, VStack, Divider, Link as ChakraLink, Popover, PopoverTrigger, PopoverArrow, PopoverCloseButton, Avatar, Portal, Icon, Heading } from "@chakra-ui/react"
import Head from "next/head"
import React from "react"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import { Header } from "./Header"

export const PageWrapper = ({ title, children, ...rest }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<Header />
			< VStack
				pt="1rem"
				px={["1rem", "0"]}
				maxW={1120}
				h={["calc(100vh - 8rem)", "calc(100vh - 12rem)"]}
				align="center"
				justify="start"
				m="0 auto"
				{...rest}
			>
				{children}
			</VStack >
			<Footer />
		</>
	)
}

const Footer = () => {
	return (
		<Flex w="100%" direction="column" alignItems="center">
			<Popover trigger="click" placement="top" >
				<PopoverTrigger>
					<Flex alignItems="center" mt="1.5rem">
						<Heading fontWeight="normal" fontSize={["0.75rem", "1rem"]}>Desenvolvido por&nbsp;</Heading>
						<Heading fontSize={["0.75rem", "1rem"]} fontWeight="600" color="brand.500" cursor="pointer" >Mateus Deitos</Heading>
					</Flex>
				</PopoverTrigger>
				<PopoverContent bg="gray.50" borderColor="gray.300">
					<PopoverHeader borderColor="gray.50">
						<Flex alignItems="center">
							<Avatar mr="1rem" size="md" showBorder src="https://avatars.githubusercontent.com/u/8628316?v=4" />
							<Heading fontSize="1rem">Mateus Deitos</Heading>
						</Flex>
					</PopoverHeader>
					<PopoverArrow bg="gray.50" />
					<PopoverCloseButton />
					<PopoverBody>
						<Flex alignItems="center">
							<Icon as={FaLinkedin} boxSize={5} />
							<ChakraLink ml=".5rem" data-gtm="contato-linkedin" href="https://www.linkedin.com/in/mateus-deitos/" cursor="pointer" isExternal fontWeight="600" color="blue.500" textDecoration="underline">Linkedin</ChakraLink>
						</Flex>
						<Flex alignItems="center">
							<Icon as={FaGithub} boxSize={5} />
							<ChakraLink ml=".5rem" data-gtm="contato-github" href="https://www.github.com/mateusdeitos/" cursor="pointer" isExternal fontWeight="600" color="blue.500" textDecoration="underline">Github</ChakraLink>
						</Flex>
						<Flex alignItems="center">
							<Icon as={FaEnvelope} boxSize={5} />
							<ChakraLink ml=".5rem" data-gtm="contato-envelope" href="mailto:mate.deitos@hotmail.com" cursor="pointer" isExternal fontWeight="600" color="blue.500" textDecoration="underline">mate.deitos@hotmail.com</ChakraLink>
						</Flex>
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</Flex>
	);
}
