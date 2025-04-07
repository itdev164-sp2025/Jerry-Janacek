import React from "react"
import { graphql } from "gatsby"

import { H1 } from "../components/Heading"
import Layout from "../components/layout"

const BlogPost = ({ data }) => {
    const { title, body } = data.contentfulBlogPost;

    return (
        <Layout>
            <H1>{title}</H1>
            <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
        </Layout>
    )
}

export default BlogPost;

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`