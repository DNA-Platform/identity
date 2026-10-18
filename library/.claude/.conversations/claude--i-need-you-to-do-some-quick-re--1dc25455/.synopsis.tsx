import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is planning a trip to or is currently in Georgia (the country) and needed help preparing a note
            to show their barber in Georgian. The conversation centered on translating specific haircut instructions
            into Georgian script, with Claude also handling unit conversions along the way.
        </Paragraph>
    </Chapter>
);
