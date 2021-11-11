import { useStaticQuery, graphql } from "gatsby"

/* 
{
  "data": {
    "menus": {
      "nodes": [
        {
          "name": "categoryMenu",
          "menuId": 13,
          "id": "dGVybToxMw=="
        },
        {
          "name": "mainMenu",
          "menuId": 5,
          "id": "dGVybTo1"
        }
      ]
    }
  }, */

//Menu items
//Posty by Category 
//Pages by Category
//Events
//Post by Tags or Categories
//All posts and then sort, filter by categories

// export const useAboutQuery = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       wpPage(databaseId: { eq: 47 }) {
//         content
//         featuredImage {
//           node {
//             localFile {
//               publicURL
//             }
//           }
//         }
//       }
//     }
//   `)

//   return data
// }

/* 
//all events 
query MyQuery {
  events {
    nodes {
      allDay
      blocksJSON
      date
      content
      contentType {
        node {
          id
        }
      }
      duration
      eventId
      id
      title
      organizers {
        edges {
          node {
            id
          }
        }
      }
      featuredImageId
      featuredImage {
        node {
          altText
          description
          srcSet
          sourceUrl
          uri
          mimeType
          guid
          id
          fileSize
        }
      }
      eventsCategories {
        nodes {
          name
        }
      }
    }
  }
}
*/