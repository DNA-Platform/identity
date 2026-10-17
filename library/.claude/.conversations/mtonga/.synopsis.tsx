import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation continued Doug's ongoing TON/Gram investment research project (he shares a Claude account
            with his wife Ana, based in Tbilisi). The session extended the prior session's work on Nikolai Durov's
            technical résumé and anonymous contribution history, with Doug repeatedly correcting Claude's epistemics and
            pushing toward more rigorous probabilistic reasoning. The conversation operated in a collegial,
            debate-as-truth-seeking register, with Doug drawing on his own background (including time in a neuroscience
            research laboratory) to calibrate analogies about expertise and domain fluency.
        </Paragraph>
    </Chapter>
);
