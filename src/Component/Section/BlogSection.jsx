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

  // Helper function to get the last word
  const getLastWord = (str) => {
    const words = str.trim().split(" ");
    return words.length > 0 ? words.pop() : "N/A";
  };

  // Helper function to remove the last word
  const removeLastWord = (str) => {
    const words = str.trim().split(" ");
    words.pop(); // Remove the last word
    return words.join(" "); // Join remaining words
  };

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
                        {removeLastWord(row.title) + " "}
                        <span style={{ color: "#65e4a3" }}>
                          {" " + getLastWord(row.title)}
                        </span>
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
