import GaugeChart from 'react-gauge-chart';
import './KPIs.css';

function KPIs() {

    const carbRanges = [0.58, 0.15, 0.15, 0.15, 1];
    const otherRanges = [0.3, 0.15, 0.15, 0.15, 1];
    const colors = ['#FF0000', '#FFFF00', '#00FF1E', '#FFFF00', '#FF0000'];
    const carbPercent = 0.4;
    const proteinPercent = 0.3;
    const fatPercent = 0.3;

    return (
        <div className="content">
            <div className="row">
                <div className="column">
                    <GaugeChart id="protein-kpi"
                                percent={proteinPercent}
                                arcsLength={otherRanges}
                                arcPadding="0.02"
                                colors={colors} />
                </div>
                <div className="column">
                    <GaugeChart id="carb-kpi"
                                percent={carbPercent}
                                arcsLength={carbRanges}
                                arcPadding="0.02"
                                colors={colors} />
                </div>
                <div className="column">
                    <GaugeChart id="fat-kpi"
                                percent={fatPercent}
                                arcsLength={otherRanges}
                                arcPadding="0.02"
                                colors={colors} />
                </div>
            </div>
        </div>

    );
}

export default KPIs;
