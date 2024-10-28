// BlogSection.js
import React from "react";
import { Container, Table } from "react-bootstrap";

export default function BlogSection() {
  const blogArray = [
    {
      title: "We are committed.",
      content:
        "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.",
    },
    {
      title: "We are responsible.",
      content:
        "Mass market iPhone buzz conversion analytics stock iteration responsive web design user experience business plan handshake.",
    },
    {
      title: "We aim for progress.",
      content:
        "Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics.",
    },
  ];

  return (
    <div>
      <Container fluid>
        <div className="blog__container">
          <div className="blog__head">Our blog</div>
          <div className="blog__title">
            Value proposition accelerator product management venture
          </div>
          <div className="blog__body">
            <hr />
            <div className="blog__content">
              <Table responsive="xl">
                {blogArray?.map((row, index) => (
                  <tbody key={index}>
                    <tr>
                      <th>
                        {row.title}
                        <span style={{ color: "green" }}>{row.highlight}</span>
                      </th>
                      <td>{row.content}</td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
