const { Result } = require('../models/result');
const { Company } = require('../models/company');
const { Annualrevenue } = require('../models/annualrevenue');
const { Kpicategorie } = require('../models/kpicategorie');
const { Anualrevcostnormalized } = require('../models/normalize/anualrevcostnormalize');
const { Bicresultatsnormalize } = require('../models/normalize/bicresultatsnormalize');
const { Kpiresultsnormalize } = require('../models/normalize/kpiresultsnormalize');
const { Planningresults } = require('../models/resultats/planningresults');
const express = require('express');
const NodeCache = require('node-cache');
const myCache = new NodeCache();
// const verifyToken = require('../verifytoken');
const router = express.Router();

const cache = new NodeCache({ stdTTL: 300 });


// show result from result data base
router.get('/:id', async (req, res) => {

    const cachedData = cache.get('cachedData');
    if (cachedData) {
        console.log('Using cached data');
        return res.json(cachedData);
    }
    const assessmentRecord = await req.params.id;
    const indus = await Company.findOne({ assessmentRecord: assessmentRecord });
    const annualrev = await Annualrevenue.findOne({ assessmentRecord: assessmentRecord });
    const kpis = await Kpicategorie.findOne({ assessmentRecord: assessmentRecord });
    const annualrevenue = await Anualrevcostnormalized.findOne({ assessmentRecord: assessmentRecord })
    const kpiresult = await Kpiresultsnormalize.findOne({ assessmentRecord: assessmentRecord })
    const bicresulst = await Bicresultatsnormalize.findOne({ assessmentRecord: assessmentRecord })
    const planning = await Planningresults.findOne({ assessmentRecord: assessmentRecord })

    const indusgroup = indus.indusGroup;

    const verticalintegration =
        annualrevenue.process[0].verticalintegration * planning.costfactor / 100 +
        kpiresult.process[0].verticalintegration * planning.kpifactor / 100 +
        bicresulst.process[0].verticalintegration * planning.proximityfactor / 100

    const horizontalintegration =
        annualrevenue.process[0].horizontalintegration * planning.costfactor / 100 +
        kpiresult.process[0].horizontalintegration * planning.kpifactor / 100 +
        bicresulst.process[0].horizontalintegration * planning.proximityfactor / 100
    const integratedproductlifecycle =
        annualrevenue.process[0].integratedproductlifecycle * planning.costfactor / 100 +
        kpiresult.process[0].integratedproductlifecycle * planning.kpifactor / 100 +
        bicresulst.process[0].integratedproductlifecycle * planning.proximityfactor / 100

    const shopfloorautomation =
        annualrevenue.technology[0].shopfloorautomation * planning.costfactor / 100 +
        kpiresult.technology[0].shopfloorautomation * planning.kpifactor / 100 +
        bicresulst.technology[0].shopfloorautomation * planning.proximityfactor / 100

    const enterpriseautomation =
        annualrevenue.technology[0].enterpriseautomation * planning.costfactor / 100 +
        kpiresult.technology[0].enterpriseautomation * planning.kpifactor / 100 +
        bicresulst.technology[0].enterpriseautomation * planning.proximityfactor / 100

    const facilityautomation =
        annualrevenue.technology[0].facilityautomation * planning.costfactor / 100 +
        kpiresult.technology[0].facilityautomation * planning.kpifactor / 100 +
        bicresulst.technology[0].facilityautomation * planning.proximityfactor / 100

    const shopfloorconnectivity =
        annualrevenue.technology[0].shopfloorconnectivity * planning.costfactor / 100 +
        kpiresult.technology[0].shopfloorconnectivity * planning.kpifactor / 100 +
        bicresulst.technology[0].shopfloorconnectivity * planning.proximityfactor / 100

    const entrepriseconnectivity =
        annualrevenue.technology[0].entrepriseconnectivity * planning.costfactor / 100 +
        kpiresult.technology[0].entrepriseconnectivity * planning.kpifactor / 100 +
        bicresulst.technology[0].entrepriseconnectivity * planning.proximityfactor / 100

    const facilityconnectivity =
        annualrevenue.technology[0].facilityconnectivity * planning.costfactor / 100 +
        kpiresult.technology[0].facilityconnectivity * planning.kpifactor / 100 +
        bicresulst.technology[0].facilityconnectivity * planning.proximityfactor / 100

    const shopfloorintelligence =
        annualrevenue.technology[0].shopfloorintelligence * planning.costfactor / 100 +
        kpiresult.technology[0].shopfloorintelligence * planning.kpifactor / 100 +
        bicresulst.technology[0].shopfloorintelligence * planning.proximityfactor / 100
    const entrepriseintelligence =
        annualrevenue.technology[0].entrepriseintelligence * planning.costfactor / 100 +
        kpiresult.technology[0].entrepriseintelligence * planning.kpifactor / 100 +
        bicresulst.technology[0].entrepriseintelligence * planning.proximityfactor / 100
    const facilityintelligence =
        annualrevenue.technology[0].facilityintelligence * planning.costfactor / 100 +
        kpiresult.technology[0].facilityintelligence * planning.kpifactor / 100 +
        bicresulst.technology[0].facilityintelligence * planning.proximityfactor / 100
    console.log(facilityintelligence);
    console.log(shopfloorintelligence);


    const workforcelearninganddevelopment =
        annualrevenue.organization[0].workforcelearninganddevelopment * planning.costfactor / 100 +
        kpiresult.organization[0].workforcelearninganddevelopment * planning.kpifactor / 100 +
        bicresulst.organization[0].workforcelearninganddevelopment * planning.proximityfactor / 100


    const leadershipcompetency =
        annualrevenue.organization[0].leadershipcompetency * planning.costfactor / 100 +
        kpiresult.organization[0].leadershipcompetency * planning.kpifactor / 100 +
        bicresulst.organization[0].leadershipcompetency * planning.proximityfactor / 100


    const interandintracompanycollaboration =
        annualrevenue.organization[0].interandintracompanycollaboration * planning.costfactor / 100 +
        kpiresult.organization[0].interandintracompanycollaboration * planning.kpifactor / 100 +
        bicresulst.organization[0].interandintracompanycollaboration * planning.proximityfactor / 100


    const strategyandgovernance =
        annualrevenue.organization[0].strategyandgovernance * planning.costfactor / 100 +
        kpiresult.organization[0].strategyandgovernance * planning.kpifactor / 100 +
        bicresulst.organization[0].strategyandgovernance * planning.proximityfactor / 100

    const list1 = {
        shopfloorautomation,
        enterpriseautomation,
        facilityautomation,
        shopfloorconnectivity,
        entrepriseconnectivity,
        facilityconnectivity,
        shopfloorintelligence,
        entrepriseintelligence,
        facilityintelligence
    };
    const technologyfinal = Object.keys(list1).reduce((a, b) => list1[a] > list1[b] ? a : b);


    const list2 = {
        verticalintegration,
        horizontalintegration,
        integratedproductlifecycle
    };

    let processfinal = ""; // Initialize with an empty string
    let maxVariableValue2 = -Infinity; // Initialize with negative infinity

    // Loop through variables and find the maximum value
    for (const variableName in list2) {
        const variableValue = list2[variableName];

        if (variableValue > maxVariableValue2) {
            maxVariableValue2 = variableValue;
            processfinal = variableName;
        }
    }



    const variables = {
        workforcelearninganddevelopment,
        leadershipcompetency,
        interandintracompanycollaboration,
        strategyandgovernance
    };


    const maxVariable = Object.keys(variables).reduce((a, b) => variables[a] > variables[b] ? a : b);


    const resultat = new Result({
        assessmentRecord: req.params.id,
        planningName: planning.planningName,
        costFactor: planning.costfactor,
        kpiFactor: planning.kpifactor,
        proximity: planning.proximityfactor,
        process: processfinal,
        technology: technologyfinal,
        organization: maxVariable
    });

    await resultat.save();


    cache.set('cachedData', {
        indusgroup,
        resultat,
        annualrev,
        kpis
    });


    const existresult = await Result.findOne({ assessmentRecord: req.params.id });
    if (existresult) {
        res.json(
            {
                indusgroup,
                resultat,
                annualrev,
                kpis
            }
        );

    }
})



module.exports = router
