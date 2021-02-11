---
path: "/staticquery-in-gatsby-component"
date: "2021-02-10"
title: "StaticQuery in Gatsby"
author: "Neeraj"
profile_url: "https://unavatar.now.sh/github/Neeraj1005?fallback=https://s3.amazonaws.com/laracasts/images/forum/avatars/default-avatar-29.png"
---

Using `Staticquery` you don't have to pass data every time. And you can easily use your component to pages.

>For more about StaticQuery visit this [link](https://www.gatsbyjs.com/docs/how-to/querying-data/static-query/)

How I did use this staticquery method in my this portfolio project. As you can see in my project there is lates post section. For this I have created a `latest-posts` componet where I fetched Graphql-query.

```

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
                  className="max-w-2xl w-full block bg-white 
                  shadow-md rounded-md 
                  border-t-4 border-indigo-600 
                  transition duration-500 ease-in-out 
                  transform hover:-translate-y-1 hover:scale-110"
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
        </section>
      )}
    />
  )
}
export default LatestPost
```

>***Note*** you can't use the pageQuery in componet. That why the static query is used for component and you can also use the static query in pages.