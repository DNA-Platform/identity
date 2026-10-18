import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--anas-batumi-expences--cb0ac65a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--anas-batumi-expences--cb0ac65a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--anas-batumi-expences--cb0ac65a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--anas-batumi-expences--cb0ac65a/.table';
import June1920261 from '../../../../../../.claude/.conversations/claude--anas-batumi-expences--cb0ac65a/1-june-19-2026';
import June2020262 from '../../../../../../.claude/.conversations/claude--anas-batumi-expences--cb0ac65a/2-june-20-2026';
import June2120263 from '../../../../../../.claude/.conversations/claude--anas-batumi-expences--cb0ac65a/3-june-21-2026';
import June2220264 from '../../../../../../.claude/.conversations/claude--anas-batumi-expences--cb0ac65a/4-june-22-2026';
import June2320265 from '../../../../../../.claude/.conversations/claude--anas-batumi-expences--cb0ac65a/5-june-23-2026';
import June2420266 from '../../../../../../.claude/.conversations/claude--anas-batumi-expences--cb0ac65a/6-june-24-2026';
import June2520267 from '../../../../../../.claude/.conversations/claude--anas-batumi-expences--cb0ac65a/7-june-25-2026';
import June2620268 from '../../../../../../.claude/.conversations/claude--anas-batumi-expences--cb0ac65a/8-june-26-2026';
import July220269 from '../../../../../../.claude/.conversations/claude--anas-batumi-expences--cb0ac65a/9-july-2-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1920261()}
        {June2020262()}
        {June2120263()}
        {June2220264()}
        {June2320265()}
        {June2420266()}
        {June2520267()}
        {June2620268()}
        {July220269()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
