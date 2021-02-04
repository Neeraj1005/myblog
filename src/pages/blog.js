import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data }) => (
  <Layout>
    <SEO title="blogs" />
    <div class="flex justify-between container mx-auto">
      <div class="w-full lg:w-8/12">
        <h1 class="text-xl mt-4 font-bold text-gray-700 md:text-2xl">
          Latest Blogs
        </h1>
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id} class="mt-6">
            <div class="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
              <div class="flex justify-between items-center">
                <span class="font-light text-gray-600">
                  {post.node.frontmatter.date}
                </span>
                <Link
                  to="/blog"
                  className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
                >
                  Blog
                </Link>
              </div>
              <div class="mt-2">
                <Link
                  to={post.node.frontmatter.path}
                  className="text-2xl text-gray-700 font-bold hover:underline"
                >
                  {post.node.frontmatter.title}
                </Link>
                <p class="mt-2 text-gray-600">
                  {post.node.excerpt}
                </p>
              </div>
              <div class="flex justify-between items-center mt-4">
                <Link
                  to={post.node.frontmatter.path}
                  className="text-blue-500 hover:underline"
                >
                  Read more
                </Link>
                <div>
                  <Link 
                  to="/about" className="flex items-center">
                    <img
                      src={post.node.frontmatter.profile_url}
                      alt="avatar"
                      class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                    />
                    <h1 class="text-gray-700 font-bold hover:underline">
                      {post.node.frontmatter.author}
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
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            author
            date(formatString: "DD MMMM, YYYY")
            path
            title
            profile_url
          }
          excerpt
          excerptAst(pruneLength: 5)
        }
      }
    }
  }
`

export default BlogPost
