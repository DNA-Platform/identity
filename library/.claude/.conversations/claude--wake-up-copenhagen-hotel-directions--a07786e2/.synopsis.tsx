import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is traveling to Copenhagen for the Models of Consciousness 7 conference, staying at Wakeup
            Copenhagen Carsten Niebuhrs Gade (Carsten Niebuhrs Gade 11, 1577 København V), booked under reference
            8663034833-1. Ana arranged the booking, choosing this location over the Borgergade option for cost reasons;
            a colleague named Doug was mentioned as flying out separately. Claude confirmed the hotel address,
            researched the three Wakeup Copenhagen locations, and found transit directions from the airport (Metro M2 or
            regional train, about 15 minutes). The person asked about using Bolt and Uber in Copenhagen; Claude
            explained both work but function as taxi-booking apps there rather than low-cost rideshare, with Uber
            partnering with a local taxi company after re-entering the Danish market, and Bolt having acquired a Danish
            ride service in 2025. Claude provided exact search terms to enter into the apps for both the hotel and the
            conference venue (HC Ørsted Institute, Universitetsparken 5).
        </Paragraph>
    </Chapter>
);
