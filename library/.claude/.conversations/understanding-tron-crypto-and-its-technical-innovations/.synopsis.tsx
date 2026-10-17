import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to explain TRON (TRX) cryptocurrency, covering what it is, what problem it solves,
            and whether it required any novel fundamental technology to be invented. Claude provided a comprehensive
            overview of TRON's origins, evolution, and current use case, noting that TRON was founded in 2017 by Justin
            Sun and originally positioned as a platform for digital content creators to bypass intermediaries, a vision
            that did not gain traction and was subsequently abandoned in favor of becoming a general-purpose smart
            contract blockchain.
        </Paragraph>
    </Chapter>
);
