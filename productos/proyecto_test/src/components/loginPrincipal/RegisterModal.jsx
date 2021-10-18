import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';


const RegisterModal = ({ openModal, closeModal, register, message }) => {
    let content;

    if (message === 0) {
        content =
            <>
                <Modal.Header closeButton>
                    <Modal.Title> Usuario no registrado</Modal.Title>
                </Modal.Header>

                <Modal.Body style={{ textJustify: "inter-word", textAlign: "center" }} >
                    <p>Usted no se encuentra registrado en nuestra base de datos.</p>
                    <p>Puede registrarse, pero para poder acceder tendra que esperar a que un Administrador
                        le otorgue los permisos correspondientes.</p>
                    <p>¿Desea registrarse?</p>
                </Modal.Body>

                <Modal.Footer style={{ justifyContent: "center" }}>
                    <Button variant="outline-secondary" onClick={closeModal}>No</Button>
                    <Button variant="outline-success" onClick={register}>Si</Button>
                </Modal.Footer>
            </>
    } else if (message === 1) {
        content =
            <Modal.Header closeButton>
                <Modal.Title>¡ Se ha registrado correctamente !</Modal.Title>
            </Modal.Header>
    } else if (message === 2) {
        content =
            <>
                <Modal.Header closeButton>
                    <Modal.Title>Usuario no autorizado</Modal.Title>
                </Modal.Header>

                <Modal.Body style={{ textJustify: "inter-word", textAlign: "center" }} >
                    <p>Actualmente no tiene permisos para acceder.</p>
                    <p>Por favor comuniquese con un Administrador para que le asigne un rol autorizado.</p>
                </Modal.Body>

                <Modal.Footer style={{ justifyContent: "center" }} >
                    <Button variant="outline-secondary" onClick={closeModal}>Cerrar</Button>
                </Modal.Footer>
            </>

    } else {
        content =
            <>
                <Modal.Header closeButton>
                    <Modal.Title>{message}</Modal.Title>
                </Modal.Header>
            </>
    }

    return (
        <Modal show={openModal} onHide={closeModal} >
            <Modal.Dialog style={{ width: "100%", height: "100%" }} >
                {content}
            </Modal.Dialog>
        </Modal>
    )
}

export default RegisterModal
