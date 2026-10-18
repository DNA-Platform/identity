import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person needed help understanding KiwiPost, a package forwarding/delivery service in Georgia, after
            paying for courier delivery on two packages (tracking numbers TBA335014268159 and TBA334987843056) but
            seeing no delivery scheduled and the packages still showing "Arrived" status rather than "Delivered." They
            were confused about the difference between Courier delivery, Kiwi Drive (a self-pickup option), and Standard
            Delivery, and worried they had overpaid or paid twice.
        </Paragraph>
    </Chapter>
);
