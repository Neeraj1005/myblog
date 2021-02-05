import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const WpPosts = ({ data }) => (
  <Layout>
    <SEO title="posts" />
    <div class="flex justify-between container mx-auto">
      <div class="w-full lg:w-8/12">
        <h1 class="text-xl mt-4 font-bold text-gray-700 md:text-2xl">
          Latest WordPress Posts
        </h1>
        {data.allWpPost.edges.map(post => (
          <div key={post.node.id} class="mt-6">
            <div class="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
              <div class="flex justify-between items-center">
                <span class="font-light text-gray-600">{post.node.date}</span>
                {post.node.categories.nodes.map(catName => (
                  <Link
                    to={catName.slug}
                    className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
                  >
                    {catName.name}
                  </Link>
                ))}
              </div>
              <div class="mt-2">
                <Link
                  to={post.node.slug}
                  className="text-2xl text-gray-700 font-bold hover:underline"
                >
                  {post.node.title}
                </Link>
                {/* <p class="mt-2 text-gray-600">
                  {post.node.excerpt}
                </p> */}
              </div>
              <div class="flex justify-between items-center mt-4">
                <Link
                  to={post.node.slug}
                  className="text-blue-500 hover:underline"
                >
                  Read more
                </Link>

                <div>
                  <Link to="/about" className="flex items-center">
                    <img
                      src={post.node.author.node.avatar.url}
                      alt="avatar"
                      class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                    />
                    <h1 class="text-gray-700 font-bold hover:underline">
                      {post.node.author.node.name}
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query WpPosts {
    allWpPost {
      edges {
        node {
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          title
          uri
          slug
          excerpt
          categories {
            nodes {
              id
              name
              slug
              uri
            }
          }
          date(formatString: "DD-MM-YYYY")
        }
      }
    }
  }
`

export default WpPosts
