import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user inquired about Sierra Interactive, asking whether it had any relationship to Sierra Entertainment,
            the video game company that made Quest for Glory. Claude clarified that these are completely unrelated
            companies that happen to share the "Sierra" name - Sierra Interactive is a real estate software company
            founded in 2007, while Sierra Entertainment was the classic adventure game developer. The user then asked
            about a specific employee, Cindy Lang, who works as a product manager at Sierra Interactive, along with
            questions about the company's size, revenue, and profit.
        </Paragraph>
    </Chapter>
);
