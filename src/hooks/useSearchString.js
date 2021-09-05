import { createContext, useContext, useEffect, useState } from "react";
import { useForm } from "./useForm";

const SearchStringContext = createContext("");

export const SearchStringProvider = ({ children }) => {
	const [searchString, setSearchString] = useState("")
	const { formValues } = useForm();

	useEffect(() => {
		let _searchString = formValues?.textSearch || "";
		if (formValues?.filters?.related) {
			_searchString = `related:${formValues?.filters?.relatedWebsite || ""} ${_searchString || ""}`;
		} else if (formValues?.filters?.in) {
			_searchString = `in:${formValues?.filters?.inWebsite || ""} ${_searchString || ""}`;
		}

		setSearchString(_searchString);
	}, [formValues]);

	return <SearchStringContext.Provider value={{
		searchString
	}}>{children}</SearchStringContext.Provider>
}

export const useSearchString = () => {
	return useContext(SearchStringContext);
}
