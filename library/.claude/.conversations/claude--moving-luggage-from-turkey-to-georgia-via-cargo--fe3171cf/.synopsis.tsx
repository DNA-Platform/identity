import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is relocating from Alanya, Turkey to Tbilisi, Georgia and needed comprehensive research on shipping
            options for 8-12 bags of personal belongings (estimated 100-125kg total). He initially explored Turkish
            Cargo but discovered it's a B2B freight service requiring IATA-certified agents rather than direct consumer
            access. Claude conducted extensive research across multiple shipping methods, including Turkish Cargo via
            agents, ground freight through parsiyel trucking companies, express couriers, and Turkish Airlines excess
            baggage options.
        </Paragraph>
    </Chapter>
);
