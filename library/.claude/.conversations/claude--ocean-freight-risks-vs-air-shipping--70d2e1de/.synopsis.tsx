import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            I’m working on shipping with Navis. They gave me a quote for air shipping and now they’re trying to get me a
            quote for freight shipping on the ocean. I asked them if there’s any additional risks and the woman said she
            didn’t understand what I meant. I suppose they don’t want to speak to risk. Might there be additional risk
            to freight shipping compared to air shipping
        </Paragraph>
    </Chapter>
);
