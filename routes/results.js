const { Result } = require('../models/result');
const express = require('express');
const { Anualrevcostnormalized } = require('../models/normalize/anualrevcostnormalize');
const { Bicresultatsnormalize } = require('../models/normalize/bicresultatsnormalize');
const { Kpiresultsnormalize } = require('../models/normalize/kpiresultsnormalize');
const { Planningresults } = require('../models/resultats/planningresults');

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const assessmentRecord = req.params.id;

        const existResult = await Result.findOne({ assessmentRecord });
        if (existResult) {
            return res.status(200).send(existResult);
        }

        const [annualrevenue, kpiresult, bicresulst, planning] = await Promise.all([
            Anualrevcostnormalized.findOne({ assessmentRecord }),
            Kpiresultsnormalize.findOne({ assessmentRecord }),
            Bicresultatsnormalize.findOne({ assessmentRecord }),
            Planningresults.findOne({ assessmentRecord }),
        ]);

        const calculateVariable = (data, variableName) =>
            data.process[0][variableName] * planning.costfactor / 100 +
            data.technology[0][variableName] * planning.kpifactor / 100 +
            data.organization[0][variableName] * planning.proximityfactor / 100;

        const variables = {
            verticalintegration: calculateVariable(annualrevenue, 'verticalintegration'),
            horizontalintegration: calculateVariable(annualrevenue, 'horizontalintegration'),
            integratedproductlifecycle: calculateVariable(annualrevenue, 'integratedproductlifecycle'),
            shopfloorautomation: calculateVariable(annualrevenue.technology[0], 'shopfloorautomation'),
            enterpriseautomation: calculateVariable(annualrevenue.technology[0], 'enterpriseautomation'),
            facilityautomation: calculateVariable(annualrevenue.technology[0], 'facilityautomation'),
            shopfloorconnectivity: calculateVariable(annualrevenue.technology[0], 'shopfloorconnectivity'),
            entrepriseconnectivity: calculateVariable(annualrevenue.technology[0], 'entrepriseconnectivity'),
            facilityconnectivity: calculateVariable(annualrevenue.technology[0], 'facilityconnectivity'),
            shopfloorintelligence: calculateVariable(annualrevenue.technology[0], 'shopfloorintelligence'),
            entrepriseintelligence: calculateVariable(annualrevenue.technology[0], 'entrepriseintelligence'),
            facilityintelligence: calculateVariable(annualrevenue.technology[0], 'facilityintelligence'),
            workforcelearninganddevelopment: calculateVariable(annualrevenue.organization[0], 'workforcelearninganddevelopment'),
            leadershipcompetency: calculateVariable(annualrevenue.organization[0], 'leadershipcompetency'),
            interandintracompanycollaboration: calculateVariable(annualrevenue.organization[0], 'interandintracompanycollaboration'),
            strategyandgovernance: calculateVariable(annualrevenue.organization[0], 'strategyandgovernance'),
        };

        const processfinal = Object.keys(variables).reduce((a, b) => (variables[a] > variables[b] ? a : b));
        const technologyfinal = Object.keys(variables).reduce((a, b) => (variables[a] > variables[b] ? a : b));

        const maxVariable = Object.keys(variables).reduce((a, b) => (variables[a] > variables[b] ? a : b));

        const resultat = new Result({
            assessmentRecord,
            planningName: planning.planningName,
            costFactor: planning.costfactor,
            kpiFactor: planning.kpifactor,
            proximity: planning.proximityfactor,
            process: processfinal,
            technology: technologyfinal,
            organization: maxVariable,
        });

        await resultat.save();

        res.status(200).send(resultat);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
