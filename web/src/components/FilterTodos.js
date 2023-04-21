import React from 'react';
import { Col, Dropdown } from 'react-bootstrap';

const FilterTodos = ({ handleFilter }) => {
    return (
        <Col xs={12} md={6} className="ml-auto text-right">
            <Dropdown className="dropdown-menu-right">
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Filtrar
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-left">
                    <Dropdown.Item onClick={() => handleFilter('completed')}>
                        Completado
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilter('pending')}>
                        Pendiente
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilter('all')}>
                        Ver todo
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Col>
    );
};

export default FilterTodos;
