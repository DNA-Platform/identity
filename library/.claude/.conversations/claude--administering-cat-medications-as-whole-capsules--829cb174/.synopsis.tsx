import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked for help with administering two veterinary treatments to their cat Penelope: ronidazole
            (100 mg, 14-day course) and Ursomac (40 mg, 6-day course, a ursodeoxycholic acid product available in
            Georgia). The person explicitly stated that Penelope is extremely difficult to administer treatments to and
            that they had already arranged to hire a professional to help, and asked Claude to stay focused on
            administration logistics rather than risk information or pilling technique advice. When Claude initially
            included unsolicited pilling advice, the person pushed back and redirected to a specific factual question:
            whether there is any food or treat that can reliably mask these treatments when opened, or whether the
            bitterness makes that approach unworkable regardless of what food is used.
        </Paragraph>
    </Chapter>
);
