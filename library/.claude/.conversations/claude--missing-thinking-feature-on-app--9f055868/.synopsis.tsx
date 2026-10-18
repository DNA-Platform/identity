import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user (Doug) contacted Claude about a missing "extended thinking" feature that had previously been
            available but suddenly disappeared from their interface. Claude initially performed web searches to
            investigate the status of the feature, explaining that it still exists but is now located under the "Search
            and tools" button in the lower left of the chat interface, with a toggle for "Extended thinking" that starts
            a new chat when activated. The user quickly resolved the issue, revealing they had accidentally clicked the
            toggle and turned it off.
        </Paragraph>
    </Chapter>
);
