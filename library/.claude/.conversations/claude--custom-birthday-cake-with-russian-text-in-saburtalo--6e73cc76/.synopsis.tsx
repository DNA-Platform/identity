import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is located in Saburtalo, Tbilisi, and needed help finding a bakery that could produce a custom
            birthday cake with "Happy Birthday Dima" written in Russian (С Днём Рождения, Дима), ready by the following
            day, ideally with delivery and possibly as an ice cream cake. The conversation involved multiple rounds of
            research as Claude worked to find verified, actionable options.
        </Paragraph>
    </Chapter>
);
