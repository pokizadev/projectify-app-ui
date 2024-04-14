import styled from "styled-components";
import { Input, Select, Option } from "../../../design-system";
import { PageFilters } from "../../components/PageFilters";

type TeamMemberFiltersProps = {
    selectedStatus: string;
    setSelectedStatus: (option: Option) => void;
    searchText: string;
    setSearchText: (value: string) => void;
};

const Filters = styled(PageFilters)`
    .search {
        margin-right: auto;
    }
`

const statusOptions = [
    { label: "Active", value: "ACTIVE" },
    { label: "Inactive", value: "INACTIVE" },
    { label: "Deactivated", value: "DEACTIVATED" },
    { label: "All", value: "all" }
];

const TeamMemberFilters: React.FC<TeamMemberFiltersProps> = ({
    selectedStatus,
    setSelectedStatus,
    searchText,
    setSearchText
}) => {
    return (
        <Filters>
            <Select
                value={selectedStatus}
                onSelect={setSelectedStatus}
                options={statusOptions}
                shape="rounded"
                size="md"
                headerPlaceholder="By Status"
                className="filter-by-status"
            />
            <Input
                value={searchText}
                onChange={setSearchText}
                placeholder="Search..."
                shape="rounded"
                size="md"
                className="search"
            />
            <Select
                value=""
                onSelect={() => {}}
                options={[]}
                shape="rounded"
                size="md"
                headerPlaceholder="By Project"
                className="filter-by-project"
            />
        </Filters>
    );
};

export { TeamMemberFilters };
