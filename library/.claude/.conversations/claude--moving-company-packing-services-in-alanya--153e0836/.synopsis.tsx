import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user sought help finding packing services in Alanya, Turkey, with specific requirements: local companies
            that could pack belongings into boxes (without moving services), provide their own packing supplies, and
            communicate in English or via WhatsApp. Claude used web search and places search tools to research local
            nakliyat (moving) companies, discovering that packing-only services are uncommon in Turkey as most companies
            bundle packing with full moving services. The conversation progressed from general moving company research
            to identifying specific companies with English-speaking capabilities based on customer reviews from expat
            clients. Claude found several highly-rated options including Alanya Yılmazoğlu Evden Eve Nakliyat and Alanya
            Özgüven Nakliyat, both showing evidence of serving foreign clients through English-language reviews. The
            user requested WhatsApp contact information for all recommendations, leading Claude to compile phone numbers
            and contact details for the viable options, noting that some companies only had Google Maps listings without
            published contact information.
        </Paragraph>
    </Chapter>
);
