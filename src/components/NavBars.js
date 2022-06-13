import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBars = () => {
    return (
        <div>
            <Nav
               Nav fill variant="tabs" defaultActiveKey="/home"
            >
                <Nav.Item>
                    <Nav.Link ><Link to="/"> Home</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1"><Link to="/counter"> Counter</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default NavBars;