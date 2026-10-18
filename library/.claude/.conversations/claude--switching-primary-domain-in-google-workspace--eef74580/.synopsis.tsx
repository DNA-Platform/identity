import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug completed a complex Google Workspace domain migration, moving from dna.love (old primary) to atlas.love
            (new primary). The conversation covered the full sequence of steps required: verifying atlas.love was
            already a secondary domain, changing the primary domain in the Admin console, renaming all users from
            @dna.love to @atlas.love addresses, and confirming that the rename automatically preserved old addresses as
            aliases to maintain mail flow. Claude conducted web searches during the conversation to verify specific
            Workspace behaviors before advising, particularly around the automatic alias-on-rename behavior and domain
            removal prerequisites.
        </Paragraph>
    </Chapter>
);
