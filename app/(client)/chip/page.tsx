import { PageProps } from "@/.next/types/app/layout"
import SearchPage from "../page"

const ChipSearchPage = (props: PageProps) => {
    return (
        <SearchPage {...props} mode="chip" />
    )
}

export default ChipSearchPage