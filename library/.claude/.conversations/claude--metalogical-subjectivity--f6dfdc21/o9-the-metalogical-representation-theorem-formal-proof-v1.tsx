import { Bold, Chapter, Emphasis, Heading, Line, List, Math, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Metalogical Representation Theorem: Formal Proof v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Metalogical Representation Theorem: Formal Proof at version 1</Heading>
            <Heading>The Metalogical Representation Theorem: Formal Proof</Heading>
            <Heading>1. Introduction and Definitions</Heading>
            <Paragraph>
                We begin by precisely defining the concept of metalogical universality and stating the main theorem.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Definition 1.1
                </Word> (Metalogical Universality). A formal theory <Math>{"T"}</Math> exhibits <Word>
                    <Emphasis />
                    metalogical universality
                </Word> if:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Math>{"T"}</Math> is sufficiently expressive to represent basic arithmetic operations and recursive
                    functions.
                </Line>
                <Line>
                    For any recursively enumerable theory <Math>{"S"}</Math>, <Math>{"T"}</Math> can represent within its
                    own language:
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        The syntax of <Math>{"S"}</Math> (its symbols, formulas, and proofs)
                    </Line>
                    <Line>
                        The provability relation of <Math>{"S"}</Math>
                    </Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem 1.2
                </Word> (Metalogical Representation). Let <Math>{"T"}</Math> be any recursively enumerable formal theory
                whose language contains enough expressive power to represent basic arithmetic operations and recursive
                functions. Then, for any recursively enumerable theory <Math>{"S"}</Math>, there exists a formula
                <Math>{"\\text{Prov}_S(x)"}</Math> expressible in the language of <Math>{"T"}</Math> such that for any
                formula <Math>{"\\phi"}</Math> of <Math>{"S"}</Math>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Math>{"\\text{Prov}_S(\\ulcorner\\phi\\urcorner)"}</Math> is true in the standard model of
                    <Math>{"T"}</Math> if and only if <Math>{"\\phi"}</Math> is provable in <Math>{"S"}</Math>
                </Line>
                <Line>
                    If <Math>{"T"}</Math> extends Robinson arithmetic and is consistent, then whenever
                    <Math>{"\\phi"}</Math> is provable in <Math>{"S"}</Math>,
                    <Math>{"T \\vdash \\text{Prov}_S(\\ulcorner\\phi\\urcorner)"}</Math>
                </Line>
            </Paragraph>
            <Paragraph>Before proceeding with the main proof, we establish several crucial lemmas.</Paragraph>
            <Heading>2. Preliminary Lemmas</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Lemma 2.1
                </Word> (Gödel Numbering). For any recursively enumerable theory <Math>{"S"}</Math>, there exists an
                effective encoding function <Math>{"g_S"}</Math> that maps each symbol, formula, and proof in
            </Paragraph>
        </Section>
    </Chapter>
);
