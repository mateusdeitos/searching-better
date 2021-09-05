import { createContext, useContext, useState } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
	const [formState, setFormState] = useState({});

	const updateKey = (key, value) => {
		const newObj = formState;

		setFormState({ ...formState, ...newObj, [key]: value });
	};

	const registerField = (field, handler = null) => {
		const _handler = typeof handler === 'function' ? handler : (value) => value;

		return {
			onChange: (e) => {
				let value = e.target.value;
				if (e.target.type === 'checkbox') {
					value = e.target.checked;
				}

				updateKey(field, _handler(value, formState));
			}
		};
	};

	return <FormContext.Provider value={{
		formValues: formState,
		registerField,
		updateKey
	}}>
		{children}
	</FormContext.Provider>

}

export const useForm = () => {
	return useContext(FormContext);
}
