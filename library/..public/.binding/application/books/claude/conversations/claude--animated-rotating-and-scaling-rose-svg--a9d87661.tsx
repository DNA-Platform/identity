import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/.book';
import Cover from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/1-conversation';
import AnimatedRecursiveRosePatternV1o1 from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/o1-animated-recursive-rose-pattern-v1';
import AnimatedRecursiveRosePatternV2o2 from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/o2-animated-recursive-rose-pattern-v2';
import AnimatedRecursiveRosePatternV3o3 from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/o3-animated-recursive-rose-pattern-v3';
import AnimatedRecursiveRosePatternV4o4 from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/o4-animated-recursive-rose-pattern-v4';
import AnimatedRecursiveRosePatternV5o5 from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/o5-animated-recursive-rose-pattern-v5';
import AnimatedRecursiveRosePatternV6o6 from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/o6-animated-recursive-rose-pattern-v6';
import AnimatedRecursiveRosePatternV7o7 from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/o7-animated-recursive-rose-pattern-v7';
import AnimatedRecursiveRosePatternV8o8 from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/o8-animated-recursive-rose-pattern-v8';
import AnimatedRecursiveRosePatternV9o9 from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/o9-animated-recursive-rose-pattern-v9';
import AnimatedRecursiveRosePatternV10o10 from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/o10-animated-recursive-rose-pattern-v10';
import AnimatedRecursiveRosePatternV11o11 from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/o11-animated-recursive-rose-pattern-v11';
import AnimatedRecursiveRosePatternV12o12 from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/o12-animated-recursive-rose-pattern-v12';
import AnimatedRecursiveRosePatternV13o13 from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/o13-animated-recursive-rose-pattern-v13';
import AnimatedRecursiveRosePatternV14o14 from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/o14-animated-recursive-rose-pattern-v14';
import AnimatedRecursiveRosePatternV15o15 from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/o15-animated-recursive-rose-pattern-v15';
import AnimatedRecursiveRosePatternV16o16 from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/o16-animated-recursive-rose-pattern-v16';
import AnimatedRecursiveRosePatternV17o17 from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/o17-animated-recursive-rose-pattern-v17';
import AnimatedRecursiveRosePatternV18o18 from '../../../../../../.claude/.conversations/claude--animated-rotating-and-scaling-rose-svg--a9d87661/o18-animated-recursive-rose-pattern-v18';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {AnimatedRecursiveRosePatternV1o1()}
        {AnimatedRecursiveRosePatternV2o2()}
        {AnimatedRecursiveRosePatternV3o3()}
        {AnimatedRecursiveRosePatternV4o4()}
        {AnimatedRecursiveRosePatternV5o5()}
        {AnimatedRecursiveRosePatternV6o6()}
        {AnimatedRecursiveRosePatternV7o7()}
        {AnimatedRecursiveRosePatternV8o8()}
        {AnimatedRecursiveRosePatternV9o9()}
        {AnimatedRecursiveRosePatternV10o10()}
        {AnimatedRecursiveRosePatternV11o11()}
        {AnimatedRecursiveRosePatternV12o12()}
        {AnimatedRecursiveRosePatternV13o13()}
        {AnimatedRecursiveRosePatternV14o14()}
        {AnimatedRecursiveRosePatternV15o15()}
        {AnimatedRecursiveRosePatternV16o16()}
        {AnimatedRecursiveRosePatternV17o17()}
        {AnimatedRecursiveRosePatternV18o18()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
