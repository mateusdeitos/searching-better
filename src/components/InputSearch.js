import { Input, InputRightElement } from "@chakra-ui/input"
import { InputGroup, IconButton, Link } from "@chakra-ui/react";
import { FaSearch } from 'react-icons/fa';
import { useForm } from "../hooks/useForm";
import { useRandomThemeColor } from '../hooks/useRandomThemeColor';
import { useSearchString } from "../hooks/useSearchString";

export const InputSearch = ({ ...props }) => {
	const { randomColor, updateColor } = useRandomThemeColor();
	const { searchString } = useSearchString();
	const { registerField } = useForm();

	const handleSearch = () => {
		console.log(searchString);
	}

	return <InputGroup size="lg">
		<Input
			{...props}
			{...registerField('textSearch')}
			type="text"
			focusBorderColor={randomColor}
			onBlur={updateColor}
		/>
		<InputRightElement>
			<Link target="_blank" href={`https://google.com/search?q=${searchString}`}>
				<IconButton bgColor={randomColor} icon={<FaSearch />} size="md" onClick={handleSearch} />
			</Link>
		</InputRightElement>
	</InputGroup>
}
