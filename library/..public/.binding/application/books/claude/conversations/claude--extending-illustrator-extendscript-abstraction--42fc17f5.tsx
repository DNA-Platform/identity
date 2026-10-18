import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--extending-illustrator-extendscript-abstraction--42fc17f5/.book';
import Cover from '../../../../../../.claude/.conversations/claude--extending-illustrator-extendscript-abstraction--42fc17f5/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--extending-illustrator-extendscript-abstraction--42fc17f5/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--extending-illustrator-extendscript-abstraction--42fc17f5/.table';
import January320251 from '../../../../../../.claude/.conversations/claude--extending-illustrator-extendscript-abstraction--42fc17f5/1-january-3-2025';
import January420252 from '../../../../../../.claude/.conversations/claude--extending-illustrator-extendscript-abstraction--42fc17f5/2-january-4-2025';
import January520253 from '../../../../../../.claude/.conversations/claude--extending-illustrator-extendscript-abstraction--42fc17f5/3-january-5-2025';
import January820254 from '../../../../../../.claude/.conversations/claude--extending-illustrator-extendscript-abstraction--42fc17f5/4-january-8-2025';
import January920255 from '../../../../../../.claude/.conversations/claude--extending-illustrator-extendscript-abstraction--42fc17f5/5-january-9-2025';
import January1120256 from '../../../../../../.claude/.conversations/claude--extending-illustrator-extendscript-abstraction--42fc17f5/6-january-11-2025';
import January1220257 from '../../../../../../.claude/.conversations/claude--extending-illustrator-extendscript-abstraction--42fc17f5/7-january-12-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January320251()}
        {January420252()}
        {January520253()}
        {January820254()}
        {January920255()}
        {January1120256()}
        {January1220257()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
