import React, { useState } from 'react';
import Data from '../data.json';
import { Button } from 'react-bootstrap';
import ModalCard from './ModalCard';
import { Modal } from 'react-bootstrap';

const PlanetCards = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const handleShow = () => {
    setShow(true);
    console.log(show);
  };

  const [itemSelecionado, setItemSelecionado] = useState();

  return (
    <div className="posts-container">
      {Data.map((item, i = 0) => {
        i++;
        return (
          <div Key={item.pl_name} className="post">
            <h2>
              <b>Planet Name:</b> {item.pl_name}
            </h2>
            {show ? (
              <div>
                <h1>{itemSelecionado.pl_name}</h1>
              </div>
            ) : // <Modal className="modal" handleClose={handleClose} />
            null}

            <Button
              variant="primary"
              onClick={() => {
                handleShow();
                setItemSelecionado(item);
              }}
            >
              More info +
            </Button>
          </div>
        );
      })}
    </div>
  );
};
export default PlanetCards;
