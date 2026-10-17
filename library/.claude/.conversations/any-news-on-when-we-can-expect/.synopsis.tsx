import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Any news on when we can expect the next MTONGA step or an update on ton.org? Can’t wait
        </Paragraph>
    </Chapter>
);
