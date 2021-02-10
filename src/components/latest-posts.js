import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const LatestPost = () => {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            limit: 5
          ) {
            nodes {
              id
              frontmatter {
                title
                date
                path
              }
            }
          }
        }
      `}
      render={data => (
        <section className="bg-white py-20">
          <div className="max-w-5xl px-6 mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Latest Posts
            </h2>

            {data.allMarkdownRemark.nodes.map(post => (
              <div key={post.id} className="flex flex-col items-center justify-center mt-6">
                <Link
                  className="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  to={post.frontmatter.path}
                >
                  <div className="flex items-center justify-between px-4 py-2">
                    <h3 className="text-lg font-medium text-gray-700">
                      {post.frontmatter.title}
                    </h3>
                    <span className="block text-gray-600 font-light text-sm">
                      {post.frontmatter.date}
                    </span>
                  </div>
                </Link>
              </div>
            ))}

            <div className="flex items-center justify-center mt-12">
              <Link
                className="flex items-center text-gray-600 hover:underline hover:text-gray-500"
                to="/blog"
              >
                <span>View More</span>

                <svg
                  className="h-5 w-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}
    />
  )
}

export default LatestPost
