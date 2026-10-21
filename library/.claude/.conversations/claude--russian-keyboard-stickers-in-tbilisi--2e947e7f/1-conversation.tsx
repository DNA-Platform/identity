import { Bold, Chapter, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-31T13:09:39.611768Z"
        >
            <Origin>019c142c-823c-7d0c-9cb8-d757bd1563b7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Im in tblisi. I need little stickers for the russian keys on my laptop which has english letters? Where can
                I find these? Preferably I would order online, but if not, I would go to a shop
            </Paragraph>
        </Message>
        <Message
            at="2026-01-31T13:09:58.919292Z"
        >
            <Origin>019c142c-823c-771f-b51c-f309ecf4cd58</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Russian keyboard stickers Tbilisi Georgia buy”</Action>
            <Action>Searched the web for “computer accessories shop Tbilisi keyboard stickers”</Action>
            <Paragraph>
                I found a good local option for you. <Word>
                    <Bold />
                    Fixlaptop.ge
                </Word> sells Russian Cyrillic keyboard stickers with Tbilisi delivery by courier daily from 12:00 to 20:00
                for 5-15 GEL depending on district. That's probably your easiest bet for getting them quickly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Online options that ship to Georgia:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Ubuy.ge
                    </Word> has transparent Russian Cyrillic stickers with various colors (red, blue lettering on clear
                    background) that work well for adding Russian to an existing English keyboard
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Keyshorts.com
                    </Word> makes custom Russian stickers to order (5-15 business days shipping) with transparent options
                    that let your English letters show through
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        4keyboard.com
                    </Word> has transparent matte vinyl Russian stickers
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For in-person shopping
                </Word>, you could try:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Electronics markets on Tsereteli Ave
                    </Word> (Didube area) - lots of computer accessory vendors who often carry keyboard stickers
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Alta.ge
                    </Word> has physical branches in Saburtalo, Vake, Tbilisi Mall, etc. - worth calling to ask if they
                    stock stickers
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        PCShop.ge
                    </Word> - another local chain
                </Line>
            </Paragraph>
            <Paragraph>
                I'd recommend starting with Fixlaptop.ge since they specifically list Russian keyboard stickers and offer
                same-day Tbilisi courier delivery. Want me to pull up their contact info?
            </Paragraph>
        </Message>
        <Message
            at="2026-01-31T13:10:30.552429Z"
        >
            <Origin>019c142d-480d-795e-9e67-39a0b3dcf686</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>There’s nothing like an Amazon that would have all of these things</Paragraph>
        </Message>
        <Message
            at="2026-01-31T13:10:42.509135Z"
        >
            <Origin>019c142d-480d-7793-b324-386db15b3027</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Unfortunately, Amazon doesn't ship directly to Georgia. The closest equivalents are:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Wildberries
                </Word> (wildberries.ge) - This is probably your best bet. It's the Russian e-commerce giant, huge
                selection, and they operate in Georgia with local pickup points. They'd definitely have Russian keyboard
                stickers for cheap, and since it's oriented toward the Russian-speaking market, finding Cyrillic stickers
                should be trivial.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    AliExpress
                </Word> - Ships to Georgia, very cheap Russian keyboard stickers (often under $2), but shipping takes 2-4
                weeks.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ubuy.ge / Desertcart
                </Word> - These are basically import brokers that source from Amazon/international retailers and ship to
                Georgia. Prices are marked up and shipping isn't fast, but they work.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Local Georgian marketplaces:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Extra.ge
                    </Word> - Georgian classifieds/marketplace
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Mymarket.ge
                    </Word> - Similar to Craigslist meets eBay
                </Line>
            </Paragraph>
            <Paragraph>
                Given you need Russian stickers specifically, <Word>
                    <Bold />
                    Wildberries
                </Word> is probably your path of least resistance - massive selection, reasonable prices, and pickup points
                around Tbilisi. Want me to search for what's available there?
            </Paragraph>
        </Message>
    </Chapter>
);
