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
                      {posts[postId].lastdata && posts[postId].lastdatasub &&(
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
                    {posts[postId].conclusion &&(
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
