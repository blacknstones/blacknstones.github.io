var items = [...]

var filter = {
    categories: {
        selected: null,
        options: []
    },
    languages: {
        selected: null,
        options: []
    },
    tools: {
        selected: null,
        options: []
    }
}


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //


items.forEach(item => {
    item.categories.forEach(category => {
        if (!filter.categories.options.some(option => option === category)) {
            filter.categories.options.push(category)
        }

        // Same for Languages and Tools
    })
});


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //


// Render dropdowns


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //


var filtered_items = items;

<div for="item in filtered_items">...</div>


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //


// On selection in dropdown

onCategorySelection(category = null) {
    filter.category.selection = category;
    filterBySelection();
}

filterBySelection() {

    filtered_items = [];

    items.forEach(item => {

        if (filter.categories.selection && !item.categories.some(category => category === filter.categories.selection)) {
            return;
        }

        // Same for Language and Tools

        filtered_items.push(item);
    });
}