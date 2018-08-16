/* global graphql */
import React from 'react'
import Link from 'gatsby-link'

import styles from '../styles/index.module.css'

const IndexPage = ({ data }) => (
  <section>
    <ul className={styles.ul}>
      {data.allPosts.edges.map(post => (
        <li className={styles.li} key={post.node.id}>
          <Link to={`/post/${post.node.slug}`} className={styles.a}>
            <div className={styles.placeholder}>
              <img
                alt={post.node.title}
                className={styles.img}
                src={`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${post.node.coverImage.handle}`}
              />
            </div>
            <h3>{post.node.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  </section>
)

export default IndexPage

export const allPostsQuery = graphql`
  query allPosts {
    allPosts(sort: { fields: [dateAndTime], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          coverImage {
            handle
          }
        }
      }
    }
  }
`
