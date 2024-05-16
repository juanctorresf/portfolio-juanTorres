import rss from "@astrojs/rss";

export async function GET(context) {
    const posts = getCollection(posts)
    return rss({
        title: "Juan Torres",
        description: "Portfolio of Juan Torres",
        site: context.site,
        items: [],
        customData: `<language>en</language>`
    })
}