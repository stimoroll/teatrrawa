import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/SEO"
import ImageGallery from "../components/ImageGallery/ImageGallery"

const GalleryPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Image Gallery</h1>
    <p>Here's a Gatsby site with optimized images in a masonry grid, served from <a href="https:cloudinary.com" target="_blank" rel="noopener noreferrer">Cloudinary</a></p>
    <div style={{ marginBottom: `1.45rem` }}>
      <ImageGallery/>
    </div>
  </Layout>
)
export default GalleryPage