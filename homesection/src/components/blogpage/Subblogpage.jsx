import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
// import { posts } from "./temp";
import { posts } from './temp'
import "./Subblogpage.css";
import vid from "../../assets/vid.mp4";
const Subblogpage = () => {
  const { postId } = useParams();
  let num = 1;
  let num2 = 1;
  return (
    <>
      <video className="vid" src={vid} autoPlay loop muted />
      <Container fluid className="mt-4">
        <Container className="text-center mb-4" style={{ maxWidth: "42rem" }}>
          <h3 className="font-weight-bold display-5">{posts[postId].title}</h3>
          <hr className="my-4" />
        </Container>

        <Container>

          <Row className="justify-content-center mb-3">
            <Col xs={12} md={6} className="text-center">
              <p>
                <strong>Title:</strong> {posts[postId].subblogtitle}
              </p>
              <p>
                <strong>Publish Date:</strong> {posts[postId].date}
              </p>
              <p>
                <strong>Category:</strong> {posts[postId].category}
              </p>
              <p>
                <strong>Description:</strong> {posts[postId].description}
              </p>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <div
                className="text-animate"
                style={{
                  border: "2px solid gray",
                  padding: "20px",
                  borderRadius: "20px",
                  marginBottom: "20px",
                }}
              >
                {posts[postId].data}
                <div style={{ marginTop: "5px" }}>
                  {posts[postId].firstsubdata && posts[postId].firstsubsubdata && (
                    <>
                      <b>{num++}. {posts[postId].firstsubdata}:</b>
                      <div>{posts[postId].firstsubsubdata}</div>

                      {/* Render the first bullet point if firstbulletheading and its data are present */}
                      {posts[postId].firstbulletheading && posts[postId].firstbulletheadingdata && (
                        <div className="points">
                          <b>• {posts[postId].firstbulletheading}:</b> {posts[postId].firstbulletheadingdata}
                        </div>
                      )}

                      {/* Render the second bullet point if firstsecebulletheading and its data are present */}
                      {posts[postId].firstsecebulletheading && posts[postId].firstsecebulletheadingdata && (
                        <div className="points">
                          <b>• {posts[postId].firstsecebulletheading}:</b> {posts[postId].firstsecebulletheadingdata}
                        </div>
                      )}
                      {posts[postId].fifthcardfirst && (
                        <div><b>• {posts[postId].fifthcardfirst}: </b>Instead of relying on server-side rendering, HTML files are pre-rendered and delivered via a content delivery network (CDN), ensuring faster page loads and higher performance.
                        </div>
                      )}

                      {posts[postId].fifthcardsecond && posts[postId].fifthcardsecondbulletone && posts[postId].fifthcardsecondbulletsecond && posts[postId].fifthcardsecondbulletthird && posts[postId].fifthcardsecondbulletforth && (
                        <div><b>{num++}. {posts[postId].fifthcardsecond}: </b>Several factors have contributed to JAMstacks rise as the go-to solution for modern web development, especially in 2024. Here are some of the most compelling reasons:
                          <div><b>• {posts[postId].fifthcardsecondbulletone}: </b>With JAMstack, web pages are pre-built and served as static files via CDNs. This drastically reduces load times because content is delivered from the closest server to the user, eliminating the need for database calls and server-side processing for each request. In an era where performance directly impacts user experience and SEO, JAMstack provides a competitive edge.</div>
                          <div><b>• {posts[postId].fifthcardsecondbulletsecond}: </b>Since JAMstack removes the reliance on traditional servers and databases for rendering web pages, there are fewer entry points for cyberattacks like SQL injection or server-side vulnerabilities. APIs are decoupled from the front-end, which means sensitive data is not directly exposed to users. This increased security makes JAMstack an attractive option for websites handling sensitive information, such as e-commerce or fintech platforms.</div>
                          <div><b>• {posts[postId].fifthcardsecondbulletthird}: </b>JAMstack enables websites to handle large amounts of traffic with ease. Pre-rendered static files can be served to millions of users simultaneously without requiring additional server resources. This scalability makes JAMstack ideal for websites expecting rapid growth or fluctuating traffic, such as during sales events, product launches, or viral content.</div>
                          <div><b>• {posts[postId].fifthcardsecondbulletforth}: </b>JAMstack simplifies the development process by allowing developers to focus on writing code for the front-end while outsourcing complex server-side functions to APIs. Developers can also choose the best tools and frameworks, such as Gatsby, Hugo, or Next.js, to build the front end. This flexibility improves productivity and makes the development process more enjoyable and efficient.</div>
                        </div>
                      )}
                      {posts[postId].fifthcardthird && posts[postId].fifthcardthirdbulletone && posts[postId].fifthcardthirdbulletsecond && posts[postId].fifthcardthirdbulletthird && posts[postId].fifthcardthirdbulletforth && (
                        <div><b>{num++}. {posts[postId].fifthcardthird}: </b>As we move into 2024, JAMstack is evolving to meet new challenges and opportunities. Here are some of the latest trends and innovations shaping JAMstack this year:
                          <div><b>• {posts[postId].fifthcardthirdbulletone}: </b>One of the most significant advancements in JAMstack is the rise of headless CMS platforms like Strapi, Contentful, and Sanity. These platforms decouple the front-end from the back-end, allowing developers to manage content separately while delivering it through APIs. This separation enhances flexibility and makes content management more efficient.</div>
                          <div><b>• {posts[postId].fifthcardthirdbulletsecond}: </b>In 2024, more developers are embracing serverless computing as part of the JAMstack ecosystem. Serverless functions allow developers to run back-end code without managing servers, reducing the operational overhead of scaling and maintaining infrastructure. Platforms like AWS Lambda, Netlify Functions, and Vercel Functions offer seamless serverless integrations, making it easier to build powerful web applications.</div>
                          <div><b>• {posts[postId].fifthcardthirdbulletthird}: </b>Content Delivery Networks (CDNs) are central to JAMstacks performance advantages. In 2024, CDNs are evolving to offer more intelligent and automated caching solutions. Companies like Cloudflare and Fastly are pushing the boundaries of CDN technology by incorporating edge computing, which allows for even faster response times and more localized processing.</div>
                          <div><b>• {posts[postId].fifthcardthirdbulletforth}: </b>The API-first approach is booming, and with it comes an explosion of third-party APIs for almost every functionality imaginable—authentication, payments, machine learning, and more. The growing API economy is enabling JAMstack developers to build feature-rich applications without reinventing the wheel. This trend is expected to continue as more services become available via API.</div>
                        </div>
                      )}
                      {posts[postId].fifthcardforth && posts[postId].fifthcardforthbulletone && posts[postId].fifthcardforthbulletsecond && posts[postId].fifthcardforthbulletthird && posts[postId].fifthcardforthbulletforth && (
                        <div><b>{num++}. {posts[postId].fifthcardforth}: </b>JAMstacks modular and flexible nature makes it a suitable choice for various industries and use cases. Here are some examples of how JAMstack benefits different sectors:
                          <div><b>• {posts[postId].fifthcardforthbulletone}: </b>For e-commerce platforms, performance, scalability, and security are paramount. JAMstacks pre-rendered pages ensure fast load times, which is critical for conversion rates. The decoupled architecture also allows e-commerce websites to integrate with third-party services for payments, inventory management, and customer reviews via APIs, improving flexibility.</div>
                          <div><b>• {posts[postId].fifthcardforthbulletsecond}: </b>Blogs, news websites, and content-heavy platforms can leverage JAMstack to deliver content quickly and efficiently. By utilizing a headless CMS, these platforms can easily manage and publish content while benefiting from faster load times and better SEO performance.</div>
                          <div><b>• {posts[postId].fifthcardforthbulletthird}: </b>Businesses seeking to improve their web presence can benefit from JAMstack’s security and performance features. Corporate websites often experience varying levels of traffic, making scalability an essential factor. With JAMstack, companies can ensure their websites remain fast and functional, even under heavy traffic.</div>
                          <div><b>• {posts[postId].fifthcardforthbulletforth}: </b>For startups and small businesses, JAMstack offers an affordable and scalable solution. By leveraging third-party APIs and serverless architecture, they can reduce development costs while still building robust and modern websites that perform well across all devices.</div>
                        </div>
                      )}
                      {posts[postId].fifthcardfifth && posts[postId].fifthcardfifthbulletone && posts[postId].fifthcardfifthbulletsecond && posts[postId].fifthcardfifthbulletthird && (
                        <div><b>{num++}. {posts[postId].fifthcardfifth}: </b>In addition to the technical advantages, JAMstack offers substantial SEO benefits, which are critical for website success in 2024. Here’s how:
                          <div><b>• {posts[postId].fifthcardfifthbulletone}: </b>Page speed is a key ranking factor for search engines. JAMstacks static site architecture ensures that web pages load faster, leading to better rankings.</div>
                          <div><b>• {posts[postId].fifthcardfifthbulletsecond}: </b>By reducing server-side rendering and optimizing front-end performance, JAMstack improves metrics like First Input Delay (FID), Largest Contentful Paint (LCP), and Cumulative Layout Shift (CLS)—all essential components of Googles Core Web Vitals.</div>
                          <div><b>• {posts[postId].fifthcardfifthbulletthird}: </b>JAMstack’s static nature means that even if servers go down, the CDN can still deliver pre-rendered content to users. This reliability positively impacts SEO, as search engines prioritize websites with minimal downtime.</div>
                        </div>
                      )}
                      {posts[postId].fifthcardsixth && (
                        <div><b>{num++}. {posts[postId].fifthcardsixth}: </b>If you’re looking for a modern, scalable, and secure web development solution, JAMstack should be at the top of your list in 2024. Whether you’re building a blog, an e-commerce platform, or a corporate website, JAMstack offers the flexibility, performance, and SEO benefits needed to succeed in today’s competitive digital landscape.
                          By embracing JAMstack, youre not just adopting a trend youre investing in the future of web development.
                        </div>
                      )}

                      {posts[postId].sixthcardsecond && posts[postId].sixthcardsecondbulletone && posts[postId].sixthcardsecondbulletsecond && posts[postId].sixthcardsecondbulletthird && posts[postId].sixthcardsecondbulletforth &&posts[postId].sixthcardsecondbulletfifth && (
                        <div><b>{num++}. {posts[postId].sixthcardsecond}: </b>While AR and VR have been used in gaming and entertainment for years, their integration into web design is relatively new. These technologies are being adopted by businesses across industries—from retail to real estate—to enhance the user experience.
                        Here’s how AR and VR are making waves in web design:
                        
                          <div><b>• {posts[postId].sixthcardsecondbulletone}: </b>AR and VR introduce a new level of interaction by merging digital and physical realities. Instead of passively scrolling through content, users can engage directly with virtual objects or environments. For example, an AR-powered e-commerce website allows users to virtually try on clothing or place furniture in their living space, offering a far more engaging shopping experience.</div>
                          <div><b>• {posts[postId].sixthcardsecondbulletsecond}: </b>In the world of marketing, storytelling is key. Immersive design powered by AR and VR allows brands to tell more compelling, interactive stories. VR experiences, for example, transport users to different locations or situations, offering an emotional, impactful journey. This not only keeps users engaged but also fosters a deeper connection with the brand.</div>
                          <div><b>• {posts[postId].sixthcardsecondbulletthird}: </b>One of the greatest advantages of AR and VR in web design is the ability to visualize products or concepts in 3D. This is especially useful in industries like real estate, architecture, and retail, where seeing is believing. For instance, real estate websites can now offer virtual tours, allowing potential buyers to walk through properties without leaving their homes.</div>
                          <div><b>• {posts[postId].sixthcardsecondbulletforth}: </b>Immersive design allows for greater personalization. With AR, users can adjust settings in real-time to view products or services tailored to their preferences. This creates a more user-centric experience, leading to higher engagement rates and increased satisfaction.</div>
                          <div><b>• {posts[postId].sixthcardsecondbulletfifth}: </b>AR and VR interactions can also provide businesses with rich data about user preferences and behaviors. By analyzing how users interact with virtual environments, businesses can gain insights into customer interests, refine their offerings, and optimize their websites for better user engagement.</div>
                        </div>
                      )}
                      {posts[postId].sixthcardthird && posts[postId].sixthcardthirdbulletone && posts[postId].sixthcardthirdbulletsecond && posts[postId].sixthcardthirdbulletthird && posts[postId].sixthcardthirdbulletforth && (
                        <div><b>{num++}. {posts[postId].sixthcardthird}: </b>Many industries are already exploring the potential of AR and VR for web design. Below are a few notable examples:
                        
                          <div><b>• {posts[postId].sixthcardthirdbulletone}: </b>Online retailers are using AR to allow customers to virtually try on clothes, shoes, and accessories. This not only enhances the shopping experience but also reduces the likelihood of returns. For example, brands like Ikea and Sephora have embraced AR to enable customers to preview products in their own environments.</div>
                          <div><b>• {posts[postId].sixthcardthirdbulletsecond}: </b>Virtual tours have become a game-changer in real estate. With VR, potential buyers can explore properties as if they were physically present, saving time and allowing them to view homes from anywhere in the world.</div>
                          <div><b>• {posts[postId].sixthcardthirdbulletthird}: </b>One of the greatest advantages of AR and VR in web design is the ability to visualize products or concepts in 3D. This is especially useful in industries like real estate, architecture, and retail, where seeing is believing. For instance, real estate websites can now offer virtual tours, allowing potential buyers to walk through properties without leaving their homes.</div>
                          <div><b>• {posts[postId].sixthcardthirdbulletforth}: </b>Virtual classrooms and AR-enhanced learning materials are becoming more popular in the education sector. These technologies allow students to immerse themselves in learning environments that go beyond textbooks, offering interactive lessons and virtual labs.</div>
                          
                        </div>
                      )}
                      {posts[postId].sixthcardforth && posts[postId].sixthcardforthbulletone && posts[postId].sixthcardforthbulletsecond && posts[postId].sixthcardforthbulletthird && posts[postId].sixthcardforthbulletforth &&posts[postId].sixthcardforthbulletfifth && (
                        <div><b>{num++}. {posts[postId].sixthcardforth}: </b>
                        
                          <div><b>• {posts[postId].sixthcardforthbulletone}: </b>One of the most obvious benefits of AR and VR in web design is the ability to increase user engagement. Immersive experiences captivate users and encourage them to spend more time on your site, leading to higher conversion rates.</div>
                          <div><b>• {posts[postId].sixthcardforthbulletsecond}: </b>Businesses that adopt AR and VR early on can gain a competitive edge. Offering immersive web experiences sets your brand apart from competitors, positioning you as an innovative leader in your industry.</div>
                          <div><b>• {posts[postId].sixthcardforthbulletthird}: </b>Especially for e-commerce websites, AR can reduce product return rates. By allowing customers to try before they buy, AR reduces uncertainty, leading to more satisfied customers and fewer returns.</div>
                          <div><b>• {posts[postId].sixthcardforthbulletforth}: </b>Immersive experiences tend to leave a lasting impression. By creating memorable, engaging interactions, businesses can foster greater brand loyalty and customer retention.</div>
                          <div><b>• {posts[postId].sixthcardforthbulletfifth}: </b>By offering users a more interactive, immersive experience, businesses can drive higher conversion rates. Whether it’s through virtual product trials or engaging storytelling, AR and VR help to nudge users towards making a purchase or taking other desired actions.</div>
                          
                        </div>
                      )}
                      {posts[postId].sixthcardfifth && posts[postId].sixthcardfifthbulletone && posts[postId].sixthcardfifthbulletsecond && posts[postId].sixthcardfifthbulletthird &&  (
                        <div><b>{num++}. {posts[postId].sixthcardfifth}: </b>While the potential of AR and VR in web design is vast, businesses may face some challenges when implementing these technologies:
                        
                          <div><b>• {posts[postId].sixthcardfifthbulletone}: </b>AR and VR experiences require specialized development skills and can be costly to implement. From creating 3D models to coding the interactive experience, businesses should be prepared for higher upfront costs.</div>
                          <div><b>• {posts[postId].sixthcardfifthbulletsecond}: </b>AR and VR technologies are still evolving, and not all devices or browsers fully support these experiences. Businesses need to ensure that their websites are optimized for multiple platforms and devices to reach a wider audience.</div>
                          <div><b>• {posts[postId].sixthcardfifthbulletthird}: </b>Some users may be unfamiliar with AR and VR technologies, resulting in a learning curve. Designers should focus on creating intuitive, user-friendly experiences that don’t overwhelm or confuse users.</div>
                          
                        </div>
                      )}
                      {posts[postId].sixthcardsixth && posts[postId].sixthcardsixthbulletone && posts[postId].sixthcardsixthbulletsecond && posts[postId].sixthcardsixthbulletthird &&  (
                        <div><b>{num++}. {posts[postId].sixthcardsixth}: </b>As AR and VR technologies become more advanced and accessible, their integration into web design will only increase. Here are a few future trends to look out for:
                        
                          <div><b>• {posts[postId].sixthcardsixthbulletone}: </b>Web-based AR (WebAR) allows users to experience AR without downloading an app. This makes AR more accessible and easier to integrate into websites.</div>
                          <div><b>• {posts[postId].sixthcardsixthbulletsecond}: </b>Future websites may incorporate haptic feedback, allowing users to feel virtual objects through touch.</div>
                          <div><b>• {posts[postId].sixthcardsixthbulletthird}: </b>VR experiences are becoming more social. In the future, users may be able to share VR experiences with friends or collaborate in virtual environments directly through websites.</div>
                          
                        </div>
                      )}
                      {posts[postId].seventhcard && posts[postId].seventhcardbulletone && posts[postId].seventhcardbulletsecond && posts[postId].seventhcardbulletthird &&  posts[postId].seventhcardbulletforth && posts[postId].seventhcardbulletfifth &&   (
                        <div><b>{num++}. {posts[postId].seventhcard}: </b>In 2024, several factors underscore the importance of accessibility in web design:
                        
                          <div><b>• {posts[postId].seventhcardbulletone}: </b>In many countries, web accessibility is mandated by law. Laws such as the Americans with Disabilities Act (ADA) in the U.S. and the European Accessibility Act make it obligatory for websites to meet specific accessibility standards. Failure to comply with these regulations can result in lawsuits and financial penalties.</div>
                          <div><b>• {posts[postId].seventhcardbulletsecond}: </b>Globally, over 1 billion people experience some form of disability. By designing with accessibility in mind, you open your website to a broader audience. Inaccessible websites alienate a significant portion of potential users, including people with disabilities, the elderly, or individuals with situational limitations.</div>
                          <div><b>• {posts[postId].seventhcardbulletthird}: </b>Accessibility is closely tied to user experience. A website that is easy to navigate, readable, and functional for everyone tends to have a better user experience overall. Many accessibility best practices—like intuitive navigation and scalable text—enhance usability for all visitors, not just those with disabilities.</div>
                          <div><b>• {posts[postId].seventhcardbulletforth}: </b>Search engines like Google prioritize websites that are well-structured, have clear navigation, and feature descriptive content. Many accessibility features, such as alternative text for images and semantic HTML, naturally improve a website’s SEO, boosting its visibility in search engine results.</div>
                          <div><b>• {posts[postId].seventhcardbulletfifth}: </b>In an age where businesses are expected to act responsibly and inclusively, prioritizing accessibility can strengthen a brand’s reputation. Demonstrating a commitment to inclusivity and equal access to digital services reflects positively on an organization, aligning with the growing consumer preference for socially responsible companies.</div>
                          
                        </div>
                      )}
                      {posts[postId].seventhcardtwo && posts[postId].seventhcardtwobulletone && posts[postId].seventhcardtwobulletsecond && posts[postId].seventhcardtwobulletthird &&  posts[postId].seventhcardtwobulletforth &&  (
                        <div><b>{num++}. {posts[postId].seventhcardtwo}: </b>To ensure a website is accessible, developers and designers should follow recognized guidelines, primarily the Web Content Accessibility Guidelines (WCAG). These guidelines are based on four principles, which state that websites must be Perceivable, Operable, Understandable, and Robust (POUR). Here’s a breakdown of each:
                        
                          <div><b>• {posts[postId].seventhcardtwobulletone}: </b>Information and user interface elements must be presented in ways that all users can perceive. For instance: Text alternatives for non-text content (like images). Captions and transcripts for multimedia. Color contrast adjustments to make text readable against background colors.</div>
                          <div><b>• {posts[postId].seventhcardtwobulletsecond}: </b>Users must be able to navigate and interact with a website regardless of their abilities. This includes: Keyboard accessibility (allowing users to navigate without a mouse). Enough time for users to read and interact with content. Easy navigation and predictable interactions.</div>
                          <div><b>• {posts[postId].seventhcardtwobulletthird}: </b>The content must be easy to read, and the interface should be intuitive. Some key considerations are: Clear and simple language. Consistent navigation structure across pages. Input assistance for forms (e.g., error suggestions).</div>
                          <div><b>• {posts[postId].seventhcardtwobulletforth}: </b>The website must be compatible with various assistive technologies, like screen readers, ensuring that it works across different platforms, browsers, and devices.</div>
                          
                          
                        </div>
                      )}
                      {posts[postId].seventhcardthree && posts[postId].seventhcardthreebulletone && posts[postId].seventhcardthreebulletsecond && posts[postId].seventhcardthreebulletthird &&   (
                        <div><b>{num++}. {posts[postId].seventhcardthree}: </b>While the benefits of accessibility are clear, many websites still fall short due to various challenges:
                        
                          <div><b>• {posts[postId].seventhcardthreebulletone}: </b>Sites with complicated navigation or inaccessible forms can make it hard for users with disabilities to engage. Simplifying navigation and providing clear labels and headings can alleviate these issues.</div>
                          <div><b>• {posts[postId].seventhcardthreebulletsecond}: </b>Failing to provide alternative text for images excludes users who rely on screen readers. Alt text not only improves accessibility but also aids SEO by offering more context for search engines.</div>
                          <div><b>• {posts[postId].seventhcardthreebulletthird}: </b>Low-contrast text makes it difficult for users with visual impairments to read content. Ensuring proper color contrast improves readability for everyone, especially in low-light environments or on mobile devices.</div>
                         
                        </div>
                      )}
                      {posts[postId].seventhcardforth && posts[postId].seventhcardforthbulletone &&  (
                        <div><b>{num++}. {posts[postId].seventhcardforth}: </b>usage, non-responsive designs hinder accessibility. Websites that are not optimized for mobile or tablet use may be difficult for users with disabilities to interact with, as they often rely on screen magnifiers or other tools that function best on responsive layouts.
                        
                          <div><b>• {posts[postId].seventhcardforthbulletone}: </b>Forms are integral to many websites, whether for sign-ups, purchases, or inquiries. Forms that don’t have properly labeled fields, lack clear instructions, or fail to highlight errors can frustrate users with disabilities, making the process impossible to complete without assistance.</div>
                          
                        </div>
                      )}
                      {posts[postId].seventhcardfifth && posts[postId].seventhcardfifthbulletone && posts[postId].seventhcardfifthbulletsecond && posts[postId].seventhcardfifthbulletthird &&  posts[postId].seventhcardfifthbulletforth &&  posts[postId].seventhcardfifthbulletfifth &&  (
                        <div><b>{num++}. {posts[postId].seventhcardfifth} </b>
                        
                          <div><b>• {posts[postId].seventhcardfifthbulletone}: </b>Accessible websites are not just for users with disabilities—they also benefit everyone. For example, providing captions on videos is useful not just for the hearing impaired, but for anyone watching in a noisy environment. Larger buttons and clickable areas help users on touchscreens as much as they do for people with motor impairments.</div>
                          <div><b>• {posts[postId].seventhcardfifthbulletsecond}: </b>Many accessibility best practices align with search engine optimization (SEO) strategies. Using semantic HTML, providing alt text, and ensuring proper heading structure all contribute to making a site more crawlable and understandable to search engines, improving search rankings.</div>
                          <div><b>• {posts[postId].seventhcardfifthbulletthird}: </b>Non-compliance with accessibility laws can result in lawsuits, particularly in regions like the U.S. where ADA compliance is closely monitored. By proactively designing with accessibility in mind, you mitigate the risk of legal action.</div>
                          <div><b>• {posts[postId].seventhcardfifthbulletforth}: </b>With over a billion people worldwide experiencing some form of disability, accessible websites have a much larger potential audience. Inaccessible websites essentially shut out this vast group of users, whereas accessible websites ensure that everyone, regardless of their abilities, can engage with your content or services.</div>
                          <div><b>• {posts[postId].seventhcardfifthbulletfifth}: </b>Embracing accessibility reflects positively on a company’s brand. It shows that you value inclusivity and are committed to making your services or products available to all. This can enhance customer loyalty and attract new clients who appreciate companies with strong ethical and social responsibility practices.</div>
                          
                          
                        </div>
                      )}
                      {posts[postId].seventhcardsixth && posts[postId].seventhcardsixthbulletone && posts[postId].seventhcardsixthbulletsecond && posts[postId].seventhcardsixthbulletthird &&  posts[postId].seventhcardsixthbulletforth &&  (
                        <div><b>{num++}. {posts[postId].seventhcardsixth}: </b>As technology advances, so do the tools and techniques for creating accessible web experiences. In 2024 and beyond, several trends will continue to shape the future of accessibility in web design:
                        
                          <div><b>• {posts[postId].seventhcardsixthbulletone}: </b>Artificial intelligence (AI) and machine learning are playing an increasing role in accessibility. AI tools can automatically generate captions, suggest alt text, or even adjust website elements to suit individual user needs. This will reduce the manual effort required to ensure accessibility while improving user experience.</div>
                          <div><b>• {posts[postId].seventhcardsixthbulletsecond}: </b>With the rise of voice-activated devices and digital assistants, voice interfaces will become even more important for web accessibility. Integrating voice navigation, dictation, and other assistive technologies into websites will offer more inclusive access.</div>
                          <div><b>• {posts[postId].seventhcardsixthbulletthird}: </b>Future web designs will increasingly allow users to personalize their experience based on their specific needs. Whether its adjusting font size, color schemes, or keyboard navigation, websites will become more adaptable, empowering users with disabilities to have more control over how they engage with digital content.</div>
                          <div><b>• {posts[postId].seventhcardsixthbulletforth}: </b>Tools that automate accessibility testing are becoming more sophisticated. As a result, it will be easier for web developers to check for compliance and address any issues early in the design and development process. This will lead to more consistent and reliable accessibility across all websites.</div>
                          
                          
                        </div>
                      )}
                      {posts[postId].seventhcardseven &&(
                        <div><b>{num++}. {posts[postId].seventhcardseven}</b>In 2024, web accessibility is not just a regulatory requirement or a best practice—it’s an essential aspect of modern web design. Ensuring that your website is accessible benefits all users, improves your SEO, expands your audience, and mitigates legal risks. As technology evolves and more people come online, making your website accessible should be a top priority for both business and ethical reasons.

                        By embracing accessibility now, you not only comply with legal standards but also contribute to a more inclusive web for all. Whether through responsive design, semantic HTML, or the use of AI-powered tools, the future of web design will continue to push the boundaries of what’s possible in making digital experiences accessible to everyone, regardless of their abilities.
                        </div>
                      )}

                      {posts[postId].conclusion}
                    </>
                  )}

                  {posts[postId].secondsubdata && posts[postId].secondsubsubdata && (
                    <>
                      <b> {num++}. {posts[postId].secondsubdata}:</b>
                      <div>{posts[postId].secondsubsubdata}</div>
                      {posts[postId].secondbulletheading && posts[postId].secondbulletheadingdata && (
                        <div className="points">
                          <b>• {posts[postId].secondbulletheading}:</b> {posts[postId].secondsecebulletheadingdata}
                        </div>
                      )}

                      {/* Render the second bullet point if firstsecebulletheading and its data are present */}
                      {posts[postId].firstsecebulletheading && posts[postId].firstsecebulletheadingdata && (
                        <div className="points">
                          <b>• {posts[postId].firstsecebulletheading}:</b> {posts[postId].firstsecebulletheadingdata}
                        </div>
                      )}
                      {posts[postId].secondmoredata && posts[postId].thirdmoredata && posts[postId].forthmoredata && posts[postId].fifthmoredata && (
                        <div><b>• {posts[postId].secondmoredata} </b> The demand for digital transformation continues to skyrocket, and businesses across various sectors need fast, scalable solutions to stay relevant. No-code and low-code platforms offer a quick way to build software applications, helping companies stay ahead of their competitors.
                          <div><b>• {posts[postId].thirdmoredata}</b> The global shortage of skilled developers has put a strain on businesses ability to scale. By 2024, the gap between the demand for developers and the available workforce has only widened. No-code and low-code tools provide a way to bridge this gap by empowering non-developers to create applications independently.</div>
                          <div><b>• {posts[postId].forthmoredata}</b> In an era where time is critical, businesses need to launch new products and services quickly. No-code and low-code platforms enable companies to build applications in a fraction of the time it would take using traditional development methods, providing a significant competitive advantage.</div>
                          <div><b>• {posts[postId].fifthmoredata}</b> Traditional software development is costly, requiring significant investments in time and resources. No-code and low-code platforms drastically reduce development costs by allowing smaller teams, or even individual creators, to build complex applications without the need for extensive technical expertise.</div>
                        </div>
                      )}
                      {posts[postId].sixthmoredata && posts[postId].sixthonedata && posts[postId].sixthseconddata && posts[postId].sixththirddata && posts[postId].sixthforthdata && posts[postId].sixthfifthdata && (
                        <div><b>{num++}. {posts[postId].sixthmoredata}: </b>The rise of these platforms brings numerous benefits to organizations and individuals looking to build and deploy applications quickly. Here are the most prominent advantages:
                          <div><b>• {posts[postId].sixthonedata}:</b>One of the primary benefits of no-code and low-code platforms is that they empower citizen developers—non-technical employees who can now build software applications for their specific needs. This democratization of software development reduces the burden on IT departments and allows business units to solve problems without waiting for developer assistance.</div>
                          <div><b>• {posts[postId].sixthseconddata}:</b>With reduced complexity and faster development cycles, businesses can experiment with new ideas more freely. No-code and low-code platforms enable companies to test and iterate on concepts quickly, allowing for more innovation and creativity.</div>
                          <div><b>• {posts[postId].sixththirddata}:</b>: No-code and low-code platforms give businesses the agility to respond to changing market demands. Applications can be built, modified, and updated easily, ensuring that businesses can keep up with trends and customer expectations.</div>
                          <div><b>• {posts[postId].sixthforthdata}:</b>These platforms foster collaboration between technical and non-technical teams. Business users can actively participate in the development process, ensuring that the final product aligns closely with business needs and goals.</div>
                          <div><b>• {posts[postId].sixthfifthdata}:</b>Traditional software development often involves complex workflows, multiple approvals, and coordination between various teams, which can create bottlenecks. No-code and low-code platforms streamline the development process, eliminating unnecessary delays and allowing teams to work more efficiently.</div>
                        </div>
                      )}
                      {posts[postId].seventhmoredata && posts[postId].seventhonedata && posts[postId].seventhseconddata && posts[postId].sevenththirddata && posts[postId].seventhforthdata && posts[postId].seventhfifthdata && (
                        <div><b>{num++}. {posts[postId].seventhmoredata}: </b>Several no-code and low-code platforms have gained widespread popularity in 2024 due to their robust features and ease of use. Some of the leading platforms include:
                          <div><b>• {posts[postId].seventhonedata}: </b>OutSystems is a comprehensive low-code platform that offers advanced development capabilities, including AI-driven automation, for creating enterprise-grade applications.</div>
                          <div><b>• {posts[postId].seventhseconddata}: </b>A popular no-code platform, Bubble allows users to create web applications with rich functionality through a visual interface. Its ideal for startups and entrepreneurs looking to build MVPs (Minimum Viable Products).</div>
                          <div><b>• {posts[postId].sevenththirddata}: </b>Appgyver is another powerful no-code platform that enables users to create mobile and web applications without writing any code. Its particularly known for its speed and flexibility.</div>
                          <div><b>• {posts[postId].seventhforthdata}: </b>Mendix offers both no-code and low-code options, making it a flexible choice for a variety of businesses. Its extensive ecosystem of connectors and integrations makes it ideal for creating complex, enterprise-level applications.</div>
                          <div><b>• {posts[postId].seventhfifthdata}: </b>Webflow is a no-code platform designed for building visually appealing websites. It gives designers full control over the look and feel of the website without needing to code, making it a popular choice for creatives and agencies.</div>
                        </div>
                      )}
                      {posts[postId].eigthmoredata && posts[postId].eigthonedata && posts[postId].eigthseconddata && posts[postId].eigththirddata && posts[postId].eigthforthdata && (
                        <div><b>{num++}. {posts[postId].eigthmoredata}: </b>The rise of no-code and low-code platforms marks a significant shift in the software development landscape, and this trend is expected to continue well beyond 2024. Heres what the future holds:
                          <div><b>• {posts[postId].eigthonedata}: </b>AI and machine learning are increasingly being integrated into no-code and low-code platforms, enabling users to create smarter, data-driven applications without needing to understand complex algorithms. This will further simplify the development process and expand the potential use cases of these platforms.</div>
                          <div><b>• {posts[postId].eigthseconddata}: </b>While no-code and low-code platforms have traditionally been seen as tools for small and medium-sized businesses or startups, they are increasingly being adopted by large enterprises. In 2024, we see more enterprise-level solutions being built on these platforms due to their scalability and ease of customization.</div>
                          <div><b>• {posts[postId].eigththirddata}: </b>As no-code and low-code platforms become more prevalent, ensuring the security of the applications built on them will be a top priority. Platforms are investing in better security features to protect user data and prevent vulnerabilities in applications.</div>
                          <div><b>• {posts[postId].eigthforthdata}: </b>While no-code platforms are known for their ease of use, they often come with limitations in customization. Moving forward, we can expect no-code and low-code platforms to offer more flexibility in terms of custom logic, third-party integrations, and design freedom.</div>
                        </div>
                      )}
                      {posts[postId].ninthmoredata && posts[postId].ninthonedata && posts[postId].ninthseconddata && posts[postId].ninththirddata && (
                        <div><b>{num++}. {posts[postId].ninthmoredata}: </b>Despite their many advantages, no-code and low-code platforms are not without limitations:
                          <div><b>• {posts[postId].ninthonedata}: </b>While no-code platforms allow for quick and easy development, they may not be suitable for highly customized or complex applications. Businesses with specific needs that require granular control over functionality may find these platforms limiting.</div>
                          <div><b>• {posts[postId].ninthseconddata}: </b>Some no-code and low-code platforms may face scalability issues as applications grow. Ensuring that the platform can handle increased traffic, data, and functionality over time is crucial for long-term success.</div>
                          <div><b>• {posts[postId].ninththirddata}: </b>Many no-code and low-code platforms operate on proprietary systems, which can lead to vendor lock-in. If a company decides to migrate to another platform or traditional development, the transition could be complex and costly.</div>
                        </div>
                      )}

                      {/* {posts[postId].} */}

                      <div>
                        {posts[postId].conclusion}
                      </div>
                    </>
                  )}

                  {posts[postId].thirdsubdata && posts[postId].thirdsubsubdata && (
                    <>
                      <b>{num++}.{posts[postId].thirdsubdata}:</b>
                      <div>{posts[postId].thirdsubsubdata}</div>
                      {posts[postId].firstbulletheading && posts[postId].firstbulletheadingdata && (
                        <div className="points">
                          <b>• {posts[postId].firstbulletheading}:</b> {posts[postId].thirdbulletheadingdata}
                        </div>
                      )}

                      {/* Render the second bullet point if firstsecebulletheading and its data are present */}
                      {posts[postId].firstsecebulletheading && posts[postId].firstsecebulletheadingdata && (
                        <div className="points">
                          <b>• {posts[postId].firstsecebulletheading}:</b> {posts[postId].thirdsecebulletheadingdathird}
                        </div>
                      )}
                    </>
                  )}

                  {posts[postId].forthsubdata && posts[postId].forthsubsubdata && (
                    <>
                      <b>{num++}.{posts[postId].forthsubdata}:</b>
                      <div>{posts[postId].forthsubsubdata}</div>
                      {posts[postId].firstbulletheading && posts[postId].firstbulletheadingdata && (
                        <div className="points">
                          <b>• {posts[postId].firstbulletheading}:</b> {posts[postId].forthbulletheadingdata}
                        </div>
                      )}

                      {/* Render the second bullet point if firstsecebulletheading and its data are present */}
                      {posts[postId].firstsecebulletheading && posts[postId].firstsecebulletheadingdata && (
                        <div className="points">
                          <b>• {posts[postId].firstsecebulletheading}:</b> {posts[postId].forthsecebulletheadingdathird}
                        </div>
                      )}



                    </>
                  )}

                  {posts[postId].fifthsubdata && posts[postId].fifthsubsubdata && (
                    <>
                      <b>{num++}.{posts[postId].fifthsubdata}:</b>
                      <div>{posts[postId].fifthsubsubdata}</div>
                      {posts[postId].firstbulletheading && posts[postId].firstbulletheadingdata && (
                        <div className="points">
                          <b>• {posts[postId].firstbulletheading}:</b> {posts[postId].fifthbulletheadingdata}
                        </div>
                      )}

                      {/* Render the second bullet point if firstsecebulletheading and its data are present */}
                      {posts[postId].firstsecebulletheading && posts[postId].firstsecebulletheadingdata && (
                        <div className="points">
                          <b>• {posts[postId].firstsecebulletheading}:</b> {posts[postId].fifthsecebulletheadingdathird}
                        </div>
                      )}
                      {posts[postId].datatwo && posts[postId].datatwosub && (
                        <div><b>{posts[postId].datatwo}:</b> {posts[postId].datatwosub}</div>
                      )}
                      {posts[postId].datathree && posts[postId].datathreesub && (
                        <div><b>{posts[postId].datathree}:</b> {posts[postId].datathreesub}</div>
                      )}
                      {posts[postId].datafour && posts[postId].datafoursub && posts[postId].datafive && posts[postId].datafivesub && posts[postId].datasix && posts[postId].datasixsub && posts[postId].dataseven && posts[postId].datasevensub && (
                        <div>
                          <b>{num2++}. {posts[postId].datafour}:</b> {posts[postId].datafoursub}
                          <div><b>{num2++}. {posts[postId].datafive}:</b> {posts[postId].datafivesub}</div>
                          <div><b>{num2++}. {posts[postId].datasix}:</b> {posts[postId].datasixsub}</div>
                          <div><b>{num2++}. {posts[postId].dataseven}:</b> {posts[postId].datasevensub}</div>
                        </div>
                      )}
                      {posts[postId].lastdata && posts[postId].lastdatasub && (
                        <div><b>{posts[postId].lastdata}: </b>{posts[postId].lastdatasub}</div>
                      )}
                    </>
                  )}

                  {posts[postId].sixthsubdata && posts[postId].sixthsubsubdata && (
                    <>
                      <b>{num++}.{posts[postId].sixthsubdata}:</b>
                      <div>{posts[postId].sixthsubsubdata}</div>
                      {posts[postId].firstbulletheading && posts[postId].firstbulletheadingdata && (
                        <div className="points">
                          <b>• {posts[postId].firstbulletheading}:</b> {posts[postId].sixthbulletheadingdata}
                        </div>
                      )}

                      {/* Render the second bullet point if firstsecebulletheading and its data are present */}
                      {posts[postId].firstsecebulletheading && posts[postId].firstsecebulletheadingdata && (
                        <div className="points">
                          <b>• {posts[postId].firstsecebulletheading}:</b> {posts[postId].sixthsecebulletheadingdathird}
                        </div>
                      )}
                    </>
                  )}

                  {posts[postId].seventhsubdata && posts[postId].seventhsubsubdata && (
                    <>
                      <b>{num++}.{posts[postId].seventhsubdata}:</b>
                      <div>{posts[postId].seventhsubsubdata}</div>
                      {posts[postId].firstbulletheading && posts[postId].firstbulletheadingdata && (
                        <div className="points">
                          <b>• {posts[postId].firstbulletheading}:</b> {posts[postId].seventhbulletheadingdata}
                        </div>
                      )}

                      {/* Render the second bullet point if firstsecebulletheading and its data are present */}
                      {posts[postId].firstsecebulletheading && posts[postId].firstsecebulletheadingdata && (
                        <div className="points">
                          <b>• {posts[postId].firstsecebulletheading}:</b> {posts[postId].seventhsecebulletheadingdathird}
                        </div>
                      )}
                    </>
                  )}

                  {posts[postId].eigthsubdata && posts[postId].eigthsubsubdata && (
                    <>
                      <b>{num++}.{posts[postId].eigthsubdata}:</b>
                      <div>{posts[postId].eigthsubsubdata}</div>
                      {posts[postId].firstbulletheading && posts[postId].firstbulletheadingdata && (
                        <div className="points">
                          <b>• {posts[postId].firstbulletheading}:</b> {posts[postId].firstbulletheadingdata}
                        </div>
                      )}

                      {/* Render the second bullet point if firstsecebulletheading and its data are present */}
                      {posts[postId].firstsecebulletheading && posts[postId].firstsecebulletheadingdata && (
                        <div className="points">
                          <b>• {posts[postId].firstsecebulletheading}:</b> {posts[postId].firstsecebulletheadingdata}
                        </div>
                      )}
                    </>
                  )}

                  {posts[postId].ninthsubdata && posts[postId].ninthsubsubdata && (
                    <>
                      <b>{num++}.{posts[postId].ninthsubdata}:</b>
                      <div>{posts[postId].ninthsubsubdata}</div>
                      {posts[postId].firstbulletheading && posts[postId].firstbulletheadingdata && (
                        <div className="points">
                          <b>• {posts[postId].firstbulletheading}:</b> {posts[postId].firstbulletheadingdata}
                        </div>
                      )}

                      {/* Render the second bullet point if firstsecebulletheading and its data are present */}
                      {posts[postId].firstsecebulletheading && posts[postId].firstsecebulletheadingdata && (
                        <div className="points">
                          <b>• {posts[postId].firstsecebulletheading}:</b> {posts[postId].firstsecebulletheadingdata}
                        </div>
                      )}
                    </>
                  )}
                </div>
                <div>
                  <div className="text-center" style={{ marginTop: "10px" }}>
                    {posts[postId].conclusion && (
                      <div><b>Conclusion</b></div>
                    )}
                  </div>
                  <b></b>{posts[postId].conclusion}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Subblogpage;
