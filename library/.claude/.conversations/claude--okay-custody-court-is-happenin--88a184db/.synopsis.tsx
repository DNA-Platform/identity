import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user Doug, a software engineer, is working on developing an open-source blockchain solution to address a
            complex international family law situation. His project involves creating a "Safety Trust" - a smart
            contract system on the TON blockchain that would use economic incentives to encourage voluntary
            relinquishment of parental rights in cross-border situations where traditional legal remedies are
            ineffective. Doug explained that his wife fled Russia with her children due to a family situation, and
            Russian law creates ongoing complications including potential travel bans and location disclosure
            requirements that persist even when living abroad.
        </Paragraph>
    </Chapter>
);
