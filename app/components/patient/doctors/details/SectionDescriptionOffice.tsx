import CardDescription from "./CardDescription"
import CardOffice from "./CardOffice"

export default function SectionDescriptionOffice() {
    return (
        <section className="flex justify-between items-center gap-5 w-2/3">
            <CardDescription />
            <CardOffice />
        </section>
    )
}