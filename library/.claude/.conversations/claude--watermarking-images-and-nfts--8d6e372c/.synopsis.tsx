import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Can you use web to check how Google’s new water marking system works? And if I will be able to use it. Can I
            watermark images? Could I watermark an NFT ID somehow or URL? Will there be an app or way to find the
            watermark?
        </Paragraph>
    </Chapter>
);
