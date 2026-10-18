import { Chapter, Heading, Line, List, Paragraph, Section, Title } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Turkish Cargo Packing List Template v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Turkish Cargo Packing List Template at version 1</Heading>
            <Paragraph>PACKING LIST</Paragraph>
            <Paragraph>Shipper: Douglas Michael Rubino &#91;Your US Address&#93;</Paragraph>
            <Paragraph>
                Consignee: Douglas Michael Rubino c/o Turkish Airlines Cargo - Antalya Airport Antalya, Turkey Tel: +90 534
                505 99 17
            </Paragraph>
            <Paragraph>CONTENTS:</Paragraph>
            <Paragraph>
                <List />
                <Line>Used clothing - &#91;quantity&#93; pieces</Line>
                <Line>Books - &#91;quantity&#93; items</Line>
                <Line>Kitchen items - &#91;quantity&#93; pieces</Line>
                <Line>Personal toiletries - &#91;quantity&#93; items</Line>
                <Line>&#91;Other categories as needed&#93;</Line>
            </Paragraph>
            <Paragraph>
                Total Declared Value: USD $&#91;amount&#93; Purpose: Personal household effects - relocation Status: USED
                PERSONAL EFFECTS - NOT FOR COMMERCIAL USE
            </Paragraph>
            <Paragraph>İÇERİK:</Paragraph>
            <Paragraph>
                <List />
                <Line>Kullanılmış giysi - &#91;quantity&#93; parça</Line>
                <Line>Kitaplar - &#91;quantity&#93; adet</Line>
                <Line>Mutfak eşyası - &#91;quantity&#93; parça</Line>
                <Line>Kişisel temizlik ürünleri - &#91;quantity&#93; adet</Line>
                <Line>&#91;Diğer kategoriler&#93;</Line>
            </Paragraph>
            <Paragraph>
                Toplam Beyan Değeri: USD $&#91;amount&#93; Amaç: Kişisel ev eşyası - taşınma Durum: KULLANILMIŞ KİŞİSEL EŞYA
                - TİCARİ DEĞİL
            </Paragraph>
        </Section>
    </Chapter>
);
