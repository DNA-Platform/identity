import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[5 February 2026](2026-02-05)</Date>
        </Dated>
        <Title>[[ 5 February 2026 ]]</Title>
        <Message
            at="2026-02-05T08:02:49.184692Z"
        >
            <Origin>019c2cd3-7556-7881-b487-19e672ac574a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How does a bialetti express work for espresso</Paragraph>
        </Message>
        <Message
            at="2026-02-05T08:02:59.935560Z"
        >
            <Origin>019c2cd3-7556-7f6a-bca5-9f52bf161ea7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>A Bialetti Moka Express uses a simple three-chamber design driven by steam pressure.</Paragraph>
            <Paragraph>
                The bottom chamber holds water. Above it sits a funnel-shaped filter basket where you pack finely ground
                coffee. The upper chamber, with a rubber gasket and filter plate, screws on top.
            </Paragraph>
            <Paragraph>
                When you place it on a stovetop, the water heats and generates steam pressure (about 1–2 bar). That pressure
                forces the hot water up through the coffee grounds in the filter basket. The brewed coffee then travels up
                through a central tube and collects in the upper chamber. You'll hear a gurgling/hissing sound when most of
                the water has been pushed through — that's your signal it's done.
            </Paragraph>
            <Paragraph>
                A few practical notes: fill water to just below the safety valve, use medium-fine grounds (slightly coarser
                than true espresso), don't tamp the grounds (just level them off), and keep the heat at medium to avoid
                burning. It produces a strong, concentrated brew — not technically espresso since it operates at much lower
                pressure than a machine (9 bar), but it's rich and full-bodied in a similar spirit.
            </Paragraph>
        </Message>
    </Chapter>
);
