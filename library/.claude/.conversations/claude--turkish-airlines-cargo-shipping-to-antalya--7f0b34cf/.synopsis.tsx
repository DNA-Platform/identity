import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Douglas Michael Rubino needed urgent assistance with shipping 22 boxes of personal household items from New
            York to Turkey on a Saturday morning before his evening flight. Initially believing he could ship directly
            through Turkish Airlines Cargo at JFK, the conversation revealed a fundamental misunderstanding - Turkish
            Cargo only works through IATA-authorized freight forwarders, not individuals. This discovery invalidated
            extensive preparation work including detailed packing lists with English and Turkish translations, customs
            declarations, and declared values totaling $1,485.
        </Paragraph>
    </Chapter>
);
