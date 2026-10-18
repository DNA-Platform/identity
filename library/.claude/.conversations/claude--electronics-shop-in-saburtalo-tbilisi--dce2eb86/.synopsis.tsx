import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is located in the Saburtalo neighborhood of Tbilisi, Georgia, and asked Claude to find a nearby
            large store where they could purchase both a mini fridge and computer monitors in a single trip. Claude used
            location-based search tools to identify suitable retailers and recommended Alta at City Mall in Saburtalo as
            the best option, describing it as Georgia's main big-box electronics and appliance chain carrying both
            product categories. Claude provided store hours (10am–10pm daily), a contact number, and the retailer's
            website (alta.ge) for browsing inventory in advance. Claude also noted a practical caveat based on reviews —
            that staff organization and checkout queues can be issues — and suggested calling ahead to confirm specific
            models are in stock before visiting.
        </Paragraph>
    </Chapter>
);
