import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const Feature = ({featuredPost}) => {

  const features = featuredPost

  const filteredFeatures = features.filter(feature => feature.isFeature)

  const allFeaturedPosts = filteredFeatures.map(feature => {
    return (
      <div className="col-12 col-md-4" key={feature._id}>
        <Card>
          <Link to={`/posts/${feature._id}`}>
            <CardImg top width="100%" src={feature.picture} alt={feature.title} />
          </Link>
          <CardBody>
            <CardTitle>
              <Link to={`/posts/${feature._id}`}><h3>{feature.title}</h3></Link>
            </CardTitle>
            <CardSubtitle>{feature.author}</CardSubtitle>
            <CardText>{feature.excerpt}</CardText>
            <Button><Link to={`/posts/${feature._id}`}>Read More</Link></Button>
          </CardBody>
        </Card>
      </div>
    )
  })

  return (
    <div className="row">
      {allFeaturedPosts}
    </div>
  )
}

export default Feature