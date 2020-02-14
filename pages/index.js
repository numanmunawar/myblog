import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import about from '../pages/about'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>

    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Welcome to CS Blog</h1>

      <h3 className="description">
          Must-Read Software Development Blogs
      </h3>

      <div className="row">
        <a href="http://codebetter.com/" className="card">
          <h3>CodeBetter &rarr;</h3>
          <p>The CodeBetter blog has one main goal – introduce developers to better tools, methodologies and practices within software development. 
            Its focused on technical content that is actually relevant rather than filling their blog with random fluff to increase views.
             What makes CodeBetter different from other blogs is that they avoid writing about stuff that does not work and spend time criticizing it. 
             They focus on pointing out what is good and worth your time. The blog can definitely be trusted in terms of information as the writers post purely based on their personal experiences and knowledge.
              You will find plenty of code examples and innovative techniques here. It is perfect for developers who are focused on Microsoft technologies, especially .Net based languages, SQL Server, Sharepoint, BizTalk, server platforms and other software.
               Follow @Codebetter on Twitter.</p>
        </a>
        <a href="https://alistapart.com" className="card">
          <h3> A List Apart &rarr;</h3>
          <p>Another successful blog for software developers: A List Apart started out as a mailing list back in 1997.
             The website has been up and running since 1998! It was founded by L. Jeffrey Zeldman and features contributing writers like Senongo Akpem, Rachel Andrew, Cennydd Bowles, 
             Anthony Colangelo, Lyza Danger Gardner, Debra Gelman, Matt Griffin, and many more. 
             This is a perfect destination for those who are looking for a place to broaden their knowledge of software development or just wandering around for some cool tips and tricks. 
             The blog covers all kinds of topics on the design, development and meaning of web content, but more specifically on web standards and best practices. 
             A List Apart welcomes other writers, developers, strategists, designers and other specialists to post on their blog as long as they have some interesting thoughts to share with the world of developers. 
             Follow @alistapart on Twitter.</p>
        </a>
        <a
          href="https://www.joelonsoftware.com"
          className="card"
        >
          <h3>Joel on Software  &rarr;</h3>
          <p>Jeff’s ex-partner Joel started blogging a little earlier – back in 2000. He has been into programming for almost 40 years now,
             so, yes, he has a lot to share about software development. He used to be one of the first employees of Microsoft and work hard to create
            what you know now as OLE Automation or IDispatch. Joel’s posts are focused on the business and management of software. He is currently the CEO of Stack Exchange.
             He has written 4 books, including one on user interface design – also available on the blog. Joel runs a software company as well: Fog Creek Software. 
             Follow @spolsky on Twitter.</p>
        </a>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
