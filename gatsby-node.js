const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  

  const result = await graphql(`
    {
      posts {
        pageInfo {
          endCursor
          startCursor
        }
        nodes {
          id
          link
          uri
          title
          featuredImageId
          featuredImage {
            node {
              id
              mediaItemId
              mediaItemUrl
              srcSet
              sourceUrl
              uri
              title
            }
          }
        }
      }
    }
      allWpPost {
        group(field: categories___nodes___name) {
          fieldValue
          edges {
            node {
              date(formatString: "MMMM DD, YYYY")
              content
              id
              link
              uri
              title
              featuredImageId
              featuredImage {
                node {
                  id
                  mediaItemId
                  mediaItemUrl
                  srcSet
                  sourceUrl
                  uri
                  title
                }
              }
            }
          }
        }
        nodes {
          id
          link
          uri
          title
          featuredImageId
          featuredImage {
            node {
              id
              mediaItemId
              mediaItemUrl
              srcSet
              sourceUrl
              uri
              title
            }
          }
        }
      }
      allWpCategory {
        edges {
          node {
            id
            name
            count
            uri
            slug
          }
        }
      }
    }
  `)

  console.log(result);

  if (result.errors) {
    reporter.panicOnBuild(`Something went horrible wrong!`, result.errors)
    return
  }

  const { wp, allWpCategory } = result.data
}


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type WpBlockAttributesObject {
      foobar: String
    }
  `;
  createTypes(typeDefs);
};

/*const CategoryTemplate = ({ data, pageContext }) => {
  console.log(data)
     console.log(pageContext)
  return (
      <Layout>
       <SEO title="Category" />
       <h1>Category</h1>
       <ul>
        <li>
         <Link to="/category/cars">Cars</Link>
        </li>
        <li>
         <Link to="/category/trucks">Trucks</Link>
        </li>
       </ul>
       <div className="category__posts">
        {data.allWpPost.edges.map((post, i) => (
          <article key={i}>
           <h3>{post.node.title}</h3>
           <span>{post.node.date}</span>
           <div dangerouslySetInnerHTML={{ __html: post.node.content }} />
          </article>
  ))}
     </div>
    </Layout>
   )
  } */