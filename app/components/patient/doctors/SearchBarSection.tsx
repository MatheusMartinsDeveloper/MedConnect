import SearchBar from "./SearchBar"

export default function SearchBarSection() {
    return (
        <section className="flex justify-center items-center w-full pt-10">
            <div className="flex justify-between items-center w-2/3">
                <SearchBar />
            </div>
        </section>
    )
}