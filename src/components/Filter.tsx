
function Filter({ value, handleCategoryChange }: { value: string, handleCategoryChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void }) {

    return (
        <select
            value={value}
            onChange={(event) => handleCategoryChange!(event)} name="category" className="bg-transparent border-1 border-frame outline-none rounded-md p-1">
            <option value='house'>House</option>
            <option value={'school'}>School</option>
            <option value='office'>Office</option>
        </select>
    )
}

export default Filter