export function discussionGql(ghDiscussionCategory: string | undefined) {
  return `{
        repository(name: "next-demo", owner: "vietdd17") {
            discussions(first: 100, categoryId: "${ghDiscussionCategory}") {
              nodes {
                title
                url
                number
                bodyHTML
                bodyText
                createdAt
                lastEditedAt
                author {
                  login
                  url
                  avatarUrl
                }
              }
            }
            labels(first: 100) {
              nodes {
                name
              }
            }
          }
    }`;
}
