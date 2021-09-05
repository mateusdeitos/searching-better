import { ChakraProvider } from "@chakra-ui/react"
import { FormProvider } from "../hooks/useForm"
import { theme } from "../styles/theme"

function MyApp({ Component, pageProps }) {
	return <ChakraProvider resetCSS theme={theme}>
		<FormProvider>
			<Component {...pageProps} />
		</FormProvider>
	</ChakraProvider>
}

export default MyApp
