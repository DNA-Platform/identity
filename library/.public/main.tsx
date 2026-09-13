import { createRoot } from 'react-dom/client';
import { $ } from '@dna-platform/chemistry';
import { book } from './library/book';

const Opened = $(book);

const root = document.getElementById('root');
if (!root) throw new Error('no #root element');
createRoot(root).render(<Opened />);
