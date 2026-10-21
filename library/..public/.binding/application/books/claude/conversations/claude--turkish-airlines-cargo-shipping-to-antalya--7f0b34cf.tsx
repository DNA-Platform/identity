import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/.book';
import Cover from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/1-conversation';
import TurkishCargoPackingListTemplateV1o1 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o1-turkish-cargo-packing-list-template-v1';
import MasterBoxInventoryWithContentsV1o2 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o2-master-box-inventory-with-contents-v1';
import PhotoInventoryItemsVisibleInPicturesV1o3 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o3-photo-inventory-items-visible-in-pictures-v1';
import PhotoInventoryItemsVisibleInPicturesV2o4 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o4-photo-inventory-items-visible-in-pictures-v2';
import MasterBoxInventoryWithContentsV2o5 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o5-master-box-inventory-with-contents-v2';
import PhotoInventoryItemsVisibleInPicturesV3o6 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o6-photo-inventory-items-visible-in-pictures-v3';
import PhotoInventoryItemsVisibleInPicturesV4o7 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o7-photo-inventory-items-visible-in-pictures-v4';
import PhotoInventoryItemsVisibleInPicturesV5o8 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o8-photo-inventory-items-visible-in-pictures-v5';
import PhotoInventoryItemsVisibleInPicturesV6o9 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o9-photo-inventory-items-visible-in-pictures-v6';
import PhotoInventoryItemsVisibleInPicturesV7o10 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o10-photo-inventory-items-visible-in-pictures-v7';
import MasterBoxInventoryWithContentsV3o11 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o11-master-box-inventory-with-contents-v3';
import PhotoInventoryItemsVisibleInPicturesV8o12 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o12-photo-inventory-items-visible-in-pictures-v8';
import PhotoInventoryItemsVisibleInPicturesV9o13 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o13-photo-inventory-items-visible-in-pictures-v9';
import PhotoInventoryItemsVisibleInPicturesV10o14 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o14-photo-inventory-items-visible-in-pictures-v10';
import MasterBoxInventoryWithContentsV4o15 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o15-master-box-inventory-with-contents-v4';
import CustomsPackingListsAll22BoxesV1o16 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o16-customs-packing-lists-all-22-boxes-v1';
import PackingListsBoxes111V1o17 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o17-packing-lists-boxes-1-11-v1';
import PackingListsBoxes1122V1o18 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o18-packing-lists-boxes-11-22-v1';
import PackingListsBoxes111V2o19 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o19-packing-lists-boxes-1-11-v2';
import FinalPackingListsAll22BoxesCleanV1o20 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o20-final-packing-lists-all-22-boxes-clean-v1';
import PackingListsBoxes23And24V1o21 from '../../../../../../.claude/.conversations/claude--turkish-airlines-cargo-shipping-to-antalya--7f0b34cf/o21-packing-lists-boxes-23-and-24-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {TurkishCargoPackingListTemplateV1o1()}
        {MasterBoxInventoryWithContentsV1o2()}
        {PhotoInventoryItemsVisibleInPicturesV1o3()}
        {PhotoInventoryItemsVisibleInPicturesV2o4()}
        {MasterBoxInventoryWithContentsV2o5()}
        {PhotoInventoryItemsVisibleInPicturesV3o6()}
        {PhotoInventoryItemsVisibleInPicturesV4o7()}
        {PhotoInventoryItemsVisibleInPicturesV5o8()}
        {PhotoInventoryItemsVisibleInPicturesV6o9()}
        {PhotoInventoryItemsVisibleInPicturesV7o10()}
        {MasterBoxInventoryWithContentsV3o11()}
        {PhotoInventoryItemsVisibleInPicturesV8o12()}
        {PhotoInventoryItemsVisibleInPicturesV9o13()}
        {PhotoInventoryItemsVisibleInPicturesV10o14()}
        {MasterBoxInventoryWithContentsV4o15()}
        {CustomsPackingListsAll22BoxesV1o16()}
        {PackingListsBoxes111V1o17()}
        {PackingListsBoxes1122V1o18()}
        {PackingListsBoxes111V2o19()}
        {FinalPackingListsAll22BoxesCleanV1o20()}
        {PackingListsBoxes23And24V1o21()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
