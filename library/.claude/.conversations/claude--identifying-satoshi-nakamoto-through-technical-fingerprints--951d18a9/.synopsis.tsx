import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation involved an in-depth investigation into the identity of Satoshi Nakamoto, the pseudonymous
            creator of Bitcoin. The user presented a sophisticated hypothesis that the Durov brothers - Nikolai and
            Pavel - are the most likely candidates, based on privileged information gained through personal connections
            to Russian culture. The user is marrying a woman who attended Saint Petersburg University at the same time
            as Pavel Durov, which provided unique insights into Nikolai Durov's existence and capabilities that are
            largely unknown to Americans.
        </Paragraph>
    </Chapter>
);
