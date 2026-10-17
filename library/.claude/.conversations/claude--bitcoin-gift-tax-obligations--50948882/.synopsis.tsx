import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user engaged in an extensive discussion about US tax policy for citizens living abroad, specifically
            exploring the intersection of taxation, immigration policy, and cryptocurrency. They are currently residing
            in Georgia (the country) and facing a complex personal situation involving family members who cannot easily
            enter the US due to current immigration policies. The user has a background in finance and framed their
            concerns in terms of economic incentives and policy contradictions.
        </Paragraph>
    </Chapter>
);
