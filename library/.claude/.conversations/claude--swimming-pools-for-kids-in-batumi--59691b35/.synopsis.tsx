import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is currently staying at an Orbi hotel in Batumi, Georgia (specifically identified as one of the
            tall circular/curved Orbi towers) and had two separate lines of inquiry. First, they asked about options for
            taking their children to a pool, seeking both hotel day passes and public pool facilities. Claude provided
            several options including the Sheraton Batumi (outdoor pool with a children's pool, explicit child-friendly
            pricing), Le Méridien Batumi (indoor pool), Radisson Blu (spa-oriented, less suited for children), and
            Batumi Plaza (large indoor/outdoor public pool). The Sheraton was flagged as the most family-friendly option
            given its explicit children's pricing and dedicated children's pool.
        </Paragraph>
    </Chapter>
);
