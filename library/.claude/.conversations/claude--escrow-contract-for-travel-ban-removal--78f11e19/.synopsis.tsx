import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The conversation centered on structuring a legal and financial arrangement in Russia to ensure a travel ban
            on children is lifted and kept lifted, enabling passport renewal for one of the children within a roughly
            one-year window. The person is working with a lawyer named Гурина and is coordinating on behalf of Ana, who
            is the Russian-facing party and would act as депонент in any escrow arrangement. The counterparty is Maxim,
            who has no legal representation and who imposed the travel ban. The conversation covered Russian civil law
            mechanisms in depth, including the договор условного депонирования (Ch. 47.1 Civil Code), мировое соглашение
            (court-approved settlement under Art. 153.8–153.11 CPC), and соглашение о разделе имущества as a legal
            wrapper for the payment.
        </Paragraph>
    </Chapter>
);
