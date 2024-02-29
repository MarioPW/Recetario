
export const SearchResultDropdown = (props) => {
    console.log("hola" + props.dropdownProps )
    
    if (props.dropdownProps){
        return (
        <>
            {props.searchResultArray.map(item => {
                <li className="flex w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"><a href={'#' + {item}}>{item}</a></li>
            }
            )}
        </>
    )}
}
