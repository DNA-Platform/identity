import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is a user who recently migrated to a new account after losing access to a previous one along with its
            associated domain. He has recreated his projects on the new account, including project files, a legacy
            conversation index, and a "Note to Self" document to provide continuity for future Claude instances. The
            account is shared with his wife Ana, who communicates with Claude in Russian. The core project involves the
            family's relocation to Tbilisi, Georgia, where they live in the Saburtalo district. The children attend
            Happy School on Sairme for in-person instruction, with Foxford providing an online curriculum component.
        </Paragraph>
    </Chapter>
);
