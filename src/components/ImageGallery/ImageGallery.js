import React from 'react'
import './gallery.css'
import {useStaticQuery, graphql} from 'gatsby'
const ImageGallery = () => {
    const data = useStaticQuery(graphql`query {
          allFile(filter: {ext: {in: [".png",".jpg"]}}) {
              nodes {
                absolutePath
                id
                name
                url
                uid
                extension
                ext
                root
                relativePath
                relativeDirectory
              }
            }
          }`
    )
    // # publicURL
    console.log(data.allFile.nodes);
    const allFile = data.allFile.nodes
    return (
      <div>
          <div className="image-grid">
            {allFile.map((image, index) => (
                <div className="image-item" key={`${image.id}-cl`}>
                  <img src={image.url} alt={"no alt :("} />
                </div>
              ))
            }
          </div>
        </div>
      )
  }
  export default ImageGallery


// Here, you query all the Cloudinary images sourced into the `CloudinaryMedia` nodes with the `useStaticQuery` hook. In turn, you map through those image URLs to create a gallery with the component.
