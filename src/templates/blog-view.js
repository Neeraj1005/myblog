import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogViewTemplate({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <article class="py-12 px-4">
        <h1 class="text-4xl text-center mb-4 font-semibold font-heading">
          {post.frontmatter.title}
        </h1>
        <p class="text-center">
          <span>{post.frontmatter.date}</span>
          <Link to="/about" className="ml-1 text-indigo-600 hover:underline">
            {post.frontmatter.author}
          </Link>
        </p>
        <div class="max-w-3xl mx-auto">
          <p
            className="mt-2 text-justify text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date(formatString: "DD MMMM, YYYY")
        profile_url
      }
    }
  }
`
