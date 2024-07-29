function Search() {
    return (
        <form className="flex justify-end " >
            <input
                type='text'
                placeholder='feed cat...'
                name='search-todo'
                className="px-4 py-2 outline-none bg-transparent border-b-1 border-b-frame "
            />
            <label htmlFor=""></label>
            <FontAwesomeIcon icon="fa-solid fa-filter" />
        </form>
    )
}

export default Search