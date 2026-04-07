import { test } from '../../fixtures';
import { itemsData } from '../../data/storeItem.factory';

test.describe('Store CRUD Operations', () => {

    test('Add a item', async ({ storePage }) => {
        // You are ALREADY logged in here! Just navigate directly to the page you need.
        await storePage.goto();
        await storePage.addItem(itemsData);
        await storePage.expectAddSuccess();
        await storePage.clickEditBtn();
    });

});
