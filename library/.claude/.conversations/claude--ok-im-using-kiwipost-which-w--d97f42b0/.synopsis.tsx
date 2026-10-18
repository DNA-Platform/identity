import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is navigating KiwiPost's parcel delivery system in Tbilisi, Georgia, apparently building on a
            prior conversation where Claude helped them find KiwiPost as a service. In this session, they had just paid
            a 5 GEL fee for the "Kiwi Drive" option and wanted to know whether their parcel would be delivered to their
            apartment.
        </Paragraph>
    </Chapter>
);
