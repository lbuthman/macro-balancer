import './App.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Button} from "react-bootstrap";
import { useState } from 'react';

const PROTEIN_GRAMS_CALORIES_FACTOR = 4;
const CARB_GRAMS_CALORIES_FACTOR = 4;
const FAT_GRAMS_CALORIES_FACTOR = 9;

const PROTEIN_MACRO_TARGET_PERCENTAGE = 30;
const CARB_MACRO_TARGET_PERCENTAGE = 40;
const FAT_MACRO_TARGET_PERCENTAGE = 30;

function MacroCalculator({setStartingCalories}) {
    const [proteinPercentage, setProteinPercentage] = useState('0%');
    const [carbPercentage, setCarbPercentage] = useState('0%');
    const [fatPercentage, setFatPercentage] = useState('0%');

    const [gramsOfProtein, setGramsOfProtein] = useState(0);
    const [gramsOfCarbs, setGramsOfCarbs] = useState(0);
    const [gramsOfFat, setGramsOfFat] = useState(0);

    const [proteinColor, setProteinColor] = useState('white');
    const [carbColor, setCarbColor] = useState('white');
    const [fatColor, setFatColor] = useState('white')

    function calculateTotals() {
        if (gramsOfProtein === 0 || gramsOfCarbs === 0 || gramsOfFat === 0) {return;}

        const proteinCalories = gramsOfProtein * PROTEIN_GRAMS_CALORIES_FACTOR;
        const carbCalories = gramsOfCarbs * CARB_GRAMS_CALORIES_FACTOR;
        const fatCalories = gramsOfFat * FAT_GRAMS_CALORIES_FACTOR;
        const totalCalories = proteinCalories + carbCalories + fatCalories;

        const proteinPercent = calculatePercent(proteinCalories, totalCalories);
        const carbPercent = calculatePercent(carbCalories, totalCalories);
        const fatPercent = calculatePercent(fatCalories, totalCalories);

        setProteinPercentage(formatPercentage(proteinPercent));
        setCarbPercentage(formatPercentage(carbPercent));
        setFatPercentage(formatPercentage(fatPercent));
        setStartingCalories(totalCalories);

        setProteinColor(calculateColor(PROTEIN_MACRO_TARGET_PERCENTAGE, proteinPercent));
        setCarbColor(calculateColor(CARB_MACRO_TARGET_PERCENTAGE, carbPercent));
        setFatColor(calculateColor(FAT_MACRO_TARGET_PERCENTAGE, fatPercent));
    }

    return (
        <Form className="px-5 pt-3">
            <Row className="mb-3">
                <Col lg="1"></Col>
                <Col>
                    <h1 className="frame mb-4 big-number" style={{color: proteinColor}}>{proteinPercentage}</h1>
                    <Form.Group controlId="grams-of-protein">
                        <Form.Control type="number"
                                      placeholder="grams of protein"
                                      value={gramsOfProtein}
                                      onChange = {(event) => {
                                          setGramsOfProtein(parseInt(event.target.value));
                                      }}
                                      onFocus={(event) => {event.target.select()}}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <h1 className="frame mb-4 big-number" style={{color: carbColor}}>{carbPercentage}</h1>
                    <Form.Group controlId="grams-of-carbs">
                        <Form.Control type="number"
                                      placeholder="grams of carbs"
                                      value={gramsOfCarbs}
                                      htmlSize={100}
                                      onChange={(event) => {
                                          setGramsOfCarbs(Number(event.target.value));
                                      }}
                                      onFocus={(event) => {event.target.select()}}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <h1 className="frame mb-4 big-number" style={{color: fatColor}}>{fatPercentage}</h1>
                    <Form.Group controlId="grams-of-fat">
                        <Form.Control type="number"
                                      placeholder="grams of fat"
                                      value={gramsOfFat}
                                      onChange={(event) => {
                                          setGramsOfFat(Number(event.target.value));
                                      }}
                                      onFocus={(event) => {event.target.select()}}

                        />
                    </Form.Group>
                </Col>
                <Col lg="1"></Col>
            </Row>
            <Button size="lg"
                    className="m-3 jean-blue text-white"
                    onClick={() => {
                        calculateTotals();
                    }
            }>Calculate Macros</Button>
        </Form>
    );
}

function calculatePercent(part, total) {
    const percentage = part / total * 100;
    return Math.round(percentage)
}

function formatPercentage(percentage) {
    return percentage + '%';
}

function calculateColor(expected, actual) {
    if (actual <= (expected + 3) && actual >= (expected - 3)) {
        return '#04E762'; //Malachite
    }
    else if (actual <= (expected + 5) && actual >= (expected - 5)) {
        return '#FFD166'; //Sunglow
    }
    else {
        return '#F71735'; //Imperial Red
    }
}

export default MacroCalculator;
