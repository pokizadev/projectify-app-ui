import { useState } from "react";
import styled from "styled-components";
import { Input, Modal, Typography, Button } from "../../../design-system";
import { NoDataPlaceholder } from "../../components";
import noTeamMembers from "../../../assets/illustrations/no-team-members.svg";
import uploadImg from "../../../assets/illustrations/upload-img.svg";

const PageBase = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const AddTeamMemberModalTitle = styled(Typography)`
    margin-bottom: var(--space-24);
`;

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-16);
    margin-bottom: var(--space-24);
    position: relative;
`;

const Buttons = styled.div`
    display: flex;
    gap: var(--space-10);
`;

const StyledInput = styled(Input)`
    text-align: center;
`;

const StyledImg = styled.img`
    height: var(--space-24);
    width: var(--space-24);
    position: absolute;
    top: 10%;
    left: 50%;
    cursor: pointer;
`;

const TeamMembers = () => {
    const [teamMembers, setTeamMembers] = useState<string[]>([]);
    const [showAddTeamMemberModal, setShowAddTeamMemberModal] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");
    const [email, setEmail] = useState("");
    const [isFromSubmitting, setIsFormSubmitting] = useState(false);

    const handleOnChangeFirstName = (value: string) => {
        setFirstName(value);
    };

    const handleOnChangeLastName = (value: string) => {
        setLastName(value);
    };

    const handleOnChangePosition = (value: string) => {
        setPosition(value);
    };

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const setIsFormSubmittable = firstName && lastName && position && email;

    const addTeamMember = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsFormSubmitting(true);
        } catch (error) {}
    };

    return (
        <PageBase>
            {!teamMembers.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noTeamMembers}
                    text="You don't have any team members yet!"
                    buttonText="Add a Team Member"
                    buttonAction={() => setShowAddTeamMemberModal(true)}
                />
            ) : (
                <h1>Team Members</h1>
            )}

            <Modal show={showAddTeamMemberModal} position="center">
                <AddTeamMemberModalTitle variant="paragraphLG" weight="medium">
                    New Member
                </AddTeamMemberModalTitle>
                <Inputs>
                    <StyledInput
                        type="textarea"
                        placeholder="Upload an Image"
                        value=""
                        onChange={() => {}}
                        size="lg"
                    />
                    <StyledImg src={uploadImg} alt="" onClick={() => {}} />
                    <Input
                        placeholder="First Name"
                        value=""
                        onChange={() => {}}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        placeholder="Last Name"
                        value=""
                        onChange={() => {}}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        placeholder="Position"
                        value=""
                        onChange={() => {}}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        placeholder="Email"
                        value=""
                        onChange={() => {}}
                        shape="rounded"
                        size="lg"
                    />
                </Inputs>
                <Buttons>
                    <Button
                        color="secondary"
                        size="lg"
                        shape="rounded"
                        variant="outlined"
                        fullWidth
                        onClick={() => setShowAddTeamMemberModal(false)}
                    >
                        Cancel
                    </Button>
                    <Button size="lg" shape="rounded" color="primary" fullWidth>
                        Save
                    </Button>
                </Buttons>
            </Modal>
        </PageBase>
    );
};

export { TeamMembers as AdminTeamMembers };
