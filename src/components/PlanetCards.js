import React, { useState } from 'react';
import Data from '../data.json';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const PlanetCards = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="posts-container">
      {Data.map((item) => {
        return (
          <div Key={item.pl_name} className="post">
            <h2>
              <b>Planet Name:</b> {item.pl_name}
            </h2>

            <>
              <Button variant="primary" onClick={handleShow}>
                More info +
              </Button>

              <Modal className="modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{item.pl_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <b>Host Name:</b>
                    {item.hostname}
                  </p>
                  <p>
                    <b>Discovery Facility:</b> {item.disc_facility}
                  </p>
                  <p>
                    <b>Discovery Method:</b> {item.discoverymethod}
                  </p>
                  <p>
                    <b>Dicovery Year:</b> {item.disc_year}
                  </p>
                  <p>
                    <b>Orbit Period:</b> {item.pl_orbper}
                  </p>
                  <p>
                    <b>Orbit Semi-Major Axis:</b> {item.pl_orbsmax}
                  </p>
                  <p>
                    <b>Planet Mass:</b> {item.pl_masse}
                  </p>
                  <p>
                    <b>Planet Radius:</b> {item.pl_rade}
                  </p>
                  <p>
                    <b>Planet Density:</b> {item.pl_dens}
                  </p>
                  <p>
                    <b>Release Date:</b> {item.releasedate}
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default PlanetCards;
