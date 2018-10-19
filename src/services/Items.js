export function getItemsToShow (itemsMappedById) {
    let itemIds = Object.keys(itemsMappedById);
    itemIds = itemIds.sort();

    return itemIds.map(itemId => itemsMappedById[itemId]);
}
