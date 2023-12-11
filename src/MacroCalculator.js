import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Button} from "react-bootstrap";
import { useState } from 'react';

function MacroCalculator({setStartingCalories}) {
    const [proteinPercentage, setProteinPercentage] = useState('0%');
    const [carbPercentage, setCarbPercentage] = useState('0%');
    const [fatPercentage, setFatPercentage] = useState('0%');

    const [gramsOfProtein, setGramsOfProtein] = useState();
    const [gramsOfCarbs, setGramsOfCarbs] = useState();
    const [gramsOfFat, setGramsOfFat] = useState();
    let yellow = '#FFFF00';

    return (
        <Form className="px-5 pt-3">
            <Row className="mb-3">
                <Col>
                    <h1 style={{color: yellow}}>{proteinPercentage}</h1>
                    <Form.Group controlId="grams-of-protein">
                        <Form.Control type="number"
                                      placeholder="grams of protein"
                                      value={gramsOfProtein}
                                      onChange = {(event) => {
                                          setGramsOfProtein(Number(event.target.value));
                                      }}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Col>
                        <h1 style={{color: yellow}}>{carbPercentage}</h1>
                        <Form.Group controlId="grams-of-carbs">
                            <Form.Control type="number"
                                          placeholder="grams of carbs"
                                          value={gramsOfCarbs}
                                          onChange = {(event) => {
                                              setGramsOfCarbs(Number(event.target.value));
                                          }}
                            />
                        </Form.Group>
                    </Col>
                </Col>
                <Col>
                    <Col>
                        <h1 style={{color: yellow}}>{fatPercentage}</h1>
                        <Form.Group controlId="grams-of-fat">
                            <Form.Control type="number"
                                          placeholder="grams of fat"
                                          value={gramsOfFat}
                                          onChange = {(event) => {
                                              setGramsOfFat(Number(event.target.value));
                                          }}
                            />
                        </Form.Group>
                    </Col>
                </Col>
            </Row>
            <Button size="lg"
                    className="m-3"
                    onClick={() => {
                if (allValuesHaveBeenSet(gramsOfProtein, gramsOfCarbs, gramsOfFat)) {
                    const proteinCalories = gramsOfProtein * 4;
                    const carbCalories = gramsOfCarbs * 4;
                    const fatCalories = gramsOfFat * 9;
                    const totalCalories = proteinCalories + carbCalories + fatCalories;

                    setProteinPercentage(formatPercentage(proteinCalories, totalCalories));
                    setCarbPercentage(formatPercentage(carbCalories, totalCalories));
                    setFatPercentage(formatPercentage(fatCalories, totalCalories));
                    setStartingCalories(totalCalories);
                }
            }}>Calculate Macros</Button>
        </Form>
    );
}

function allValuesHaveBeenSet(gramsOfProtein, gramsOfCarbs, gramsOfFat) {
    return gramsOfProtein !== undefined && gramsOfProtein != null &&
        gramsOfCarbs !== undefined && gramsOfCarbs != null &&
        gramsOfFat !== undefined && gramsOfFat != null;
}

function formatPercentage(part, total) {
    const percentage = part / total * 100;
    return Math.round(percentage) + '%';
}

export default MacroCalculator;
