import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user requested help reformatting a disorganized English text about selling and disposing of household
            items on Long Island, New York. They wanted to send this information via Telegram and needed it to look more
            organized and presentable. The original text contained various services including furniture marketplaces,
            estate sale companies, charity pickup services, and eco-friendly disposal options, but was poorly formatted
            with inconsistent spacing and unclear hierarchy.
        </Paragraph>
    </Chapter>
);
