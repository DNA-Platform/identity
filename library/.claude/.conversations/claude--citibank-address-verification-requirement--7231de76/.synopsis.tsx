import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Douglas Rubino received a notice from Citibank regarding two accounts, stating that his accounts showed a
            mail handling service or PO box as the physical address on file. The notice indicated a wire restriction had
            been placed immediately and warned of full account blocking within 30 days if a valid physical address was
            not provided. Douglas asked Claude whether this would be a problem, noting that his actual residential
            address is in Georgia (the country).
        </Paragraph>
    </Chapter>
);
