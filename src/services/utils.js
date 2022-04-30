export function transformCharacter (character) {
    return {
        id: character.id,
        name: character.name,
        description: character.description,
        thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
        comics: character.comics.items
    }
};

export function transformComic (comic) {
    return {
        id: comic.id,
        title: comic.title,
        description: comic.description,
        pageCount: comic.pageCount,
        price: comic.prices[0].price,
        thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
    }
};