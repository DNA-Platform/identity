import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug and Ana are working together on a complex legal matter involving Ana's divorce proceedings with her
            ex-husband Maxim, conducted through Russian courts. The conversation involved Claude reviewing a message
            thread between Doug, Ana, and their Russian legal team (Lena Malkova and Alex), then helping draft and
            translate responses to the lawyers. The legal team includes at least two attorneys who communicate with Ana
            and Doug in Russian. Key legal concepts referenced throughout include: a travel ban (запрет на выезд)
            affecting a minor child named Dima, ZAGS (Russian civil registry), the Russian Ministry of Foreign Affairs
            and Ministry of Internal Affairs, a Russian consulate in Yerevan as a specific strategic option, and
            court-issued motivated decisions posted via Gosuslugi.
        </Paragraph>
    </Chapter>
);
