import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is living in Tbilisi, Georgia (not traveling temporarily) and sought help finding a cheaper
            alternative to AT&amp;T's International Day Pass for their iPhone while keeping their US number active. They
            currently have both an AT&amp;T US SIM and a Magti (Georgian carrier) SIM active on their iPhone, with
            cellular data correctly assigned to Magti. The core goal was to stop being charged the AT&amp;T $12/day
            International Day Pass fee while maintaining reachability on their US number for calls and texts.
        </Paragraph>
    </Chapter>
);
