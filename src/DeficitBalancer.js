import {Container} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Stack} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import './App.css';

function DeficitBalancer({startingCalories}) {
    const [targetCalories, setTargetCalories] = useState(0);
    const [targetProtein, setTargetProtein] = useState(0);
    const [targetCarbs, setTargetCarbs] = useState(0);
    const [targetFats, setTargetFats] = useState(0);

    useEffect(() => {
        const calories = Number(startingCalories);
        const deficit = 0;

        setTargets(calories, deficit);
    }, [startingCalories]);

    function setTargets(calories, deficit) {
        const targetCalories = Math.round(calories - (calories * deficit));
        setTargetCalories(targetCalories);
        setTargetProtein(Math.round((targetCalories * .3) / 4));
        setTargetCarbs(Math.round((targetCalories * .4) / 4));
        setTargetFats(Math.round((targetCalories * .3) / 9));
    }

    return (
        <Container>
            <Row className="pt-5">
                <Col lg="4">
                    <Stack className="px-5">
                        <h3 className="pb-3 text-white">Starting Calories: {startingCalories}</h3>
                        <Form.Select aria-label="Default select example"
                                     onChange={(e) => {
                                         const calories = Number(startingCalories);
                                         const deficit = Number(e.target.value);
                                         setTargets(calories, deficit);
                                     }}>
                            <option value={0}>0% deficit</option>
                            <option value={.1}>10% deficit</option>
                            <option value={.15}>15% deficit</option>
                            <option value={.2}>20% deficit</option>
                            <option value={.25}>25% deficit</option>
                            <option value={.3}>30% deficit</option>
                        </Form.Select>
                    </Stack>
                </Col>
                <Col>
                    <Stack direction="horizontal" gap={5} className="text-white">
                        <Stack>
                            <h2 className="brand-yellow">Target Calories</h2>
                            <h2>{targetCalories} cal</h2>
                        </Stack>
                        <Stack>
                            <h2 className="brand-yellow">Protein (g)</h2>
                            <h2>{targetProtein}g</h2>
                        </Stack>
                        <Stack>
                            <h2 className="brand-yellow">Carbs (g)</h2>
                            <h2>{targetCarbs}g</h2>
                        </Stack>
                        <Stack>
                            <h2 className="brand-yellow">Fats (g)</h2>
                            <h2>{targetFats}g</h2>
                        </Stack>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}

export default DeficitBalancer;
