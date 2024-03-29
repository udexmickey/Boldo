import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import Logo from '../../../assets/images/Logo Shape.png'
import Newsletter from '../../Newsletter'

import './footer.scss'

export default function Footer() {
  return (
    <> 
    <Container className='footer-container'>
        <Newsletter />
        <Table responsive>
            <thead>
                <tr>
                    <th>
                        <div className="footer-logo-container">
                            <div className="footer-logo-images-holder"> 
                                <img src={Logo} alt="" />
                            </div>
                            <div className="footer-logo-text">
                                Boldo
                            </div>
                        </div>
                    </th>
                    <th>Landings</th>
                    <th>Company</th>
                    <th>Resources</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='td' rowSpan={3}>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</td>
                    <td>Home</td>
                    <td>Home</td>
                    <td>Blog</td>
                </tr>
                <tr>
                    <td>Products</td>
                    <td>Careers <span className=''> <Button variant='success' className='careers__hiring' > Hiring</Button></span></td>
                    <td>Products</td>
                </tr>
                <tr>
                    <td >Services</td>
                    <td>Services</td>
                    <td>Services</td>
                </tr>
                <tr><td colSpan={4}>All rights reserved.</td></tr>
            </tbody>
        </Table>
    </Container>
    </>
  )
}
