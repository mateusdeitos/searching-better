import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputLeftAddon, InputRightAddon } from "@chakra-ui/input";
import { Heading, VStack } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";
import { useForm } from '../hooks/useForm';


export const Filters = () => {
	const { formValues, registerField } = useForm();

	const onChange = (key, handler = null) => {
		return (value, currentForm) => {
			const currentFilters = currentForm?.filters || {};
			return !!handler ? handler(value, currentFilters) : {
				...currentFilters,
				[key]: value,
			};
		};
	}

	return (

		<VStack>
			<Heading size="md">Filters</Heading>
			<InputSwitch id="in" label="Search in a website" isChecked={!!formValues?.filters?.in} {...registerField('filters', onChange('in', (_in, filters) => {
				return {
					...filters,
					in: _in,
					related: _in ? false : !!filters?.related
				}
			}))} />

			<UrlInput
				id="inWebsite"
				isDisabled={!formValues?.filters?.in}
				{...registerField('filters', onChange('inWebsite'))}
			/>

			<InputSwitch id="in" label="Search for websites related to" isChecked={!!formValues?.filters?.related} {...registerField('filters', onChange('related', (_in, filters) => {
				return {
					...filters,
					related,
					in: related ? false : !!filters?.in,
				}
			}))} />

			<UrlInput
				id="relatedWebsite"
				isDisabled={!formValues?.filters?.related}
				{...registerField('filters', onChange('relatedWebsite'))}
			/>
		</VStack>
	);
}

const InputSwitch = ({ id, label, ...switchProps }) => {
	return (<FormControl id={id} d="flex" alignItems="center">
		<Switch size="sm" {...switchProps} />
		<FormLabel my="unset" ml="0.5rem" fontSize="sm">{label}</FormLabel>
	</FormControl>);
}


const UrlInput = ({ id, ...props }) => {
	return (
		<FormControl id="inWebsite">
			<InputGroup colorScheme="blue" size="sm">
				<InputLeftAddon bgColor="blue.100">
					https://
				</InputLeftAddon>
				<Input type="text" placeholder="Website url" {...props} />
			</InputGroup>
		</FormControl>
	);

}
